let availableLanguages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'tr', 'zh']
let lang = navigator.language.substring(0,2);
let oldNumber = -1;
let heists = {
	"levelSet": "",
	"gameplayStyle": "",
	"favourInfo": "",
	"stealthFavours": "",
	"loudFavours": "",
	"heists": [
		{
			"name": "Pick a new heist",
			"levelSet": "",
			"gameplayStyle": "",
			"recommendedStealthFavours": "",
			"recommendedLoudFavours": ""
		}
	]
};

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
	let heistInfo = heists;
	let selectedHeist = heistInfo['heists'][heistNumber];
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
	levelSetHeadingP.textContent = heistInfo['levelSet'];
	
	let levelSetValueP = document.createElement('p');
	levelSetValueP.className = 'fade-in-anim';
	levelSetValueP.id = 'level-set';
	
	let infoBoxGameplayStyle = document.createElement('div');
	infoBoxGameplayStyle.className = 'info-box';
	
	let gameplayStyleHeadingP = document.createElement('p');
	gameplayStyleHeadingP.className = 'heading';
	gameplayStyleHeadingP.textContent = heistInfo['gameplayStyle'];
	
	let gameplayStyleValueP = document.createElement('p');
	gameplayStyleValueP.className = 'fade-in-anim';
	gameplayStyleValueP.id = 'gameplay-style';
	
	let infoBoxFavourInfo = document.createElement('div');
	infoBoxFavourInfo.className = 'favour-info';
	
	let favourInfoHeadingP = document.createElement('p');
	favourInfoHeadingP.className = 'heading';
	favourInfoHeadingP.textContent = heistInfo['favourInfo'];
	
	let stealthFavoursP = document.createElement('p');
	stealthFavoursP.className = 'fade-in-anim';
	let loudFavoursP = document.createElement('p');
	loudFavoursP.className = 'fade-in-anim';
	
	heistNameP.textContent = selectedHeist['name'];
	levelSetValueP.textContent = selectedHeist['levelSet'];
	gameplayStyleValueP.textContent = selectedHeist['gameplayStyle'];
	stealthFavoursP.textContent = heistInfo['stealthFavours'] + selectedHeist['recommendedStealthFavours'];
	loudFavoursP.textContent = heistInfo['loudFavours'] + selectedHeist['recommendedLoudFavours'];
	
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
	
	oldNumber = heistNumber;
	
}

function generateRandomHeist() {
	let heistNumber = Math.floor(Math.random() * (heists['heists'].length - 1));
	
	while(oldNumber == heistNumber) {
		heistNumber = Math.floor(Math.random() * (heists['heists'].length - 1));
	}
	
	if(availableLanguages.includes(lang)) {
		getJSON(lang);
	}
	else {
		getJSON('en');
	}
	
	let buttonText = document.getElementById('new-heist-button');
	buttonText.textContent = heistInfo['buttonText'];
	
	regen(heistNumber);
}

function load()
{
	document.getElementById('new-heist-button').addEventListener("click", generateRandomHeist);
	generateRandomHeist();
}

document.addEventListener("DOMContentLoaded", load); 