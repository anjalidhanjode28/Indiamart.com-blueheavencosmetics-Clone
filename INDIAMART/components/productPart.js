let appendprod = (data, container) => {


    
    data.forEach(({img,desc})  =>{
    
    let div = document.createElement("div")

let anch=document.createElement("a")

anch.setAttribute("id","anch")

    let image = document.createElement("img")
    image.src = img
    // console.log(image)
  anch.append(image)


    let title = document.createElement("div")

   

    let anchor = document.createElement("a")
    anchor.innerText = desc

title.append(anchor)
    // console.log(colour_name)


    title.setAttribute("id","producttitle")
   


    div.append(anch, title)

    container.append(div)

})
}


export { appendprod }