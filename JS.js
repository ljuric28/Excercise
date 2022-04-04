const firstName = "Luca";
const age = 24;
const job = "Frontend Developer";
let html;

html = `
<ul>
<li>Name: ${firstName}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
</ul>
`;

document.body.innerHTML = html