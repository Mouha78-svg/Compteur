const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click",(e) => {
        const styles = e.currentTarget.classList;
       if(styles.contains('aug')){
        count++;
       }else if(styles.contains('dim')){
         count--;
       }else {
         count = 0;
       }
       
       if(count > 0 ){
           value.style.color = "green";
        }
        if(count < 0 ){
            value.style.color = "red";
        }
        if(count === 0 ){
            value.style.color = "#fff";
        }
        value.textContent = count;

    })
})
