let vehicle= 

{
    model:"bmw",
    color:'White',
    reg_no: 456

}
console.log(vehicle.color)
console.log(vehicle["color"])

vehicle.color="blue"
vehicle.reg_no= 879
vehicle.model="creta"

console.log(vehicle)

//for of

let car={
    car_name:"BMW",
    car_model:2022,
    car_color:"white",
    car_no:7979,
    city:"mumbai"
}


for(let key of Object.keys(car)){
    console.log(key)

}
//

for(let value of Object.val(car)){
    console.log(value)
}