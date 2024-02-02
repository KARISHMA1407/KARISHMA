//switch case without break

//programe 1

let city = "indore"
switch (city){
    case "pune":
    console.log("MH")
    case "indore":
        console.log("MP")
        case "jaipur":
            console.log("RJ")
            case "kanpur":
                console.log("UP")
                default:
                    console.log("wrong city")

}


// programe 2

let city2 ="jaipur"
switch (city2)
{
    case "pune":
        console.log("MH")
        break
        case "indore":
            console.log("MP")
            break
            case "jaipur":
                console.log("RJ")
                break
                case "kanpur":
                    console.log("UP")
                    break
                    default:
                        console.log("incorect city")
                        

}



//program 4
// greatest of three number using switch

let greatest = true
let a = 100
let b = 5000
let c = 50000
switch(greatest)
{
    case a > b && a > c:
        console.log("a is greater")
        break
        case b > a && b > c:
            console.log("b is greater")
            break
            default:
                console.log("c is greater")
                

}
