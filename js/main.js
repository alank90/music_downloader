var el = document.getElementById("req_btn");
el.addEventListener("click", function () {
    //Retrieve text from input box
    var searchValue = document.getElementById('input_value').value;
    if (searchValue.length === 0) {
        console.log("No Search Value!!!");
        return;
    }
    else {
        // AJAX Request
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                str = this.responseText;
                console.log(str);
            }
        }
    }
    xhr.open("POST", "http://www.youtubeinmp3.com/r.php?q=" + searchValue, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
});
