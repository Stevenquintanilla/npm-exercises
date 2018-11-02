const $ = require('jquery');


const sayHello = () => {console.log("hello")};

sayHello();

$(document).ready(function () {
    $('#test').text('test')
});