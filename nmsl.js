const typing = new EasyTyper(
	{
		output: "output",
		type: "normal",
		isEnd: false,
		speed: 50,
		backSpeed: 0,
		sleep: 0,
		singleBack: false,
		sentencePause: false,
	},
	`/\\/ /\\/\\ $ |_`,
	(instance) => {},
	(output, instance) => {
		document.getElementById("nmsl").innerHTML = `${output}`;
	}
);

const translation = document.getElementById("translation");
const translate = document.getElementById("translate");
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

function getRandomTranslation() {
	return dictionary[randomInt(0, dictionary.length)];
}

var working = false;

translate.addEventListener("click", (e) => {
	if (working) return;
	working = true;
	e.preventDefault();
	translation.style.opacity = 0;
	setTimeout(() => {
		translation.innerText = getRandomTranslation();
		translation.style.opacity = 1;
		working = false;
	}, 500);
});

translation.innerText = getRandomTranslation();
