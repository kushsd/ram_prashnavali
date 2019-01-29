var winHeight = "";
var rightColHeight = "";
var leftColHeight = "";
var footerHeight = "";
var docHeight = "";
var adBannerHeight = "";
var scrollableHeight = "";
var smallRightBar = "";
var wdContent = "";
var pageScroll = "";
var lftContentHeight="";
var menuHeight = $(window).height();

	/*Ramcharitmanas*/
function changeFontSize(x){
	var fontToApply = "font"+x;
	document.getElementById("ram").className = fontToApply;
	document.getElementById("tabTitle").className = "selectedTab";
}

function adjustBorder(){
		reqH=$("#horizontal_listing").height();
		//console.log($("#horizontal_listing .top_wrapper_bdr").height());
		$("#horizontal_listing").children().css("padding-bottom","0px");
		$("#horizontal_listing").children().find(".bottom_wrapper_bdr").css("height",(reqH-1)+"px");
		$("#horizontal_listing .bottom_wrapper_bdr").last().css("display","none");
		rowElement = $(".threeBlockNews").children().find(".row");
		for(i=0;i<rowElement.length;i++){
			border = $(rowElement[i]).children().find(".bottom_wrapper_bdr");
			$(border).height($(rowElement[i]).height()-40);
		}
		greatestHeight = 0;
		if($(document).width()>1000){
		$(".artListingWithImage").find(".col-md-6").each(function(){
			if($(this).height()>greatestHeight){
				greatestHeight = $(this).height();
			}
			}).height(greatestHeight);
		}
}

/*font increase & dicrease on consumption*/
function decreaseTextSize(){
	curSize= parseInt($('.aricleBodyMain  *').css('font-size')) - 1;
	$("#incfont img").css("opacity", "1");
	if(curSize<13){
		$('#decfont img').prop("onclick", false);
		$("#decfont img").css("opacity", "0.3");
	}
	if(curSize>=13){
	  	$('.aricleBodyMain').css('font-size', curSize);
		$('.aricleBodyMain *').css('font-size', curSize);
	}
}

function increaseTextSize(){
	curSize= parseInt($('.aricleBodyMain *').css('font-size')) + 1;
	$("#decfont img").css("opacity", "1");
	if(curSize>21){
		$("#incfont img").prop("onclick", false);
	        $("#incfont img").css("opacity", "0.3");
	}
	if(curSize<=21){
		$('.aricleBodyMain').css('font-size', curSize);
		$('.aricleBodyMain *').css('font-size', curSize);
	}
}


// JavaScript Document
function rightbarScroll(){
	// right sidebar moving script //
	 winHeight = $(window).height();
	 rightColHeight = $('.rgtContainer').height();
	 leftColHeight =$('.lftContainer').height();
	 footerHeight = $('.footerMain').outerHeight();
	 docHeight = $(document).innerHeight();
	 adBannerHeight = $('.adBannerBlock').outerHeight()+ 160;
	 scrollableHeight = rightColHeight + 160 - winHeight;
	 smallRightBar = rightColHeight+100;
	 wdContent = docHeight - (footerHeight + winHeight + adBannerHeight);
	 pageScroll;
	 lftContentHeight=($(".lftContainer").height())-400;//left side bar height
	$(window).scroll(function() {
		 pageScroll = $(window).scrollTop();	
		 
		if (pageScroll <= scrollableHeight && rightColHeight < leftColHeight) {
			$(".rgtContainer").removeClass("fixSidebar").removeClass('activeSidebar');	
			//console.log('condition 1: normal scrolling');
		}else if(pageScroll >= wdContent && rightColHeight < leftColHeight && smallRightBar >= winHeight){
			$(".rgtContainer").removeClass("fixSidebar").addClass('activeSidebar');	
			//console.log('condition 3: rightbar attached with footer');			
		}else if(pageScroll <= wdContent && pageScroll >= scrollableHeight  && rightColHeight < leftColHeight && smallRightBar >= winHeight){
			$(".rgtContainer").addClass("fixSidebar").removeClass('activeSidebar');	
			//console.log('condition 2: rightbar fixed with scroll');	
		}else if(pageScroll >= wdContent && (rightColHeight >=leftColHeight )){
			$(".rgtContainer").removeClass("fixSidebar").removeClass('activeSidebar');
			//console.log('condition 4: rightbar is large then content');	
		}			
	});
	}
	
	// right sidebar moving script end //
	/*hover on caption and show discription*/
	
	$(document).ready(function() {
	$('.box').mouseenter(function(){
			$('.caption').stop().animate({padding: "0 3% 8% 3%"});
			$('.caption p').css('visibility', 'visible').fadeIn(); ;
		
		
    });	
    
    $('.box').mouseleave(function(){
			
			$('.caption').stop().animate({padding: "0 3% 3% 3%"},  800, function() {
				
			});
		$('.caption p').css('visibility', 'hidden').fadeOut();	
    });
	});
	/*hover on caption and show discription end*/
	
	
