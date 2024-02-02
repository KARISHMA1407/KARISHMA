//string contains the charactr value
//"" , '' , 
//string stores the value in index 0 to ...

// string have objects and methods
//

let city ="nashik"
console.log(city[2])
console.log(city[5])

console.log(city.length)
console.log(city.length-1)

//methods of string

//toUpperCase()

let name="karishma"

let y=name.toUpperCase()

console.log(y)


//toLowerCase()

let class1= "BE Computer"

let z= class1.toLowerCase()

console.log(z)


//indexOF()

let flowers="Red Rose"
let fl1=flowers.indexOf()

console.log(fl1)

let fl2=flowers.indexOf("R")
console.log(fl2)

let fl3=flowers.indexOf("e")
console.log(fl3)

//includes()

let flower="white Lily"

let flr= flower.includes("Lily")

console.log(flr)

//startsWith()

let flower1="white Lily"

let flr2= flower1.startsWith("w")

console.log(flr2)

let flr3= flower1.startsWith("t")

console.log(flr3)

//endsWith()

let flower3="white Lily"

let flr4= flower3.endsWith("y")

console.log(flr4)


//trim()
//removes the spaces from string

let flower4= " karishma "
let flow= flower4.trim("")

console.log(flow)

//trimend()

//removes the end spces from the string

let sk=" manisha "
let sk1= sk.trimEnd("")

console.log(sk1)


//trimstart()
//removes the starting spaces from the string

let ksk=" karishma "
let ks= ksk.trimStart()

console.log(ks)

//slice()

// it making the slice or cut the strings
//left to right indexwise (start,end)

let surname="karishma maniyar"
let name1= surname.slice(1,6)
 console.log(name1)

 let name2= surname.slice(-3,-7)// right to left

 console.log(name2) //print blank 

 let name3= surname.slice(3,-4)c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
 console.log(name3)


 // split()
 // splits all  the string elements 


let myname= "karishma"
let my= myname.split("")
console.log(my)

let my1=myname.split("a") ///its remove or saperation of a from the string 

console.log(my1)  //print ['k', 'rishm', '']





let mark1=[2,6,9,8,9]
for(let i=0;i< mark1.length;i++)
console.log(mark1[i])


let name5="ram sham neha adi"
let y4= name5.split(" ")

console.log(y4)

// charAt()
// its returns the index value of the string

let firstname="Suhel"
 let u= firstname.charAt(1)

 console.log(u)

 let u1= firstname.charAt(5)   // o/p-----> blank string

 console.log(u1)


 //CharCodeAT()
 // its returns the ascii value of the string elements

 let firstname1="Suhel"

 let u3= firstname1.charCodeAt(4) //output ---> 104

 console.log(u3)



 // string interpolation 

 //print--->  my name is karishma maniyar my skill is javascript

 let first_name="Karishma"
 let last_name="Maniyar"
 let skill="javascript"

 //console.log("my name is "+ first_name +" "+ last_name +" My Skill is "+skill) // it returns the lots of space mistake


console.log(`my name is ${first_name} ${last_name} my Skill is ${skill}`)

//program

 let a= 20
 let b=30


 //console.log(a+b)  //its returns the number value only // o/p-->50

 console.log(`${a+b}`) 
 ///its returns the string value// o/p ->50










