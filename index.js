const Buttons = document.querySelectorAll('.Buttons');
let Screen = document.getElementById('Screen');
let CurrentText = '';

for(let i=0; i <Buttons.length; i++){
    const button = Buttons[i];
    button.addEventListener('click',() => {

});
}

function Calculate(){
    const input = CurrentText;
    try{
        const result = math.evaluate(input);
        Screen.textContent = result;
        CurrentText='';
    }
    catch(error){
        Screen.textContent='Nieprawidłowe wyrażenie';
        CurrentText= '';
    }
}

Buttons.forEach((Buttons, index) => {
    Buttons.addEventListener('click', () =>{
        if(index===0){
            CurrentText+='sqrt(';
            Screen.textContent=CurrentText;
        }
        else if (index === 1){
            CurrentText +='9';
            Screen.textContent = CurrentText;
        }
        else if(index===2){
            CurrentText+='8';
            Screen.textContent = CurrentText;
        }
        else if(index===3){
            CurrentText+='7';
            Screen.textContent = CurrentText;
        }
        else if(index===4){
            CurrentText+='/';
            Screen.textContent=CurrentText;
        }
        else if(index===5){
            CurrentText+='^2';
            Screen.textContent=CurrentText;
        }
        else if(index===6){
            CurrentText+='4';
            Screen.textContent=CurrentText;
        }
        else if(index===7){
            CurrentText+='5';
            Screen.textContent=CurrentText;
        }
        else if(index===8){
            CurrentText+='6';
            Screen.textContent=CurrentText;
        }
        else if(index===9){
            CurrentText+='*';
            Screen.textContent=CurrentText;
        }
        else if(index===10){
            CurrentText='';
            Screen.textContent=CurrentText;
        }
        else if(index===11){
            CurrentText+='1';
            Screen.textContent=CurrentText;
        }
        else if(index===12){
            CurrentText+='2';
            Screen.textContent=CurrentText;
        }
        else if(index===13){
            CurrentText+='3';
            Screen.textContent=CurrentText;
        }
        else if(index===14){
            CurrentText+='-';
            Screen.textContent=CurrentText;
        }
        else if(index===15){
            CurrentText+=')';
            Screen.textContent=CurrentText;
        }
        else if(index===16){
            CurrentText+='0';
            Screen.textContent=CurrentText;
        }
        else if(index===17){
            CurrentText+='.';
            Screen.textContent=CurrentText;
        }
        else if(index===18){
            Calculate();
        }
        else if(index===19){
            CurrentText+='+';
            Screen.textContent=CurrentText;
        }
    })
})