function txtSwap(x) {

  switch (x) {
    case 1:
      document.getElementById("Home").style.display = "block"
      document.getElementById("MyWorks").style.display = "none"
      document.getElementById("Contact").style.display = "none"
      break;

    case 2:
      document.getElementById("Home").style.display = "none"
      document.getElementById("MyWorks").style.display = "block"
      document.getElementById("Contact").style.display = "none"
      break;
    case 3:
      document.getElementById("Home").style.display = "none"
      document.getElementById("MyWorks").style.display = "none"
      document.getElementById("Contact").style.display = "block"
      break;
  }
  x++
}
