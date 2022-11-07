jQuery(window).ready(function() {
  jQuery("#navigation").Smartmenu({
    animationDuration: 350
  });
  $("#bigSize").click(function() {
    var bodySize = $("#article_content").css('fontSize');
    bodySize = parseInt(bodySize) + 5 + 'px';
    $("#article_content").css('fontSize', bodySize);
    $("#article_content").find('span').each(function() {
      var hehe = $(this);
      changeSize(hehe, '+');
    });
    return false;
  });
  $("#smallSize").click(function() {
    var bodySize = $("#article_content").css('fontSize');
    bodySize = parseInt(bodySize) - 5 + 'px';
    $("#article_content").css('fontSize', bodySize);
    $("#article_content").find('span').each(function() {
      var hehe = $(this);
      changeSize(hehe, '-');
    });
    return false;
  });
});
function changeSize(node, change) {
  if (oldSize = $(node).css('fontSize')) {
    oldSize = parseInt(oldSize);
  }
  if (change == '+') newSize = oldSize + 5 + 'px';
  else newSize = oldSize - 5 + 'px';
  $(node).css('fontSize', newSize);
}