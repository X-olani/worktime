let q1='V';
let q2='Cheddar'
let q3='France'
let q4='Mount Everest'
let q5='Pebbles'
let q6='Pea'
let q7='Marmalade'
let q8='Egyptian'
let q9='Pride'
let q10='Mercury'

let icount= 0;




function doconsole() {
  let ans1=document.getElementById("an1").value;
  let ans2=document.getElementById("an2").value;
  let ans3=document.getElementById("an3").value;
  let ans4=document.getElementById("an4").value;
  let ans5=document.getElementById("an5").value;
  let ans6=document.getElementById("an6").value;
  let ans7=document.getElementById("an7").value;
  let ans8=document.getElementById("an8").value;
  let ans9=document.getElementById("an9").value;
  let ans10=document.getElementById("an10").value;

switch (ans1) {
  case q1:
  icount= + 1
         alert('Hey');

         break;

}


switch (ans2) {
  case q2:
  icount+=1
         alert('sup');
         break;
}
switch (ans3) {
  case q3:
icount+=1
         alert('Hey');
         break;
}

switch (ans4) {
  case q4:
  icount+=1
         alert('Hey');
         break;
}
switch (ans5) {
  case q5:
  icount+=1
         alert('Hey');
         break;
}
switch (ans6) {
  case q6:
  icount+=1
         alert('6');
         break;
}

switch (ans7) {
  case q7:
  icount+=1
         alert('7');
         break;
}
switch (ans8) {
  case q8:
  icount+=1
         alert('Hey');

         break;
}
switch (ans9) {
  case q9:
  icount+=1
         alert('Hey');
         break;
}
switch (ans10) {
  case q10:
  icount+=1
         alert('Hey'+ icount);
         break;
}
if (icount<5){
document.getElementById("output").innerHTML=('You got '+ icount+ ' out of 10. You faild'+icount+'0%')
}
if (icount>=5) {
  document.getElementById("output").innerHTML=('You got '+ icount+ ' out of 10. Yoi passed '+icount+'0%')


}


}
