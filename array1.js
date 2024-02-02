//map()


let marks=[67,56,89,89,60,20,69,45,38]
let mk= marks.map(function(ele,index,array){
    return ele + 2
})
    
console.log(mk)


 //reduce()
 //sum af all array elements

 let num=[2,3,5,7,9,6]
 
  let arr= num.reduce(function(acc,ele,index,arr){ 
   
   return acc + ele
 } ,0 )  


 console.log(arr)


 //forEach()

 // print with every arry 

 let stud=["karishma","vaibhav","kavya","lalita","yogesh"]
         stud.forEach(function(ele,index,array)
 {
    console.log("welcome "+ ele +" !!")
 })


 //some(
    
 //find  persents number in array 
 //boolean value--------true or false

 let number=[34,56,78,98,57]
 let num1=number.some(function(ele,index,array){
    return ele>50
 })
 console.log(num1)

 //every()

 //execute afunction for each arry element
 //-----------it returns boolean value (true / false)


 let score=[45,28,25,37,89,70]
 let y=  score.every(function(ele,index,array){
   return ele>40
 })


 //filter()
 //it returns the array value
 //it filter a specific (only one)
  let x= score.filter(function(ele,index,array){
         
   return ele>70
  })

  console.log(x)


  //find()
  //its find the elements of array(only one time loop searching n one value comes ...)

  let zx=score.find(function(ele,index,array){

     return ele>20
  })
  console.log(zx)


  //findIndex()
  //its find the array elements with thier index

  let mark=[28,89,76,49,56]
  let mrk= mark.findIndex(function(ele,index,arry){
          
   return ele>70
  })

  console.log(mrk)
         

// slice()
// arrayname=arrayname.slice(start position,endposition)
//endposition optional
//end position always less than 1
//left to right
//right to left blank array

let array=[56,78,49,90,39,27]
let arr1= array.slice(0,4)
console.log(arr1)

let arr2=array.slice(-4)
console.log(arr2)

let arr3= array.slice(-3,3)
console.log(arr3)