// java script object notation
// data is stotred in Key & value 
var jsonObj = {
    fname: "Sumit",
    'lname': "Raokhande",
    id: 9,
    country: {
        cid: 1,
        cname: "India"
    },
    month: ["Jan", "Feb", "March"]
};
//  1 dot perator 
//  2 square operator
//  1 dot perator 
//  console.log(`
//         First Name  :: ${jsonObj.fname}
//         Last name   :: ${jsonObj.lname}
//         ID          :: ${jsonObj.id}
//  `)   
//  2 square operator
console.log("\n        First Name  :: ".concat(jsonObj["fname"], "\n        Last name   :: ").concat(jsonObj["lname"], "\n        ID          :: ").concat(jsonObj["id"], "\n        Country Name:: ").concat(jsonObj.country.cname, "\n        Month       :: ").concat(jsonObj.month.join(" "), "\n "));
