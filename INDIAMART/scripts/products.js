
let makeuparr = []
class allproducts {
    constructor(img, d) {
        this.img = img

        this.desc = d

    }

}

class makeupproduct extends allproducts {
    constructor(img, d) {

        super(img, d)


    }

}

let p1 = new makeupproduct("https://3.imimg.com/data3/KH/GI/MY-3904945/foundation-250x250.jpg", "Foundation")

let p2 = new makeupproduct("https://3.imimg.com/data3/YL/EJ/MY-3792183/01-500x500.jpg", "Compact")

let p3 = new makeupproduct("https://3.imimg.com/data3/VL/AM/MY-3792183/pan-cake-500x500.jpg", "Pan Cake Foundation")

let p4 = new makeupproduct("https://3.imimg.com/data3/LX/OI/MY-3792183/pan-stick-500x500.jpg", "Pan Stick Foundation")


makeuparr.push(p1, p2, p3, p4)
console.log(makeuparr)


import { appendprod } from "../components/productPart.js";


let makeup = () => {


    let container = document.getElementById("makeupdata")
    localStorage.setItem("makeup", JSON.stringify(makeuparr))

    appendprod(makeuparr, container)


}

makeup()

 document.getElementById("makeupdata").addEventListener("click",function(){

    localStorage.setItem("makeup",JSON.stringify(makeuparr))
    window.location.href="makeup.html"
     makeup()

 })




let lipstickarr = []


class lipstickproduct extends allproducts {
    constructor(img, d) {

        super(img, d)
    }


}


let l1 = new lipstickproduct("https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg", "Baked Brick Lipstick")


let l2 = new lipstickproduct("https://4.imimg.com/data4/RR/NW/GLADMIN-3792183/1-250x250.jpg", "Cerise Pink Lipstick")


let l3 = new lipstickproduct("https://4.imimg.com/data4/QI/AY/GLADMIN-3792183/2-250x250.jpg", "Coral Red Lipstick")


let l4 = new lipstickproduct("https://4.imimg.com/data4/ED/UH/GLADMIN-3792183/1-250x250.jpg", "Desert Rose Lipstick")


lipstickarr.push(l1, l2, l3, l4)



let lipstick = () => {


    let container = document.getElementById("lipstickdata")
    appendprod(lipstickarr, container)



}

lipstick()

document.getElementById("lipstickdata").addEventListener("click", function () {


    window.location.href = "lipstick.html"
    lipstick()
})





let lipsproductarr = []


class lipsproduct extends allproducts {
    constructor(img, d) {

        super(img, d)
    }


}


let lp1 = new lipsproduct("https://3.imimg.com/data3/RK/XF/MY-3792183/01-500x500.jpg", "Lip Gloss")

let lp2 = new lipsproduct("https://3.imimg.com/data3/DG/QO/MY-3792183/lipstick-500x500.jpg", "Lip Stick")

let lp3 = new lipsproduct("https://3.imimg.com/data3/KE/XS/MY-3792183/lip-liner-500x500.jpg", "Lip Liner")




lipsproductarr.push(lp1, lp2, lp3)




let lipprod = () => {


    let container = document.getElementById("lipsdata")


    appendprod(lipsproductarr, container)



}

lipprod()

document.getElementById("lipsdata").addEventListener("click", function () {

    window.location.href = "lipproduct.html"
    lipprod()
})





let bleacharr = []


class bleachproduct extends allproducts {
    constructor(img, d) {

        super(img, d)
    }


}

let b1 = new bleachproduct("https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-500x500.jpg", "Fruit Bleach")


let b2 = new bleachproduct("https://3.imimg.com/data3/GE/KN/MY-3792183/gold-bleach-500x500.jpg", "Gold Bleach")


let b3 = new bleachproduct("https://3.imimg.com/data3/PO/CT/MY-3792183/personal-bleach-500x500.jpg", "Personal Bleach")



bleacharr.push(b1, b2, b3)



let bleachprod = () => {


    let container = document.getElementById("bleachdata")
    appendprod(bleacharr, container)



}

bleachprod()

document.getElementById("bleachdata").addEventListener("click", function () {

    window.location.href = "bleach.html"
    bleachprod()
})




let scrubarr = []


class scrubproduct extends allproducts {
    constructor(img, d) {

        super(img, d)
    }


}


let s1 = new scrubproduct("https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-500x500.jpg", "Fairness Scrub")

let s2 = new scrubproduct("https://3.imimg.com/data3/UL/IY/MY-3792183/mix-fruit-scrub-500x500.jpg", "Mix Fruit Scrub")

let s3 = new scrubproduct("https://3.imimg.com/data3/GR/XE/MY-3792183/facial-scrub-walnut-apricot-500x500.jpg", "Facial Scrub - Walnut & Apricot")

let s4 = new scrubproduct("", "")

scrubarr.push(s1, s2, s3)




let scrubprod = () => {


    let container = document.getElementById("scrubdata")
    appendprod(scrubarr, container)



}

scrubprod()

document.getElementById("scrubdata").addEventListener("click", function () {

    window.location.href = "scrubs.html"
    scrubprod()
})



let eyearr = []


class eyeproduct extends allproducts {
    constructor(img, d) {

        super(img, d)
    }


}

let e1 = new eyeproduct("https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg", "Mascara")

let e2 = new eyeproduct("https://3.imimg.com/data3/FX/IN/MY-3792183/eye-shadow-500x500.jpg", "Eye Shadow")




eyearr.push(e1, e2)




let eyeprod = () => {


    let container = document.getElementById("eyedata")
    appendprod(eyearr, container)



}

eyeprod()


let lipcarearr = []


class lipcareproduct extends allproducts {
    constructor(img, d) {

        super(img, d)
    }


}


let lc1 = new lipcareproduct("https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-500x500.jpg", "Lip Balm")

let lc2 = new lipcareproduct("https://3.imimg.com/data3/EJ/OU/MY-3792183/lip-gaurd-500x500.jpg", "Lip Gaurd")


lipcarearr.push(lc1, lc2)


let lipcareprod = () => {


    let container = document.getElementById("lipcaredata")
    appendprod(lipcarearr, container)



}

lipcareprod()


import { navbar , footer  } from "../components/allPart.js";
// console.log(navbar)
document.querySelector('#home-nav').innerHTML = navbar();

document.querySelector('#home-footer').innerHTML = footer();




