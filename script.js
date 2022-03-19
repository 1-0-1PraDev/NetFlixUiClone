console.log('working');
let acc = document.getElementsByClassName('accordianBtn');
for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let accordianBody = this.nextElementSibling;
        if(accordianBody.style.maxHeight){
            accordianBody.style.maxHeight = null;
        }else{
            accordianBody.style.maxHeight = accordianBody.scrollHeight + "px";
        }   
        console.log(accordianBody);

    });
}