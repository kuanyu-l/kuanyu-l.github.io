$(function(){
    $('.m-navbar-toggler').click(
        function(){
            $('.m-menu-bg').removeClass('hide');
            $('.m-menu-bg').fadeIn();
            $('.m-menu').slideDown();
        }
    );
    $('.m-menu-header .cancel').click(
        function(){
            $('.m-menu-bg').fadeOut();
            $('.m-menu').slideUp();
            $('.m-drawer-wrapper, #m-menu--gift, #m-menu--cake, #m-menu--wedding').hide("ease");
            if($('.m-drawer-wrapper, #m-menu--gift,#m-menu--cake,#m-menu--wedding').is(':visible')){ 
                $('.m-dropdown-toggler, #m-toggler--gift, #m-toggler--cake, #m-toggler--wedding').removeClass("rotate-180deg"); 
            };
        }
    );
    $('#m-toggler--about').click(
        function(){
            $(this).toggleClass("rotate-180deg");
            $('#m-drawer--about').toggle("ease");
            $('#m-drawer--allgoods, #m-menu--gift, #m-menu--cake, #m-menu--wedding').hide("ease");
            if($('#m-drawer--allgoods, #m-menu--gift,#m-menu--cake,#m-menu--wedding').is(':visible')){ 
                $('#m-toggler--allgoods, #m-toggler--gift, #m-toggler--cake, #m-toggler--wedding').removeClass("rotate-180deg"); 
            };
        }
    );
    $('#m-toggler--allgoods').click(
        function(){
            $(this).toggleClass("rotate-180deg");
            $('#m-drawer--allgoods').toggle("ease");
            $('#m-drawer--about, #m-menu--gift, #m-menu--cake, #m-menu--wedding').hide("ease");
            if($('#m-drawer--about, #m-menu--gift,#m-menu--cake,#m-menu--wedding').is(':visible')){ 
                $('#m-toggler--about, #m-toggler--gift, #m-toggler--cake, #m-toggler--wedding').removeClass("rotate-180deg"); 
            };
        }
    );
    $('#m-toggler--gift').click(
        function(){
            $(this).toggleClass("rotate-180deg");
            $('#m-menu--gift').toggle("ease");
            $('#m-menu--cake,#m-menu--wedding').hide("ease");
            if($('#m-menu--cake,#m-menu--wedding').is(':visible')){ 
                $('#m-toggler--cake, #m-toggler--wedding').removeClass("rotate-180deg"); 
            };
        }
    );
    $('#m-toggler--cake').click(
        function(){
            $(this).toggleClass("rotate-180deg");
            $('#m-menu--cake').toggle("ease");
            $('#m-menu--gift,#m-menu--wedding').hide("ease");
            if($('#m-menu--gift,#m-menu--wedding').is(':visible')){ 
                $('#m-toggler--gift, #m-toggler--wedding').removeClass("rotate-180deg"); 
            };
        } 
    );
    $('#m-toggler--wedding').click(
        function(){
            $(this).toggleClass("rotate-180deg");
            $('#m-menu--wedding').toggle("ease");
            $('#m-menu--gift,#m-menu--cake').hide("ease");
            if($('#m-menu--gift,#m-menu--cake').is(':visible')){ 
                $('#m-toggler--gift, #m-toggler--cake').removeClass("rotate-180deg"); 
            };
        }
    );
})