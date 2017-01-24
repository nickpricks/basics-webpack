require('./module1');
require('./module2');

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack 2.0';

  return element;
};

document.body.appendChild(component());
