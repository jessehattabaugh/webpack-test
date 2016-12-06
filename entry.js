
require('expose?$!jquery');

var jquery = require('jquery');
console.info("in module");
console.log(jquery.fn.jquery);

/*
require(['jquery'], function (jquery) {
    console.info("in module");
    console.log(jquery.fn.jquery);
});*/
