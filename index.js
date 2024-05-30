// document.childNodes[1].childNodes[0].childNodes[5].innerHTML = "Faizzy Loverr";


// console.log(.childNodes);


// var value = 0;
// function greet() {
//     console.log(value);
//     value++;
// }
// var timmerId = setInterval(greet, 1000)
// function stopTime() {
//     if (value === 5) {
        
//         return clearInterval(timmerId)
//     }
// }
// // if (value === 5) {
    
// // }
// stopTime()


// var value = 0;
// var timmerId = setInterval(function () {
//     value++
//     console.log(value);
//     if (value === 5) {
//         return clearInterval(timmerId)
        
//     }
// },1000)


// var cntr = document.getElementById('cntr')
// console.log(cntr.childNodes[1]);

// var user = +prompt('Enter')
// function Faizzy(name) {
//     var show = name ** name
//     return show
// } 
// console.log(Faizzy(user));


var user1 = +prompt('Enter1');
var user2 = +prompt('Enter2')

function Nice(user1) {
    var answer = user1 ** user2
    return answer

}
// var reSult = Nice(10, 5)
console.log(Nice(user1));