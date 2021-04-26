let Active = document.querySelector(".Active_Top")
let ActiveList = document.querySelector(".Active_list")
let Passive = document.querySelector(".FolderTitle")
let PassiveList = document.querySelector(".FolderList")

Active.addEventListener('click', () => {
    if(ActiveList.style.display == "none"){
        ActiveList.style.display = "block";
        document.getElementById("ActiveIndicator").classList.toggle("fa-angle-right");
        document.getElementById("ActiveIndicator").classList.toggle("fa-angle-down");

    }
    else{
        ActiveList.style.display = "none";
        document.getElementById("ActiveIndicator").classList.toggle("fa-angle-right");
        document.getElementById("ActiveIndicator").classList.toggle("fa-angle-down");
    }
})

Passive.addEventListener('click', () => {
    if(PassiveList.style.display == "none"){
        PassiveList.style.display = "block";
        document.getElementById("FolderIndicator").classList.toggle("fa-angle-right")
        document.getElementById("FolderIndicator").classList.toggle("fa-angle-down")
    }
    else{
        PassiveList.style.display = "none";
        document.getElementById("FolderIndicator").classList.toggle("fa-angle-right")
        document.getElementById("FolderIndicator").classList.toggle("fa-angle-down")
    }
})