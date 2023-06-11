


$(document).ready(function () {
  
  var websiteRequest = new XMLHttpRequest();
    websiteRequest.onreadystatechange = function () {
      if (websiteRequest.readyState === 4 && websiteRequest.status === 200) {
        var data = websiteRequest.responseText;
        $("#svgContainer").html(data);
      }
    };
    websiteRequest.open('GET', 'https://busrakanbur.github.io/responsive-web-text/', true);
    websiteRequest.send();
  
  });
  