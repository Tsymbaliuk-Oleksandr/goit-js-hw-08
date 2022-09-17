import throttle from 'lodash.throttle'; 
import Player from '@vimeo/player'; 


const iframe = document.querySelector('iframe');
const player = new Player(iframe); 

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(function () {

  player
    .getCurrentTime()
    .then(function (seconds) {

      localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    }) 
    .catch(function (error) {

      console.error('Get state error: ', error.message);
    });
}, 1000)); 

player.on('loaded', function () {
  const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {
      console.log(seconds);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
});
