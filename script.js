// JavaScript
const show = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer = new IntersectionObserver(show);
observer.observe(document.querySelector('#img01'));

const show2 = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['-200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer2 = new IntersectionObserver(show2);
observer2.observe(document.querySelector('#img02'));

const show3 = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['0 200px',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer3 = new IntersectionObserver(show3);
observer3.observe(document.querySelector('#img03'));