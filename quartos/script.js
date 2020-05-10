var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const urlBase = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

const request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.readyState === 4) {
        //request.status === 200 ? console.log(request.responseText) : console.error('error')
        request.status === 200 ? console.log("OK") : console.error('error')
        let data;
        data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[1].photo);
        console.log(data[2]);
    }
}

request.open('GET', urlBase, true);
request.responseType = "json";
request.send();

function call(){ 
    window.location = "../index.html";
}
