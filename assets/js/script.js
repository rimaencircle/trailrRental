$(document).ready(function () {
    
        // code here
          
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.tr-header').addClass('is-sticky');
                $('body').addClass('is-sticky');
            } else {
                $('.tr-header').removeClass('is-sticky');
                $('body').removeClass('is-sticky');
            }
        });
        $('p').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
              $this.remove();
          });
          $('p span').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
              $this.remove();
          });
          
        // accordian list
        // $('.accordion-list > li > .accordian-toggle').hide();
            $('.accordion-list > li').click(function() {
                if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".accordian-toggle").slideUp();
                } else {
                $(".accordion-list > li.active .accordian-toggle").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".accordian-toggle").slideDown();
                }
                return false;
            });
    

   
    
        // mobile toggle menu
        $('.toggle_btn').click(function () {
            $(this).toggleClass('active');
            $('.accordian-menu').toggleClass('open');
            $('html').toggleClass('overflow-hidden');
        });
        // mobile toggle menu end
    
        // animation start
        const textAnim = gsap.utils.toArray('.textAnim');
        textAnim.forEach((box, i) => {
            const textanim = gsap.fromTo(box.children, { y: '50px', opacity: 0 ,autoAlpha:0, transition: 'all 500ms cubic-bezier(0.23, 0.93, 0.23, 0.93)',}, { duration: 0.5, y: 0, opacity: 1 ,stagger: 1,autoAlpha:1});
            ScrollTrigger.create({
                trigger: box,
                animation: textanim,
                once: false,
            });
        });
        const zoomAnim = gsap.utils.toArray('.zoomAnim');
        zoomAnim.forEach((box, i) => {
            const zoomanim = gsap.to(box,0.5, { scale: 1.001});
            ScrollTrigger.create({
                trigger: box,
                ease: 'power2.in',
                animation: zoomanim,
                once: false,
            });
        });

        const minus = $('.quantity__minus');
        const plus = $('.quantity__plus');
        const input = $('.quantity__input');
        minus.click(function(e) {
            e.preventDefault();
            var value = input.val();
            if (value > 1) {
            value--;
            }
            input.val(value);
        });
        
        plus.click(function (e) {
            e.preventDefault();
            var value = input.val();
            value++;
            input.val(value);
        });
});

