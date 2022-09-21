import throttle from 'lodash.throttle'; 
import Player from '@vimeo/player'; 

const iframe = document.querySelector('iframe');
const player = new Player(iframe); 

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(() => {
  player.getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(LOCALSTORAGE_KEY, seconds); 
    });
}, 1000)); 

player.on('loaded', () => {
  const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime)
}
});