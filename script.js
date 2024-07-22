/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

const button = document.querySelector('.forecast-btn');
const forecastText = document.querySelector('.current-forecast h1');
const forecastPercentage = document.querySelector('.current-forecast p');
const template = document.querySelector('#forecast-item');
const forecasts = document.querySelector('.forecasts');

function getRandom(min, max) {
    return Math.floor (Math.random() * (max - min) + min);
}

button.addEventListener('click', function() {

    function fillTemplate(forecast, percentage) {
        const templateItem = template.content.cloneNode(true);
        templateItem.querySelector('h3').textContent = forecast;
        templateItem.querySelector('p').textContent = percentage;

        return templateItem;
    }

    let textForecast;
    const number = getRandom(1, 6);
    const percent = getRandom (0, 101);

        if (number == 1) {
        textForecast = "В скором времени тебе улыбнется удача!"; 
        } else if (number == 2) {
        textForecast = "Все будет лучше, чем сейчас!";
        } else if (number == 3) {
        textForecast = "Всё, что ни делается - всё к лучшему!";
        } else if (number == 4) {
        textForecast = "Жизнь готовит для тебя приятный сюрприз!";
        } else {
        textForecast = "Скоро твой банковский счет заметно пополнится!";
        }
    
    if (forecastText.textContent != "" && forecastPercentage.textContent != "") {
        const templateItem = fillTemplate(forecastText.textContent, forecastPercentage.textContent);
        forecasts.prepend(templateItem);
    }

    forecastText.textContent = textForecast;
    forecastPercentage.textContent = "Вероятность " + percent + " % ";
    
})

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecastText  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
