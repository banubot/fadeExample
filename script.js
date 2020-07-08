//set event handlers for the whole page
document.onmouseover = handleOver;
document.onmouseout = handleOut;
let interval;

//start fading when mouse enters
function handleOver(event) {
  //only if its fade class
  if (event.target.className === 'fade') {
    interval = setInterval(() => setFade(event), 50);
  }
}

//reset when not hover
function handleOut(event) {
  clearInterval(interval);
  event.target.style.opacity = 1;
}

function setFade(event) {
  let opac = event.target.style.opacity;
  // set opac if unset
  if (opac === "") opac = 1;
  if (opac > 0) {
    //set actual value don't reassign var
    event.target.style.opacity = opac - 0.1;
  } else {
    clearInterval(interval);
  }
}