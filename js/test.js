const leon ={
    fastName :"Fardin",
    lastName:"Ahasan",
    age:27,
    color : "Dark",
    fullName : function (){
        console.log(this.fastName + " " + this.lastName);
    },
    job: function(){
        console.log("CableONE");
    },
    aim: function(){
        console.log("Fontend Developer");
    },
};


leon.fullName();
console.log(leon.age);