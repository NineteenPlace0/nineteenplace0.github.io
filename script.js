// Introductory (Title &) Text in both English and Dutch
const introductoryTitle = {
	english: "Welcome to my portfolio!",
	dutch: "Welkom op mijn portfolio!"
};

const introductoryText = {
	english: "My name is Bas Brockman, a student software developer with a passion for technology. During my studies, I have gained experience in designing and building various Python-applications. In this portfolio, you will find a selection of my projects that showcase my programming skills.",
	dutch: "Ik ben Bas Brockman, een student applicatie ontwikkelaar met een passie voor technologie. Tijdens mijn opleiding heb ik ervaring opgedaan in het ontwerpen en bouwen van verschillende Python-applicaties. In dit portfolio vindt u een selectie van mijn projecten die mijn programeer-vaardigheden laten zien."
};

// List of images & captions in both English and Dutch
const pictures = [
	{ src: 'img/hangman.jpg', dutchCaption: 'Ga naar project: HANGMAN', englishCaption: 'Go to project: HANGMAN', url: 'https://github.com/NineteenPlace0/AI_hangman' },
	{ src: 'img/lock.jpg', dutchCaption: 'Ga naar project: PASSWORDS', englishCaption: 'Go to project: PASSWORDS', url: 'https://github.com/NineteenPlace0/Passwords' },
	{ src: 'img/conversion.jpg', dutchCaption: 'Ga naar project: CONVERSION', englishCaption: 'Go to project: CONVERSION', url: 'https://github.com/NineteenPlace0/Convert' },
	{ src: 'img/weather.jpg', dutchCaption: 'Ga naar project: WEATHER', englishCaption: 'Go to project: WEATHER', url: 'https://github.com/NineteenPlace0/Weather' },
	// Add more images if required;
	//{ src: 'img/pictureX.png', dutchCaption: 'Nederlandse bijschrift X', englishCaption: 'English caption X' }
];

// References to HTML-elements
const container = document.getElementById('picture-container');
const introTitleContainer = document.getElementById('intro-title');
const introTextContainer = document.getElementById('intro-text');
const nederlandsBtn = document.getElementById('nederlands-btn');
const englishBtn = document.getElementById('english-btn');

// Create a new element for each 'Picture'
function createPictureElement(picture) {
	const pictureElement = document.createElement('a');
	pictureElement.href = picture.url;
	pictureElement.target = "_blank"	//Open link in new tab
	pictureElement.classList.add('picture');
	const image = document.createElement('img');
	image.src = picture.src;
	image.alt = 'Image';
	pictureElement.appendChild(image);
	const caption = document.createElement('p');
	caption.textContent = picture.dutchCaption; // Default caption is in Dutch
	pictureElement.appendChild(caption);
	return pictureElement;
}

// Render 'Introductory Text' based on selected language
function renderIntroductoryTitle(language) {
	introTitleContainer.textContent = introductoryTitle[language];
}

function renderIntroductoryText(language) {
	introTextContainer.textContent = introductoryText[language];
}

// Render "Language-buttons" based on selected language
function renderButtons(language) {
	if (language === 'english') {
		nederlandsBtn.classList.add('language-inactive');
		nederlandsBtn.classList.remove('language-active');
		englishBtn.classList.remove('language-inactive');
		englishBtn.classList.add('language-active');
	}
	else{
		englishBtn.classList.add('language-inactive');
		englishBtn.classList.remove('language-active');
		nederlandsBtn.classList.remove('language-inactive');
		nederlandsBtn.classList.add('language-active');
	}
}

// Render 'Pictures' based on selected language
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

// Add 'event-listeners' for "Language-buttons"
nederlandsBtn.addEventListener('click', () => {
	renderIntroductoryTitle('dutch'); // Title in Dutch
	renderIntroductoryText('dutch'); // Text in Dutch
	renderButtons('dutch'); 
	renderPictures('dutch'); // Captions in Dutch
});

englishBtn.addEventListener('click', () => {
	renderIntroductoryTitle('english'); // Title in English
	renderIntroductoryText('english'); // Text in English
	renderButtons('english');
	renderPictures('english'); // Captions in English
});

// Render content in English by default
renderIntroductoryTitle('english');
renderIntroductoryText('english');
renderButtons('english');
renderPictures('english');