
function additionA(){
    console.log("Hello world...")
}
function additionB(){
    console.log("Hello world B...")

}

additionA()
additionB()


///2

function additionD(){
    setTimeout(function(){
        console.log("d is called")
    },3000)
}
function additionC(){
    setTimeout(function(){
        console.log("C is called")
    },2000)
}
 additionD()
 additionC()


 //3 //Async
 function getInfo(){
    setTimeout(function(){
        console.log("user created")

    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info by id")
    },1000)
}

//getInfo()





//using call back hell
//async to sync 

function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info by id")
            },1000)
        },2000)
    },3000)

}

getInfo()

//program

// let pro=new Promise(function(resolve,reject){
//     let a=10
//     let b=5
//     if(a==b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
// //consuming the promise

// pro.then(function(str){
//     console.log(str)

// },function(str){
//     console.log(str)
// })


let pro2=new Promise(function(resolve,reject){
    let a=10
    let b=5
    if(a==b){
        resolve([11,22,44,55])
    }
    else{
reject([66,77,88,99])
    }
})

pro2.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[1])
})



///


let pro4=new Promise(function(resolve,reject){
    let a=10
    let b=5
    
    if(a==b){
        resolve("hello")
    }

    else{
        reject("Bye")
    }

})

pro4.then(function(str){
    console.log(str)
    return str+ "suhel"
})

.then(function(str){
    console.log(str)

})
.catch(function(str){
    console.log(str)
})
.finally(function(str){
    console.log("i will be always execute ")
})
