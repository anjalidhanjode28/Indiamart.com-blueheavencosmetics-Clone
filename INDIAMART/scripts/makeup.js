import { navbar , footer  } from "../components/allPart.js";
// console.log(navbar)
document.querySelector('#home-nav').innerHTML = navbar();

document.querySelector('#home-footer').innerHTML = footer();



var show = document.getElementById("cp_containerdiv-1");
    var show8 = document.querySelector("#cp_containerdiv-2");
    var hideitem1 = document.querySelector("#item1");
    var hideitem2 = document.querySelector("#item2");
    var hideitem3 = document.querySelector("#item3");
    var hideitem4 = document.querySelector("#itme4");


// get the button which will open the box
document.querySelector(".yesbutton").addEventListener("click", function(){
    show.style.display = "block";
    hideitem1.style.display = "none";
    console.log(1)
});


document.querySelector(".yesbutton1").addEventListener("click",function(){
    show8.style.display = "block";
    hideitem2.style.display = "none";
    console.log(3);
})

document.querySelector(".yesbutton2").addEventListener("click",function(){
    show.style.display = "block";
    hideitem3.style.display = "none";
    console.log(2);
})


document.querySelector(".yesbutton3").addEventListener("click",function(){
    show.style.display = "block";
    hideitem4.style.display = "none";
    console.log(4);
})


// btn.onclick = function() {
//     show.style.display = "block";
//     console.log(1)

// }

var span1 = document.querySelector(".cp_cross");

span1.onclick = function() {
    show.style.display = "none";
    // hideitem1.style.display = "";
    console.log(1)
}

var btn2 = document.querySelector("#cp_next-2").addEventListener("click", function(){
    show8.style.display = "none";
    show1.style.display ="block";
    console.log(91)
})








var show1 = document.querySelector("#cp_submitted-1");

var btn1 = document.getElementById("cp_next-1");

btn1.onclick = function(){
    show1.style.display= "block";
    show.style.display = "none";
}


var span2 = document.querySelector(".cp_cross-1");

span2.onclick = function(){
    // show1.style.display = "none";
    window.location.href = "index.html";
    console.log(8)

}