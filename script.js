let xxx = Math.random();
xxx = xxx * 10 ;
xxx =Math.round(xxx);
console.log(xxx);

let number = document.querySelector('#num1')
let btn = document.querySelector('#btn').onclick = magicNumbers ;

function magicNumbers(){
let num = number.value;
num = parseInt(num)
console.log(num);

if(xxx == num){
    // alert('вы угадали!!!')
    magick();
    // location.reload();
}else if(xxx < num || xxx > num){alert('пробуй еще')}
else if(isNaN(num)){alert('не коректное число')}
}
function magick(){
document.querySelector('h1').outerHTML = '<h2>ВЫ УГАДАЛИ !!!</h2>'
document.querySelector('#num1').outerHTML ='<h3>Нужно заполнить анкету для получения подарка</h3>'
document.querySelector('#btn').outerHTML = '<button id="btn2">ЗАПОЛНИТЬ</button>'
document.querySelector('#btn2').onclick = magick2;
function magick2(){
    document.querySelector('h2').outerHTML = '<div id="block12"> Ваше имя:<input type="text" id="num2"><br></div>' 
    document.querySelector('h3').outerHTML = '<div id="block13"> Ваша фамилия:<input type="text" id="num3"></div>' 
    document.querySelector('#btn2').outerHTML = '<div id="block11"><h3>что предпочитаете:</h3>виски<input type="radio" id="num4" >водку<input type="radio" id="num5" >пиво<input type="radio" id="num6" ><h3>что предпочитаете:</h3>шоколад<input type="radio" id="num7" >цветы<input type="radio" id="num8" >набор трусов<input type="radio" id="num9" ><h3>какой цвет больше нравиться:</h3>выбери цвет тут>:<input type="color" id="num10"><br><button id="btn3">ГОТОВО!</button></div>' 
   
  



    document.querySelector('#btn3').onclick = magick3;
function magick3(){
 let num2 = document.querySelector('#num2').value
 let num3 = document.querySelector('#num3').value
let num4 = document.querySelector('#num4').checked
 let num5 = document.querySelector('#num5').checked
 let num6 = document.querySelector('#num6').checked
 let num7 = document.querySelector('#num7').checked
 let num8 = document.querySelector('#num8').checked
  let num9 = document.querySelector('#num9').checked;
  let num10 = document.querySelector('#num10').value


console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(num8)
console.log(num9)
console.log(num10)
let block11 = document.querySelector('#block11').style.display ='none'
let block12 = document.querySelector('#block12').outerHTML = '<div>  <h1 id="h1">Открытка для:</h1><img src="" alt="фото в проебе" id="img1"><img src="" alt=" фото в проебе" id="img2"></div>'
document.querySelector('#h1').innerHTML += `${ num2} ${ num3}`;
document.querySelector('div').style.background = num10


if(num4 == true){
    document.querySelector('#img1').src = '33.png' 
}else if(num5 == true){
    document.querySelector('#img1').src = '22.png' 
}else if(num6 == true){
    document.querySelector('#img1').src = '11.png' 
}

if(num7 == true){
    document.querySelector('#img2').src = '55.png' 
}else if(num8 == true){
    document.querySelector('#img2').src = '44.png' 
}else if(num9 == true){
    document.querySelector('#img2').src = '66.png' 
}








let block13 = document.querySelector('#block13').style.display ='none'
}

}
}





