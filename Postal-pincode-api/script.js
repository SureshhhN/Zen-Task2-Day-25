let url1 = "https://api.postalpincode.in/pincode/"
let url2 = "https://api.postalpincode.in/postoffice/"

async function getdataBypin(){
    let num = document.querySelector(".pin").value
    console.log(num)
    let data = await fetch(`${url1}/${num}`,{method:"GET"})
    let details = await data.json()
    // console.log(details)
    return details
}

async function getdata(){
    let state = document.querySelector(".state").value
    console.log(state)

    let data = await fetch(`${url2}/${state}`,{method:"GET"})
    let details = await data.json()
    // console.log(details)
    return details
}

async function display(key){
    let addressdata =[] 
    try {
    if(key== "pin"){
         addressdata = await getdataBypin()
    }    
    else if(key== "name"){
         addressdata = await getdata()
    }    
    
    let address = addressdata[0].PostOffice

    let displaydata = document.querySelector(".details")
    displaydata.innerHTML =''
    address.map((response)=>{
        // console.log(response.PostOffice[0].Name)
        displaydata.innerHTML+=
        ` <div class="col-12 col-sm-12 col-md-6 offset-md-2 col-lg-6 offset-lg-0 col-xl-3 col-xxl-3 addressdetails">
        <ul class="list-group border border-primary ">
            <li class="list-group-item">Name: ${response.Name}</li>
           
            <li class="list-group-item">BranchType: ${response.BranchType}</li>
            <li class="list-group-item">DeliveryStatus: ${response.DeliveryStatus}</li>
            <li class="list-group-item">Circle: ${response.Circle}</li>
            <li class="list-group-item">District: ${response.District}</li>
            <li class="list-group-item">Division: ${response.Division}</li>
            <li class="list-group-item">Region: ${response.Region}</li>
            <li class="list-group-item">Block: ${response.Block}</li>
            <li class="list-group-item">State: ${response.State}</li>
            <li class="list-group-item">Country: ${response.Country}</li>
            <li class="list-group-item">Pincode: ${response.Pincode}</li>
            </ul>
            </div>`
    })
} catch (error) {
    let displaydata = document.querySelector(".details")
displaydata.innerHTML =`<div class="Nodata">
<h1>Please enter valid Data </h1>
</div>`
}
}