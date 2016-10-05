
import { APP_NAME, APP_URL, LANDING_PAGE_URL, OWNERSHIP_TOKEN, DEBT_TOKEN, DEBT_TOKEN_SHORT, CURRENCY_SIGN, INVEST_TOKEN } from 'config/client_config';
/**
 * see: app/locales/README.md
 */
const ru = {
	// this variables mainly used in navigation section
	about: "О проекте",
	explore: "Узнать",
	APP_NAME_whitepaper: "Аналитическая записка" + APP_NAME, // или тех записка? или аналитическая записка?
	buy_OWNERSHIP_TOKEN: 'Купить ' + OWNERSHIP_TOKEN,
	sell_OWNERSHIP_TOKEN: 'Продать ' + OWNERSHIP_TOKEN,
	market: "Рынок",
	stolen_account_recovery: "Возврат украденного аккаунта",
	change_account_password: "Изменить пароль аккаунта",
	APP_NAME_chat: APP_NAME + " чат",
	witnesses: "Делегаты",
	privacy_policy: "Политика конфиденциальности",
	terms_of_service: "Условия использования",
	sign_up: "Регистрация",
	/* end navigation */
	buy: 'Купить',
	sell: 'Продать',
	buy_steem_power: 'Купить Силу ГОЛОСА', // Golos Power?
	transaction_history: 'История сделок',
	submit_a_story: 'Добавить пост', // историю? статью?
	nothing_yet: 'Пока ничего нет',
	close: 'Закрыть',
	// next 5 strings were supposed to be sinngle block of text, but due large size,
	// code erros they were splitted.
	authors_get_paid_when_people_like_you_upvote_their_post: 'Авторы получают вознаграждение, когда пользователи голосуют за их посты',
	if_you_enjoyed_what_you_read_earn_amount: "Проголосовавшие читатели также вознаграждаюся. Если вам понравилось то, что вы прочитали, заработайте {amount} в " + INVEST_TOKEN,
	when_you: "Для этого",
	when_you_link_text: 'зарегистрируетесь',
	and_vote_for_it: 'и проголосуете за пост',
	// post_promo_text: "Авторы получают вознаграждение, когда пользователи голосуют за их посты<br />Проголосовавшие также вознаграждаются. Если вам понравилось, то что вы прочитали здесь, заработайте {amount} в " + INVEST_TOKEN + "<br />. Для этого  {link} и проголосуете за пост.",
	post_promo_text_link: '',
	read_only_mode: 'Из-за технического обслуживания сервера мы работаем в режиме чтения. Извините за неудобство.',
	membership_invitation_only: 'Стать пользователем Голоса сейчас возможно только по приглашению. Попросите ваших знакомых о приглашении', // желающих зарегистрироваться ?
	submit_email_to_get_on_waiting_list: 'Добавьте ваш адрес электронной почты чтобы попасть в список ожидания',
	login: 'Войти',
	logout: 'Выйти',
	show_less_low_value_posts: "Показывать меньше постов, имеющих малое вознаграждение", 
	show_more_low_value_posts: "Показать больше постов, имеющих большее вознаграждение",
	select_topic: 'Выбрать тему', 
	tags_and_topics: "Темы и тэги",
	filter: "Фильтр",
	show_more_topics: "Показать больше тем",
	we_require_social_account: APP_NAME + ' спонсирует каждую учетную запись на сумму около {signup_bonus} в ' + INVEST_TOKEN + '. Для создания качественного ресурса мы просим вас пройти регистрацию через социальные сети.',
	personal_info_will_be_private: 'Ваша персональная информация останется',
	personal_info_will_be_private_link: 'конфиденциальной',
	continue_with_facebook: 'Продолжить с Facebook',
	continue_with_reddit: 'Продолжить с Reddit',
	continue_with_vk: 'Продолжить с Vk',
	requires_positive_karma: 'Необходима положительная карма по комментариям на Reddit',
	dont_have_facebook: 'Нет Vk, Facebook или Reddit аккаунта?',
	subscribe_to_get_sms_confirm: 'Подпишитесь чтобы получить SMS, когда подтверждение будет доступно',
	by_verifying_you_agree: 'Зарегистрировав ваш аккаунт вы соглашаетесь',
	by_verifying_you_agree_terms_and_conditions: 'со следующими условиями и положениями',
	terms_and_conditions: 'Условия и Положения',
	// this is from top-right dropdown menu
	hot: 'актуальное',
	trending: 'хит', 
	payout_time: 'время выплаты', // подумать
	active: 'обсуждаемое',
	responses: 'ответы',
	popular: 'популярное', 
	/* end dropdown menu */
	loading: 'Идет загрузка', 
	cryptography_test_failed: 'Криптографический тест не пройден.',
	unable_to_log_you_in: 'К сожалению, мы не можем обеспечить ваш вход в систему в этом браузере.',
	latest_browsers_do_work: 'Голос работает на последних версиях {chromeLink} и {mozillaLink}.', // подумать
	account_creation_succes: 'Ваша учетная запись успешно создана!',
	account_recovery_succes: 'Ваша учетная запись успешно восстановлена!',
	password_update_succes: 'Пароль для {accountName} был успешно обновлен',
	password_is_bound_to_your_accounts_owner_key: "Этот пароль привязан к главному ключу (ключ владельца) учетной записи и не может быть использован для авторизации на сайте",
	however_you_can_use_it_to: "Тем не менее его можно использовать",
	to_obtaion_a_more_secure_set_of_keys: "для получения более безопасного набора ключей",
	update_your_password: 'Обновите ваш пароль',
	enter_username: 'Введите имя пользователя',
	password_or_wif: 'Пароль или WIF',
	requires_auth_key: 'Эта операция требует вашего {authType} ключа (или используйте главный пароль)',
	keep_me_logged_in: 'Продолжить работу в системе',
	// this are used mainly in "submit a story" form
	title: "Заголовок",
	write_your_story: 'Написать свой пост',
	editor: 'Редактор',
	reply: 'Ответить',
	edit: 'Редактировать',
	delete: 'Удалить',
	cancel: 'Отменить',
	clear: 'Очистить',
	save: 'Сохранить',
	upvote_post: 'Проголосовать за пост',
	update_post: 'Обновить пост',
	markdown_is_supported: 'Поддерживается стилизация с markdown',
	preview: 'Предварительный просмотр',
	markdown_not_supported: 'Markdown не поддерживается',
	welcome_to_the_blockchain: 'Добро пожаловать в блокчейн!',
	your_voice_is_worth_something: 'Каждый голос имеет значение!',
	learn_more: 'Узнать больше',
	get_INVEST_TOKEN_when_sign_up: 'Получи {signupBonus} ' + INVEST_TOKEN + ' при регистрации сегодня.',
	all_accounts_refunded: 'Все потери по восстанавливаемым учетным записям были полностью компенсированы',
	APP_NAME_is_now_open_source: 'Golos.io - Open Source',
	// this is mainly from ReplyEditor
	tag_your_story: 'Добавь тэги (до 5 штук), первый тэг - основной.',
	select_a_tag: 'Выбрать тэг',
	required: 'Обязательно',
	shorten_title: 'Сократите заголовок',
	exceeds_maximum_length: 'Превышает максимальную длину ({maxKb}KB)',
	including_the_category: "(включая категорию '{rootCategory}')",
	use_limited_amount_of_tags: 'У тебя {tagsLength} тэгов, включая {includingCategory}.  Пожалуйста, используйте не более 5 в посте и категории.',
	// this is mainly used in CategorySelector
	maximum_tag_length_is_24_characters: 'Максимальная длина тэга - 24 знака',
	use_limitied_amount_of_categories: 'Пожалуйста, используйте не более {amount} тэгов',
	use_only_lowercase_letters: 'Используйте только символы нижнего регистра',
	use_one_dash: 'Используйте только один дефис',
	use_spaces_to_separate_tags: 'Используйте пробел, чтобы разделить тэги',
	use_only_allowed_characters: 'Используйте только строчные буквы, цифры и один дефис',
	must_start_with_a_letter: 'Должен начинаться с буквы',
	must_end_with_a_letter_or_number: 'Должен заканчиваться буквой или цифрой',
	// tags page
	tag: 'Тэг',
	replies: 'Ответы',
	payouts: 'Вознаграждения',
	need_password_or_key: 'Вам нужен приватный пароль или ключ (непубличный)',
	// BlocktradesDeposit
	change_deposit_address: 'Изменить адрес депозита',
	get_deposit_address: 'Получить адрес депозита',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by', // NOTE this might be deleted in future
	send_amount_of_coins_to: 'Отправить {value} {coinName}',
	amount_is_in_form: 'Сумма должна быть в формате 99999,999',
	insufficent_funds: 'Недостаточно средств',
	update_estimate: 'Обновить оценку', // ??
	get_estimate: 'Получить оценку',
	memo: 'Заметка',
	must_include_memo: 'Необходимо включить заметку',
	estimate_using: 'Подсчитать, используя',
	amount_to_send: 'Сумма к отправке {estimateInputCoin}',
	deposit_using: 'Пополнить через', // example: 'deposit using Steem Power' // TODO: is this example right?
	suggested_limit: 'Предлагаемый лимит {depositLimit}',
	internal_server_error: 'Внутренняя ошибка сервера',
	enter_amount: 'Введите количество',
	processing: 'Обрабатывается',
	broadcasted: 'Транслируется', // ??
	confirmed: 'Подтверждено',
	remove: 'Удалить',
	collapse_or_expand: "Свернуть/Развернуть",
	reveal_comment: 'Показать комментарий',
	are_you_sure: 'Вы уверены?',
	// PostFull.jsx
	by: ' ', // здеcь специально ничего нет, пример: "posted by 'Vitya'" > "добавил 'Vitya'"
	in: 'в',
	share: 'Поделиться',
	in_reply_to: 'В ответ на',
	replied_to: 'Ответил', // тоже что и 'by'
	transfer_amount_to_INVEST_TOKEN: "Передать {amount} в " + INVEST_TOKEN, // ??
	transfer_amount_INVEST_TOKEN_to: "Передать {amount} " + INVEST_TOKEN + " в",
	recieve_amount_INVEST_TOKEN_from: "Получить {amount} " + INVEST_TOKEN + " от",
	transfer_amount_INVEST_TOKEN_from_to: "Передать {amount} " + INVEST_TOKEN + " от {from} к",
	transfer_amount_to: "Передать {amount} ",
	recieve_amount_from: "Получен {amount} от",
	transfer_amount_from: "Передать {amount} от",
	stop_power_down: "Остановить уменьшение Силы ГОЛОСА",
	start_power_down_of: "Началось Уменьшение Силы ГОЛОСА с",
	curation_reward_of_INVEST_TOKEN_for: 'Кураторское вознаграждение {reward} ' + INVEST_TOKEN + ' за',
	author_reward_of_INVEST_TOKEN_for: 'Авторское вознаграждение {payout} и {reward} ' + INVEST_TOKEN + ' за',
	recieve_interest_of: 'Получены проценты в размере {interest}',
	// TODO find where this is used and write an example
	from: 'от',
	to: 'к',
	account_not_found: 'К сожалению, учетная запись не найдена.',
	this_is_wrong_password: 'Это неправильный пароль.',
	do_you_need_to: 'Нужно ли вам',
	recover_your_account: 'восстановить ваш аккаунт?', // this probably will end with question mark
	reset_usernames_password: "Сбросить пароль пользователя {username}",
	this_will_update_usernames_authtype_key: 'Это обновит {username} {authType} ключ.',
	the_rules_of_steemit: "Первое правило " + APP_NAME + ": не теряйте свой пароль.<br /> Второе правило " + APP_NAME + ": <strong>Не</strong> теряйте свой пароль.<br /> Третье правило " + APP_NAME + ": мы не сможем восстановить ваш пароль.<br /> Четвертое правило: если вы можете запомнить свой пароль, значит он не безопасен.<br /> Пятое правило: используйте только сгенерированные случайным образом пароли.<br /> Шестое правило: никому не говорите свой пароль.<br /> Седьмое правило: всегда храните пароль в надежном месте.",
	account_name: 'Имя учетной записи',
	recover_password: 'Восстановить учетную запись',
	current_password: 'Текущий пароль',
	recent_password: 'Недавний пароль',
	generated_password: 'Сгенерированный пароль',
	recover_account: 'Восстановить учетную запись',
	new: 'новый', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'Сделайте резервную копию в приложении, предназначенном для хранения паролей, или текстовом файле (менее безопасно)',
	click_to_generate_password: 'Нажмите, чтобы сгененирить пароль',
	re_enter_generate_password: 'Повторно введите пароль',
	understand_that_APP_NAME_cannot_recover_password: 'Я понимаю что ' + APP_NAME + ' не сможет восстановить утраченный пароль',
	i_saved_password: 'Я надежно сохранил сгенерированный пароль',
	update_password: 'Обновить пароль',
	password_must_be_characters_or_more: 'Пароль должен быть из {amount} или более символов',
	passwords_do_not_match: 'Пароли не совпадают',
	you_need_private_password_or_key_not_a_public_key: 'Вам нужен приватный пароль или ключ (непубличный)',
	account_updated: 'Учетная запись обновлена',
	warning: 'Внимание!',
	your_password_permissions_were_reduced: 'Ваши права доступа по паролю были сокращены', // 
	if_you_did_not_make_this_change: 'Если вы не делали этих изменений, пожалуйста,',
	owhership_changed_on: 'Право владения изменено на',
	deadline_for_recovery_is: 'Крайним сроком для восстановления является',
	i_understand_dont_show_again: "Понимаю, больше не показывайте",
	ok: 'Хорошо', // Лучше использовать "хорошо" или "ладно"?
	convert_to_INVEST_TOKEN: 'Перевести в ' + INVEST_TOKEN,
	DEBT_TOKEN_will_be_unavailable: 'Эта операция будет проходить в течении недели от настоящего момента и ее нельзя отменить. Эти ' + DEBT_TOKEN + ' мгновенно станут недоступны.',
	amount: 'Количество',
	steem_dollars: 'Золотой, обеспеченный ГОЛОСОМ',
	convert: 'Конвертировать',
	invalid_amount: 'Неверное количество',
	insufficent_balance: 'Недостаточный баланс',
	in_week_convert_steem_dollars_to_steem: 'За неделю перевести {amount} Золотых в ГОЛОСА',
	order_placed: 'Заказ размещен', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'Подписаться',
	unfollow: 'Отписаться',
	mute: 'Блокировать',
	unmute: 'Разблокировать',
	confirm_password: 'Подтвердить пароль',
	login_to_see_memo: 'Войдите, чтобы увидеть заметку',
	post: 'Пост', // places used: tooltip in MediumEditor
	unknown: 'Неизвестная', // exp.: 'unknown error'
	account_name_is_not_available: 'Имя учетной записи недоступно',
	type: 'Тип',
	price: 'Цена',
	// Market.jsx
	last_price: 'Последняя цена',
	'24h_volume': 'Объем за 24 часа',
	bid: 'Покупка',
	ask: 'Продажа',
	spread: 'Спрэд', //
	total: 'Итого',
	available: 'Доступно',
	lowest_ask: 'Лучшая цена продажи',
	highest_bid: 'Лучшая цена покупки',
	buy_orders: 'Заказы на покупку',
	sell_orders: 'Заказы на продажу',
	trade_history: 'История сделок',
	open_orders: 'Открытые сделки',
	sell_amount_for_atleast: 'Продать {amount_to_sell} за {min_to_receive} по цене  ({effectivePrice})',
	buy_atleast_amount_for: 'Купить {min_to_receive} за {amount_to_sell} ({effectivePrice})',
	higher: 'Дороже', // context is about prices
	lower: 'Дешевле', // context is about prices
	total_DEBT_TOKEN_SHORT_CURRENCY_SIGN: "Сумма " + DEBT_TOKEN_SHORT + ' (' + CURRENCY_SIGN + ')',
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: 'Недействительно',
	account_name_is_not_found: 'Имя учетной записи не найдено',
	unable_to_recover_account_not_change_ownership_recently: 'У нас не получилось восстановить эту учетную запись, у нее не менялся владелец в недавнем прошлом.',
	password_not_used_in_last_days: 'Этот пароль не использовался в этом аккаунте в течение последних 30 дней.',
	request_already_submitted_contact_support: 'Ваш запрос отправлен, и мы уже работаем с ним. Пожалуйста, свяжитесь с support@golos.io для получения статуса по вашему запросу.',
	recover_account_intro: "В случае, когда ключ владельца скомпрометирован, возможно восстановление украденной учетной записи. У законного владельца есть 30 дней с момента изменения ключа владельца мошенниками, чтобы вернуть учетную запись себе. Восстановление украденной учетной записи в " + APP_URL + " возможно только, если вы ранее указали '" + APP_NAME + "' в качестве доверенного лица и согласились с условиями использования сайта  " + APP_NAME + ".",
	login_with_facebook_or_reddit_media_to_verify_identity: 'Пожалуйста, войдите используя Vk, Facebook или Reddit чтобы подтвердить вашу личность',
	login_with_social_media_to_verify_identity: 'Пожалуйста, зайдите с помощью {show_social_login} чтобы подтвердить вашу личность',
	enter_email_toverify_identity: 'Нам нужно подтвердить вашу личность. Пожалуйста укажите вашу электронную почту ниже чтобы начать проверку.',
	email: 'Электронная почта',
	continue_with_email: "Продолжить с электронной почтой",
	thanks_for_submitting_request_for_account_recovery: '<p>Благодарим Вас за отправку запроса на восстановление аккаунта используя основанную на блокчейне мультифакторную аутентификацию ' + APP_NAME + '’a.</p> <p>Мы ответим Вам как можно быстрее, однако, пожалуйста, ожидайте что может быть некоторая задержка из-за большого объема писем.</p> <p>Пожалуйста, будьте готовы подтвердить свою личность.</p>',
	recovering_account: 'Восстанавливаем аккаунт',
	checking_account_owner: 'Проверяем владельца аккаунта',
	sending_recovery_request: 'Отправляем запрос восстановления',
	cant_confirm_account_ownership: 'Мы не можем подтвердить владение аккаунтом. Проверьте ваш пароль.',
	account_recovery_request_not_confirmed: "Запрос восстановления аккаунта еще не подтвержден, пожалуйста проверьте позднее. Спасибо за ваше терпение.",
	vote: 'Проголосовать', // context: to vote? (title attribute on voting button)
	witness: 'Делегаты',
	top_witnesses: 'Топ делегатов',
	// user's navigational menu
	feed: 'Лента',
	wallet: 'Кошелек',
	blog: 'Блог',
	change_password: 'Сменить пароль',
	// UserProfile
	unknown_account: 'Неизвестный аккаунт',
	user_hasnt_made_any_posts_yet: "Похоже что {name} еще не написал постов!",
	user_hasnt_started_bloggin_yet: "Похоже что {name} еще не завёл блог!",
	user_hasnt_followed_anything_yet: "Похоже что {name} еще никого ни на кого не подписан!",
	user_hasnt_had_any_replies_yet: "{name} еще не получал ответов",
	users_blog: "блог {name}",
	users_posts: "посты {name}",
	users_wallet: "кошелек {name}",
	users_curation_rewards: "Кураторские вознаграждения {name}",
	users_author_rewards: "Авторские награды {name}",
	users_permissions: "Разрешения {name}",
	recent_replies_to_users_posts: "Недавние ответы к постам пользователя {name}",
	print: 'Распечатать',
	curation_rewards: "Кураторские награды",
	author_rewards: 'Авторские награды',
	feeds: 'Лента',
	rewards: 'Награды',
	permissions: 'Разрешения',
	password: 'Пароль',
	posts: 'Посты',
	// PLURALS
	// see locales/README.md on how to properly use them
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 постов}
		one {# пост}
		few {# поста}
		many {# постов}
	}`,
	follower_count: `{followerCount, plural,
		zero {0 подписчиков}
		one {# подписчик}
		few {# подписчика}
		many {# подписчиков}
	}`,
	followed_count: `{followingCount, plural,
		zero {0 подписок}
		one {# подписка}
		few {# подписки}
		many {# подписок}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 голосов}
		one {# голос}
		few {# голоса}
		many {# голосов}
	}`,
	response_count: `{responseCount, plural,
		zero {0 ответов}
		one {# ответ}
		few {# ответа}
		many {# ответов}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 ответов}
		one {# ответ}
		few {# ответа}
		many {# ответов}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "Это это количество очков репутации пользователя {name}.\n\nКоличество очков подсчитывается на основе истории полученных голосов и на его голосах против контента.",
	newer: 'Новее',
	older: 'Старее',
	author_rewards_last_24_hours: 'Авторские вознаграждения за последние 24 часа',
	daily_average_author_rewards: 'Среднесуточные авторские вознаграждения',
	author_rewards_history: 'История авторских наград',
	balance: 'Баланс',
	balances: 'Балансы',
	estimate_account_value: 'Оценочная ценность аккаунта',
	next_power_down_is_scheduled_to_happen_at: 'Следующее понижение голоса запланировано на',
	transfers_are_temporary_disabled: 'Переводы временно отключены',
	history: 'История',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: 'Кураторские награды за полседние 24 часа',
	daily_average_curation_rewards: 'Среднесуточные кураторские награды',
	estimated_curation_rewards_last_week: "Оценочные кураторские награды за последнюю неделю",
	curation_rewards_last_week: "Кураторские награды за последнюю неделю",
	curation_rewards_history: 'История кураторских наград',
	// Post.jsx
	now_showing_comments_with_low_ratings: 'Отображаем комментарии с низким рейтингом',
	hide: 'Скрыть',
	show: 'Показать',
	sort_order: 'Порядок сортировки',
	comments_were_hidden_due_to_low_ratings: 'Комментарии были скрыты из-за низкого рейтинга',
	we_will_be_unable_to_create_account_with_this_browser: 'У нас не получится создать аккаунт используя этот браузер',
	you_need_to_logout_before_creating_account: 'Вам нужно {logoutLink} прежде чем вы сможете создать другой аккаунт',
	APP_NAME_can_only_register_one_account_per_verified_user: 'Пожалуйста, имейте ввиду что Steemit может регистрировть только один аккаунт для каждого подтвержденного пользователя',
	username: 'Имя пользователя',
	couldnt_create_account_server_returned_error: "Не получилось создать аккаунт. Сервер вернул эту ошибку",
	form_requires_javascript_to_be_enabled: 'Эта форма требует активированный в браузере javascript',
	our_records_indicate_you_already_have_account: 'Наши записи показывают что у вас уже есть steem аккант',
	// TODO
	to_prevent_abuse_APP_NAME_can_only_register_one_account_per_user: 'Чтобы предотвратить злоупотребление (каждый зарегистрированный аккаунт стоит 3 STEEM) Steemit может регистрировать только один аккаунт для каждого подтвержденного пользователя.',
	you_can_either_login_or_send_us_email: 'Вы можете или {loginLink} в ваш существующий аккаунт или {emailLink}, если вам нужен новый аккаунт,',
	send_us_email: 'отправьте нам электронную почту',
	connection_lost_reconnecting: 'Связь потеряна, переподключаемся',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'Перестать видеть контент от этого пользователя',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: 'Голос против может уменьшить вознаграждение и сделать пост менее видимым. Голосование против должно основываться на',
	fraud_or_plagiarism: 'Мошенничестве или плагиате',
	hate_speech_or_internet_trolling: 'Разжигании ненависти или интернет троллинге',
	intentional_miss_categorized_content_or_spam: 'Преднамеренной неправильной категоризации контента или спаме',
	downvote: 'Голосовать против',
	pending_payout: 'Ожидаемая выплата',
	past_payouts: 'Прошлые выплаты',
	and: 'и',
	more: 'больше',
	remove_vote: 'Убрать голос',
	upvote: 'Голосовать за',
	we_will_reset_curation_rewards_for_this_post: 'сбросит ваши кураторские вознаграждения за этот пост',
	removing_your_vote: 'Удаление голоса',
	changing_to_an_upvote: 'Измение на голос за',
	changing_to_a_downvote: 'Измение на голос против',
	confirm_flag: 'Подтвердить голос против',
	date_created: 'Дата создания',
	search: 'Поиск',
	begin_recovery: 'Начать восстановление',
	post_as: 'Запостить как', // 'Post as Misha'
	action: 'Действие',
	APP_NAME_app_center: 'Центр приложений ' + APP_NAME,
	witness_thread: 'пост делегата',
	you_have_votes_remaining: 'У вас осталось {votesCount} голосов',
	you_can_vote_for_maximum_of_witnesses: 'Вы можете голосовать максимум за 30 делегатов',
	information: 'Информация',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'Если вы хотите проголосовать за делегата вне top 50, введите имя аккаунта ниже',
	view_the_direct_parent: 'Просмотр прямого родителя', // ох подумаю
	you_are_viewing_single_comments_thread_from: 'Вы читаете одну ветку комментариев от',
	view_the_full_context: 'Показать полный контекст',
	this_is_a_price_feed_conversion: 'Это котировка цены. Неделя отсрочки необходима чтобы предотвратить злоупотребление от игры на средней ценовой котировке.',
	your_existing_DEBT_TOKEN_are_liquid_and_transferable: 'Ваши существующие ' + DEBT_TOKEN + ' ликвидны и перемещаемы. Возможно, вы хотите торговать ' + DEBT_TOKEN + ' напрямую на этом сайте в разделе {link} или перевести на внешний рынок.',
	buy_or_sell: 'Купить или Продать',
	trending_30_day: 'популярное (30 дней)',
	promoted: 'продвигаемое',
	comments: 'Комментарии',
	topics: 'Топики',
	// TODO
	this_password_is_bound_to_your_accounts_private_key: 'Этот пароль привязан к активному ключу вашего аккаунта и не может быть использован для входа на эту страницу. Вы можете использовать его для входа на другие более защищенные страницы как "кошелек" или "маркет".',
	potential_payout: 'Потенциальная выплата',
	boost_payments: 'Платеж за продвижение',
	authors: 'Авторы',
	curators: 'Кураторы',
	date: 'Дата',
	no_responses_yet_click_to_respond: 'Ответов пока нет. Нажмите чтобы ответить.',
	click_to_respond: 'Нажмите чтобы ответить',
	new_password: 'Новый пароль',
	paste_a_youtube_or_vimeo_and_press_enter: 'Вставьте YouTube или Vimeo ссылку и нажмите Enter',
	there_was_an_error_uploading_your_image: 'Произошла ошибка во время загрузки изображения',
	raw_html: 'HTML код',
	please_remove_following_html_elements: 'Пожалуйста удалите эти HTML элементы из вашего поста:',
	reputation: "Репутация",
	remember_voting_and_posting_key: "Запомнить голос и постинг ключ",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: 'Заходить автоматически?',
	yes: 'Да',
	no: 'Нет',
	hide_private_key: 'Скрыть приватный ключ',
	show_private_key: 'Показать приватный ключ',
	login_to_show: 'Войти чтобы показать',
	APP_NAME_cannot_recover_passwords_keep_this_page_in_a_secure_location: APP_NAME + ' не может восстановливать пароли. Сохраните эту страницу в безопасном месте, например, в огнестойком сейфе или в депозитарной ячейке.',
	APP_NAME_password_backup: APP_NAME + ' резервное копирование пароля',
	APP_NAME_password_backup_required: APP_NAME + ' резервное копирование пароля (обязательно)',
	after_printing_write_down_your_user_name: 'После печати запишите ваше имя пользователя',
	public: 'Публичное',
	private: 'Приватное',
	public_something_key: 'Публичный {key} ключ',
	private_something_key: 'Приватный {key} ключ',
	// UserProfile > Permissions
	posting_key_is_required_it_should_be_different: 'Постинг ключ используется для постинга и голосования. Он должен отличаться от активного и ключа владельца.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'Активный ключ используется для переводов и размещения заказов на внутреннем рынке.',
	the_owner_key_is_required_to_change_other_keys: 'Ключ владельца это главный ключ ко всему аккаунту, он необходим для изменения других ключей.',
	the_private_key_or_password_should_be_kept_offline: 'Приватный ключ или пароль должен храниться в оффлайне насколько возможно.',
	the_memo_key_is_used_to_create_and_read_memos: 'Ключ заметок используется для создания и чтения заметок.',
	previous: 'Предыдущий',
	next: 'Следующий',
	browse: 'Посмотреть',
	not_valid_email: 'Не действительный адрес',
	thank_you_for_being_an_early_visitor_to_APP_NAME: 'Благодарим вас за то что являетесь ранним посетителем ' + APP_NAME + '. Мы свяжемся с Вами при первой же возможности.',
	estimated_author_rewards_last_week: "Оценочные авторские вознаграждения за прошлую неделю",
	author_rewards_last_week: "Оценочные авторские вознаграждения за прошлую неделю",
	confirm: 'Подтвердить',
	asset: 'Актив',
	this_memo_is_private: 'Эта заметка является приватной',
	this_memo_is_public: 'Эта заметка является публичной',
	power_up: 'Усилить силу голоса',
	power_down: 'Уменьшить силу голоса',
	cancel_power_down: 'Отменить понижение силы голоса',
	transfer: 'Передать',
	deposit: 'Купить',
	basic: 'Базовый',
	advanced: 'Продвинутый',
	convert_to_OWNERSHIP_TOKEN: 'Перевести в ' + OWNERSHIP_TOKEN,
	transfer_to_account: 'Передать пользователю',
	buy_OWNERSHIP_TOKEN_or_INVEST_TOKEN: 'Купить ' + OWNERSHIP_TOKEN + ' или ' + INVEST_TOKEN,
	// TODO
	version: 'Версия',
	about_APP_NAME: 'О ' + APP_NAME,
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: APP_NAME + ' это социальная медиа платформа в которой <strong>все</strong>&nbsp;получают <strong>деньги</strong> за создание и курирование контента',
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid: APP_NAME + ' это социальная медиа платформа в которой каждый зарабатывает за создание и курирование контента. Он использует надежную систему цифровых жетонов под названием ' + OWNERSHIP_TOKEN + ', который поддерживает реальную ценность для цифровых наград через выявление рыночной цены и ликвидности.', // ?? очков? фишек, а ну вон там ниже в тексте жетоны же, значит нужно их везде так называть
	learn_more_at_LANDING_PAGE_URL: 'Узнать больше в ' + LANDING_PAGE_URL,
	resources: 'Ресурсы',
	join_our_slack: 'Присоединяйтесь к нашему Slack',
	APP_NAME_support: APP_NAME + ' поддержка',
	please_email_questions_to: 'Пожалуйста, шлите ваши вопросы на электронную почту',
	sorry_your_reddit_account_doesnt_have_enough_karma: "Извините, у вашего Reddit аккаунта недостаточно Reddit кармы чтобы иметь возможность бесплатной регистрации. Пожалуйста, добавьте вашу электронную почту чтобы записаться в список ожидания",
	register_with_facebook: 'Регистрация с Facebook',
	or_click_the_button_below_to_register_with_facebook: 'Или нажмите кнопку, чтобы зарегистрироваться с Facebook',
	trending_24_hour: 'популярное (24 часа)',
	home: 'главная',
	'24_hour': '24 часа',
	'30_day': '30 дней',
	flag: "Голосовать против",
	promote: 'Продвинуть', // рекламировать? подумаю ??
	// Tips.js
	tradeable_tokens_that_may_be_transferred_anywhere_at_anytime: 'Ходовые жетоны, которые могут переданы куда угодно и когда угодно.',
	OWNERSHIP_TOKEN_can_be_converted_to_INVEST_TOKEN_in_a_process_called_powering_up: OWNERSHIP_TOKEN + ' может быть конвертирован в ' + INVEST_TOKEN + ' в процессе под названием "усиление голоса".',
	tokens_worth_about_AMOUNT_of_OWNERSHIP_TOKEN: 'Жетоны стоимостью около {amount} ' + OWNERSHIP_TOKEN + '.',
	influence_tokens_which_earn_more_power_by_holding_long_term: 'Жетоны влияния, которые усиливаются при долгосрочном хранении.', // ??
	the_more_you_hold_the_more_you_influence_post_rewards: 'Чем их больше, тем сильней вы влияете на вознаграждения за пост и тем больше зарабатываете за правильное голосование.',
	the_estimated_value_is_based_on_a_7_day_average_value_of_steem_in_currency: 'Оценочная стоимость расчитывается из 7ми дневной средней стоимости ' + OWNERSHIP_TOKEN + ' в российских рублях.', // медианной!
	INVEST_TOKEN_is_non_transferrable_and_will_require_2_years_and_104_payments_to_convert_back_to_OWNERSHIP_TOKEN: INVEST_TOKEN + ' нельзя передавать и потребуется 2 года и 104 выплаты чтобы перевести обратно в ' + OWNERSHIP_TOKEN + '.',
	// TODO
	converted_INVEST_TOKEN_can_be_sent_to_yourself_but_can_not_transfer_again: 'Конвертированная ' + INVEST_TOKEN + ' может быть отправлена себе или кому-то еще, но не может быть передана вновь без конвертирования назад в ' + OWNERSHIP_TOKEN + '.',
	profile: 'Профиль',
	send_to_account: 'Отправить аккаунту',
	confirm_email: 'Подтвердить электронную почту',
	authenticate_for_this_transaction: 'Авторизируйтесь для этой транзакции',
	login_to_your_APP_NAME_account: 'Зайдите в ваш ' + APP_NAME + ' аккаунт',
	// UserProfile > Permissions
	posting: 'Постинг', // ??
	owner: 'Владелец',
	active_or_owner: 'активный или владельца',
	sign: 'Войти',
	dismiss: 'Скрыть',
	// next 3 strings are used conditionally together
	show_more: 'Показать больше',
	show_less: 'Показать меньше',
	value_posts: 'сообщений низкой стоимости',
	// PormotePost.jsx
	promote_post: 'Продвинуть пост',
	spend_your_DEBT_TOKEN_to_advertise_this_post: 'Используйте ваши ' + DEBT_TOKEN + ' чтобы прорекламировать этот пост в секции продвигаемого контента',
	you_successdully_promoted_this_post: 'Вы успешно продвинули этот пост',
	pay_me_100_in_INVEST_TOKEN: 'Заплатите мне 100% в ' + INVEST_TOKEN,
	requires_5_or_more_reddit_comment_karma: 'необходимо 5 или больше Reddit кармы комментирования',
	this_post_was_hidden_due_to_low_ratings: 'Этот пост был скрыт из-за низкого рейтинга',
}

export { ru }
