var file_listing = 'http://' + window.location.hostname + '/profiler/';
console.log(file_listing)
var link = document.getElementById("file_listing");
link.setAttribute('href', file_listing);
