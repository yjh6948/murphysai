function cp(btn){
  var t = btn.parentElement.querySelector('pre').innerText;
  navigator.clipboard.writeText(t).then(function(){
    var o = btn.textContent; btn.textContent = 'COPIED';
    setTimeout(function(){ btn.textContent = o; }, 1600);
  });
}
