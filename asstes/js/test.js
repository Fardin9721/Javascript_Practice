  // "use strict";
// Object 
const leon ={
    fastName :"Fardin",
    lastName:"Ahasan",
    age:27,
    color : "Dark",
    fullName : function (){
        return this.fastName + " " + this.lastName + " and He is "+ this.age +" Yers Old";
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
// Switch Part 
let day;
switch(new Date().getDay()){
    case 0:
        day ="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day ="Thursday";
        break;
    case 5:
        day ="Friday";
        break;
    case 6:
        day ="Saturday";
};
document.getElementById('switch1').innerHTML ="Today is "+ day;
const speed = 21;
if(speed >= 0 && speed<= 10){
    text4="You bike now Under 10kmp";
}
else if(speed >=11 && speed<=20){
    text4 ="You bike now Under 20kmp"
}
else{
    text4="Over Speed";
}
document.getElementById('else1').innerHTML = text4;
let pcOn = 0;
switch(pcOn){
    case 0:
        text5="Your PC is OFF";
        break;
    case 1:
        text5="Your PC is ON";
        break;
    default:
        text5 ="No Valuse Found";
}
document.getElementById('else2').innerHTML =text5;
// For Loop Part
const stb =["Telecast","ABV Neptune","Nstv","Gamma Tech","ABV Neptune 8101","ABV Neptune 8100","ABV Neptune 8901","ABV Neptune 8909","ABV Neptune 8920"];
let show ="";
for(i=0; i<stb.length ;i++){
    show += stb[i] +"<br>";
};
document.getElementById('loop1').innerHTML = show;
// For in
const stbProfile = {
    name:"A.Razzak KG",
    phnNumber: '01723357722',
    address:"Kurigram",
    stbNumber:507020,
    smcNumber:800556400,
};
let txt ="";
for(let proFil in stbProfile){
    txt += stbProfile[proFil]+"<br>";
};
document.getElementById('loop2').innerHTML=txt;
const numbers = [45, 4, 9, 16, 25];
let tes = "";
for(let jer in numbers){
    tes+= numbers[jer] +"<br>";
};
document.getElementById('loop3').innerHTML=tes;
const numbers2 = [45, 4, 9, 16, 25];
let kacu ="";
numbers2.forEach(fortest);
document.getElementById('loop4').innerHTML= kacu;
function fortest(value){
    kacu +=value+"<br>";
}
const bike =["Suziki","Yamaha","Honda","Bajaj","TVS","Hero"];
let bikeList ="";
for(i=0;i<bike.length;i++){
    bikeList += bike[i] +"<br>";
};
document.getElementById('bikeName').innerHTML =bikeList;
const japanBike ={bikeName:"Suziki",bikeModel:"Gixxer",bikeCc:"155cc",bikeMiles:"45kkmp",bikeEnginOil:"Motul 10W40"};
let bikeConfig ="";
for (let sumthik in japanBike){
    bikeConfig+=japanBike[sumthik]+"<br>";
};
document.getElementById('bikeName1').innerHTML=bikeConfig;
const numTest =[435,78,234,67,43,98,3412,23,43,54,65,76,];
let printF ="";
numTest.forEach(numTests);
document.getElementById('bikeName2').innerHTML =printF;
function numTests(value){
    printF+=value+"<br>";
};
const mobileNumber =[978543,7138492309,71923487 ,7923472983,90182748,9237489,54873,13842793,]
let printText ="";
mobileNumber.forEach(mobiless);
function mobiless(value){
    printText += value +"<br>";
}
document.getElementById('bikeName3').innerHTML =printText;
const waterBatol =["Sun water","MOM","Aquya","habijanbi","Sun water","MOM","Aquya","habijanbi"];
let dhori ="";
waterBatol.forEach(waterBatolList);
function waterBatolList(value){
    dhori+=value +"<br>";
}
document.getElementById('bikeName3').innerHTML = dhori;
const pcPower ={cpu:"AMD 5700G",moterbord:"MSI 550",ram:"8GB",ssd:512};
let pcList ="";
for (let varent in pcPower){
    pcList += pcPower[varent] +"<br>";
}
document.getElementById('bikeName4').innerHTML =pcList;
// For Of 
let as = "LEON";
let ofpri ="";
for (let x of as){
    ofpri += x +"<br>";
}
document.getElementById('of1').innerHTML =ofpri;
const sunWater =["Sun","adfsd","BMW", "Volvo", "Mini"];
let ofx ="";
for (let x of sunWater){
    ofx += x + "<br>";
};
document.getElementById('of2').innerHTML = ofx;
let ips =0;
let ipsPrint ="";
while(ips<10){
    ipsPrint += "Hi" +ips +"<br>";
    ips ++;
}
document.getElementById('of3').innerHTML =ipsPrint;
let jata =5;
let jataP ="";
for (i =0; i < jata ;i++){
    if(i==3){continue;}
    jataP += "The number"+i +"<br>";
}
document.getElementById('of4').innerHTML =jataP;
// SET 
const shafin = new Set(["All","Mojition","is"]);
shafin.add("Chika");
let shai = "";
shafin.forEach(alishafin);
document.getElementById('set1').innerHTML =shai;
function alishafin(value){
    shai += value +"<br>";
}
// Map area 
const mapss = new Map([
    ["Fast Name","sumit"],
    ["lastNames",200],
    ["age",30],
    ["work",300]
])
let maptext ="";
mapss.forEach(listOfMaps);
document.getElementById('set2').innerHTML=maptext;
function listOfMaps(value,key){
    maptext+= key + ':'+value+"<br>";
}
let vqty = 20;
let chp = 20;
let sum = vqty * chp;
let vag = sum / 60;
document.getElementById('time_sume').innerHTML = vag;
let bins =(480).toString(2);
console.log(bins);
let dcmm =(bins).toString(10);
console.log(dcmm);
let consvar = 1111 & 1001;
console.log(consvar);
let reg = "The cow is domistice animal,co 'is' vary bog size";
// let n = reg.search(/coW/i);
function changethis(){
    let text = document.getElementById('sree').innerHTML;
    document.getElementById('sree').innerHTML=text.replace(/cow/ig,"(Dog)");
};
hlww();
function hlww(){
    console.log("Hello27");
}
const maloma ={
    fastName: 'Fardin',
    lestName: 'Ahasan',
    id:60,
    fullName:function(){
        return this.fastName+ " " + this.lestName;
    }
}

document.getElementById('this_is').innerHTML=maloma.fullName();
const naim ={
    fullName:function(){
        return this.fastName + " " + this.lastName;
    }
}
const naimName ={
    fastName:"Naim",
    lastName:"Islam"
}
document.getElementById('thisPara').innerHTML=naim.fullName.call(naimName);
// Class area
class CableONE {
    constructor(deperment,emplory){
        this.deperment =deperment;
        this.emplory = emplory;
    };
    work(chap){
        return this.deperment + " work for Box repair by "+this.emplory+"Person " +chap;
    }
    work1(){
        return this.deperment+ " Work for Money "+this.emplory+"Person";
    }
}
const khos =new CableONE("Service Center",11);
const khos1 =new CableONE("Acounts",5);
document.getElementById('clss').innerHTML = khos.work("Onk basi") +"<br>"+ khos1.work1();
// Accordion
const accordion = document.getElementsByClassName('contentBx');
for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active')
    })
}
const acodd =document.getElementsByClassName('accodumBox');
for(let i =0; i<acodd.length; i ++){
    acodd[i].addEventListener("click", function(){
        this.classList.toggle('active')
    })
}
function forTexst(a,b) {
    return a+b;
}
console.log(forTexst(10,20));
document.getElementById('orabhai').innerHTML=forTexst(10,20);
const oraBHaire =["maloma","ami","koelam","ki",59,"oraBHAI re Bhai",];
let orabhaiDori ="";
for (let i =0; i<oraBHaire.length; i++){
    orabhaiDori += oraBHaire[i] +"</br>";
}
document.getElementById('djsakf').innerHTML = orabhaiDori;
const objrt ={
    form : "Dhaka",
    to : "Rangpur",
    kmp : 300,
    by : "Bus",

};
console.log(objrt);


