import { DateTime } from 'luxon';

setInterval(() => {
hh.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.y');
}, 1000);
