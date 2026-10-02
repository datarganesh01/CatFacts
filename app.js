let URL = "https://catfact.ninja/fact?max_length=140"

let fact = document.querySelector("#fact");
let btn = document.querySelector("#btn");



const getFacts = async () =>{
    console.log("getting data...........");
    let response = await fetch(URL);
    //console.log(response);  //JSON Format

    let data = await response.json();
    fact.innerText = data.fact
 
}

btn.addEventListener("click", getFacts)
