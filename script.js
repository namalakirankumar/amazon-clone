const imgs = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelector('.control_prev');
const next_button = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
   for (let i= 0; i < imgs.length; i++) {
    imgs[i].style.display='none';
   }
   imgs[n].style.display='block';
}
changeSlide();

prev_button.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})

next_button.addEventListener('click',(e)=>{
    if(n<imgs.length-1)
    {
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('Products');
for(const i of scrollContainer){
    item.addEventListener('Wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    });
}






