# Пасхалии / Orthodox Easter Dates (Javascript)

Рассчёт даты православной Пасхи и дат праздников Подвижного Круга,
праздников, даты которых зависят от Пасхи

Calculate the Orthodox Easter date and other Easter depended dates

описание алгоритма / algorithm explanation --
https://ru.wikipedia.org/wiki/Пасха

## function `getEasterDate`

Рассчёт даты пасхи на определённый год

Calculate Easter date for specified year


	@link https://ru.wikipedia.org/wiki/Пасха#Расчёт_даты_Пасхи

	@param year <Number> [=<this year>]	Год для которого ведётся рассчёт

	@return 	   <Date>	Дата Пасхи указанного года по Григорианскому календарю

## function `getSacralDate`

Gets the Easter depended sacral date.

Даты Подвижного круга - Масленица, Вербное воскресенье, Радуница,
Вознесение, Троица

`sacrality` possible values /
Доступныу значения для `sacrality`:

> `mas`	:
	Масленица и воскресеный день перед началом Великого Поста /
	Maslenitsa -- slavic native and Sunday before Quadragesima

> `ver`	:
	Вербное воскресенье (Вход в Иерусалим, пальмовое воскресенье) /
	Palm Sunday

> `rad`	:
	Радоница (Родительский день) /
	Radonitsa, slavic native

> `vos`	:
	Вознесение /
	Ascension Day

> `tro`	:
	Троица (Пятидесятница) /
	Holy Trinity Day



	@param  {Date}   [easterDate=getEasterDate()]  The Easter date | Дата Пасхи

	@param  {string} [sacrality='mas']          Type of sacral | Какой праздник

	@return {Date}   The sacral date.

## function `rusifyDate`

"Обчеловечивание" значения даты

Human (russian) friendly representation of date

	@param      {Date}   date  The date | Дата, которую по-русски посмотреть надо

	@return     {String}       String representing the date | Дата по-человечячьи

## Пример применения

### function `getAllSacralDates`

Gets all sacral dates for specified/current year.

Рассчитать все даты Подвижного круга на указанный/текущий год.

	@param      {Number}  [year=(new Date).getFullYear()]  The year

	@return     {Object}  All sacral dates.

### function `getAllSacralDatesRange`

Gets all sacral dates by years range.

Рассчитать даты Подвижного Круга для нескольких лет.

	@param      {Number}  [yearSince=(new Date()).getFullYear()-20]  The year since

	@param      {Number}  [yearTill=(new Date()).getFullYear()]      The year till

	@return     {Object}  All sacral dates by years.
