// Introductietekst in zowel het Engels als het Nederlands
const introductoryText = {
	english: "This is an introductory text in English. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nulla vel libero posuere varius. Ut euismod lectus id purus lacinia, at hendrerit purus fermentum. In nec ante a magna consectetur commodo. Sed at vestibulum justo. Nulla facilisi. Duis in lorem ligula. Vivamus volutpat magna in justo fermentum, ac fermentum orci eleifend. Quisque nec arcu vehicula, lobortis nisi sed, malesuada sem. Donec nec consequat libero.",
	dutch: "Dit is een introductietekst in het Nederlands. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nulla vel libero posuere varius. Ut euismod lectus id purus lacinia, at hendrerit purus fermentum. In nec ante a magna consectetur commodo. Sed at vestibulum justo. Nulla facilisi. Duis in lorem ligula. Vivamus volutpat magna in justo fermentum, ac fermentum orci eleifend. Quisque nec arcu vehicula, lobortis nisi sed, malesuada sem. Donec nec consequat libero."
};

// Lijst van afbeeldingen met bijschriften in zowel het Engels als het Nederlands
const pictures = [
	{ src: 'img/hangman.jpg', dutchCaption: 'Ga naar project: HANGMAN', englishCaption: 'Go to project: HANGMAN', url: 'https://github.com/NineteenPlace0/AI_hangman' },
	{ src: 'img/lock.jpg', dutchCaption: 'Ga naar project: PASSWORDS', englishCaption: 'Go to project: PASSWORDS', url: 'https://github.com/NineteenPlace0/Passwords' },
	{ src: 'img/conversion.jpg', dutchCaption: 'Ga naar project: CONVERSION', englishCaption: 'Go to project: CONVERSION', url: 'https://github.com/NineteenPlace0/Convert' },
	//{ src: 'img/picture4.png', dutchCaption: 'Nederlandse bijschrift 4', englishCaption: 'Engels bijschrift 4' }
	// Voeg meer afbeeldingen toe indien nodig
];

// Referenties naar HTML-elementen
const container = document.getElementById('picture-container');
const introTextContainer = document.getElementById('intro-text');
const nederlandsBtn = document.getElementById('nederlands-btn');
const englishBtn = document.getElementById('english-btn');

// Creëer een nieuw element voor elke afbeelding
function createPictureElement(picture) {
	const pictureElement = document.createElement('a');
	pictureElement.href = picture.url;
	pictureElement.target = "_blank"	//Open link in new tab
	pictureElement.classList.add('picture');
	const image = document.createElement('img');
	image.src = picture.src;
	image.alt = 'Afbeelding';
	pictureElement.appendChild(image);
	const caption = document.createElement('p');
	caption.textContent = picture.dutchCaption; // Standaard bijschrift is Nederlands
	pictureElement.appendChild(caption);
	return pictureElement;
}

// Render de introductietekst op basis van de geselecteerde taal
function renderIntroductoryText(language) {
	introTextContainer.textContent = introductoryText[language];
}

// Render de afbeeldingen op basis van de geselecteerde taal
function renderPictures(language) {
	container.innerHTML = '';
	pictures.forEach(picture => {
		const pictureElement = createPictureElement(picture);
		if (language === 'english') {
			pictureElement.querySelector('p').textContent = picture.englishCaption;
		}
		container.appendChild(pictureElement);
	});
}

// Voeg event listeners toe voor taalwisselaars
nederlandsBtn.addEventListener('click', () => {
	renderIntroductoryText('dutch'); // Tekst in het Nederlands
	renderPictures('dutch'); // Bijschriften in het Nederlands
});

englishBtn.addEventListener('click', () => {
	renderIntroductoryText('english'); // Tekst in het Engels
	renderPictures('english'); // Bijschriften in het Engels
});

// Render eerst de content in het Engels
renderIntroductoryText('english');
renderPictures('english');