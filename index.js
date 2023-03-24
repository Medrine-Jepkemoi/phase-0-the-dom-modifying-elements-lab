// Write your code here!

//Removing DOM node 'main#main
const main = document.querySelector("#main");
main.remove();

//Adding an h1 element with an id victory under the body and adding text to it
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.append(newHeader);
console.log(newHeader)



