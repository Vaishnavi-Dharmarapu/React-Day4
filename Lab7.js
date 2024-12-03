const api_url = "https://randomuser.me/api/?results=3";
fetch (api_url)
.then (response => response.json())
.then (data=>{
    const userDetails = data.results.map(user =>{
        return {
            usename:user.login.username,
            date:user.dob.date,
            city:user.location.city
        };
    });
    console.log(userDetails);
})
.catch(error=>{
    console.error('Error fetching data:',error);
});