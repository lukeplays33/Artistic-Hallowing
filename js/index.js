let elem = document.getElementById('video');

elem.volume = '1';

elem.onclick = function () {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
}

elem.onplaying = function () {
    
}