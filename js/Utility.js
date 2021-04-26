function UtilityInit(){
	let parent = document.getElementById('Utility');
	let json = require('./Preferences.json').UtilityTabs;
	let UtilityTabsList = []
	let intermediate = []
	let namelist = []

	const iterate = (obj) => {
	    Object.keys(obj).forEach(key => {

	    if (typeof obj[key] === 'object') {
	    		namelist.push(key)
	            iterate(obj[key])
	        }
	        else{
	        	intermediate.push(obj[key])
	    	}
	    })
	}

	iterate(json)

	for(i=0; i<=intermediate.length-2; i+=2){
		UtilityTabsList.push([intermediate[i], intermediate[i+1]])
	}

	parent.style.display = "grid";
	parent.style.gridTemplateRows = "";

	for(i in UtilityTabsList){
		parent.appendChild(AddUtilitytab(UtilityTabsList[i][0].split(".com")[0].split("www.")[1].toUpperCase(), UtilityTabsList[i][1], UtilityTabsList[i][0]));
		parent.style.gridTemplateRows = parent.style.gridTemplateRows + "fr";
	}
}

function AddUtilitytab(name, link, Icon){
	let tab = document.createElement('div');

	tab.classList.add('tabhint')


	tab.style.borderRadius = "10px";
	tab.style.height = "5vh";
	tab.style.width = "5vw";
	tab.style.padding = "7px";
	tab.style.backgroundColor = "#191919";
	tab.style.backgroundImage = `url(' ${link} ')`;
	tab.style.backgroundSize = "4vh 4vh";
	tab.style.backgroundPosition = "center";
	tab.style.backgroundRepeat = "no-repeat";

	let tabhinttext = document.createElement('span')
	tabhinttext.classList.add('tabhinttext')
	tabhinttext.innerText = name
	tab.appendChild(tabhinttext)

	tab.appendChild(CreateIFrame(name, Icon))

	tab.addEventListener('click', () => {
		document.getElementById(name).classList.toggle("frameDisplay")
	})

	CreateIFrame(link)

	return tab
}

function CreateIFrame(name="", link=""){
	let frame = document.createElement('webview');
	frame.src = link;
	frame.id = name;

	frame.classList.add('frame');
	frame.classList.append ="frameDisplay";
	frame.classList.toggle("frameDisplay");

	return frame
}

