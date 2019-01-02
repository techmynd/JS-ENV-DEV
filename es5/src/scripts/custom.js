// Custom JS File - All Custom JS Code Goes Here
////////////////////////////////////////////////

// Document Ready //////////////
$(document).ready(function () {

    // add classes and elements to and around dropdowns
    /*
    $('.nav-list > li > ul').closest('li').addClass('sub-menu-wrap');
    $('.nav-list > li > ul').addClass('sub-menu');
    $('.sub-menu').prev('a').addClass('sub-menu-adjacent-link');
    $('.sub-menu-wrap').prepend("<span class='dropdown-arrow'><i class='fa fa-angle-down fa-fw'></i></span>");
    */

    // menu control
    // menuControl();
    
    // home carousel for products
    $('.owl-carousel').fadeIn();
    $('#home-owl-products').owlCarousel({
        items: 5,
        loop:true,
        margin:10,
        nav:true,
        mouseDrag:true,
        touchDrag:true,
        pullDrag:true,
        dots:false,
        autoplay:false,
        autoplayHoverPause:true,
        navText: ["<img src='assets/images/previmage.png'>","<img src='assets/images/nextimage.png'>"],

        // effects //

        // for fade instead of slide, enable below line
        // animateOut: 'fadeOut',

        // flip animation // 2 lines below
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',

        responsive:{
            0:{
                items:2,
                dots:false
            },
            600:{
                items:3,
                dots:false
            },
            1000:{
                items:5,
                dots:false
            }
        }
    });


    // move to top
    $('.trigger-top-wrap').click(function(){
        $('html, body').animate({scrollTop: $("body").offset().top}, 1000,'easeInOutExpo');
    });

    /*
    $('.small-menu-trigger').click(function(){
        $('.main-navigation').toggle();
        $('body').toggleClass('mobile-menu-up');
    });
    $('.close-nav .icon').click(function(){
        $('.main-navigation').hide();
        $('body').removeClass('mobile-menu-up');
    });
    */


    /*
    //// sidebar filter box Collapsable 
    $(".filter-block-wrap .filter-title").on('click', function(event){
        event.preventDefault();
        $(this).closest('.filter-block-wrap').find('.filter-block').stop().slideToggle('fast');
        $(this).closest('.filter-block-wrap').find('.filter-title .fa').stop().toggleClass('fa-angle-down fa-angle-up');
    });
    
    // filter block list label active class toggle
    $('.filter-block ul li label').click(function(){
        $(this).closest('ul').find('li label').stop().removeClass('active');
        $(this).addClass('active');
    });
    */



});

// Window Load //////////////
$(window).on('load',function () {
    //menuControl();
});

// Window Resize /////////////
$(window).resize(function () {
    //menuControl();
});














/////////////////// MENU ////////////////
/////////////////////////////////////////
function menuControl(){

    // alt classes // .not-mobile and .is-mobile
    // detect if its iDevice or if window width is less than 1024 
    // only then show hover behavior otherwise add class (is-mobile) and collapse menu
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

    // this unbind for all bindings is necessary otherwise menu won't work properly    
    
    /*
    $('.sub-menu-wrap').unbind();
    $('.sub-menu-wrap').unbind();
    $('.sub-menu-wrap .dropdown-arrow').unbind();
    */
    
    if (agentID || $(window).width() <= 1024) {

        // mobile code here // .is-mobile
        $('body').addClass('is-mobile').removeClass('not-mobile');
        
        /*
        $('.main-navigation').removeAttr('style');
        $('.sub-menu').removeAttr('style');
        */
        
       /*
       $('.is-mobile .sub-menu-wrap .dropdown-arrow').on('click',function(){
            $(this).closest('.sub-menu-wrap').find('.sub-menu').stop().toggleClass('opened').slideToggle();
            $(this).closest('.sub-menu-wrap').find('.dropdown-arrow .fa').stop().toggleClass('fa-angle-down fa-angle-up');
        });
       */

        /*
       // scrollbar in mobile view
        var instances = OverlayScrollbars(document.querySelectorAll(".main-navigation"), {
            //className: "os-theme-dark",
            //className: "os-theme-block-dark",
            // className: "os-theme-round-dark",
            className: "os-theme-thick-dark",
            resize: "none",
            sizeAutoCapable: true,
            clipAlways: true,
            normalizeRTL: true,
            paddingAbsolute: false,
            autoUpdate: null,
            autoUpdateInterval: 33, 
            nativeScrollbarsOverlaid: {
            showNativeScrollbars: false,
            initialize: true 
            },
            overflowBehavior : {
              x : "hidden",
              y : "scroll"
            },
            scrollbars : {
              visibility       : "auto",
              autoHide         : "never",
              autoHideDelay    : 800,
              dragScrolling    : true,
              clickScrolling   : false,
              touchSupport     : true
            },
            textarea : {
              dynWidth  : false,
              dynHeight : false
            },
            callbacks : {
              onInitialized               : null,
              onInitializationWithdrawn   : null,
              onDestroyed                 : null,
              onScrollStart               : null,
              onScroll                    : null,
              onScrollStop                : null,
              onOverflowChanged           : null,
              onOverflowAmountChanged     : null,
              onDirectionChanged          : null,
              onContentSizeChanged        : null,
              onHostSizeChanged           : null,
              onUpdated                   : null
            }      
        }); 
        */


        /*
        // only mobile // clickable hidden link
        $(".product-wrapper .product-image").click(function() {
            window.location = $(this).closest('.product-wrapper').find(".product-link-hidden").attr("href"); 
            return false;
        });
        */

        
        // destroy sticky sidebar in mobile
        // stickySidebar.destroy();
        




        //// mobile ends here
    } else {
        //// regular screen starts here



        // not mobile or ipad // .not-mobile
        //////////////////////////////////////////////////////////////////////
        $('body').removeClass('is-mobile').addClass('not-mobile');
        $('body').removeClass('mobile-menu-up');

        //$('.main-navigation').removeAttr('style');
        //$('.sub-menu').removeAttr('style');

        $('.sub-menu-wrap .dropdown-arrow .fa').removeClass('fa-angle-up').addClass('fa-angle-down');

        /*
        //destroy scrollbar instance
        var instance = OverlayScrollbars(document.querySelectorAll(".main-navigation"));
        if(instance) {
            instance.destroy();
        }
        */




        /*
        $('.not-mobile .sub-menu-wrap').on('mouseenter',function(){
            $(this).find('.sub-menu').stop().show().addClass('opened');
        });
        $('.not-mobile .sub-menu-wrap').on('mouseleave',function(){    
            $(this).find('.sub-menu').hide().removeClass('opened');
        });
        */


       
        /*
        // sticky sidebar // only for desktop
        var stickySidebar = new StickySidebar('.sidebar', {
            topSpacing: 150,
            bottomSpacing: 40,
            //containerSelector: false,
            containerSelector: '.sidebar-wrap',
            innerWrapperSelector: '.sidebar__inner',
            // resizeSensor: true,
            stickyClass: 'is-affixed',
            minWidth: 0
        });

        // onclick sidebar filters update sticky
        $('.filter-block-wrap .filter-title').click(function(){
            stickySidebar.updateSticky();

            setTimeout( function(){ 
                stickySidebar.updateSticky();
            }, 3000);
            
        });
        */








    }
}

