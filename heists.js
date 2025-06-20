//test if headers need to be regen'd
//test if parent needs to be wiped, or just random box
//double check json files for mistakes (german stealth)

let lang = navigator.language.substring(0,2);
let oldNumber = -1;
let heists = [
	{
		"name": "Pick a new heist",
		"levelSet": "",
		"gameplayStyle": "",
		"recommendedStealthFavours": "",
		"recommendedLoudFavours": ""
	}
];

/*
if(lang.includes("de")) {
	let lang = "german";
	getJSON(lang);
}
else if(lang.includes("es")) {
	let lang = "spanish";
	getJSON(lang);
}
else if(lang.includes("fr")) {
	let lang = "french";
	getJSON(lang);
}
else if(lang.includes("it")) {
	let lang = "italian";
	getJSON(lang);
}
else if(lang.includes("ja")) {
	let lang = "japanese";
	getJSON(lang);
}
else if(lang.includes("ko")) {
	let lang = "korean";
	getJSON(lang);
}
else if(lang.includes("pl")) {
	let lang = "polish";
	getJSON(lang);
}
else if(lang.includes("pt")) {
	let lang = "portuguese";
	getJSON(lang);
}
else if(lang.includes("ru")) {
	let lang = "russian";
	getJSON(lang);
}
else if(lang.includes("tr")) {
	let lang = "turkish";
	getJSON(lang);
}
else if(lang.includes("zh")) {
	let lang = "chinese";
	getJSON(lang);
}
else {
	let lang = "english";
	getJSON(lang);
}
*/

try {
	getJSON(lang);
}
catch(error) {
	getJSON('en');
}

async function getJSON(langJSON) {
    fetch("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/" + langJSON + ".json")
	.then(response => {
		if (!response.ok) {
			throw new Error('Response not ok');
		}
		else {
			return response.json();
		}
	})
	.then(data => heists = data)
	.catch(e => console.error('URL failed to fetch'));
}

function regen(heistNumber) {
	let parent = document.getElementById('fade-box');
	
	let randomBox = document.createElement('div');
	randomBox.id = 'random-box';
	randomBox.className = 'center center-div';
	
	let heistNameP = document.createElement('p');
	heistNameP.id = 'heist-name';
	heistNameP.className = 'fade-in-anim';
	
	let infoBoxLevelSet = document.createElement('div');
	infoBoxLevelSet.className = 'info-box';
	
	let levelSetHeadingP = document.createElement('p');
	levelSetHeadingP.className = 'heading';
	levelSetHeadingP.textContent = 'RESPECTIVE LEVEL SET';
	
	let levelSetValueP = document.createElement('p');
	levelSetValueP.className = 'fade-in-anim';
	levelSetValueP.id = 'level-set';
	
	let infoBoxGameplayStyle = document.createElement('div');
	infoBoxGameplayStyle.className = 'info-box';
	
	let gameplayStyleHeadingP = document.createElement('p');
	gameplayStyleHeadingP.className = 'heading';
	gameplayStyleHeadingP.textContent = 'GAMEPLAY STYLE';
	
	let gameplayStyleValueP = document.createElement('p');
	gameplayStyleValueP.className = 'fade-in-anim';
	gameplayStyleValueP.id = 'gameplay-style';
	
	let infoBoxFavourInfo = document.createElement('div');
	infoBoxFavourInfo.className = 'favour-info';
	
	let favourInfoHeadingP = document.createElement('p');
	favourInfoHeadingP.className = 'heading';
	favourInfoHeadingP.textContent = 'RECOMMENDED FAVOURS';
	
	let stealthFavoursP = document.createElement('p');
	stealthFavoursP.className = 'fade-in-anim';
	let loudFavoursP = document.createElement('p');
	loudFavoursP.className = 'fade-in-anim';
	
	let heistInfo = heists[heistNumber];
	
	oldNumber = heistNumber;
	
	heistNameP.textContent = heistInfo['name'];
	levelSetValueP.textContent = heistInfo['levelSet'];
	gameplayStyleValueP.textContent = heistInfo['gameplayStyle'];
	stealthFavoursP.textContent = "Stealth: " + heistInfo['recommendedStealthFavours'];
	loudFavoursP.textContent = "Loud: " + heistInfo['recommendedLoudFavours'];
	
	parent.innerHTML = '';
	
	infoBoxLevelSet.appendChild(levelSetHeadingP);
	infoBoxLevelSet.appendChild(levelSetValueP);
	
	infoBoxGameplayStyle.appendChild(gameplayStyleHeadingP);
	infoBoxGameplayStyle.appendChild(gameplayStyleValueP);
	
	infoBoxFavourInfo.appendChild(favourInfoHeadingP);
	infoBoxFavourInfo.appendChild(stealthFavoursP);
	infoBoxFavourInfo.appendChild(loudFavoursP);
	
	randomBox.appendChild(heistNameP);
	randomBox.appendChild(infoBoxLevelSet);
	randomBox.appendChild(infoBoxGameplayStyle);
	randomBox.appendChild(infoBoxFavourInfo);
	
	parent.appendChild(randomBox);
	
}

function generateRandomHeist() {
	let heistNumber = Math.floor(Math.random() * (heists.length - 1));
	
	while(oldNumber == heistNumber) {
		heistNumber = Math.floor(Math.random() * (heists.length - 1));
	}
	
	// try loading language here to allow for translating common elements
	
	regen(heistNumber);
}

function load()
{
	document.getElementById('new-heist-button').addEventListener("click", generateRandomHeist);
	generateRandomHeist();
}

document.addEventListener("DOMContentLoaded", load); 