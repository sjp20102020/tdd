//http://www.sitepoint.com/understanding-module-exports-exports-node-js/
var exports = module.exports = {};
module.exports = {
    add: function (val1, val2) {
        console.log("in Add");
        return (val1+val2);
    },

    substract: function(val1, val2){
        console.log("in susbstract");
        return (val1+val2);
    }
};

