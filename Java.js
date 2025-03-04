function txtSwap(x) {

  switch (x) {
    case 1:
      document.getElementById("one").style.display = "block"
      document.getElementById("three").style.display = "none"
      document.getElementById("four").style.display = "none"
      break;

    case 2:
      document.getElementById("one").style.display = "none"
      document.getElementById("three").style.display = "block"
      document.getElementById("four").style.display = "none"
      break;
    case 3:
      document.getElementById("one").style.display = "none"
      document.getElementById("three").style.display = "none"
      document.getElementById("four").style.display = "block"
      break;
  }
  x++
}
