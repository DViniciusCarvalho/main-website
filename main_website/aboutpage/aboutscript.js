const targets = document.querySelectorAll('[data-anime]');

const animateByScroll = () => {
    const windowHeight = window.innerHeight;
    const window_Y_distance = window.pageYOffset + windowHeight * 0.75;
    targets.forEach((element) => {
        if(window_Y_distance > element.offsetTop){
            element.classList.add('animate')
        }
        else{
            element.classList.remove('animate')
        }
    })
}

const debounce = (func, wait, immediate) => {
    let timeout;
    return function (...args) {
       const context = this;
       const later = () => {
        timeout = null;
        if(!immediate){func.apply(context, args);}
       }
       const callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if(callNow){func.apply(context, args);}
    }
}

window.addEventListener('scroll', debounce(() => {
    animateByScroll()
}, 200));