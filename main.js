let ary = [];
let i = 0;

$(document).ready(function(){
let display = document.getElementById('main-display');
let result = 0;

const zero = document.getElementById('button0');
const one = document.getElementById('button1');
const two = document.getElementById('button2');
const three = document.getElementById('button3');
const four = document.getElementById('button4');
const five = document.getElementById('button5');
const six = document.getElementById('button6');
const seven = document.getElementById('button7');
const eight = document.getElementById('button8');
const nine = document.getElementById('button9');
const zero2 = document.getElementById('button00');
const comma = document.getElementById('button-comma');
const add = document.getElementById('button-add');
const pull = document.getElementById('button-pull');
const multi = document.getElementById('button-multi');
const divide = document.getElementById('button-divide');

  /* 「0」押下時 */
  $("#button0").click(function(){
    box(display, zero);
  })
  /* 「１」押下時 */
  $("#button1").click(function(){
    box(display, one);
  })
  /* 「2」押下時 */
  $("#button2").click(function(){
    box(display, two);
  })
  /* 「3」押下時 */
  $("#button3").click(function(){
    box(display, three);
  })
  /* 「4」押下時 */
  $("#button4").click(function(){
    box(display, four);
  })
  /* 「5」押下時 */
  $("#button5").click(function(){
    box(display, five);
  })
  /* 「6」押下時 */
  $("#button6").click(function(){
    box(display, six);
  })
  /* 「7」押下時 */
  $("#button7").click(function(){
    box(display, seven);
  })
  /* 「8」押下時 */
  $("#button8").click(function(){
    box(display, eight);
  })
  /* 「9」押下時 */
  $("#button9").click(function(){
    box(display, nine);
  })
  /* 「00」押下時 */
  $("#button00").click(function(){
    if(display.innerHTML != 0){
      box(display, zero2);
    }
  })
  /* 「AC」押下時 */
  $("#buttonAC").click(function(){
    display.innerHTML = 0;
    result = 0;
  })
  /* 「.」押下時 */
  $("#button-comma").click(function(){
    if(ary[i] != add.innerHTML &&
       ary[i] != pull.innerHTML &&
       ary[i] != multi.innerHTML &&
       ary[i] != divide.innerHTML &&
       ary[i] != comma.innerHTML &&
       ary[i] != null){
      i++;
      display.innerHTML += comma.innerHTML;
      ary[i] = comma.innerHTML;
      i++;
    }
  })
  /* 「+」押下時 */
  $("#button-add").click(function(){
    if(ary[i] != add.innerHTML &&
       ary[i] != pull.innerHTML &&
       ary[i] != multi.innerHTML &&
       ary[i] != divide.innerHTML &&
       ary[i] != comma.innerHTML &&
       ary[i] != null){
      if(display.innerHTML != 0){
        i++;
        display.innerHTML += add.innerHTML;
        ary[i] = add.innerHTML;
        i++;
      }
    }
  })
  /* 「-」押下時 */
  $("#button-pull").click(function(){
    if(ary[i] != add.innerHTML &&
       ary[i] != pull.innerHTML &&
       ary[i] != multi.innerHTML &&
       ary[i] != divide.innerHTML &&
       ary[i] != comma.innerHTML &&
       ary[i] != null){
      if(display.innerHTML == 0){
        display.innerHTML = pull.innerHTML;
        ary[i] = pull.innerHTML;
      }else{
        i++;
        display.innerHTML += pull.innerHTML;
        ary[i] = pull.innerHTML;
        i++;
      }
    }
  })
  /* 「*」押下時 */
  $("#button-multi").click(function(){
    if(ary[i] != add.innerHTML &&
       ary[i] != pull.innerHTML &&
       ary[i] != multi.innerHTML &&
       ary[i] != divide.innerHTML &&
       ary[i] != comma.innerHTML &&
       ary[i] != null){
      if(display.innerHTML != 0){
        i++;
        display.innerHTML += multi.innerHTML;
        ary[i] = multi.innerHTML;
        i++;
      }
    }
  })
  /* 「/」押下時 */
  $("#button-divide").click(function(){
    if(ary[i - 1] != add.innerHTML &&
       ary[i - 1] != pull.innerHTML &&
       ary[i - 1] != multi.innerHTML &&
       ary[i - 1] != divide.innerHTML &&
       ary[i - 1] != comma.innerHTML){
      if(display.innerHTML != 0){
        i++;
        display.innerHTML += divide.innerHTML;
        ary[i] = divide.innerHTML;
        i++;
      }
    }
  })
    /* 「=」押下時 */
    $("#button-equal").click(function(){

      /* 「小数点の処理」 */
      for(i = 0; i < ary.length; i++){
        if(ary[i] == comma.innerHTML){
          console.log(ary);
          ary[i - 1] += ary[i] + ary[i + 1];
          for(i; i < ary.length; i++){
            ary[i] = ary[i + 2];
            console.log(ary);
          }
          //console.log(ary);
          i = 0;
          continue;
        }
      }
      /* 乗算の処理 */
      for(i = 0; i < ary.length; i++){
        if(ary[i] == multi.innerHTML){
          result = Number(ary[i - 1]) * Number(ary[i + 1]);
          ary[i - 1] = result;
          for(i; i < ary.length; i++){
            ary[i] = ary[i + 2];
          }
          i = 0;
          continue;
        }
      }
      /* 除算の処理 */
      for(i = 0; i < ary.length; i++){
        if(ary[i] == divide.innerHTML){
          result = Number(ary[i - 1]) / Number(ary[i + 1]);
          ary[i - 1] = result;
          for(i; i < ary.length; i++){
            ary[i] = ary[i + 2];
          }
          i = 0;
          continue;
        }
      }
      /* 加算の処理 */
      for(i = 0; i < ary.length; i++){
        if(ary[i] == add.innerHTML){
          result = Number(ary[i - 1]) + Number(ary[i + 1]);
          ary[i - 1] = result;
          for(i; i < ary.length; i++){
            ary[i] = ary[i + 2];
          }
          i = 0;
          continue;
        }
      }
      /* 減算の処理 */
      for(i = 0; i < ary.length; i++){
        if(ary[i] == pull.innerHTML){
          result = Number(ary[i - 1]) - Number(ary[i + 1]);
          ary[i - 1] = result;
          for(i; i < ary.length; i++){
            ary[i] = ary[i + 2];
          }
          i = 0;
          continue;
        }
      }
      display.innerHTML = result;
      i = 0;
    })
});

/* 入力された値と演算子を格納 */
function box(display, value){
  if(display.innerHTML == 0){
    display.innerHTML = value.innerHTML;
    ary[i] = value.innerHTML
  }else{
    display.innerHTML += value.innerHTML;
    if(ary[i] == null){
      ary[i] = value.innerHTML
    }else{
      ary[i] += value.innerHTML;
    }
  }

}