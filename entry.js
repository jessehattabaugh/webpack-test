require('expose?$!jquery');

require([], function () {
    console.info("in module");
    console.log($.fn.jquery);
});
