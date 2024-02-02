let myset=new Set()
console.log(myset)   //Set(0) {}

//add()

let a1={a:10, b:20}
myset.add(a1)///////////direct not added ///declaration need

myset.add(1)
myset.add("mayuri")

myset.add(1)
console.log(myset)


//has()  //////return Boolean

console.log(myset.has(1))

console.log(myset.has(a1))


console.log(myset.has("true"))

///forEach()

myset.forEach(function(key){
    console.log(key)
})


let myset1=new Set([1,2,44,55,66,77,"true",false,null])

myset1.forEach(function(a1){
    console.log(a1)
})

//keys()

console.log(myset1.keys())////////[Set Iterator] { 1, 2, 44, 55, 66, 77, 'true', false, null }

for(let d1 of myset1.keys()){
    console.log(d1)
}


//value()

console.log(myset1.values())//////[Set Iterator] { 1, 2, 44, 55, 66, 77, 'true', false, null }
for(let d1 of myset1.values()){
    console.log(d1)
}


//entries()  //[1,1]//[key,value]

console.log(myset1.entries())

for(let d1 of myset1.entries()){
    console.log(d1)             //////return [key,value] pair
}

///size property

console.log(myset1.size)

///set have only unique value

let arr=[11,22,33,44,55,66,33,44]

let setarr=new Set(arr)
console.log(setarr)      //////////////Set(6) { 11, 22, 33, 44, 55, 66 }///its not set duplicate vslues //uniq value only

console.log((Array.from(setarr)))