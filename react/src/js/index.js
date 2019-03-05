import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import data from './teacher.json';
import renderToDom from './render-to-dom.js';

console.log(data)
data.teachers.forEach(teacher => {
    const element = document.createElement('li')
    element.textContent = teacher.name
    renderToDom(element)
});
document.write(firstMessage)
delayedMessage()
console.log("asdasdas")