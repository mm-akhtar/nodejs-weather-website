// console.log("Starting");

// setTimeout( () => {
//     console.log("2 Second Timer");
// }, 2000)

// setTimeout( () => {
//     console.log("0 Second")
// }, 0)
// console.log("Stopping");



// const url = 'https://api.weatherapi.com/v1/current.json?key=440d9b5b6e674865a41141002202911&q=Bangalore';

// request({ url: url, json: true }, (err, res) => {
//     if(err) {
//         console.log('unable to connect weather service');
//     } else if (res.body.error) { 
//         console.log(res.body.error.message);
//     } else {
//         const cureently = res.body.current;
//         console.log(`it is currently ${cureently.temp_c} degree out. There is a ${cureently.precip_mm * 100} % chance of rain `);
//     }

// })

const request = require('request');


const weather = (address, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=440d9b5b6e674865a41141002202911&q='+ encodeURIComponent(address);
    request({ url, json: true }, (err, {body}) => {
        if(err) {
           callback('unable to connect weather service', undefined);
        } else if (body.error) { 
            callback(body.error.message +' Try another search', undefined);
        } else {
            // callback(undefined,`In ${body.location.name}, ${body.location.region}, ${body.location.country}. it is currently ${cureently.temp_c} degree out. There is a ${cureently.precip_mm * 100} % chance of rain `);
            callback(undefined,body);
        }
    })


}

// if(process.argv[2]) {
//     weather(process.argv[2], (err, data) => {
//         if(err) {
//            return console.log(err);
//         } 
//         console.log(data);
//     })
// } else {
//     console.log('Please type location')
// }

module.exports = weather;