const h1 = document,quearySelector("h1");

console.log(h1.className);
console.log(h1.id);
console.log(h1.textContent);
console.log(h1.tagname);
console.log(h1.style);

h1.textContent = 'Hola mundo desde JS';
h1.className = 'rojo';
h1.style.backgroundColor = 'blue';
h1.style.color = 'white';
h1.style.textAlign = 'center';
