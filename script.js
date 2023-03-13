
 document.querySelector('.button2').onclick = complexity;
function complexity() {
   
    let option = document.querySelectorAll('#my-select option');
let a10 = 10

    for (let i = 0; i < option.length; i = i + 1) {
    //    console.log(option[i].selected); 
       if(option[i].selected){
       let option1 = option[i].value
        if(option1 == 10){ 
            a10 = 10 
            document.querySelector('.h3-3').innerHTML +=' 0 - 10' 
         }else if (option1 == 100) {
            a10 = 100 
            document.querySelector('.h3-3').innerHTML +=' 0 - 100'
        }else if (option1 == 1000) {
            a10 = 1000
            document.querySelector('.h3-3').innerHTML +=' 0 - 1000'
        };
        document.querySelector('.contaner2').style.display = 'block'
       document.querySelector('.h3').style.display = 'none'
       document.querySelector('.button2').style.display = 'none'
      
        // location.reload();
       };
    };

    let xxx = Math.random();
    xxx = xxx * a10 ;
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
    }

// console.log(option)
function magick(){
    document.querySelector('.h3-3').style.display = 'none'

document.querySelector('h1').outerHTML = '<h2>ВЫ УГАДАЛИ !!!</h2>'
document.querySelector('#num1').outerHTML ='<h3>Нужно заполнить анкету для получения подарка</h3>'
document.querySelector('#btn').outerHTML = '<button id="btn2">ЗАПОЛНИТЬ</button>'
document.querySelector('#btn2').onclick = magick2;

function magick2(){
    document.querySelector('h2').outerHTML = '<div id="block12"> Ваше имя:<input type="text" id="num2"><br></div>' 

    document.querySelector('h3').outerHTML = '<div id="block13"> Ваша фамилия:<input type="text" id="num3"></div>'

    document.querySelector('#btn2').outerHTML = '<div id="block11"><h3>что предпочитаете:</h3><div><input class="radio-input" type="radio" id="num4" name="r555" value="виски" checked> <label for="num4">Виски</label><input class="radio-input" type="radio" id="num5" name="r555" value="водка" > <label for="num5">Водку</label><input class="radio-input" type="radio" id="num6" name="r555" value="пиво" > <label for="num6">Пиво</label></div><h3>что предпочитаете:</h3><div><input class="radio-input2" name="t555" value="шоколад" type="radio" id="num7" checked><label for="num7">шоколад</label><input class="radio-input2" name="t555" value="цветы" type="radio" id="num8" ><label for="num8">цветы</label><input class="radio-input2" name="t555" value="трусы" type="radio" id="num9" ><label for="num9">трусы</label></div><h3>какой цвет больше нравиться:</h3>выбери цвет тут>:<input type="color" id="num10"><br><button id="btn3">ГОТОВО!</button></div>' 
    document.querySelector('#btn3').onclick = magick3;

function magick3(){
 let num2 = document.querySelector('#num2').value
 let num3 = document.querySelector('#num3').value
 let radio_input = document.querySelectorAll('.radio-input');
 let radio_input2 = document.querySelectorAll('.radio-input2');

  let num10 = document.querySelector('#num10').value

document.querySelector('#block11').style.display ='none'
document.querySelector('#block12').outerHTML = '<div>  <h1 id="h1">Открытка для:</h1><img src="" alt="фото в проебе" id="img1"><img src="" alt=" фото в проебе" id="img2"></div>'
document.querySelector('#h1').innerHTML += `${ num2} ${ num3}`;
document.querySelector('div').style.background = num10

for (let i = 0; i < radio_input.length; i = i + 1){
    if (radio_input[i].checked) {
        let result = radio_input[i].value;
        if (result == 'виски') {
            document.querySelector('#img1').src = 'Pictures/33.png'
        }else if(result == 'водка'){
               document.querySelector('#img1').src = 'Pictures/22.png' 
             }else if(result == 'пиво'){
                document.querySelector('#img1').src = 'Pictures/11.png' 
            }
    }
    
}

for (let i = 0; i < radio_input2.length; i = i + 1){
    if (radio_input2[i].checked) {
        let result2 = radio_input2[i].value;
        if (result2 == 'шоколад') {
            document.querySelector('#img2').src = 'Pictures/55.png'
        }else if(result2 == 'цветы'){
               document.querySelector('#img2').src = 'Pictures/44.png' 
             }else if(result2 == 'трусы'){
                document.querySelector('#img2').src = 'Pictures/66.png' 
            }
    }
    
}
// if(num4 == true){
//     document.querySelector('#img1').src = '33.png' 
// }else if(num5 == true){
//     document.querySelector('#img1').src = '22.png' 
// }else if(num6 == true){
//     document.querySelector('#img1').src = '11.png' 
// }

// if(num7 == true){
//     document.querySelector('#img2').src = '55.png' 
// }else if(num8 == true){
//     document.querySelector('#img2').src = '44.png' 
// }else if(num9 == true){
//     document.querySelector('#img2').src = '66.png' 
// }

document.querySelector('#block13').style.display ='none'
}

}
}





