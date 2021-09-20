function changeMode (size, weight, transform, background, color) {
  document.documentElement.style['font-size'] = size;
  document.documentElement.style['font-weigth'] = weight;
  document.documentElement.style['text-transform'] = transform;
  document.documentElement.style['background-color'] = background;
  document.documentElement.style.color = color;
}

const spooky = function () { changeMode(9, 'bold', 'uppercase', 'pink', 'green'); };
const darkMode = function () { changeMode(12, 'bold', 'capitalize', 'black', 'white'); };
const screamMode = function () { changeMode(12, 'normal', 'lowercase', 'white', 'black'); };
function main () {
  const body = document.body;
  const para = document.createElement('P');
  body.appendChild(para);
  const paraText = document.createTextNode('Welcome Holberton!');

  const button = document.createElement('BUTTON');
  const spookText = document.createTextNode('Spooky');
  button.setAttribute('onClick', 'spooky()');

  const button2 = document.createElement('BUTTON');
  const darkText = document.createTextNode('Dark mode');
  button2.setAttribute('onClick', 'darkMode()');

  const button3 = document.createElement('BUTTON');
  const screamText = document.createTextNode('Scream mode');
  button3.setAttribute('onClick', 'screamMode()');

  body.appendChild(button);
  body.appendChild(button2);
  body.appendChild(button3);

  para.appendChild(paraText);
  button.appendChild(spookText);
  button2.appendChild(darkText);
  button3.appendChild(screamText);
}

main();
