/*
Heist Info Template for Future Heists

,
	{
		"name": "",
		"levelSet": "",
		"gameplayStyle": "",
		"recommendedStealthFavours": "",
		"recommendedLoudFavours": "",
	}
*/

let oldNumber = -1;
const heists = [
	{
		"name": "No Rest for the Wicked",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Additional Loot Secure Point, Keycard Location.",
		"recommendedLoudFavours": "Armor Bag, Additional Thermite, Van Escape.",
	},
	{
		"name": "Road Rage",
		"levelSet": "Core Heists",
		"gameplayStyle": "Loud",
		"recommendedStealthFavours": "Not applicable.",
		"recommendedLoudFavours": "Armor Bag, Unlocked Lockboxes, Additional Secure Point.",
	},
	{
		"name": "Dirty Ice",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Employee Entrance, Distracted Manager.",
		"recommendedLoudFavours": "Armor Bag, Rooftop Chopper.",
	},
	{
		"name": "Rock the Cradle",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Vault Code Access, Additional Keycard.",
		"recommendedLoudFavours": "Armor Bag, Zipline Bag, Crypto Wallet.",
	},
	{
		"name": "Under the Surphaze",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Dumpster Secure Point, Zipline Bag, Additional QR Key.",
		"recommendedLoudFavours": "Armor Bag, Faster Chopper.",
	},
	{
		"name": "Golde & Sharke",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Elevator Access, Café Celebration, Teller Door.",
		"recommendedLoudFavours": "Armor Bag, Thermal Lance Parts, Zip Bag.",
	},
	{
		"name": "99 Boxes",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Prototype Bags, Opened Container.",
		"recommendedLoudFavours": "Armor Bag, Thermite Drop, Opened Container, Prototype Bags.",
	},
	{
		"name": "Touch the Sky",
		"levelSet": "Core Heists",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Vomiting Agent, Hidden Thermite.",
		"recommendedLoudFavours": "Armor Bag, Zipline Bag, Hidden Thermite.",
	},
	{
		"name": "Turbid Station",
		"levelSet": "Legacy Heists",
		"gameplayStyle": "Stealth",
		"recommendedStealthFavours": "Zipline Bag, Fewer Drones, Longer Remote Door Timer. More Lures.",
		"recommendedLoudFavours": "Not applicable.",
	},
	{
		"name": "Cook Off",
		"levelSet": "Legacy Heists",
		"gameplayStyle": "Loud",
		"recommendedStealthFavours": "Not applicable.",
		"recommendedLoudFavours": "Armor Bag, Permanent Escape Van, Faster Supply Drop, Longer Purity Window.",
	},
	{
		"name": "Syntax Error",
		"levelSet": "The Bad Apple",
		"gameplayStyle": "Stealth or Loud",
		"recommendedStealthFavours": "Zipline Bag, Scrambled Drones, QR Code Access, Security Laser Glitch.",
		"recommendedLoudFavours": "Armor Bag, Zipline Bag, Faster Escape Helicopter.",
	}
];



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