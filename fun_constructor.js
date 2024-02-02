//function constructor

function person(fn,ln,rn){
    this.first_name= fn
    this.last_name= ln
    this.roll_no =rn
}

let karishma=new person("karishma","maniyar",28)
let suhel= new person("suhel","khan",34)

console.log(karishma)
                          //person { first_name: 'karishma', last_name: 'maniyar', roll_no: 28 }
                          //person { first_name: 'suhel', last_name: 'khan', roll_no: 34 }
console.log(suhel)


//CURD OPERATION
//

//update delete add create

karishma.roll_no=28
karishma.city="mumbai"
delete karishma.last_name

console.log(karishma)

console.log(karishma['roll_no'])

