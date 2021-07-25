let ownedIlvl = document.getElementById('ownedIlvl');
let wantedIlvl = document.getElementById('wantedIlvl');

let showResult = document.getElementById('showResult');
let Torghast_soul_ash = document.getElementById('Torghast_soul_ash');

function calculateResult(){
    let result_soulAsh = wantedIlvl.value - ownedIlvl.value;

    if(result_soulAsh >= 0){
        showResult.textContent = 'soul ash : ' + result_soulAsh;
    }else{
        showResult.textContent = 'soul ash : ' + 0;

    }
}

function displayLayers(){
    let display = ' '

    for(let i = 1; i < 13; i++){
        display = display + i;
    }
    
    Torghast_soul_ash.textContent = display;
}

displayLayers()