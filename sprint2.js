
$(document).ready(function () {

  //slider
  $("#slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".prev-button"),
    nextArrow: $(".next-button"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $("#dialog").dialog();

  function changeColor(elementId) {
    var selectedText = window.getSelection().toString();
    var element = document.getElementById(elementId);
    
    if (selectedText === element.innerHTML) {
        element.classList.add("black-text");
        element.classList.remove("grey-text");
    } else {
        element.classList.remove("black-text");
        element.classList.add("grey-text");
    }
}



window.onload = function() {
  showImages("art"); 
};


});


function showImages(category) {
  console.log("xxxx");
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
    

    var artButton = document.getElementById("artButton");
    var photographyButton = document.getElementById("photographyButton");
    
    if (category === "art") {
        artButton.classList.add("selected-button");
        photographyButton.classList.remove("selected-button");
    } else {
        artButton.classList.remove("selected-button");
        photographyButton.classList.add("selected-button");
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var images = data[category];
            
            for (var i = 0; i < images.length; i++) {
                var img = document.createElement("img");
                img.src = images[i];
                img.classList.add("art_images", "art-item");
                imageContainer.appendChild(img);
            }
        }
    };
    
    xhr.open("GET", "images.json", true);
    xhr.send();
}

