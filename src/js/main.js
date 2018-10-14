const header = document.querySelector('.header'),
    SCROLL_ACTIVE = "header-bg";
const video = document.querySelector('.js-video'),
    VIDEO_MUTE = "mute-active",
    jsMuteBtn = document.querySelector('.js-mute');
const videoVolume = document.querySelector('.js-volume');
const playBtn = document.querySelector('.js-playBtn');

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

const handleVideoPlay = () => {
    if(video.paused){
        video.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    }else{
        video.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
};

const initVideo = () => {
    const muted = localStorage.getItem("muted");
    if(muted === "true"){
        video.muted = true;
        jsMuteBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    }else{
        video.muted = false;
        jsMuteBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    }
};

///local storage
const handleVideoMute = () => {
    const toggleClass = jsMuteBtn.classList;
    const toggleActive = toggleClass.toggle(VIDEO_MUTE);
    if(toggleActive){
        video.muted = true;
        jsMuteBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
        localStorage.setItem("muted", "true");
    }else{
        video.muted = false;
        jsMuteBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
        localStorage.setItem("muted", "false");
    }
};

initVideo();


const handleVideoVolume = event => {
    const {
        target: {value}
    } = event;
    video.volume = value;
    //video.volume = videoVolume.value / 100;
};

window.addEventListener('scroll', handleHeader);

///video
jsMuteBtn.addEventListener('click', handleVideoMute);
videoVolume.addEventListener('change', handleVideoVolume);
playBtn.addEventListener('click', handleVideoPlay);

