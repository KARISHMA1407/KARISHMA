let birthyear=[1992,1995,1978,1969, 1970]
let age=[]

for(i=0; i<4 ; i++)  

//i<4 mean i<birthday.lenght

{
   // console.log(i)
   // console.log(birthyear[i])
    let x=2023-birthyear[i]
    age.push(x)
}
console.log(age)

//program 2

let marks=[60,57,98,45,78,90,56,34,89]
let above60=[]
 
for(i=0 ;i<marks.length; i++)
{
    console.log(i)
    console.log(marks[i])
    if(marks[i]>60){
        above60.push(marks[i])
            
        }
        
    }
      console.log(above60)


      //program 3


      let sum1=[11,23,45,56,78]
      let total=0

      for(i=0 ; i<sum1.length; i++)
      {
        console.log(i)
        console.log(sum1[i])

        total=total+(sum1[i])
      }
       console.log(total)


        //program

     let cities = ["mumbai" , "pune","chennai","thane","ratnagiri"]
     
       for(i=0; i<cities.length ; i++)  
       {
        //console.log(i)
        //console.log(cities[i])
       console.log("welcome_" +cities[i]) 
       }
       