const header = document.querySelector('.header'),
    SCROLL_ACTIVE = "header-bg";
const video = document.querySelector('.js-video'),
    VIDEO_MUTE = `<i class="fas fa-volume-mute"></i>`,
    jsMuteBtn = document.querySelector('.js-mute');

video.autoplay = true;

const handleHeader = () => {

    if(window.scrollY > 100){
        header.classList.add(SCROLL_ACTIVE);
        video.pause();
    }else{
        header.classList.remove(SCROLL_ACTIVE);
        video.play();
    }
};

const handleVideoMute = () => {
    const toggleClass = jsMuteBtn.classList;
    toggleClass.toggle
    if(video.muted){
        console.log('hi');
    }else{
        console.log('no');
    }
};

window.addEventListener('scroll', handleHeader);
jsMuteBtn.addEventListener('click', handleVideoMute);

