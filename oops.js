//same class ,same method,diff signature



class Calculator{

    // addition(x,y){
    //     console.log(x+y)
    // }
    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    // addition(x,y,z,a){

    // console.log(x+y+z+a)
    // }


addition(x,y,z,a){
    if(x != undefined && y!=undefined && z!=undefined && a!=undefined){
        console.log(x+y+z+a)
    }
    if(x != undefined && y!=undefined && z!=undefined){
        console.log(x+y+z)
    }
    if(x != undefined && y!=undefined){
        console.log(x+y)
    }
}

}
let a=new Calculator()
a.addition(12,3)
a.addition(12,3,3)
a.addition(12,3,3,4)



//

class Bank{
    save(){
        console.log("I am save from Bank")

    }
    loan()
    {
        console.log("i am loan from Bank")
    }
}

class SBI extends Bank{

    loan(){
        console.log("I am from SBI")
    }
    save(){
        console.log("I am loan from SBI")
    }
} 

let Pune= new SBI()

Pune.save()
Pune.loan()

