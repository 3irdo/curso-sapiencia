// audio ------------------------------------------
  
window.onload = () => {
  var sound = new Howl({
    src: ['/audio/Where The Brave May Live Forever - Viking Background Music.ogg'],
    volume:0.5,
    onload: function() {
      sound.play();

      const wrappers = document.querySelectorAll('.bg_imgs');

      wrappers.forEach((wrapper, index) => {
        gsap.from(wrapper, {
          height: "0",
          duration: 0.5,
          ease: 'power2.out',
          delay: index * 0.4,
          onComplete: () => {
            gsap.to(wrapper, {
              height: "100vh",
              duration: 0.5,
              ease: 'power2.out',
            })
          }
        });
      });
    }
  });
};


const lg = document.querySelectorAll(".logo");
const bgFulled = document.querySelectorAll(".bg_imgs");

// aplica la clase full a las clases bg_imgs  al dar click en el contenedor o elemento logo y si es click en este último aplica la clase hidden

function bgFuller(bgf) {
  const bgTarget = bgf.target;
  const showInfo = bgTarget.querySelectorAll('.info_container');
  if (bgTarget.classList.contains("bg_imgs")) {
    bgTarget.classList.toggle("full");
  }

  if (bgTarget.classList.contains('full')) {
    showInfo.forEach(function(infoWrapper){
      infoWrapper.style.visibility = 'visible';
    });
  }  else {
    showInfo.forEach(function(infoWrapper) {
      infoWrapper.style.visibility = 'hidden';
    });
  }
    
  }



function fuller(event) {
  const targetElement = event.target;

  if (targetElement.classList.contains("logo")) {
    targetElement.classList.toggle("hidden");
    const bgImgParent = targetElement.closest(".bg_imgs");
    if (bgImgParent) {
      bgImgParent.classList.toggle("full");
    }
  }
}

bgFulled.forEach(function (bg) {
  bg.addEventListener("click", bgFuller);
});

lg.forEach(function (logo) {
  logo.addEventListener("click", fuller);

  logo.addEventListener("mouseover", function (event) {
    event.target.style.opacity = "1";
  });

  logo.addEventListener("mouseout", function (event) {
    event.target.style.opacity = "0";
  });

});






// cambia el color de fondo de los span dentro de la clase plataforma dependiendo de su texto

function plataformBg() {
  const plataform = document.querySelectorAll(".plataforms");

  for (let i = 0; i < plataform.length; i++) {
    const plataformElement = plataform[i];
    const spanInside = plataformElement.querySelectorAll("span");

    for (let j = 0; j < spanInside.length; j++) {
      const spanElement = spanInside[j];

      if (spanElement.textContent.includes("PS4")) {
        spanElement.style.backgroundColor = "#0278fe";
      }

      if (spanElement.textContent.includes("PS5")) {
        spanElement.style.backgroundColor = "#000";
      }

      if (spanElement.textContent.includes("Xbox")) {
        spanElement.style.backgroundColor = "#107c0f";
      }

      if (spanElement.textContent.includes("Xbox One")) {
        spanElement.style.backgroundColor = "#03b44b";
      }

      if (spanElement.textContent.includes("PC")) {
        spanElement.style.backgroundColor = "#7c7c7c";
      }

      if (spanElement.textContent.includes("STADIA")) {
        spanElement.style.backgroundColor = "#eb7a5f";
      }
    }
  }
}

plataformBg();
