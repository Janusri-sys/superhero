const SUPERHERO_TOKEN='1686717685124453'
const BASIC_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroButton=document.getElementById('newHeroButton')
const getSuperHero=(id)=>{
    //fetch('https://superheroapi.com/api.php/1686717685124453/245')
    fetch(`${BASIC_URL}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        console.log(json)
        document.querySelector('body').innerHTML+=`<img src="${json.image.url}" height=200 width=200/>`
    })
    

}
const randomHero=()=>{
    const numberOfHeros=731
    return Math.floor(Math.random()*731)+1


}
newHeroButton.onclick=()=>getSuperHero(randomHero())
//getSuperHero(prompt("enter the super hero ID:"))
//const img=imgURL
//document.querySelector('body').innerHTML+=`<img src="${img}" height=200 width=200/>`