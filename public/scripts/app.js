

// console.log("Client side javascript file");
// fetch('https://api.weatherapi.com/v1/current.json?key=440d9b5b6e674865a41141002202911&q=Bangalore').then((res) => {
//     res.json().then((data) => {
//         if(data.error) {
//             console.log(data.error.message);
//         } else {
//             console.log(data.location.name, data.current.condition.text);
//         }
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value


    p1.textContent = 'loading.....';
    p2.textContent = '';
    fetch('https://api.weatherapi.com/v1/current.json?key=440d9b5b6e674865a41141002202911&q=' +location).then((res) => {
    res.json().then((data) => {
        if(data.error) {
            p1.textContent = data.error.message;
        } else {
            p1.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`
            p2.textContent = `${data.current.condition.text} Weather Condition, It is currently ${data.current.temp_c} degree Out And There is ${data.current.precip_in * 100} % chance of rain`

            // console.log(data.location.name, data.current.condition.text);
        }
    })
})

})