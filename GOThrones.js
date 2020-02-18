fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
.then((response)=>{
    return response.json();
})
.then((characters)=>{
    var i;
for (i = 0; i < characters.length; i++) {
    console.log(characters[i]);
    let ul = document.getElementsByTagName("ul")
    var li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = characters[i].name 
    a.href = characters[i].url
    li.appendChild(a); 
    ul[0].appendChild(li); //since its being added (appended) stuff isnt erased
    

}
})



