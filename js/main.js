
let myspan = document.createElement("span")
let myspantext = document.createElement("i")
myspantext.className = "fas fa-chevron-up"
myspan.appendChild(myspantext)
myspan.style.cssText = "background-color: #19c8fa; color: white; border: none; padding: 12px; position: fixed; bottom: 30px; right: 30px; border-radius: 4px; cursor: pointer; opacity: 0; font-weight: bold; font-family: arial; transition-duration: 0.3s; z-index: 5;"
document.body.appendChild(myspan)


window.onscroll = function () {
    if (window.scrollY >= 1000) {
        myspan.style.opacity = "1"
    }else {
        myspan.style.opacity = "0" 
    }
}

myspan.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior:"smooth",
    })
};

//challenge

let myi = document.querySelector(".toggle-menu");
let myul = document.querySelector("header .container nav ul")
myi.onclick = function () {
        myul.classList.toggle("end")
}

//lis
let mylis = document.querySelectorAll(".my")

mylis.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        mylis.forEach((ele) => {
            ele.parentElement.classList.remove("back")
        })
        e.currentTarget.parentElement.classList.add("back")
    })
})

//shuffle

let portlis = document.querySelectorAll(".portfolio .shuffle li")
let portboxes = document.querySelectorAll(".portfolio .imgs-container .box")

portlis.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        portlis.forEach((ele) => {
            ele.classList.remove("active")
        })
        portboxes.forEach((ele) => {
            ele.style.display = "none"
        })
        e.currentTarget.classList.add("active")
        document.querySelectorAll(e.currentTarget.dataset.cat).forEach((ele) => {
            ele.style.display = "block"
        })
    })
})


//header nav

let headlisa = document.querySelectorAll("header .container nav ul li a")

headlisa.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        headlisa.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})
