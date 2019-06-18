document.addEventListener('DOMContentLoaded', function(){
    const statusHeading = document.querySelector('.status');
    statusHeading.innerText = "SWITCH OFF THE LIGHT, IT'S BRIGHT!";
    const lightSwitch = document.querySelector('button');
    const body = document.querySelector('body');
  
    lightSwitch.addEventListener('click', flipSwitch);
  
    function flipSwitch(event) {
      if (event.target.classList.contains('on')) {
        event.target.classList.remove('on');
        event.target.classList.add('off');
        body.className = 'dark';
        statusHeading.innerText = "who turned off the light?";
      } else {
        event.target.classList.remove('off');
        event.target.classList.add('on');
        body.className = 'light';
        statusHeading.innerText = "It's too bright in here!";
      }
    }
  
  });
  

