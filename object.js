//object==== key and value
//key and value====property
//CURD
//create/ add
//retrive
//update
//delete


let information={
    first_name:"karishma",
    last_name:"maniyar",
    rolle_no: 39,
    age:28


}

console.log(information)

//create/add

let info1=["karishma","maniyar",39,28]
info1.push("suhel")
console.log(info1)

info1.unshift("suhel")
console.log(info1)

//update
 

info1[0]="khan"
console.log(info1)


//retrive

console.log(info1[3])

//delete

info1.shift()
info1.pop()
console.log(info1)

//dot notation
//bracket notation

let information1={
    first_name:"karishma",
    last_name:"maniyar",
    rolle_no: 39,
    age:28


}

//create /add

information1.city="otur"
console.log(information1)

information1["skill"]="javascript"
console.log(information1)

//update

information1.age=90
console.log(information1)

information1["roll_no"]="70"
console.log(information1)


//retrive/fetch

console.log(information1.age)

console.log(information1["first_name"])

//delete

delete information1.first_name
console.log(information1)

delete information1["last_name"]
console.log(information1)