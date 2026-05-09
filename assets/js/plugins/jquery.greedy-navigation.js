/*
 * Responsive Navigation Toggle
 */

var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');

$btn.on('click', function () {
  $vlinks.toggleClass('is-open');
  $vlinks.removeClass('is-closed');
  $(this).toggleClass('close');

  // When closing (X clicked), add is-closed to override CSS hover
  if (!$vlinks.hasClass('is-open')) {
    $vlinks.addClass('is-closed');
  }
});

// Remove is-closed when hovering the button (so CSS hover works again)
$btn.on('mouseenter', function () {
  $vlinks.removeClass('is-closed');
});