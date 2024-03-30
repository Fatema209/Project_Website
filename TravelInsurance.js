window.addEventListener("load", function () {
  "use strict";
  var sections = document.querySelectorAll("#row-temp section") || [],
      rows = [
        document.getElementById("row-1"),
        document.getElementById("row-2"),
        document.getElementById("row-3")
      ],
      i,
      temp;
  for (i = 0; i < sections.length; i += 1) {
    temp = [
      rows[0].clientHeight,
      rows[1].clientHeight,
      rows[2].clientHeight
    ];
    rows[
      temp.indexOf(Math.min.apply(Math, temp))
    ].appendChild(sections[i]);
  }
});