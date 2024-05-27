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
console.log(leon.age);



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