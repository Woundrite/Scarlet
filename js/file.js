// let EditorWindowParentOnClick = (ID) => {
//     for(i in EditorWindows){
//         i.classList.toggle("hideEditor", true)
//         if(i.classList.contains(ID)){
//             i.classList.toggle("hideEditor", false)
//         }
//     }
// }
// let AddEditortab = (FileName, ID) => {
//     let temp = document.querySelector("#editor_tag");
//     temp = temp.content.querySelector("div");
//     temp = document.importNode(temp, true);
//     temp.classList.add(ID)
//     temp.onclick = EditorWindowParentOnClick(ID.replace("Parent", ""))
//     temp.innerText = FileName;
//     TABS.appendChild(temp);
// }

function openFile(FileSet){
    let reader = new FileReader();

    reader.readAsText(FileSet.files[0]);


    reader.onload = function() {
        console.log(((FileSet.files[0].name.split(".")[FileSet.files[0].name.split(".").length - 1].toUpperCase() in Extensions) ? Extensions[FileSet.files[0].name.split(".")[FileSet.files[0].name.split(".").length - 1].toUpperCase()]: "plain" ))
        monaco.editor.setModelLanguage(Editor.getModel(), ((FileSet.files[0].name.split(".")[FileSet.files[0].name.split(".").length - 1].toUpperCase() in Extensions) ? Extensions[FileSet.files[0].name.split(".")[FileSet.files[0].name.split(".").length - 1].toUpperCase()]: "plain" ))
        Editor.setValue(reader.result);
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}