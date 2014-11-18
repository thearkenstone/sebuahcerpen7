// ----------------------------------------
// SHOW RECENT LABEL BY KUCOPAS
// ----------------------------------------
// Design : kucopas Design
// Date   : 08 12 2012
// URL    : http://kuc0pas.blogspot.com/2012/12/cara-membuat-daftar-isi-label-tertentu.html
// ----------------------------------------

function showrecentposts(json) {
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }}
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    document.write(posttitle);}
    if (standardstyling) document.write('</li>');
document.write('<div style="font-family:Arial; font-size:85%; margin-top:5px;"><a href="http://kuc0pas.blogspot.com/2012/12/cara-membuat-daftar-isi-label-tertentu.html" target="_blank" title="Cara Membuat Daftar Isi Perlabel">Widget by kucopas Design</a></div>');
}