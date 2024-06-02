
// Object 
const leon ={
    fastName :"Fardin",
    lastName:"Ahasan",
    age:27,
    color : "Dark",
    fullName : function (){
        return this.fastName + " " + this.lastName;
    },
    job: function(){
        console.log("CableONE");
    },
    aim: function(){
        console.log("Fontend Developer");
    },
};

leon.job();
console.log(leon);



const phone ={
    brandName : "Realme",
    modelName : "Note 50",
    phoneType : "Android",
    vertionOs : 13,
    ram : "4gb",
    rom : "128gb",
    display : "LED HD"

};
document.getElementById('PhoneModel').innerHTML = leon.fullName();
// Function 
function timeShow(){
    document.getElementById('btnd').innerHTML = Date();
};
const exm = `Hello
 variable
  "Thi's"`;
console.log(exm);

const price = 10;
const vat = 0.25;
const total = price * vat;
console.log(total);

const a = "10";
const b = 20;
const c = a+b;
document.getElementById('disp').innerHTML ="The can't add if any string " + c;

var ba =9999999999999999999n;
console.log(typeof ba);
document.getElementById('biint').innerHTML = "This is the new Datatype is <br/>" + typeof ba;
// Array Area
const fastAry=["Fardin ","Ahasan ","Leon"];
document.getElementById('ary1').innerHTML=fastAry;
const everyDayCarry=["Mobile","Office Key","Bike key","Wallet","Glass"];
let text ="<ul>";
for (i = 0; i < everyDayCarry.length; i++) {
    text += "<li>" +everyDayCarry[i] +"</li>";
};
text +="</ul>";
document.getElementById('ary3').innerHTML=text;

const bus =["Sr Travels","Nabil Paribohan","Agomoni","Hanif"];
bus[bus.length]="Ena";
function buss(value){
    console.log(value);
};
bus.forEach(buss);
const stob =[10,40,53,45,2,65,2,55,765,3243,];
stob.sort(function(a,b){
    return b-a;
});
console.log(stob);
// array ext
const airDrop =["Sound","Bass","Towtor","NOC","ACO"];
function airDropF(value){
    console.log(value);
};
airDrop.forEach(airDropF)
const water=["Mom watr","Sun","Sena","Awuaya"];
water.push("Papsi");
function waterF(value){
    console.log(value);
};
water.forEach(waterF);

const busse =["Scania","Hondai","Hino","Asoklalend"];
const car =[10,1,2,3,4,54,564,65,];
car.sort(function(a,b){
    return a -b;
})
console.log(car);
// Date Zoon
const d =new Date("2024-05");
console.log(d);
// Date Compare 
let text2 ="";
const today =new Date();
const soumday =new Date();
soumday.setFullYear(2025, 0, 20);
if(soumday > today){
    text2="This day Before 2025";
}
else{
    text2="This day After 2025";
};
document.getElementById("datdi").innerHTML =text2;
// Math area
const desimalMath =(Math.round(5.7));
document.getElementById('mathD').innerHTML ="The Math.round ="+ desimalMath;
const desimalMath2 = Math.ceil(2.4);
document.getElementById('mathE').innerHTML = "The Math.ceil is ="+ desimalMath2 +" Math.ceil(x) returns the value of x rounded up to its nearest integer:";
const desimalMath3 = Math.floor(2.9);
document.getElementById('mathF').innerHTML = "Math.floor "+ desimalMath3;
const desimalMath4 = Math.trunc(-2.2);
document.getElementById('mathG').innerHTML ="Math.trunc "+ desimalMath4;
const desimalMath5 = Math.sign(-4);
document.getElementById('mathh').innerHTML ="Math.sign "+ desimalMath5;
const desimalMath6 = Math.pow(7,2);
document.getElementById('math1').innerHTML ="Math.pow "+ desimalMath6;
const desimalMath7 = Math.sqrt(5);
document.getElementById('math2').innerHTML ="Math.sqrt "+ desimalMath7;
const desimalMath8 = Math.sin(90*Math.PI/180);
document.getElementById('math3').innerHTML ="Math.sin "+ desimalMath8;
const desimalMath9 = Math.min(21,122,12,43,34,434,6,65,56,);
document.getElementById('math4').innerHTML ="Math.min "+ desimalMath9;
const desimalMath10 = Math.max(21,122,12,43,34,434,6,65,56,);
document.getElementById('math5').innerHTML ="Math.max "+ desimalMath10;
const desimalMath11 = Math.floor(Math.random()*7)+1;
document.getElementById('math6').innerHTML ="Math.random "+ desimalMath11;
function knoMath (min , max){
    return Math.floor(Math.random()*(max-min)) +min;
}
console.log();
document.getElementById('math7').innerHTML ="The Random Number in use function "+ knoMath(1,10);
// Boolean Part
Boolean(10>9);
document.getElementById('boo1').innerHTML=Boolean(10>9) +" And "+Boolean(10<9);
let boo = 400 ;
let ood = 400 ;
let yoo = boo==ood;
document.getElementById('boo2').innerHTML ="400 equal 400 is "+ Boolean(yoo);
// Comparison Area
let comx = 5;
let comy = "6";
document.getElementById('com1').innerHTML =comx == comy;
let inTime = 10.11;
officeTime=(inTime<10.15)?"You are in right time" : "you are late";
document.getElementById('com2').innerHTML = "Office Time "+officeTime;
let dreamPC = 'no';
console.log(dreamPC && "react" ? "you have dream pc" : " you don't have")  
let comAge = `8`;
comAge = Number(comAge);
if(isNaN(comAge)){
    text3 ="I's Not A Number";
}
else{
    text3 = comAge > 18 ? "You are Old" : "You are not old";
}
document.getElementById('com3').innerHTML =text3;