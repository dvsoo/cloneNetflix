
const handleHeader = () => {
    const header = document.querySelector('.header'),
        SCROLL_ACTIVE = "header-bg";
    
    if(window.scrollY > 100){
        header.classList.add(SCROLL_ACTIVE);
    }else{
        header.classList.remove(SCROLL_ACTIVE);
    }
};

window.addEventListener('scroll', handleHeader);