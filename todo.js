var ul = document.getElementById("a")
var ip = document.getElementById("input")
function add() {
    if (ip.value == '') {
        alert("You must write a wish first!");
    }
    else {
        var lia = document.createElement("li")
        lia.textContent = ip.value 
        ul.append(lia);

        let span= document.createElement("span");
        span.innerHTML = "\u00d7"; 
        lia.append(span);
    }
    ip.value = '';
    savedata();
}

ul.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", a.innerHTML);
}
function showtask(){
    a.innerHTML = localStorage.getItem("data");
}
showtask();