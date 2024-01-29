let input=document.getElementById('inputbox')
let buttons=document.querySelectorAll('button')
let strin=""
let arr=Array.from(buttons)

arr.forEach( button =>{
        button.addEventListener('click',(e) =>{
            if(e.target.innerHTML=='='){
             input.value=eval(strin)
             strin=input.value
            }
            else if((strin[strin.length-1]=='*' || strin[strin.length-1]=='+' || strin[strin.length-1]=='-' || strin[strin.length-1]=='/' || strin[strin.length-1]=='%') && (e.target.innerHTML=='*' || e.target.innerHTML=='+' || e.target.innerHTML=='-' || e.target.innerHTML=='/' || e.target.innerHTML=='%' )){
                input.value="error!!"
                strin=''
                input.val=strin
            }
            else if(e.target.innerHTML=='AC'){
                strin=''
                input.value=strin
            }
            else if(e.target.innerHTML=='DEL'){
                strin=strin.substring(0,strin.length-1)
                input.value=strin
            }
            else {
                strin+=e.target.innerHTML
                input.value=strin
            }

        })
})