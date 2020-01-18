const coll = ['milk', 'butter', 'eggs', 'bread'];

const parts = []; 
for (const item of coll) {
  parts.push(`<li>${item}</li>`);
}

const innerValue = parts.join(', \n');
const result = `<ul>${innerValue}</ul>`;

console.log( result)
