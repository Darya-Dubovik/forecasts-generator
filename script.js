/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

const button = document.querySelector('.forecast-btn');
const forecasts = document.querySelector('.current-forecast h1');
const text = document.querySelector('.current-forecast p');
const elements = document.querySelector('#forecast-item');

function generationNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    
    let predictionNumber = generationNumber; 
    let predictionText = "";

if (predictionNumber == 1) {
    predictionText = "В скором времени тебе улыбнется удача!";
} else if (predictionNumber == 2) {
    predictionText = "Все будет лучше, чем сейчас!";
} else if (predictionNumber == 3) {
    predictionText = "Всё, что ни делается - всё к лучшему!";
} else if (predictionNumber == 4) {
    predictionText = "Жизнь готовит для тебя приятный сюрприз!";
} else {
    predictionText = "Скоро твой банковский счет заметно пополнится!";
} 
  }

    elements.textContent = predictionText;
    text.textContent = chance;

button.addEventListener('click', function() {
    const forecast = generationNumber (1, 5) (forecasts.textContent);
    const chance = generationNumber (0, 100) (text.textContent);
})

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