/*search Drop box */
$(function(){
  var $searchlink = $('#searchtoggl i');
  var $searchbar  = $('#searchbar');  
  /*Serach bar toggle function*/
  $(document).on('click', function (e) {
        if ($(e.target).closest("#searchtoggl").length) {
			  if(!$searchbar.is(":visible")) { 
				// if invisible we switch the icon to appear collapsable
				$searchlink.removeClass('fa-search').addClass('fa-close');
				$searchbar.slideDown(300);
			  } else {
				// if visible we switch the icon to appear as a toggle
				$searchlink.removeClass('fa-close').addClass('fa-search');
				$searchbar.slideUp(300);
			  }
			  
			  
			
        } else if (!$(e.target).closest("#searchbar").length) {
			clickedON = e.toElement;
			clickedOnCLass = $(clickedON).attr("class");
			var patt = new RegExp("ita-ppe");
			var res = patt.test(clickedOnCLass);
			if(!res){
				$searchlink.removeClass('fa-close').addClass('fa-search');
				
				$searchbar.slideUp(300);
			}
		}
    });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });




	/* --in mobile make accordina --*/
	function menuOpenClose(){
	if($(window).width()<740){
			$(".overlay").css("height",menuHeight-49);
			if($("#nav-toggle").hasClass("active")){
				$("#nav-toggle").removeClass("active btn-open btn-close");
				$(".overlay").removeClass("newOverlay").css("display","none;");
				$(".menu").css("width","0px");				
				$("body").css("overflow","auto");		
				
			}else{
				$("#nav-toggle").addClass("active btn-open btn-close");
				$(".overlay").addClass("newOverlay").css("display","block;");
				var reqWidth = parseInt($(".menuWidth").width())-30;
					//console.log(reqWidth);
				//$(".menu").css("width",((screen.width)*0.954 -1)+"px");
				//console.log(((screen.width)*0.954-1));
				reqWidth = reqWidth/1.5;
				//console.log(reqWidth);
				$(".menu").css("width",reqWidth+"px");
				$("#nav-toggle").find("i").removeClass('fa-angle-up').addClass("fa-angle-down");
				$("body").css("overflow","hidden");		
			}
		
	}else{
			$(".overlay").removeClass("newOverlay").hide().css("width","0px").css("background","white");
				if($("#nav-toggle").hasClass("active")){
					$(".overlay").addClass("newOverlay").css("width","0px").css("background","white");
					$("#nav-toggle").removeClass("active btn-open btn-close");	
				}else{
					$("#nav-toggle").addClass("active btn-open btn-close");	
					var reqWidth = parseInt($(".menuWidth").width())-30;
					//console.log(reqWidth);
					$(".overlay").addClass("newOverlay").show().css("width",reqWidth+"px").css("background","rgba(51,51,51,1)");
				}
	}
	}//menu open close function ends here
	
	/*close menu on document click*/
	$(document).on('click', function (e) {
        if ($(e.target).closest('#nav-toggle').length) {
			$("#menuOverlay").toggleClass("active");
			//$("body").toggleClass("no-scroll");
            menuOpenClose();
        } else if (!$(e.target).closest(".overlay.newOverlay").length) {
			$("body").removeClass("no-scroll");
			$("#menuOverlay").removeClass("active");
            $("#nav-toggle").removeClass("active btn-open btn-close");
				$(".overlay").removeClass("newOverlay").css("display","none;");
				$("#nav-toggle").find("i").removeClass('fa-angle-up').addClass("fa-angle-down");
				$(".menu").css("width","0px");
				$("body").css("overflow","auto");	
        }
    });
	
