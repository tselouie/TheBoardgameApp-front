import gsap from "gsap";

class Animator {
    animate(){
        let tl = gsap.timeline();
        tl.set(".animator", { 
            opacity: 0, 
            css: {marginTop: 50}
        });
        tl.to(".animator", {
            duration: 0.4,
            opacity: 1,
            css: {marginTop: 0},
            stagger: 0.07
        });
    }
}
export default new Animator()