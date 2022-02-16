let a = document.querySelectorAll('.button')
for(let btn of a){
    btn.addEventListener('click',function(){
          let btnres = this.innerHTML;
          if(btnres == 'AC'){
            document.querySelector('.screen').innerHTML = ''
          }else if(btnres == 'C'){
            let clearone = document.querySelector('.screen').innerHTML;
            clearone = clearone.slice(0,-1);
            document.querySelector('.screen').innerHTML = clearone
        }else if(btnres == '='){
            let result = document.querySelector('.screen').innerHTML
            result = eval(result)
            document.querySelector('.screen').innerHTML  = result 
        }else{
            document.querySelector('.screen').innerHTML += btnres;
          }
    })
}