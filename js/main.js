var el = document.getElementById("req_btn");

el.addEventListener("click", function () {
    //Retrieve text from input box
    var searchValue = document.getElementById('input_value').value;
    if (searchValue !== '') {
        console.log(searchValue);
    }
    else {
        console.log("No Search Value!!!")
    }
});
