var el = document.getElementById("req_btn");

el.addEventListener("click", function () {
    //Retrieve text from input box
    var inputField = document.getElementById('input_value');
    var searchValue = inputField.value;
    console.log(searchValue);
})
