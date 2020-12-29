let Active = document.querySelector(".Active_Top")
let ActiveList = document.querySelector(".Active_list")
let Passive = document.querySelector(".FolderTitle")
let PassiveList = document.querySelector(".FolderList")

Active.addEventListener('click', () => {
    if(ActiveList.style.display == "none"){
        ActiveList.style.display = "block"
    }
    else{
        ActiveList.style.display = "none";
    }
})

Passive.addEventListener('click', () => {
    if(PassiveList.style.display == "none"){
        PassiveList.style.display = "block"
    }
    else{
        PassiveList.style.display = "none";
    }
})