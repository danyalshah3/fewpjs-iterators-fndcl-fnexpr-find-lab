



  function superbowlWin(record) {
     
    const found = record.find( (element) => 
     element.result === "W" 
         
    
    )
    if (found){
        return found.year
    }
    else 
    return found
    
    }
    
//   function superbowlWin(record){
//    record.find(record.result === "W")
// }


//   console.log(record);