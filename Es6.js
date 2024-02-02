//class person{
   // fn
   //ln
    //roll_no
//}
class muji{
fn
ln
age
rn
}
        
    
let suhel=new muji()
console.log(suhel)/////////undefined

//accesing the property and updating outside the class
 
suhel.first_name="karishma"
suhel.last_name="Maniyar"
suhel.age=28
suhel.roll_no=1

console.log(suhel)
//
//Es6 class with constructor

class suhelk{
    constructor(fn,ln,ag,rn){
        this.first_name=fn
        this.last_name=ln
        this.age=ag
        this.roll_no=rn

    }
}

let khan=new suhelk("karishma","maniyar",28,1)
console.log(khan)

//////object.create///////

let mobile=Object.create({})
console.log(mobile)//////////////{}

mobile.brand="Samsung"
mobile.model="s11"
mobile.price=60000
console.log(mobile)


///object literal

//let mobile1={
//     brand:"oneplus",
//     model:"11 pro",
//     cost:60000,
//     display:function(){
//         this.mobile1
//         console.log(this.brand+this.model)
//     }

// }


//function constructor//

function mobile1(br,mo){
    this.brand=br
    this.model=mo
    this.display=function(){
        console.log(this.brand+this.model)
    }
}

let km=new mobile1("oneplus","115g")
console.log(km)

let sk=new mobile1("samsung","s8")
console.log(sk)

//console.log(km instanceOf mobile1)
//console.log(sk instanceOf mobile1)

//we need unique display function print same as all constructor avoide this repetation we can use prototype

//Every object has one_proto_===parent.protype

console.log(km.__proto__=== mobile1.prototype)
console.log(sk.__proto__=== mobile1.prototype)

////

let names=["karishma","suhel","maniyar","khan"]
console.log(names)
names.push("sk")
console.log(names)

console.log(names._proto_===Array.prototype)

Array.prototype.hello=function(){
    console.log("hi karishma")
}

names.hello()
//console.log(names instanceOf Array)


////
function Vehicle(cl,ty){0
    this.color=cl
    this.type=ty
    this.country="INDIA"
    this.displayColor=function(){
        console.log(this.color)
    }
}
let maruti=new Vehicle("red","BMW")
console.log(maruti)

let audi=new Vehicle("blue","dd")
console.log(audi)

Vehicle.prototype.country="INDIA"


///setter and getter methods

class PersonB{
    setFirstName(fn){
        this.first_name=fn
    }

    getFirstName(){
        return this.first_name
    }


    setLastName(fn){
        this.last_name=ln
    }
    getLastName(){
        return this.last_name
    }
}

let km1= new PersonB()

console.log(km1)

km1.setFirstName="karishma"
km1.setLastName="khan"

console.log(km1)


console.log(km1.getFirstName())
console.log(km1.getLastName())



// class PersonC{

//     set first_name(fn){
//         this.first_name=fn
//     }

//     get first_name(){
//         return this.first_name
//     }

//     set last_name(fn){

//     this.last_name=ln
// }

// get last_name(){
//     return this.last_name
// }
// }


// let suhelkm=new PersonC()

// suhelkm.first_name="khan"
// suhelkm.last_name="karishma"

// console.log(suhelkm)


//////

class Bank{
    constructor(FullN,bal){
        this.fullName=FullN
        this.bal=bal
        this.transaction=[]

    }
    withdrawl(amt){
        if(this.bal>amt){

        this.bal=this.bal-amt
        this.transaction.push(-amt)
        return this.bal
    }
    else {
        console.log("insuficiant fund")

    }
}

deposit(amt)
{
    this.bal=this.bal+amt
    this.transaction.push(amt)
    return this.bal
}

lastFiveTransaction(){
    return this.transaction.slice(-5)
}
}


let kariF=new Bank("karishma Maniyar")

kariF.deposit(1000)
kariF.deposit(1000)
kariF.deposit(1000)
kariF.deposit(1000)

kariF.deposit(1000)
kariF.withdrawl(100)
kariF.withdrawl(100)
kariF.withdrawl(100)




console.log(kariF.lastFiveTransaction)