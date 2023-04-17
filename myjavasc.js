
  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}


//pictures functions

let change_big_pic = document.getElementById('change_big_pic');

  function shoesGallery(smallImg){
    // let BigImg = document.getElementById('change_big_pic');
    change_big_pic.src = smallImg.src;
  }

  // Get the modal image tag
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var modalImg = document.getElementById("modal-image");


  // When the user clicks the big picture, set the image and open the modal
  change_big_pic.onclick = function (e) {
    var src = e.srcElement.src;
    modal.style.display = "block";
    modalImg.src = src;
  };

  // When the user clicks the big picture, the small pictures should appear
  

  // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
    modal.style.display = "none";
};  

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};








