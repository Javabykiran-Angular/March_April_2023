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

//Array Of Object

let arrobj=[
    {
        fname:"Sumit",
        'lname':"Raokhande",
        id:9,
        country:{
            cid:1,
            cname:"India"
        },
        month:["Jan","Feb","March"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:50
            }
        ]
    },
    {
        fname:"Kiran",
        'lname':"Raokhande",
        id:6,
        country:{
            cid:2,
            cname:"US"
        },
        month:["April","Aug","Oct"],
        result:[
            {
                subj:"M1",
                marks:45
            },
            {
                subj:"M2",
                marks:50
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        fname:"Spruha",
        'lname':"Raokhande",
        id:3,
        country:{
            cid:3,
            cname:"Japan"
        },
        month:["Feb","July","Sept"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:80
            }
        ]
    }
];

// console.log(`

//     First Name  :: ${arrobj[1].fname}
//     Last Name  :: ${arrobj[1].lname}
//     ID         :: ${arrobj[1].id}

// `);

for(let i=0;i<arrobj.length;i++){
    
    console.log(`
    First Name   :: ${arrobj[i].fname}
    Last Name    :: ${arrobj[i].lname}
    ID           :: ${arrobj[i].id}
    Country Name :: ${arrobj[i].country.cname}
    Month        :: ${arrobj[i].month.join(" ")}
    ----------Result--------------`);

// for(let j=0;j<arrobj[i].result.length;j++){

//     console.log(`
//             Subject   :: ${arrobj[i].result[j].subj}
//             Marks     :: ${arrobj[i].result[j].marks}
//     `)
// }

arrobj[i].result.forEach((item)=>{
    console.log(`
            Subject ::${item.subj}
            Marks   ::${item.marks} 
    `);
    
})



}






