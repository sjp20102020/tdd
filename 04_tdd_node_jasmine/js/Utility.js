function Utility(){

}

Utility.prototype.isEmpty = function(str){
//function isEmpty(str) {
    if (str === undefined) return true;
    if (typeof(str) == 'function' || typeof(str) == 'number' || typeof(str) == 'boolean'
        || Object.prototype.toString.call(str) === '[object Date]') return false;

    if(str == null || str.trim().length ===0 ) return true;
    if(typeof(str) == 'object')
    {
        var result = true;
        for(var i in str){
            result = false;
        }
        return result;
    }

}

module.exports = Utility;