$(document).ready( function() {

  // Logo
  var $logo 	= $('#logo');
  if (location.href.indexOf("#") != -1)
  {
    if(location.href.substr(location.href.indexOf("#"))!='#about')
    {
      $logo.show();
    }
  }

  // Show logo
  $('#tab-container .tab a').click(function() {
    $logo.slideDown('fast');
  });

  // Hide logo
  $('#tab-about').click(function() {
    $logo.slideUp('fast');
  });

  function animMeter() {
    $(".meter > span").each(function() {
      $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
          width: $(this).data("origWidth")
        }, 1200);
    });
  }
  animMeter();
  window.addEventListener('resize', animMeter);

  $('#tab-container').easytabs({
    animate			: true,
    updateHash		: true,
    transitionIn	: 'slideDown',
    transitionOut	: 'slideUp',
    animationSpeed	: 500,
    tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
    if($targetPanel.selector=='#resume')
    {
      animMeter();
    }
  });
});
