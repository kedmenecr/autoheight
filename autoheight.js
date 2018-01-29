var elements  = document.getElementsByClassName("box");
var array = [];
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    var height = element.scrollHeight;
    array.push(height);
}    
var max = Math.max.apply(Math, array);
var maxString = max.toString();
for (var i = 0; i < elements.length; i++) {
    elements[i].style.height=(max+"px");
}

