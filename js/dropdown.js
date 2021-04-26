drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
};

File_item.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    File_drop.style.display = "block";
  }, 100);
};

Edit_item.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    Edit_drop.style.display = "block";
  }, 100);
};

Preferences_item.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    Preferences_drop.style.display = "block";
  }, 100);
};

Terminal_item.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    Terminal_drop.style.display = "block";
  }, 100);
};

Help_item.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    Help_drop.style.display = "block";
  }, 100);
};


File_btn.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  File_drop.style.display = "none";
};

Edit_btn.onclick = () => {
  Edit_drop.style.display = "none";
  menu_bar.style.marginLeft = "0px";
};

Preferences_btn.onclick = () => {
  Preferences_drop.style.display = "none";
  menu_bar.style.marginLeft = "0px";
};

Terminal_btn.onclick = () => {
  Terminal_drop.style.display = "none";
  menu_bar.style.marginLeft = "0px";
};

Help_btn.onclick = () => {
  Help_drop.style.display = "none";
  menu_bar.style.marginLeft = "0px";
};

File_Open.onclick = () => {
  ROFile.click();
  openFile(ROFile.value)
}