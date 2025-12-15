const input = document.getElementById("input");
const loadBtn = document.getElementById("load");
const spinBtn = document.getElementById("spin");
const picker = document.getElementById("picker");
const result = document.getElementById("result");

let questions = [];

loadBtn.onclick = () => {
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