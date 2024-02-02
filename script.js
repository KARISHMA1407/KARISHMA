//object literal

class personB {
    constructor(fn,ln,ag,rn){
    this.first_name=fn
    this.last_name=ln
    this.age=ag
    this.roll_n=rn
}
display_name(){
    console.log(this.first_name+this.this.last_name)
}
}

let km=new personB("karishma","maniyar",29,3)
console.log(km)

km.city="pune"
console.log(km)


//set ans get method

// class personC{

//     setAge(){
//         this.age=ag
//     }
//     setRollNo(){
//         this.roll=rn
//     }
//     setfirstName(){
//         this.first=fn
//     }
//     setLastName(){
//         TouchList.last=ln
//     }
//      getAge(){
//         console.log(this.age)
//      }   
//      getRollno(){
//         console.log(this.roll)
//      }
//      getfirstName(){
//         console.log(this.firstName)
//      }
//      getLastName(){
//         console.log(this.last)
//      }
// }

// let sk=new personC()
// console.log(sk)

// sk.setAge(29)
// sk.setRollNo(30)
// sk.setfirstName("karishma")

// sk.setLastName("maniyar")
// console.log(sk)


///set get key word

class PersonD{

    set firstn(fn){
        this.firstname=fn
    }
    get firstn(){
        return this.firstname
    }
    set lastn(ln){
        this.lastname=ln
    }
    get lastn(){
        return this.lastname
    }

}

let ks=new PersonD()

ks.firstname="karishma"
ks.lastname="maniyar"
console.log(ks)





