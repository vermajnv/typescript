"use strict";
const spanEle = document.querySelector('#year');
const year = new Date().getFullYear().toString();
spanEle.innerHTML = year;
