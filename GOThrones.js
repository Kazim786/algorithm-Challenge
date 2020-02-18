fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
.then((response)=>{
    return response.json();
})
.then((characters)=>{
    console.log(characters)
})