



window.addEventListener('load', function() {
    const mediaQuery = window.matchMedia('(max-width: 470px)');
  
    function handleMediaQueryChange(event) {
      if (event.matches) {
        // Media query matches (max-width: 470px)
        gsap.from('.z', {
          x:-1100,
          duration:1,
          delay:.7,
          ease: "power2.inOut",
          stagger:.8
        });
      } else {
        // Media query doesn't match (max-width: 470px)
        gsap.from('.z', {
            x:50,
            y:-50,
            duration:1,
            delay:.7,
            ease: "power2.inOut",
            stagger:.8
        });
      }
    }
  
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
  });
//For Boxes)
  window.addEventListener('load', function() {
    const mediaQuery = window.matchMedia('(max-width: 470px)');
  
    function handleMediaQueryChange(event) {
      if (event.matches) {
        // Media query matches (max-width: 470px)
        gsap.from('.game', {
            x:-1200,
            opacity:0,
            duration:.1,
            delay:.5,
            ease: "power4.inOut", 
            scrollTrigger:{
                trigger:".game",
                scroller:"body",
                start:"top 10%",
                end:"bottom bottom"
            }
        
        });
      } else {
        // Media query doesn't match (max-width: 470px)
        gsap.from('.game', {
            x:-1200,
            opacity:0,
            duration:.1,
            delay:.5,
            ease: "power4.inOut", 
            scrollTrigger:{
                trigger:".game",
                scroller:"body",
                start:"top 10%",
                end:"bottom bottom"
            }
        
        });
      }
    }
  
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
  });

