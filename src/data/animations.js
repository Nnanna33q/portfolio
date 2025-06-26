import { animate } from "framer-motion";

export function animateBars(bar1, bar2, bar3) {
    animate(bar1, {
        rotateZ: '-45deg',
    })
    animate(bar2, {
        width: '3rem',
        opacity: 1,
        scaleX: 0.75
    })
    animate(bar3, {
        rotateZ: '45deg',
    })
}

export function reverseAnimateBars(bar1, bar2, bar3) {
    animate(bar1, {
        rotateZ: 0,
    })
    animate(bar2, {
        x: 0,
        opacity: 0,
        width: '1rem'
    })
    animate(bar3, {
        rotateZ: 0,
    })
}