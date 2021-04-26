function CreateTulip(ParentElement){
	CreateCssLink("Tulip-Editor/Styles/Base.css")
	CreateJsLink("Tulip-Editor/js/behave.js")
	CreateJsLink("Tulip-Editor/js/script.js")

	let container = CreateElement("div", ["Tulip-Container", "Tulip-Part"])
	ParentElement.appendChild(container)

	let LineDiv = CreateElement("div", ["LineNumber", "Tulip-Part"])
	container.appendChild(LineDiv)

	LineDiv.appendChild(CreateElement("span"))

	let TextArea = CreateElement("textarea", ["Tulip-Part"], "Tulip-Editor")
	container.appendChild(TextArea)

	LineDiv.childNodes[0].innerText = "1"
}
function CreateCssLink(path){
	let file = path
	let link = document.createElement( "link" );
	link.href = file.substr( 0, file.lastIndexOf( "." ) ) + ".css";
	link.type = "text/css";
	link.rel = "stylesheet";

	document.getElementsByTagName( "head" )[0].appendChild( link );
}

function CreateJsLink(path){
	let file = path
	let script = document.createElement( "script" );
	script.src = file.substr( 0, file.lastIndexOf( "." ) ) + ".js";
	script.type = "text/javascript";

	document.getElementsByTagName( "head" )[0].appendChild( script );
}

function CreateElement(element_type = "div", class_List = [], id=""){
	let item = document.createElement(element_type)
	class_List.forEach((classname)=>{
		item.classList.add(classname.toString())
	})
	item.id = id
	return item
}