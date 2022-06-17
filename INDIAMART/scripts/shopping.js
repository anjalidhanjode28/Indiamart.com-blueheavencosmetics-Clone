import { navbar , footer  } from "../components/allPart.js";
// console.log(navbar)
document.querySelector('#home-nav').innerHTML = navbar();

document.querySelector('#home-footer').innerHTML = footer();

let timerId;
let head = document.getElementById("shopping");
let container = document.createElement("div")
container.setAttribute("id", "prod")

const searchProd = async () => {
    try {
        let input =document.querySelector("#searchbar").value;
        let res = await fetch(
            `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${q}`
        );
        let data = await res.json();

        let arr = data;
         console.log(arr)
         return arr;
    } catch (err) {
        console.log("err :", err);
    }
 };

 const appendProd = (data) => {
    container.innerHTML = null;
    if(data === undefined) {
        return false;

    }
    data.forEach((el) => {
        let p = document.createElement("p");
        p.innerText = el.name;

        let img = document.createElement(img);
        img.src = el.image_link;

        container.append(img,p)
        head.append(container);
    });
 }

 const main = async() => {
    let deta = await searchProd();
    if(deta === undefined) {
        return false;
    }
    console.log("deta", deta);

    appendProd(deta);
 };

 const debounce = (func, delay) => {
    if(timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
        func();

    }, delay);
 };


