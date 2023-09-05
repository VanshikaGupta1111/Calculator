let input = document.getElementById('inputBox');
let strings = " ";
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            strings = eval(strings);
            document.querySelector('input').value = strings;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            strings = strings.substring(0,strings.length-1);
            document.querySelector('input').value = strings;
        }
        else if (e.target.innerHTML == 'AC'){
            strings = "";
            document.querySelector('input').value = strings;
        }
        else{
            console.log(e.target)
            strings += e.target.innerHTML;
            // input.value = strings;
            document.querySelector('input').value = strings;
        }
        
    })
})
