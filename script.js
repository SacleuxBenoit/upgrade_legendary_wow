let ownedIlvl = document.getElementById('ownedIlvl');
let wantedIlvl = document.getElementById('wantedIlvl');

let showResult = document.getElementById('showResult');

function calculateResult(){
    let result_soulAsh = wantedIlvl.value - ownedIlvl.value;

    if(result_soulAsh >= 0){
        showResult.textContent = 'soul ash : ' + result_soulAsh;
    }else{
        showResult.textContent = 'soul ash : ' + 0;

    }
}