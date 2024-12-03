let fetchData = new Promise((resolve,reject)=> {
    let dataAvailable = false;
    if(dataAvailable){
        resolve("data feteched successfully")
    }else{
        reject("data not found")
    }
})
fetchData.then ((msg)=>{
    console.log("success",msg);
})
.catch((error)=> console.log("ERROR:",error))
