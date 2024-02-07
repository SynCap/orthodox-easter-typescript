# Расчет даты масленницы

Церковная Масленица начинается за 8 недель перед Пасхой
и длится 1 неделю с понедельника по воскресенье (Прощёное воскресенье).

Народная Масленица начинается на день раньше - в воскресенье
на так называемое "мясное заговенье", когда православным
в последний раз разрешается есть мясо (т.е. продолжается 8 дней).

После Масленицы начинаются 7 недель Великого поста, длящегося
до воскресенья праздника Пасхи (вернее, Великий пост длится 7 недель
без одного дня, с Чистого понедельника до предпасхальной субботы
включительно, до первой вечерней звезды).

По определению I Вселенского собора Пасху всегда и повсеместно
празднуют между 22 марта и 25 апреля по старому стилю
(между 4 апреля и 8 мая по н. ст.) - в первое воскресенье
после пасхального полнолуния (первое полнолуние после
весеннего равноденствия), или на неделю позже, чтобы Пасха христианская
совершалась после иудейской (но не совпадала с иудейской).

## Формула

`(4 + c + d)` апреля или, если сумма получится больше `30`, то `[(4 + c + d) - 30]` мая.

### Вычисление числа `с` для формулы

Чтобы получить число `с`, надо число года разделить `с` остатком на `19`, затем получившийся остаток от деления умножить на `19`, добавить `15` и получившуюся сумму разделить с остатком на `30`.

Число `с` будет равно остатку от этого деления.

### Вычисление числа `d` для формулы

Число `d` равно остатку от деления числа `(2a + 4b + 6c + 6)` на число `7`,
где:

- `a` - равно остатку от деления числа года на 4;
- `b` - равно остатку от деления числа года на 7;
- `с` - вычислено ранее.

## Масленница

Для определения даты начала Масленицы остается лишь отсчитать от дня Пасхи восемь
недель назад — до понедельника начала церковной Масленицы или до
воскресенья ("мясного заговенья") начала Масленицы народной.