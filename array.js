//object ... properties and methods
//console.log(numbers.length)
//console.log(numbers.lenght-1)//always last number


//program 1

let name= ["karishma", "suhel", "muji", "mom"] 
{
    console.log(name.length)
}

//program 2

let num =[ 11,22 ,33 ,44 ,55]
for(let i=0 ; i< num.length ; i++)
{
    console.log(num[i])
    console.log(i)
}

//program 3

let km=["mango", "apple","lemon","pineapple"]
for(let i= 0 ; i<km.length ; i++)
    {
        console.log(i)
        console.log(km[i])
    }



    //program 3
    // reverse order
    

    let cities=["pune","mumbai","nashik"]
    for(let i=cities.length-1 ; i>=0 ;i--)

    {
        console.log(i)
        console.log(cities[i])
    }

    //progtram 4

    let class1=["10th", "11th","12th","13th","14th", "15th"]
    for(let i= 1 ; i<=class1.length ; i++)
    {
        console.log(i)
        console.log(class1[i])
    }


    //array have objects
    //objects contain ------properties and methods

    // push() method----------new lenght


    let fruits=["Apple", "papaya","chiku", "pineapple"]
    let q1= fruits.push("mango")
    console.log(q1)
    console.log(fruits)

    //unshift() add new elements at starting ----------new length

    let v=["karishma","jabin","nasrin","jasmin"]
    let v1= v.unshift("mujammil")
    console.log(v)
    console.log(v1)


    //pop() remove element from last -------------return element


    let flowers=["lily","jasmine","rose","lotus"]
    let f=flowers.pop()
    console.log(flowers)
    console.log(f)


    // shift() remove starting elements from arry----------return elements

    let boys= ["kabir","ganesh","sahil","jayed"]
    let bro= boys.shift()
    console.log(boys)
    console.log(bro)

    // includes() ------------its comes boolean ---true or false

    let variable=["bag","fan","watch","comb","belt"]
    let vari=variable.includes("belt")
    console.log(variable)
    console.log(vari)


    //indexof()-----it indicates the location of value

    let number=[1123,1111,234,5678,]
    let num1= number.indexOf(1123)
    console.log(number)
    console.log(num1)

    //at() ..............it indicates the loactiom of value

    let marks=[ 50, 70, 80, 92, 100]
    let mar= marks.at(1)
    console.log(marks)
    console.log(mar)

    //reverse().........it indicates revers value of ARRAY

    let vegitables=["bringer","tomato","spinach","mutter"]
    let vegis= vegitables.reverse()
    console.log(vegitables)
    console.log(vegis)

    //join()..........it adds the symbols between array

     let information=["karishma"," maniyar", "7385861433"]
     let info= information.join("_")
    

     console.log(info)

     //concat)

     let array=[1,2,3,4,5,6]
     let array1=[7,8,9,0]
     let array2= array.concat(array1)
     console.log(array2)

     //flat()-----------it give multidimenstional array to single dimenstional arry

     let arr=[ [11,22,33,44] ,[23,45,46,77],[9,78,6,4,45]]
     let arr1=arr.flat()
     console.log(arr1)

     //indexof()-----it gives araay of arrays elements

     let arra= [ [11,22,33,44] ,[23,45,46,77],[9,78,6,4,45]]
     let arr0= arra.indexOf()
     console.log(arr[2][0])

     //program2


     let array3 =[2,56,76,89,9,56]
     let v9=array3.indexOf(89)
     console.log(v9)

    
      //splice() 
       let animal=["tiger","bear","lion","camel","rabbit"]

       //animal.splice(index,numberof eachelementto be deleted,rep1,rep2)


      animal.splice(2,3,"cat")
      console.log(animal)

