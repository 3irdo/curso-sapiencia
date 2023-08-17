
const lg = document.querySelectorAll('.logo');
const bgFulled = document.querySelectorAll('.bg_imgs');

function bgFuller (bgf) {
  const bgTarget = bgf.target;
  if(bgTarget.classList.contains('bg_imgs')) {
    bgTarget.classList.toggle('full');
  }
}

function fuller(event) {
  const targetElement = event.target;
  
  if (targetElement.classList.contains('logo')) {
    targetElement.classList.toggle('hidden');
    const bgImgParent = targetElement.closest('.bg_imgs');
    if (bgImgParent) {
      bgImgParent.classList.toggle('full');
    }
  }
}

bgFulled.forEach(function(bg){
  bg.addEventListener('click', bgFuller)
});


lg.forEach(function(logo) {
  logo.addEventListener('click', fuller);
  
  logo.addEventListener('mouseover', function(event) {
    event.target.style.opacity = '1';
  });
  
  logo.addEventListener('mouseout', function(event) {
    event.target.style.opacity = '0';
  });
});

