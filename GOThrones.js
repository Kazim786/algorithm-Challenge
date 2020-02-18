fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
.then((response)=>{
    return response.json();
})
.then((characters)=>{
    var i;
for (i = 0; i < characters.length; i++) {
    console.log(characters[i]);
    let body = document.getElementsByTagName("ul")
    var names = document.createElement("li");
    names.innerHTML = characters[i].name
    body[0].appendChild(names);


}
})



