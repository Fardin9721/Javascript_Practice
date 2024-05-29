
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