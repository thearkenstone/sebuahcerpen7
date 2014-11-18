// ----------------------------------------
// SHOW RECENT LABEL BY SebuahCerpen7.blogspot.com
// ----------------------------------------
// Design : Sebuah Cerpen 7
// Date   : 18 11 2014
// URL    : http://sebuahcerpen7.blogspot.com
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
document.write('<div style="font-family:Arial; font-size:85%; margin-top:5px;"><a href="http://sebuahcerpen7.blogspot.com" target="_blank" title="Daftar Isi Blog">Widget by Sebuah Cerpen 7</a></div>');
}