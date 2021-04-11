AOS.init({
    duration: 1200,
})

$('select').select2();


//owl carousel
$('.owl-carousel.main-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    dots:false,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,  
});

$('.owl-carousel.ads-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    smartSpeed: 1200,
    dots:true,
    nav: false,
    // navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,  
});

$('.owl-carousel.latestWorks').owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    smartSpeed: 1200,
    dots:false,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,  
    responsive : {
      992 : {
          items: 2,
          loop: false,
          autoplay: false
      },

      768 : {
          items: 1,
          loop: false,
          autoplay: false
      },
      
      0 : {
          items: 1,
          loop: false,
          autoplay: false
      }
    }
});
 
$('.owl-carousel.clients').owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    smartSpeed: 1200,
    dots:false,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,  
    responsive : {
        992 : {
            items: 4
        },

        768 : {
            items: 3
        },
        
        0 : {
            items: 1
        }
    }
});

// slider of team section
$('.whatsnew .owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive : {
        992 : {
            items: 3
        },

        768 : {
            items: 2
        },
        
        0 : {
            items: 1
        }
    }
    
});


$('.owl-carousel.awards').owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 650,
    dots:false,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive : {
        992 : {
            items: 3
        },

        768 : {
            items: 2
        },
        
        0 : {
            items: 1
        }
    }
});

$('.owl-carousel.brochures').owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 650,
    dots:true,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive : {
        992 : {
            items: 3
        },

        768 : {
            items: 2
        },
        
        0 : {
            items: 1
        }
    }
});

$('.owl-carousel.contactus').owlCarousel({
    items: 1,
    loop: false,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    dots:true,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
});

$('.owl-carousel.process').owlCarousel({
    items: 2,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 650,
    dots:false,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive : {
        992 : {
            items: 2
        },

        768 : {
            items: 1
        },
        
        0 : {
            items: 1
        }
    }
});

$('.owl-carousel.benefits').owlCarousel({
    items: 2,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 650,
    dots:true,
    nav: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive : {
        992 : {
            items: 2
        },

        768 : {
            items: 1
        },
        
        0 : {
            items: 1
        }
    }
});

var win = $(window);
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        if (wScrollTop > 150) {
            $(".fixedbar").addClass("shrink");
        } else {
            $(".fixedbar").removeClass("shrink");
        }
});


if ($(window).width() <= 768)
{
  var topnav = $('.topnav');
  topnav.appendTo( "#navbarNav" );
  // alert($(window).width())

}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$("[data-trigger]").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id =  $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
}); 

$(".offcanvas-close, .screen-overlay").click(function(e){
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 


$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 1000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  }); 

});

//custom upload file..

$("form").on("change", ".file-upload-field", function(){ 
  $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, '') );
});

class BeerSlider {
    constructor(element, { start = "50", prefix = "beer" } = {}) {
      this.start = parseInt(start)
        ? Math.min(100, Math.max(0, parseInt(start)))
        : 50;
      this.prefix = prefix;
      if (!element || element.children.length !== 2) {
        return;
      }
      this.element = element;
      this.revealContainer = this.element.children[1];
      if (this.revealContainer.children.length < 1) {
        return;
      }
      this.revealElement = this.revealContainer.children[0];
      this.range = this.addElement("input", {
        type: "range",
        class: `${this.prefix}-range`,
        "aria-label": "Percent of revealed content",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": this.start,
        value: this.start,
        min: "0",
        max: "100"
      });
      this.handle = this.addElement("span", {
        class: `${this.prefix}-handle`
      });
      this.onImagesLoad();
    }
    init() {
      this.element.classList.add(`${this.prefix}-ready`);
      this.setImgWidth();
      this.move();
      this.addListeners();
    }
    loadingImg(src) {
      return new Promise((resolve, reject) => {
        if (!src) {
          resolve();
        }
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
      });
    }
    loadedBoth() {
      const mainImageSrc =
        this.element.children[0].src ||
        this.element.children[0].getAttribute(`data-${this.prefix}-src`);
      const revealImageSrc =
        this.revealElement.src ||
        this.revealElement.getAttribute(`data-${this.prefix}-src`);
      return Promise.all([
        this.loadingImg(mainImageSrc),
        this.loadingImg(revealImageSrc)
      ]);
    }
    onImagesLoad() {
      if (!this.revealElement) {
        return;
      }
      this.loadedBoth().then(
        () => {
          this.init();
        },
        () => {
          console.error("Some errors occurred and images are not loaded.");
        }
      );
    }
    addElement(tag, attributes) {
      const el = document.createElement(tag);
      Object.keys(attributes).forEach((key) => {
        el.setAttribute(key, attributes[key]);
      });
      this.element.appendChild(el);
      return el;
    }
    setImgWidth() {
      this.revealElement.style.width = getComputedStyle(this.element)["width"];
    }
    addListeners() {
      const eventTypes = ["input", "change"];
      eventTypes.forEach((i) => {
        this.range.addEventListener(i, () => {
          this.move();
        });
      });
      window.addEventListener("resize", () => {
        this.setImgWidth();
      });
    }
    move() {
      this.revealContainer.style.width = `${this.range.value}%`;
      this.handle.style.left = `${this.range.value}%`;
      this.range.setAttribute("aria-valuenow", this.range.value);
    }
  }
  
new BeerSlider(document.getElementById("slider1"));
  