// Object_area 

//constructor function
function Oneplus(model,cpu,ram,display,pp){ 
    this.phoneModel = model;
    this.phoneCpu = cpu;
    this.phoneRam = ram;
    this.phoneDisplay = display;
    this.phonePrice = pp;
    this.price= function(){
        return this.pp;
    };
};
const nord50 = new Oneplus("Nord SE 50","SD 509","4GB","6.7 Inche","1599tk Only.");
const ner4 = new Oneplus("Nord 4lite","SD 845","8GB","6.7 Inche","26000 Only.");
Oneplus.prototype.country='Bangladesh';
console.log(ner4);
console.dir(ner4);
let pText ='';
for (let x in nord50){
    pText+=nord50[x] +"<br>";
}
document.getElementById('oOne').innerHTML=pText;

// Object Set
const myset = new Set (["a","b","c","d","a"]);
// Set value Addd
myset.add("Hello");
console.log(myset);
// Add set Variable
const addVariaable = new Set(["Hello Set"]);
const hayBro = "Hay Bro!";
let yesBro = "Yes Bro!";
var noBro = "No Bro!";
addVariaable.add(hayBro);
addVariaable.add(yesBro);
addVariaable.add(noBro);
console.log(addVariaable);
let setF = "";
for (let x of addVariaable){
    setF += x +"<br>";
}
document.getElementById('setF').innerHTML = setF + typeof addVariaable;
console.log(typeof addVariaable);
// ForEach
const isere = new Set (["Hi","Kem aso"])
let textF = "";
isere.forEach(function(value){
    textF += value +"<br>";
});
document.getElementById('setF2').innerHTML = textF;