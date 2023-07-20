// java script object notation
// data is stotred in Key & value 

let jsonObj={
    fname:"Sumit",
    'lname':"Raokhande",
    id:9,
    country:{
        cid:1,
        cname:"India"
    },
    month:["Jan","Feb","March"]
}

//  1 dot perator 
//  2 square operator
 //  1 dot perator 
//  console.log(`
//         First Name  :: ${jsonObj.fname}
//         Last name   :: ${jsonObj.lname}
//         ID          :: ${jsonObj.id}
//  `)   

 //  2 square operator

 console.log(`
        First Name  :: ${jsonObj["fname"]}
        Last name   :: ${jsonObj["lname"]}
        ID          :: ${jsonObj["id"]}
        Country Name:: ${jsonObj.country.cname}
        Month       :: ${jsonObj.month.join(" ")}
 `)  
