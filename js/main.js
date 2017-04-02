var oEl = document.getElementById("input_value");
oEl.addEventListener("focus", function (e) {
    //Retrieve text from input box
    e.target.style.background = "#E6F0F9";
});


oEl.addEventListener("blur", function (e) {
    var searchValue = document.getElementById('input_value').value;
    e.target.style.background = "#FFFFFF";

    var oDwnLdEl = document.querySelector('a[href*= "//www.youtubeinmp3.com/fetch/"]');
    var hrefValue = oDwnLdEl.getAttribute("href");
    hrefValue += searchValue;

    oDwnLdEl.setAttribute("href",hrefValue);
});


var oyouTubeSearch = document.querySelector('.youtube_search');
var oyouTubeLogo = document.querySelector('img[alt="youtube_logo"]');

// Event Handler to toggle visibility of search form
oyouTubeLogo.addEventListener("click", function(e){
    oyouTubeSearch.classList.toggle("hidden");
})
