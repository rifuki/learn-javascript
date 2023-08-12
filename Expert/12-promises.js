/** Promises */

// getWeather();
// function weatherReceived(data){
//     let weather = data;
//     document.body.innerHTML = `<h1>${weather}</h1>`;
// }
// function getWeather(){
//     setTimeout(() => {
//         weatherReceived("rainy")
//     })
// }

// getWeather(weatherReceived);

// function weatherReceived(data){
//     const weather = data;
//     document.body.innerHTML = `<h1>${weather}</h1>`;
// }

// function getWeather(callback){
//     setTimeout( () => {
//         callback("rainy");
//     }, 5000);
// }

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Bad Data");
        }, 1000)
    })
}

function func2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("wow amazing!!!");
        }, 2000)
    })
}

function onSuccess(data){
    console.log(`SUCCESS: ${data}`);
}

function onError(error){
    console.log(`ERROR: ${error}`);
}

function onFinnaly(){
    console.log(`FINNALY WE BE DONE YO`);
}

func1()
.then(func2, onError)
.then(onSuccess)
.catch(onError)
.finally(onFinnaly)


function fetchData(){
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
    })
}

function displayData(weather){
    console.log(weather);
}

function onError(error){
    console.log(`ERROR: ${error}`);
}

fetchData()
.then(displayData)
.catch(onError);