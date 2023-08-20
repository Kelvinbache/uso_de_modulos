const button = document.getElementById("button");
const p = document.querySelectorAll("p");

function information() {
  const name = "kelvin";
  const lastName = "abache";
  const photon = "04126513988";

  const array = [name, lastName, photon];
  createElements(array);
}

function createElements(infor) {  
    for (let i = 0; i < infor.length; i++) {
    const elementParent = p[i];
    const content = infor[i];

    const createText = document.createTextNode(content);
    elementParent.appendChild(createText);
  }
}

button.addEventListener("click", information);
