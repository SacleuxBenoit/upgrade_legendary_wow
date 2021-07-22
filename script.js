let ownedIlvl = document.getElementById('ownedIlvl');
let wantedIlvl = document.getElementById('wantedIlvl');

let showResult = document.getElementById('showResult');

function calculateResult(){
    let result_soulAsh = wantedIlvl.value - ownedIlvl.value;
    showResult.textContent = 'soul ash : ' + result_soulAsh;
}