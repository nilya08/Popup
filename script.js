let btn = document.getElementById("btn");
let ok = document.getElementById("ok");
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

btn.addEventListener("click",()=>{
    openPopup();
})

ok.addEventListener("click",()=>{
    closePopup();
})

