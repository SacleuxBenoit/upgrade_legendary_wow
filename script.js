let ownedIlvl = document.getElementById('ownedIlvl');
let wantedIlvl = document.getElementById('wantedIlvl');

let showResult = document.getElementById('showResult');
let Torghast_soul_ash = document.getElementById('Torghast_soul_ash');

let newParagraph = document.createElement('p');

function calculateResult(){
    let result_soulAsh = wantedIlvl.value - ownedIlvl.value;

    if(result_soulAsh >= 0){
        showResult.textContent = 'soul ash : ' + result_soulAsh;
    }else{
        showResult.textContent = 'soul ash : ' + 0;

    }
}