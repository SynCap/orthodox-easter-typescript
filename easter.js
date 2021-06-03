
/**
 * Рассчёт даты православной Пасхи и дат праздников Подвижного Круга,
 * праздников, даты которых зависят от Пасхи
 *
 * Calculate the Orthodox Easter date and other Easter depended dates
 *
 * описание алгоритма -- https://ru.wikipedia.org/wiki/Пасха
 *
 * @link https://ru.wikipedia.org/wiki/Пасха#Расчёт_даты_Пасхи
 *
 * @param year <Number> [=<this year>]	Год для которого ведётся рассчёт
 * @return 	   <Date>	Дата Пасхи указанного года по Григорианскому календарю
 */

function getEasterDate(year = (new Date()).getFullYear()) {
	// Базовый коэффициент учитывающий Золотое Число и фазу луны
	let a = (19*(year%19) + 15) % 30
	// поправка на високосный год
	let b = ((2*(year%4) + 4*(year%7) + 6*a + 6) % 7)

	let res = (a + b > 10)
		? new Date(year, 3, a + b - 9)
		: new Date(year, 2, 22 + a + b)

	res.setDate(res.getDate() + 13); // Юлианская дата --> Григорианская

	return res
}

/**
 * Gets the Easter depended sacral date.
 *
 * Даты Подвижного круга - Масленица, Вербное воскресенье, Радуница,
 * Вознесение, Троица
 *
 * @param  {Date}   [easterDate=getEasterDate()]  The Easter date | Дата Пасхи
 * @param  {string} [sacrality='mas']          Type of sacral | Какой праздник
 * @return {Date}   The sacral date.
 */
function getSacralDate(easterDate = getEasterDate(), sacrality = 'mas') {
	const sacralDiffs = {
		// Масленица и воскресеный день перед началом Великого Поста
		// Maslenitsa -- slavic native and Sunday before Quadragesima
		'mas'	: -49,
		// Вербное воскресенье (Вход в Иерусалим, пальмовое воскресенье)
		// Palm Sunday
		'ver'	: -7,
		// Радоница (Родительский день)
		// Radonitsa, slavic native
		'rad'	: +9,
		// Вознесение
		// Ascension Day
		'vos'	: +40,
		// Троица (Пятидесятница)
		// Holy Trinity Day
		'tro'	: +50
	}

	return new Date(easterDate)
			.setDate(easterDate.getDate() + sacralDiffs[sacrality])
}

/**
 * "Обчеловечивание" значения даты
 *
 * Human (russian) friendly representation of date
 *
 * @param      {Date}   date  The date | Дата, которую по-русски посмотреть надо
 * @return     {String}       String representing the date | Дата по-человечячьи
 */
function rusifyDate(date) {
	return new Date(date).toLocaleDateString(
		'ru-RU',
		{
			weekday: 'short',
			day: 'numeric',
			month: 'long'
		}
	)
}

/******************************************************************************/

/**
 * @example
 */

/**
 * Gets all sacral dates for specified/current year.
 * Рассчитать все даты Подвижного круга на указанный/текущий год.
 *
 * @param      {Number}  [year=(new Date).getFullYear()]  The year
 * @return     {Object}  All sacral dates.
 */
function getAllSacralDates(year = (new Date).getFullYear()) {

	// локально облегчим себе чтение кода
	let sacr = getSacralDate
	let rus = rusifyDate

	let eDate = getEasterDate(year)
	return {
		'Масленица': rus(sacr(eDate)),
		'Вербное': rus(sacr(eDate,'ver')),
		'Пасха': rus(eDate),
		'Радуница': rus(sacr(eDate,'rad')),
		'Вознесение': rus(sacr(eDate,'vos')),
		'Троица': rus(sacr(eDate,'tro'))
	}
}

/**
 * Gets all sacral dates by years range.
 * Рассчитать даты Подвижного Круга для нескольких лет.
 *
 * @param      {Number}  [yearSince=(new Date()).getFullYear()-20]  The year since
 * @param      {Number}  [yearTill=(new Date()).getFullYear()]      The year till
 * @return     {Object}  All sacral dates by years.
 */
function getAllSacralDatesRange(
	yearSince = (new Date()).getFullYear()-20,
	yearTill = (new Date()).getFullYear()
) {
	let res = {}

	for (let year = 2000; year <= 2030; year++) {
		res[year] = getAllSacralDates(year)
	}
	return res
}

/******************************************************************************/

console.log('\x1bc') // clear screen in Node REPL
console.clear() // clear console in browsers' devtools

console.table(getAllSacralDates())

console.table(getAllSacralDatesRange())
