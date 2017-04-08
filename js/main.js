// ===== Function Declarations ======//
function cleanEmbedCode(str) {
    if (str.indexOf('embed') > -1) {
        let n = str.search(/embed\//);
        str = str.substr(n + 6, 50);
        let p = str.indexOf('"');
        str = str.substr(0, p);
    }
    else if (str.indexOf('\?v=') > -1) {
        let q = str.search(/\?v=/);
        str = str.substr(q + 3, 50);
        let r = str.length;
        str = str.substr(0, r);
    }
    else {
        alert("Invalid Embed Code. Check Your Youtube Link.\n" + str);
    }
    return str;
}
//==== End Functions Declarations =====//


//==== Main Body of JS ====================//
var oEl = document.getElementById("video_tag_value");
oEl.addEventListener("focus", function (e) {
    // Color Input background on focus
    e.target.style.background = "#E6F0F9";
});


// Clean embed code add it to prefix for mp3.com and send it off to YouTube formatted ...
oEl.addEventListener("blur", function (e) {
    var oDwnLdEl = document.getElementById("url_prefix");
    var hrefValue = "//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=";
    //Retrieve text from input box
    var searchValue = document.getElementById('video_tag_value').value;
    if (searchValue !== "") {
        searchValue = cleanEmbedCode(searchValue);
        e.target.style.background = "#FFFFFF";
        if ((hrefValue.indexOf(searchValue) !== -1)) {
            //Do nothing. searchValue is already in hrefValue.
        }
        else {
            hrefValue += searchValue;
            oDwnLdEl.setAttribute("href", hrefValue);
        }
    }
    else {
        alert("Please enter an Embed Code.");
    }
}); // End of Eventhandler

var oyouTubeSearchForm = document.getElementById('youtube_search_form');
var oyouTubeLogo = document.querySelector('img[alt="youtube_logo"]');
var oyouTubeSearchValue = document.getElementById("search_query");
var oyouTubeSubmit = document.getElementById("youtube_submit");
var oMain  = document.getElementById("main");

// Event Handler to toggle visibility of search form
oyouTubeLogo.addEventListener("click", function (e) {
    oyouTubeSearchForm.classList.toggle("hidden");
    oMain.classList.toggle("blurgrayscale");
});

// Event handler for YouTube Search Form Submit
oyouTubeSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    let searchValue = oyouTubeSearchValue.value;
    oyouTubeSearchForm.classList.add("hidden");
    window.open(src = "https://www.youtube.com/results?search_query=" + searchValue, "YouTube Results", "top=150,resizabele=yes,width=600,height=800,menubar=no,scrollbars=yes");
})
