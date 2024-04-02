const zone1 = document.querySelector(".zone-1");
const form = document.querySelector(".form");
const button = document.getElementById("button");
let ufo = document.querySelectorAll(`span`);

form.addEventListener("submit", onClick);

function onClick(event) {
	event.preventDefault();
	const text = event.currentTarget.elements.text.value;
	zone1.innerHTML = "";
	zone1.innerHTML = createMarkUp(text);

	ufo = document.querySelectorAll(`span`);
	ufo.forEach(el => {
		el.ondragstart = drag;
	});

	event.currentTarget.reset();
}

function createMarkUp(text) {
	const markUp = text
		.split("")
		.map(
			(e, i) =>
				`<span id="${[i]}" class="${[
					i,
				]}" draggable="true">${e}</span>`,
		)
		.join("");
	return markUp;
}

zone1.ondragover = allowDrop;

function allowDrop(event) {
	event.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData("id", event.target.id);
}

zone1.ondrop = drop;

function drop(event) {
	let itemId = event.dataTransfer.getData("id");
	const el = document.getElementById(itemId);
	el.style.position = "absolute";
	el.style.top = `${event.clientY}px`;
	el.style.left = `${event.clientX}px`;
}
