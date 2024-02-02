// let km ={
//     dark:"dearyMilk",
//     crisp:"kitkat",
//     brand:"indian",
//     display:function(){
//         console.log(this.dark+this.crisp)
//     }

// }
// console.log(km.dark)
// console.log(km.crisp)
// console.log(km.brand)
// km.display()
//
let suhel={
    fn:"Suhel",
    ln:"Khan",
    age:34,
    display:function(){
        console.log(this.fn+this.ln)
    }
}
suhel.display()

//

function Person(fn,ln,ag){

    this.fn=fn
    this.ln=ln
    this.ag=ag
    this.display=function(){
        console.log(this.fn+this.ln)

    }

}

let Suhel= new Person("Suhel", "khan", 34)
let SK=new Person("Umair" ,"khan")

//Suhel.display()
console.log(Suhel)
console.log(SK)

console.log(Suhel.__proto__==Person.prototype)

Person.prototype.display=function(){
    console.log(this.fn+this.ln)
}

Person.prototype.language=["English","Hindi"]

//Suhel.display()
console.log(Suhel.language)