if($(window).width() <760){
	$(".mainMenuList").on("click",function(){
		var ielement = $(this).find("i");
			if($(ielement).hasClass("fa-angle-down")){
				var closeElement = $(".menu").find(".fa-angle-up")
				$(closeElement).removeClass("fa-angle-up").addClass('fa-angle-down');
				$(closeElement).parent().find("ul").slideUp("300");
				$(this).find("i").removeClass("fa-angle-down").addClass('fa-angle-up current');
				//$(this).find("ul").css("display","block");
				$(this).find("ul").slideDown("300");
			}else{
				$(this).find("i").removeClass("fa-angle-up").removeClass("current").addClass('fa-angle-down');
				$(this).find("ul").slideUp("300");
			
			}
			
	});
	}
	
	
	
	
	
	/*footer up down script*/
	var footerMenuStatus = 0;
	$(".upBtn").click(function(){
		if(footerMenuStatus == 0){
			$(".footerLinks").slideUp();
			$(".upBtn .fa-caret-up").addClass("fa-caret-down");
			$(".upBtn .fa-caret-up").removeClass("fa-caret-up");
			footerMenuStatus = 1;
		}else{
			$(".footerLinks").slideDown();
			$(".upBtn .fa-caret-down").addClass("fa-caret-up");
			$(".upBtn .fa-caret-down").removeClass("fa-caret-down");
			footerMenuStatus = 0;
		}
	});
	
	/*footer sub link open by click plus sign*/
		$(".footerLinks dd > i").click( function(){
			$(this).parent().siblings('dd').children('i').removeClass("minus");
			$(this).parent().siblings('dd').children('i').addClass("plus");			
			$(this).parent().siblings('dd').children('ul').removeClass("open");
			$(this).siblings('ul').toggleClass("open");
			$(this).toggleClass("minus");
		});
		$(".footerLinks dt > i").click( function(){
			$(this).parent().siblings('dd').toggleClass('active');
			if($(this).parent().siblings('dd').hasClass('active')){
				$(this).parent().siblings('dd').slideUp("slow");
				}else{
			$(this).parent().siblings('dd').slideToggle("slow");
			$(this).toggleClass("minus");
				}
		});
		
	/*	$(document).ready(function(){
			$(".footerLinks .owl-item").on(click,function(){
				var clickIElement = $(".footerLinks .owl-item").find("i");
					if($(clickIElement).hasClass("plus")){
						$(clickIElement).removeClass("plus").addClass("minus");
						$(this).addClass("current");
						
						
					}else{
						
						
					}
				})
			
		});*/
		
	
	<!--scroll Top button-->
	$('.scrollup').fadeOut();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			$(".menuBlock").addClass("navbar-fixed-top").addClass("menuBlockBg");
				$(".articleBlock .headingMain").addClass('headingFixed').addClass('navbar-fixed-top');
			$("#nav-toggle.active ").css('opacity','block');
			$(".logoScroll").addClass('logoScrollShow');
			//$(".desktopMainMenuLinks ").css('margin-top','4px');
			//$(".socialIconBlock .socialIcon ").css('margin-top','6px');
		} else {
			$('.scrollup').fadeOut();
			$(".menuBlock").removeClass("navbar-fixed-top");
			$(".logoScroll").removeClass('logoScrollShow');
		 $(".articleBlock .headingMain").removeClass('headingFixed').removeClass('navbar-fixed-top');
			//$(".desktopMainMenuLinks ").css('margin-top','0px');
			//$(".socialIconBlock .socialIcon ").css('margin-top','2px');
		}
	}); 
			
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	<!--scroll Top button end-->	
	
});

/*---  main banner & photogallery resize --- */
function wdBanner(e){
		var rightHeight = $(".right_slide").height();	
		$(".left_slide").height(rightHeight);
}
function wdPhotoGallery(e){
	var rightHeightGallery = $(".right_slide_gallery").height();	  
	var rightHeight_h3 = $(".right_slide_gallery h3").height();		   
	$(".left_slide_gallery").height(rightHeightGallery - (rightHeight_h3*2));
}
<!--accordian code-->
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-chevron-down fa-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

<!--content slider-->
   // $('#main-slider').liquidSlider();

//leg drop down
$(document).ready(function() {
	rightbarScroll();
		/*$(window).scroll(function() {
		pageScroll = $(window).scrollTop();
		if(pageScroll <= lftContentHeight){
			$('.pageBtn').show("fast");
			}
			else{
				$('.pageBtn').hide("slow");
				}
		});
	*/
	/*language block toggle function*/
 $(document).on('click', function (e) {
        if ($(e.target).closest('.lagBlock').length) {
            $(".langDropDown").slideToggle();
			$(".langDropDown").css('display','block');
        } else if (!$(e.target).closest(".lagBlock").length) {
            $(".langDropDown").slideUp();
			$(".langDropDown").css('display','none');
        }
    });
	$(".sortBy").click(function(){
	$(".sortDropDown").slideToggle();
	$(".sortDropDown").css('display','block');
 	});
  });
<!--touch footer slider-->




$(document).ready(function(){
	$(".adBannerBlock").each(function(){
		if($(this).height()<=0){
			$(this).hide();
			if($(this).hasClass('show')){
        			$(this).removeClass('show');
        		}
		}
	});
	$('.articleBannerBlock').each(function(){
    		if($(this).height()<=0){
			$(this).hide();
        		if($(this).hasClass('show')){
            			$(this).removeClass('show');
        		}
    		}
	}); 
	$(".desktop_banner_block").each(function(){
		if($(this).height()<=0){
			$(this).hide();
		}
	}); 
	$(".mobile_banner_block").each(function(){
		if($(this).height()<=0){
			$(this).hide();
		}
	}); 
});
