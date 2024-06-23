const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slid = document.querySelector('.slid');

const images = document.querySelectorAll(' .image')

let slideNumber = 1;
const length = images.length;

const nextSlide = () =>{
    slid.style.transform = `translateX(-${slideNumber*900}px)`;
    slideNumber++;
}

const prevSlide = () =>{
    slid.style.transform = `translateX(-${(slideNumber-2)*900}px)`;
    slideNumber--;
}

const getFirstSlide = () =>{
    slid.style.transform = `translateX(0px)`;
    slideNumber=1;
}

const getLastSlide = () =>{
    slid.style.transform = `translateX(-${(length-1)*900}px)`;
    slideNumber=length;
}

right.addEventListener('click',()=>{
    if(slideNumber < length){
         nextSlide();
    }else{
       getFirstSlide();
    };
    
});

left.addEventListener('click',()=>{
    if(slideNumber >1){
         prevSlide();
    }else{
       getLastSlide();
    };
    
});
