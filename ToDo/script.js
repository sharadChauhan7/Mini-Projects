// Tag Selection
let search=document.querySelector(".search input");
let sbtn=document.querySelector(".search button");
let ul=document.querySelector("ul");

// Events
sbtn.addEventListener("click",addTask);
search.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        addTask();
    }
});

// Add Taks
function addTask(event){
    if(search.value!=""){
        let newTask=document.createElement("li");
        newTask.innerHTML=`<input type="checkbox"> <span>${search.value}</span> <i class="fa-solid fa-trash">`
        ul.appendChild(newTask);
        search.value='';
    }
}
// Delete Button
let bin=document.querySelectorAll("ul i");
ul.addEventListener("click",function(event){
    if(event.target.classList.contains("fa-solid")){
        event.target.parentElement.remove();
    }
});

