window.onscroll = function (e) {
  var sn = document.getElementById('site-navigation');
  var mh = document.getElementsByClassName('inside-header')[0];
  var top = window.pageYOffset;
  if (top > 150) {
    sn.style.position = 'fixed';
    sn.style.left = '0';
    sn.style.right = '0';
    sn.style.top = '0';
    mh.style["padding-top"] = '95px';
  } else  {
    sn.style.position = 'inherit';
    sn.style.left = 'inherit';
    sn.style.right = 'inherit';
    sn.style.top = 'inherit';
    mh.style["padding-top"] = '40px';
  }
}
