const task3Element = document.getElementById('task-3');

function hey() {
  alert('hey there');
}

// hey();

task3Element.addEventListener('click', hey);

function hiName(name) {
  alert('hello my friend ' + name);
}

// hiName('Pete');

function threeStrings(string1, string2, string3) {
  alert(`${string1} ${string2} ${string3}`);
}

threeStrings('hi', 'there', 'Vic');