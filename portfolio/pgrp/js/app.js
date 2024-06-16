var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      console.log('hide');
      this.innerText = "READ MORE";
    } else {
      panel.style.display = "block";
      console.log('show');
      this.innerText = "READ LESS";
    }
  });
}