//test if headers need to be regen'd
//test if parent needs to be wiped, or just random box

let lang = navigator.language;
let oldNumber = -1;

if(lang.includes("de")) {
	//Load german.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/german.json");
}
else if(lang.includes("es-419")) {
	//Load spanish_latam.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/spanish_latam.json");
}
else if(lang.includes("es")) {
	//Load spanish_spain.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/spanish_spain.json");
}
else if(lang.includes("fr")) {
	//Load french.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/french.json");
}
else if(lang.includes("it")) {
	//Load italian.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/italian.json");
}
else if(lang.includes("ja")) {
	//Load japanese.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/japanese.json");
}
else if(lang.includes("ko")) {
	//Load korean.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/korean.json");
}
else if(lang.includes("pl")) {
	//Load polish.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/polish.json");
}
else if(lang.includes("pt")) {
	//Load portuguese.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/portuguese.json");
}
else if(lang.includes("ru")) {
	//Load russian.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/russian.json");
}
else if(lang.includes("tr")) {
	//Load turkish.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/turkish.json");
}
else if(lang.includes("zh-Hans")) {
	//Load chinese_simplified.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/chinese_simplified.json");
}
else if(lang.includes("zh-Hant")) {
	//Load chinese_traditional.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/chinese_traditional.json");
}
else {
	//Load english.json into heists variable
	getJSON("https://mistehtimmeh.github.io/payday-3-heist-picker/languages/english.json");
}

async function getJSON(url) {
    fetch(url)
	.then(response => response.json())
	.then(data => let heists = data);
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
	
	regen(heistNumber);
}

function load()
{
	document.getElementById('new-heist-button').addEventListener("click", generateRandomHeist);
	generateRandomHeist();
}

document.addEventListener("DOMContentLoaded", load); 