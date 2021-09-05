let questions = [
	{
		question: `How to write a "Hello World" in an alertbox?`,
		options: [
			'alertBox("Hello World")',
			'msgBox("Hello World")',
			'msg("Hello World")',
			'alert("Hello World")',
		],
		answer: 3,
	},
	{
		question: "What data type is NaN?",
		options: ["String", "Number", "Null", "Undefined"],
		answer: 1,
	},
	{
		question: `What is the output of <br/><p><i>var a = "Brendan Eich";<br/>var result = a.substring(3, 5);<br/>document.write(result);<p>`,
		options: ["nda", "end", "nd", "en"],
		answer: 2,
	},
	{
		question: "How to write an IF conditional in Javascript?",
		options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
		answer: 2,
	},
	{
		question:
			'How to make an if that executes code if "i" is different from 5',
		options: ["if (i != 5)", "if (i <> 5)", "if i <> 5", "if i =! 5 then"],
		answer: 0,
	},
	{
		question: "How the while loop starts?",
		options: [
			"while (i <= 10)",
			"while (i <= 10; i++)",
			"while i = 1 to 10",
		],
		answer: 0,
	},
];
const progressBar = document.querySelector(".progress--bar");
const questionArea = document.querySelector(".questionArea");
const scoreArea = document.querySelector(".scoreArea");
const scoreText1 = document.querySelector(".scoreText1");
const scorePct = document.querySelector(".scorePct");

let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

document.querySelector(".scoreArea button").addEventListener("click", () => {
	currentQuestion = 0;
	correctAnswers = 0;
	showQuestion();
});

function showQuestion() {
	if (questions[currentQuestion]) {
		let q = questions[currentQuestion];

		let progress = Math.floor((currentQuestion / questions.length) * 100);
		progressBar.style.width = `${progress}%`;

		scoreArea.style.display = "none";
		questionArea.style.display = "block";

		document.querySelector(".question").innerHTML = q.question;

		let optionsHtml = "";

		for (let i in q.options) {
			optionsHtml += `<div data-op="${i}" class="option"><span> ${
				parseInt(i) + 1
			}</span> ${q.options[i]}</div>`;
		}

		document.querySelector(".options").innerHTML = optionsHtml;

		document.querySelectorAll(".options .option").forEach((item) => {
			item.addEventListener("click", optionsClickEvent);
		});
	} else {
		finishQuiz();
	}
}

function optionsClickEvent(e) {
	let clickedOption = parseInt(e.target.getAttribute("data-op"));
	if (questions[currentQuestion].answer === clickedOption) {
		correctAnswers++;
	}

	currentQuestion++;
	showQuestion();
}

function finishQuiz() {
	let points = Math.floor((correctAnswers / questions.length) * 100);
	if (points <= 40) {
		document.getElementById("resultimage").src =
			"https://img.icons8.com/emoji/96/000000/multiply-emoji.png";
		scoreText1.innerHTML = "Need to revisit JavaScript";
		scorePct.style.color = "#f00000";
	} else if (points > 40 && points < 80) {
		scoreText1.innerHTML =
			"You can proceed to next course<br/> Course Added to the Dashboard";
		scorePct.style.color = "#ffc900";
	} else if (points > 30 && points >= 80) {
		scoreText1.innerHTML =
			"You can proceed to next course<br/> Course Added to the Dashboard";
		scorePct.style.color = "#0d630d";
	}

	scorePct.innerHTML = `${points}% Correct`;
	document.querySelector(
		".scoreText2"
	).innerHTML = `Out of ${questions.length} you got it ${correctAnswers}`;

	scoreArea.style.display = "block";
	questionArea.style.display = "none";
	progressBar.style.width = "100%";
}
