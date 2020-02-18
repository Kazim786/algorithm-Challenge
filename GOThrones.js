fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
.then((response)=>{
    return response.json();
})
.then((characters)=>{
    var i;
for (i = 0; i < characters.length; i++) {
    console.log(characters[i]);
    characters[i].alliegances; //adding the house key/value within object
    let home = document.createElement('a')

    let button = document.createElement("button");
    button.innerHTML = "home"
    button.setAttribute('dataHouseUrl', characters[i].allegiances[0])
    button.addEventListener("click", (event)=>{
        
        console.log(event.target.getAttribute('dataHouseUrl'))
        fetch(event.target.getAttribute("dataHouseUrl"))
        .then((response) => response.json())
        .then((jsonObj)=>{
            console.log(jsonObj);
        } )
    })
    let ul = document.getElementsByTagName("ul")
    var li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = characters[i].name 
    a.href = characters[i].url
    li.appendChild(a); 
    li.appendChild(button); //this isnt an array so you dont leave brackets.
    ul[0].appendChild(li); //since its being added (appended) stuff isnt erased
    
    

}
})



