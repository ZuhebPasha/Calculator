let screen =document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innertext;
        console.log('button text is', buttonText);
       if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue ;
        }
        else if(buttonText=='C'){
            screen.value='';
            screen.value =screenValue;
        }
        else if(buttonText=='='){
             screen.value = eval(screenValue);
}
       else{
            screen.value+= buttonText;
            screen.value =screenValue;

}

    })
    }
    