// 1 интерактивные элементы
// два инпута give receive
// select currency give currency receive
// output Rate
// output comission комиссия в нашей валюте (give currency)
// кнопка поменять местами inverse
// кнопка exchange
// checkbox согласия 


// 2 данные:
// - список валют из api (название валюты + курс (объект))
// - пользователь будет вводить сколько ему нужно поменять (число)
// - время операции обмена (submit)

// 2.1
// переработанные(вычесленные) данные
// - коэф для расчета + для вывода в rate  (отношение одной валюты к другой (give к receive))
// - процент в выражении give currency (1 % от суммы)
// - receive (сколько получим)

// 3 куда данные уходят, когда форма заполненна
//  в LocalStorage и одновременно в latest application block

// Алгоритм разработки:
// завести все интерактивные элементы (компонент)
// определить какие потребуются обработчики событий 
//  - у select событие change
//  - give input событие input
//  - checkbox событие change
//  - событие click на inverse кнопке
//  - button exchange событие submit

// life cicle компонента:
// это смена состояния компонента
// 1 инициализация компонента :
//  - поля disabled 
//  - мы через js обращаемся к api и запрашиваем данные(тот самый массив)
// - мы получаем данные
// - преобразуем их в тот вид с которым удобно работать
// - и это наш state компонента в плане данных 
// - проверка есть ли в LocalStorage поле latestApplication, если его нет добавить поле с пустым массивом

// 2 мы заполняем данными поля:

//  2 select (по умолчанию выставить доллары)
// - затем высчитываем rate
// - после активируем поля select и поле give

//  итого мы инициализировали компонент и дали пользователю с ним работать
// пользователь может:

// - поменять валюту и тогда мы пересчитаем rate 
// и если что-то есть в give, мы высчитаем комиссию и receive

// - если что-то меняется в give тогда мы пересчитываем receive и комиссию
// (и мы показываем все пользователю render)

// если пользователь нажал на инверсию :
// - мы меняем местами value give и receive вместе c currency, 
// соотв нам нужно заново высчитать комиссию и rate

// - дальше событие submit, оно происходит если :
// заполненно give
// checkbox checked



// submit отправляет данные в local storage 
// и одновременно с этим обновляет блок latest application

// После того как обменная операция прошла, 
// мы скидываем поля с валютами, give, комиссию, checkbox согласия
// возвращаем на момент после инициализации компонента (цикл прошел)

// представим конкретные функции для действий в ходе жизненного цикла:

// 1 функция запроса данных (fetch)
// 2 подготовка (преобразование данных в удобный формат)
// это мы завели в state

// в state будет:
// - список (массив) с объектами у которых по 2 свойства: 1 - название валюты,
//  2 - курс валюты (currency list)

// - give amount 0
// - receive amount 0
// - give currency USD
// - receive currency USD
// - checkbox false
// - rate 1 USD = 1 USD (как предствавить?)
//   объектом (giveCount,giveName, receiveCount, receiveName)
// - commission - объект (commissionCount, commissionName)

// 3 render обращается к state и обновляет компонент
//  (сначада согласно дефолт данным, потом согласно изменяющимся данным state)

// 4 функция расчета rate (берет данные из state(две валюты) делит одну на другую)
// нужно взять currency поделить на другую currency
//  (receive на give) и получ их коэф
// и выводим на экран ( слева 1 , а результат деления справа)

// 5 функция initialization UI (user interface)
// разблокируем полe ввода и  2 select

// 6 когда пользователь меняет currency нужно вызвать
// функцию changeCurrency :
// обновить валюту в state
// далее вызов функции rate и функции commission (они меняет state)
// вызов рендера

// 7 когда пользователь вводит give amount:
// function changeGiveAmount:
// обновляет give в state
// пересчитывает receive , commission и обновляет их в state
// рендер

// 8 функция инверсии 
// - мы меняем местами в state value give и value receive вместе c give и receive 
// currency,
// функции пересчитывания rate и пересчитывания комиссии (только для расчета) 
// и вносим в state
// render

// 9 функция Submit
// проверка в State условий (checkbox и give)
// если проверка не пройдена сообщаем пользователю. 
// (модальное окно)

// если проверка пройдена тогда:
// пушим в LocalStorage операцию 
// шаг 1 : получить из localStorage массив latestApplications, распарсить 
// шаг 2 сформировать объект последней операции:
//         - поле даты в нужном формате (строка)
//         - giveCount
//         - giveCurrency
//         - receiveCount
//         - receiveCurrency
// шаг 3 пушим объект операции в массив latestApplications
// шаг 4 сохраняем массив в localStorage в новом виде
// шаг 5 вызываем рендер компонента latestApplication

// 10 сбрасываем компонент до инициализированного состояния (функция)
// меняем state на initialState
// рендерим


// получим данные юзера с id = 1,
// запросим список постов и отобразим их
// затем по нажатию на кнопку будем отображать комментарии к постам
// и отобразим их

const url = "https://jsonplaceholder.typicode.com/";
const fulName = document.querySelector('.ful-name');
const userId = '1';
const getPostsButton = document.querySelector('.get-posts');
const postSection = document.querySelector('.posts');


const getUser = async(url, userId) => {
    let response = await fetch(`${url}/users/${userId}`);
    let result = awaits response.json();

    console.log(result);
};

const renderUser = (user) => {
    fulName.textContent = `${user.name} (${user.username})`;
};

const getPosts =  async (userId) => {
    let response = await fetch(`${url}/posts?userId=${userId}`);
    let result = awaits response.json();
    renderPosts(result);
};

const renderPosts = (posts) => {
    posts.forEach(post =>
        const article = document.createElement('article');
        article.dataset.id = post.id;

        )

};

getUser(url, 1);

getPostsButton.addEventListener("click", () => getPosts(userId));


https://jsonplaceholder.typicode.com/
// получим данные юзера с id = 1,
// запросим список постов и отобразим их
// затем по нажатию на кнопку будем отображать комментарии к постам
// и отобразим их
Vladimir Esionov 21:59
https://jsonplaceholder.typicode.com/posts?userId=1
Vladimir Esionov 22:12
https://jsonplaceholder.typicode.com/comments?postId=1

article[data-id=`${postId}`]