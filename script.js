const input = document.getElementById("input");
const loadBtn = document.getElementById("load");
const spinBtn = document.getElementById("spin");
const picker = document.getElementById("picker");
const result = document.getElementById("result");

const defaultQuestions = [
“Do you like pets?”,
“What would you say your type is?”,
“What do you do on weekends?”,
“What music do you like?”,
“What’s your name?”,
“What’s the best date you’ve been on? Apart from this one?”,
“What’s your best chat up line?”, 
“Where is the most romantic place in the world?”,
“What’s your favourite emoji?”, 
“Do you think there’s a spark between us?”,
“Are you always this late for dates?”,
“What’s the most romantic thing you’ve ever done?”,
“If you could have any superpower what would it be?”,
“Stranded on a desert island, who would you eat first and last?”,
“Do you like films?”,
“Do you have any phobias?”,
“Have you ever been in love?”,
“Do you believe in love at first sight?”,
“Can you describe your perfect partner?”,
“Where do you like to take your dates?”,
“What’s your best chat-up line?”,
“What’s on your mind?”,
“Rate this date out of ten”,
“Where are the best girls from?”,
“If I was choking to death would you save me?”,
“What do you do for a living?”,
“What is your type?”,
“Have you ever been on a cruise?”,
“Would you do a sex tape to get famous?”,
“What do you think is a bad trait in a partner?”,
“What’s your mum like?”,
“Would your Mum like me if I came home with you?”, 
“What’s your favourite superhero?”,
“Have you ever been friend zoned?”,
“Do you have a happy place?”,
“What was the last white lie you told?”, 
“What do you think you’re best at?”,
“Can you rate this date out of ten?”,
“Would you be loyal?”,
“If we were to go on a second date, would you sort your commitment issues?”,
“Are you still underrated?”,
“Are you single?”,
“Would you ever date a vegan?”,
];

let questions = [];

function loadQuestionsFromInput() {
picker.innerHTML = "";
result.textContent = "";
questions = input.value
.split("\n")
.map(q => q.trim())
.filter(q => q.length);

questions.forEach(q => {
const div = document.createElement("div");
div.className = "item";
div.textContent = q;
picker.appendChild(div);
});

picker.scrollTop = 0;
};

loadBtn.onclick = loadQuestionsFromInput;

spinBtn.onclick = () => {
if (!questions.length) return;

const index = Math.floor(Math.random() * questions.length);
const itemHeight = 60;
const target =
index * itemHeight - picker.clientHeight / 2 + itemHeight / 2;

picker.scrollTo({
top: target,
behavior: "smooth"
});

result.textContent = questions[index];
};

window.onload = () => {
input.value = defaultQuestions.join("\n");
loadQuestionsFromInput();
};