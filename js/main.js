function cleanEmbedCode (str)  {
    if (str.search("embed/"))  {
      console.log("I'm in. Embed code= " + str);
      let n = str.search("embed/");
      str = str.substr(n + 6, 50);
      let p = str.indexOf('"');
      str = str.substr(0, p);
    }
    return str;
}




var oEl = document.getElementById("video_tag_value");
oEl.addEventListener("focus", function (e) {
   // Color Input background on focus
    e.target.style.background = "#E6F0F9";
});

// Clean embed code and send it off to YouTube formatted ..
oEl.addEventListener("blur", function (e) {
       //Retrieve text from input box
    var searchValue = document.getElementById('video_tag_value').value;
    searchValue = cleanEmbedCode(searchValue);
    console.log("SearchValue is : " + searchValue);
    e.target.style.background = "#FFFFFF";

    var oDwnLdEl = document.querySelector('a[href*= "//www.youtubeinmp3.com/fetch/"]');
    var hrefValue = oDwnLdEl.getAttribute("href");
    hrefValue += searchValue;
    oDwnLdEl.setAttribute("href",hrefValue);
});


var oyouTubeSearchForm = document.getElementById('youtube_search_form');
var oyouTubeLogo = document.querySelector('img[alt="youtube_logo"]');
var oyouTubeSearchValue = document.getElementById("search_query");
var oyouTubeSubmit = document.getElementById("youtube_submit");

// Event Handler to toggle visibility of search form
oyouTubeLogo.addEventListener("click", function(e){
    oyouTubeSearchForm.classList.toggle("hidden");
});

// Event handler for YouTube Search Form Submit
oyouTubeSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    let searchValue = oyouTubeSearchValue.value;
    console.log(searchValue);
    oyouTubeSearchForm.classList.add("hidden");
    window.open(src="https://www.youtube.com/results?search_query=" + searchValue,"_blank","top=150,resizabele=yes,width=600,height=800,menubar=no,scrollbars=yes" );

})

