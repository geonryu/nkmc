const $btnOpn = document.querySelector(".btn-menu-opn button");
const $nav = document.querySelector("nav");
$btnOpn.addEventListener("click", () => {
    $nav.classList.toggle("extend");
    $btnOpn.classList.toggle("active");
});
const slideUp = (target, duration = 400) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}
const slideDown = (target, duration = 400) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none') display = 'block';

    target.style.display = display;
    const height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
const slideToggle = (target, duration = 400) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

// const targetId = document.getElementById("target");
const $navis = document.querySelectorAll(".navi");
const $subItems = document.querySelectorAll(".navi .sub");
$navis.forEach((navi, i) => {
    navi.addEventListener("click", () => {
        if(window.innerWidth < 1200) {
            navi.classList.toggle("active");
            $subItems.forEach((sub, j) => {
                if (i !== j) {
                    slideUp(sub, 400)
                }
            });
            slideToggle($subItems[i], 400);
        }
    });
    // navi.addEventListener("mouseover", () => {
    //     if(window.innerWidth >= 1200) {
    //         slideDown($subItems[i], 400);
    //     }
    // });
    // navi.addEventListener("mouseout", () => {
    //     if(window.innerWidth >= 1200) {
    //         slideUp($subItems[i], 400);
    //     }
    // });
});