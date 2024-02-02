let a= 20
console.log(typeof a)

let b=[12,13,"karishma"]
console.log(typeof b)

//key and value pair
let student={

    firstName:"Karishma",
    30:"maniyar",
    true:35,
    null:["java","python"],
    family:
    {
        mother:"Sultana",
        Father:"ashraf"
    },
    isMarried:"No"
}

for(let key in student)
{
    console.log(key)
    console.log(typeof (key))
}


//Map()//
//myMap=new Map()

let a1=[]
let myMap=new Map()
console.log(myMap)


//set()

myMap.set({1:a,2:b},"Karishma")
console.log(myMap)



myMap.set(100,40)
console.log(myMap)


myMap.set([1,2,3],"Maniyar")
console.log(myMap)


//get()//


////myMap.get(123)
//console.log(myMap)S

console.log(myMap.get(100))//--40//

console.log(myMap.get(123))//-----undefined

//has()-----boolean
console.log(myMap.has(true))  //---------false
console.log(myMap.has('firstName'))//---------false
console.log(myMap.has(100))//---------true
console.log(myMap.has(40))//---------false

//delete()-----boolean

console.log(myMap.delete(100))//--------true

console.log(myMap.delete(40))//--------false


//clear()
    myMap.clear()
    console.log(myMap)//--------map(0){}

//size==> property
console.log(myMap.size)//=======0

let m2=new Map([[[1,2,3],"marks"],{a:20,b:40}])
console.log(m2)


