function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

// Note elision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

var basicfn= function(){
    console.log("hii");
    console.log(arguments);
};
[2, 5, 8, 9].forEach(basicfn);