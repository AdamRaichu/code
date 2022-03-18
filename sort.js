function sortTable(z) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[z];
      y = rows[i + 1].getElementsByTagName("TD")[z];
      //check if the two rows should switch place:
      if (z === 0) {
        if (x.dataset.lname.toLowerCase() > y.dataset.lname.toLowerCase()) {
          shouldSwitch = true
        } else if (x.dataset.lname.toLowerCase() === y.dataset.lname.toLowerCase()) {
          if (x.dataset.fname.toLowerCase() > y.dataset.fname.toLowerCase()) {
            shouldSwitch = true
          }
        }
      } else if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i], rows[i-1]);
      switching = true;
    }
  }
}
