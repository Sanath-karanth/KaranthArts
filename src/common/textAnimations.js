import React from 'react';
import anime from "animejs";

export function headerTextAnimation () {
  return(
      anime.timeline({loop: false})
        .add({
          targets: '.artanimation .word',
          scale: [12,1],
          opacity: [0,1],
          easing: "easeOutCirc",
          duration: 1500,
          delay: (el, i) => 1000 * i
        }).add({
          targets: '.artanimation',
          // opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        })
  )
}

export function otherAnimation () {
    return(
        anime.timeline({loop: false})
          .add({
            targets: '.artanimation .word',
            scale: [12,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 1500,
            delay: (el, i) => 1000 * i
          }).add({
            targets: '.artanimation',
            // opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          })
    )
  }