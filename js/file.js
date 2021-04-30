let AddEditortab = (FileName, FilePath) => {
	let temp = document.querySelector("#editor_tag");
	temp = temp.content.querySelector("div");
	temp.classList.add("EditorHeader")
	temp = document.importNode(temp, true);
	temp.dataset.fileset = FilePath
	temp.innerText = FileName;
	TABS.appendChild(temp);
}

let openFile = (FileSet) => {
	if(typeof FileSet != "string"){
		let reader = new FileReader();

		reader.readAsText(FileSet.files[0]);

		reader.onload = () => {
			monaco.editor.setModelLanguage(Editor.getModel(), ((FileSet.files[0].name.split(".")[FileSet.files[0].name.split(".").length - 1].toUpperCase() in Extensions) ? Extensions[FileSet.files[0].name.split(".")[FileSet.files[0].name.split(".").length - 1].toUpperCase()]: "plain" ))
			Editor.setValue(reader.result);
			StatsBar.innerText = Editor.getModel().getLanguageIdentifier().language.toUpperCase()
			AddEditortab(FileSet.files[0].name, FileSet.files[0].path)
		};

		reader.onerror = () => {
			console.log(reader.error);
		};
	}
}