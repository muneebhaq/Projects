function getData(event){

    let borough = event.target.id;
    console.log(borough);

    let complaintsSet = document.getElementById("input").value;
    console.log(complaintsSet);

    if(complaintsSet===""){
        complaintsSet = 10;
    }
let agency = "NYPD"

fetch(api)("https://data.cityofnewyork.us/resource/erm2-nwe9.json?"
+"agency="
+agency
+ "&borough="
+borough
+ "&$complaintsSet="
+ complaintsSet)

.then((data) => {
    return data.json();
    }).then((formattedData)=>{
        console.log(formattedData);
        displayData(formattedData)
    })
.catch((error) => console.log(error))
}

function displayData (data){
    

    for(let i = 0; i< data.length; i++){

        document.getElementById("div1").innerHTML = ""
        document.getElementById("div2").innerHTML = ""
        
        document.getElementById("div1").innerHTML += "<p>"+data[i].descriptor+"</p>"
        document.getElementById("div2").innerHTML += "<details> <summary> POLICE RESPONSE </summary>"+data[i].resolution_description+"</details>"
        }; 
    }
