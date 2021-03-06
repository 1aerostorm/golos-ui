/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Topics from './Topics';
import constants from 'app/redux/constants';
import shouldComponentUpdate from 'app/utils/shouldComponentUpdate';
import PostsList from 'app/components/cards/PostsList';
import {isFetchingOrRecentlyUpdated} from 'app/utils/StateFunctions';
import {Link} from 'react-router';
import MarkNotificationRead from 'app/components/elements/MarkNotificationRead';
import tt from 'counterpart';
import Immutable from "immutable";
import Callout from 'app/components/elements/Callout';
import {APP_NAME} from 'app/client_config';
import cookie from "react-cookie";
import { SELECT_TAGS_KEY } from 'app/client_config';
import transaction from 'app/redux/Transaction'
import o2j from 'shared/clash/object2json'

class PostsIndex extends React.Component {

    static propTypes = {
        discussions: PropTypes.object,
        accounts: PropTypes.object,
        status: PropTypes.object,
        routeParams: PropTypes.object,
        requestData: PropTypes.func,
        loading: PropTypes.bool,
        loggedIn: PropTypes.bool,
        username: PropTypes.string
    };

    static defaultProps = {
        showSpam: false,
        loading: false,
        changed: false,
        errorMessage: '',
        successMessage: '',
    }

    constructor() {
        super();

        this.state = {
          currencyid: 0
        }

        this.loadMore = this.loadMore.bind(this);
        this.shouldComponentUpdate = shouldComponentUpdate(this, 'PostsIndex')
        this.loadSelected = this.loadSelected.bind(this);
        this.updateSubscribe = this.updateSubscribe.bind(this);
        this.listRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (window.innerHeight && window.innerHeight > 3000 && prevProps.discussions !== this.props.discussions) {
            this.listRef.fetchIfNeeded();
        }
    }

    componentDidMount () {
        
        const script = document.createElement("script");

        script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
        script.async = true;

        document.body.appendChild(script);

        const picked_curr = localStorage.getItem('xchange.picked')

        this.setState({
          currencyid: picked_curr ? {GOLOS: 1480, GBG: 1542}[picked_curr] : 1480
        })
    }

    getPosts(order, category) {
        let select_tags = cookie.load(SELECT_TAGS_KEY);
        select_tags = typeof select_tags === 'object' ? select_tags.sort().join('/') : '';
        const topic_discussions = this.props.discussions.get(category || select_tags);
        if (!topic_discussions) return null;
        return topic_discussions.get(order);
    }

    updateSubscribe() {
        const {accounts, username} = this.props
        const account = accounts.get(username) ? accounts.get(username).toJS() : {}
        let metaData = account ? o2j.ifStringParseJSON(account.json_metadata) : {}
        if (!metaData)
            metaData = {}
        if (!metaData.profile)
            metaData.profile = {}

        let select_tags = cookie.load(SELECT_TAGS_KEY);
        metaData.profile.select_tags = typeof select_tags === 'object' ? select_tags : '';
        if (!metaData.profile.select_tags)
            delete metaData.profile.select_tags;

        this.props.updateAccount({
            json_metadata: JSON.stringify(metaData),
            account: account.name,
            memo_key: account.memo_key,
            errorCallback: (e) => {
                if (e === 'Canceled') {
                    this.setState({
                        loading: false,
                        errorMessage: ''
                    })
                } else {
                    console.log('updateAccount ERROR', e)
                    this.setState({
                        loading: false,
                        changed: false,
                        errorMessage: tt('g.server_returned_error')
                    })
                }
            },
            successCallback: () => {
                this.setState({
                    loading: false,
                    changed: false,
                    errorMessage: '',
                    successMessage: tt('g.saved') + '!',
                })
                // remove successMessage after a while
                setTimeout(() => this.setState({successMessage: ''}), 4000)
            }
        })
    }

    loadMore(last_post) {
        if (!last_post) return;
        let {accountname} = this.props.routeParams
        let {category, order = constants.DEFAULT_SORT_ORDER} = this.props.routeParams;
        if (category === 'feed') {
            accountname = order.slice(1);
            order = 'by_feed';
        }
        if (isFetchingOrRecentlyUpdated(this.props.status, order, category)) return;
        const [author, permlink] = last_post.split('/');
        this.props.requestData({author, permlink, order, category, accountname});
    }

    loadSelected(keys) {
        let {accountname} = this.props.routeParams
        let {category, order = constants.DEFAULT_SORT_ORDER} = this.props.routeParams;
        if (category === 'feed') {
            accountname = order.slice(1);
            order = 'by_feed';
        }
        // if (isFetchingOrRecentlyUpdated(this.props.status, order, category)) return;
        this.props.requestData({order, keys});
    }

    onShowSpam = () => {
        this.setState({showSpam: !this.state.showSpam})
    }

