const spanEle = <HTMLSpanElement>document.querySelector('#year');

const year = <string>new Date().getFullYear().toString();
spanEle.innerHTML = year