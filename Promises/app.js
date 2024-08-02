// CALL BACK HELL


// function saveToDb(data,success,failure) {
//     let internet = Math.floor(Math.random()*10)+1
//     if (internet<4){
//         failure();
//     }else{
//         success();
//     }
// }
// saveToDb("Nimra Shahid",()=>{
//     console.log("success1: Your 1st data is saved");
//     saveToDb("Hanzla",()=>{
//         console.log("success2: your 2nd data is stored");
//     },()=>{
//         console.log("failure2: Your 2nd data can't store");
//     })
// },()=>{
//     console.log("Failure : Your data did not stored");
// })

// PROMISES 
// IT PREVENT TO CALL BACK HELL FUNCTION


// resolve and reject

// then and catch
function saveToDb(data) {
    return new Promise((resolve,reject)=>{
        let internet = Math.floor(Math.random()*10)+1
        if(internet > 4){
            resolve("success: Your data  was stored")
        }else{
            reject("failure: weak connection!")
        }
    });
}
    saveToDb("Muhammad")
    .then((result)=>{
        console.log("data1 saved");
        console.log("your result is :", result);
        return saveToDb("Hanzla");
    })
    .then((result)=>{
        console.log("data2 was saved");
        console.log("your result is :", result);
        return saveToDb("abdullah");
    })
    .then((result)=>{
        console.log("data3 saved");
        console.log("your result is :", result);
    })
    .catch((error)=>{
        console.log("promise was rejected");
        console.log(error);
    })
// }
// let req = saveToDb("nimra shahid");
// req 
// .then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

saveto