
import getData from './api.js';
const generate = document.querySelector('#Get-text');
let showPickUpLines = document.querySelector('.line');
generate.onclick = function(){getData().then(data => {
    let getPickUpLineData = data.pickupLines;
    let randomIndex = Math.floor(Math.random() * getPickUpLineData.length)
    showPickUpLines.innerHTML = getPickUpLineData[randomIndex].line;

})}



