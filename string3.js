let city="rampur"
let a1= city.toUpperCase("")
console.log(a1)

let a2=city.includes('r')
console.log(a2)

let a3=city.indexOf('m')
console.log(a3)

let a4=city.indexOf('a')
console.log(a4)

let a5=city.indexOf('pur')
console.log(a5)

console.log(city.slice(0,4))

console.log(city.split(""))

let a6= city.charAt(3)
console.log(a6)

let a7 =city.charCodeAt("r")
console.log(a7)

//replace()

let char1= "i am learning javascript and I love programming "

let ch=char1.replace("javascript","python")
console.log(ch)


//replaceAll()

let ch1=char1.replaceAll("javascript","python")
console.log(ch1)

//padStart()


let str= '90'
let m= str.padStart(6,"I")
console.log(m)


//padEnd()

let n=str.padEnd(6,"I")
console.log(n)

