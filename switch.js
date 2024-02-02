//when we can run multiple statement use switch cases

// 1-7
//monday
//tuesday
//....n

//switch case without break

let day = 4
switch(day){
    case 1:
        console.log("monday")
        case 2:
            console.log("tuesday")
            case 3:
                console.log("wednsday")
                case 4:
                    console.log("thursday")
                    case 5:
                        console.log("friday")
                        case 6:
                            console.log("satrday")
                            case 7:
                                console.log("sunday")
                        
}


//switch case with break statements
 
 let w_day = 3
 switch(w_day){
     case 1:
         console.log("monday")
         break
         case 2:
             console.log("tuesday")
             break
             case 3:
                 console.log("wednsday")
                 break
                 case 4:
                     console.log("thursday")
                     break
                     case 5:
                         console.log("friday")
                         break
                         case 6:
                             console.log("satrday")
                             break
                             case 7:
                                 console.log("sunday")
                                 break
                         
 }
 

 //switch case with default
  
 let week =0 
 switch(week)
 {
    case 1:
         console.log("monday")
         break
         case 2:
             console.log("tuesday")
             break
             case 3:
                 console.log("wednsday")
                 break
                 case 4:
                     console.log("thursday")
                     break
                     case 5:
                         console.log("friday")
                         break
                         case 6:
                             console.log("satrday")
                             break
                             case 7:
                                 console.log("sunday")
                                 break
                            default :
                            console.log("correct right day")
                         
 }

 //state

 let city = "indore"
 switch(city)
 {
    case "pune" :
        case "mumbai" :
            case "dhule" :
                console.log("MH")
                break
                case "ujjain":
                case "indore":
                console.log("MP")
                break
                default :
                console.log("incorrect statement")
 }

 //
