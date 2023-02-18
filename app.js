//mountain tile is default
let currentTile = `<img src="assets/mountain.png"/>`
let tileId

const addTile = (evt) =>
{
    let x = evt.target.id
    
    if(tileId === "remove")
    {
        if(evt.target.localName === "img")
        {
            let image = evt.target
            image.parentNode.removeChild(image)
        }
    }
    else
    {
        document.getElementById(x).innerHTML = currentTile
    }
}

const changeTile = (evt) =>
{
    if (evt.target.localName === "img")
    {
        o = document.querySelector(".cTile")
        o.classList.remove("cTile")
        o.classList.add("oTile")
        evt.target.classList.add("cTile")
        tileId = evt.target.id
    
        if(tileId !== "remove")
        {
          currentTile = `<img src="assets/${tileId}.png"/>`
        }
    }
}

const newMap = (evt) =>
{
    let rst = document.querySelectorAll(".tile")
    for(let i = 0; i < rst.length ; i++)
    {
        rst[i].innerHTML = ``
    }
}

document.querySelector(".map").addEventListener("click", addTile)
document.querySelector(".mTile").addEventListener("click", changeTile)
document.querySelector("button").addEventListener("click", newMap)