    render() {
        let { loggedIn, categories } = this.props;
        let {category, order = constants.DEFAULT_SORT_ORDER} = this.props.routeParams;
        let topics_order = order;
        let posts = [];
        let emptyText = '';
        let markNotificationRead = null;
        if (category === 'feed') {
            const account_name = order.slice(1);
            order = 'by_feed';
            topics_order = loggedIn ? 'created' : 'trending';
            posts = this.props.accounts.getIn([account_name, 'feed']);
            const isMyAccount = this.props.username === account_name;
            if (isMyAccount) {
                emptyText = <div>
                    {tt('user_profile.user_hasnt_followed_anything_yet', {name: account_name})}
                    <br /><br />
                    {tt('user_profile.if_you_recently_added_new_users_to_follow')}<br /><br />
                    <Link to="/trending">{tt('user_profile.explore_APP_NAME', {APP_NAME})}</Link><br />
                    <Link to="/welcome">{tt('submit_a_story.welcome_to_the_blockchain')}</Link>
                </div>;
                markNotificationRead = <MarkNotificationRead fields="feed" account={account_name} />
            } else {
                emptyText = <div>{tt('user_profile.user_hasnt_followed_anything_yet', {name: account_name})}</div>;
            }
        } else {
            posts = this.getPosts(order, category);
            if (posts && posts.size === 0) {
                emptyText = <div>{tt('g.no_topics_by_order_found', {order: tt('g.' + topics_order) + (category ? ` #` + category : '')})}</div>;
            }
        }

        const status = this.props.status ? this.props.status.getIn([category || '', order]) : null;
        const fetching = (status && status.fetching) || this.props.loading || this.props.fetching || false;
        const {showSpam} = this.state;
        const account = this.props.username && this.props.accounts.get(this.props.username) || null
        const json_metadata = account ? account.toJS().json_metadata : {}
        const metaData = account ? o2j.ifStringParseJSON(json_metadata) : {}
        const active_user = this.props.username || ''

        let promo_posts = []
        if (['created', 'hot', 'responses', 'trending'].includes(order) && posts && posts.size) {
          const slice_step = order == 'trending' ? 3 : 1

          promo_posts = posts.slice(0, slice_step)
          posts = posts.slice(slice_step)
        }

        return (
            <div className={'PostsIndex row' + (fetching ? ' fetching' : '')}>
                <div className="PostsIndex__left column small-collapse">
                    <div className="PostsIndex__topics_compact show-for-small hide-for-medium">
                        <Topics
                            categories={categories}
                            order={topics_order}
                            current={category}
                            loading={fetching}
                            loadSelected={this.loadSelected}
                            compact
                        />
                    </div>
                    { markNotificationRead }
                    {(promo_posts && promo_posts.size) ? <div>
                        <PostsList
                            posts={promo_posts ? promo_posts : Immutable.List()}
                            loading={false}
                            showSpam={showSpam}
                            />

                        <div className="strike">
                            <span><a target="_blank" href="https://wiki.golos.id/users/welcome#prodvinut-post">{tt('g.promote_block')}</a></span>
                        </div>
                      </div> : null }


                    { (!fetching && (posts && !posts.size)) ? <Callout>{emptyText}</Callout> :
                        <PostsList
                            ref={this.listRef}
                            posts={posts ? posts : Immutable.List()}
                            loading={fetching}
                            category={category}
                            loadMore={this.loadMore}
                            showSpam={showSpam}
                        /> }
                </div>
                <div className="PostsIndex__topics column shrink show-for-large">

                <div className="coinmarketcap-currency-widget"
                    data-currencyid="4834" // GOLOS
                    data-base="RUB"
                    data-secondary="BTC"
                    data-ticker="false"
                    data-rank="false"
                    data-marketcap="false"
                    data-volume="false"
                    data-statsticker="false"
                    data-stats="USD">
                </div>

                    <Topics
                        categories={categories}
                        order={topics_order}
                        current={category}
                        loading={fetching}
                        loadSelected={this.loadSelected}
                        compact={false}
                        user={this.props.username}
                        updateSubscribe={this.updateSubscribe}
                        metaData={metaData}
                    />

                    <div className="sticky-right-ad">

                    <p align="center">
                        <a target="_blank" href={"https://coins.black/xchange_SBERRUB_to_GLS/?summ=1000&schet2=" + active_user + "&lock2=true"}><img src='https://i.imgur.com/tN2U24r.jpg' width='220' height='150' /></a>
                        <span className="strike"><a target="_blank" href="/@on0tole/pryamaya-pokupka-tokenov-golos-za-rubli-i-ne-tolko">{tt('g.more_hint')}</a></span>
                    </p>

                    <p align="center">
                        <a target="_blank" href="https://golostalk.com"><img src='https://i.imgur.com/EUCHJfH.jpg' width='220' height='180' /></a>
                        <span className="strike"><a target="_blank" href="/@lex/zapusk-foruma-golostalk-com">{tt('g.more_hint')}</a></span>
                    </p>

                    <iframe data-aa='1148471' src='//ad.a-ads.com/1148471?size=240x400' scrolling='no'
                    style={{width:'240px', height:'400px', border:'0px', padding:'0', overflow:'hidden'}}
                    allowtransparency='true' sandbox='allow-same-origin allow-scripts allow-popups' loading='lazy'></iframe>
                      
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: ':order(/:category)',
    component: connect(
        (state) => {
            return {
                discussions: state.global.get('discussion_idx'),
                status: state.global.get('status'),
                loading: state.app.get('loading'),
                accounts: state.global.get('accounts'),
                loggedIn: !!state.user.get('current'),
                username: state.user.getIn(['current', 'username']) || state.offchain.get('account'),
                fetching: state.global.get('fetching'),
                categories: state.global.get('tag_idx'),
            };
        },
        (dispatch) => {
            return {
                requestData: (args) => dispatch({type: 'REQUEST_DATA', payload: args}),
                updateAccount: ({successCallback, errorCallback, ...operation}) => {
                    const options = {type: 'account_update', operation, successCallback, errorCallback}
                    dispatch(transaction.actions.broadcastOperation(options))
                }
            }
        }
    )(PostsIndex)
};
