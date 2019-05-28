//Make the DIV element draggagle:
function dragElement(elmnt) {
  var pos1 = 100, pos2 = 100, pos3 = 100, pos4 = 100;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let voted1 = false;

function incrementup1() {
  if (voted1 == false) {
    document.getElementById("up1").innerHTML = 1; 
    voted1 = true
  }
  else {
    
  }
}

function incrementdown1() {
  if (voted1 == false) {
    document.getElementById("down1").innerHTML = 1;
    voted1 = true
  }
}

let voted2 = false;

function incrementup2() {
  if (voted2 == false) {
    document.getElementById("up2").innerHTML = 1; 
    voted2 = true
  }
}

function incrementdown2() {
  if (voted2 == false) {
    document.getElementById("down2").innerHTML = 1;
    voted2 = true
  }
}

let voted3 = false;

function incrementup3() {
  if (voted3 == false) {
    document.getElementById("up3").innerHTML = 1; 
    voted3 = true
  }
}

function incrementdown3() {
  if (voted3 == false) {
    document.getElementById("down3").innerHTML = 1;
    voted3 = true
  }
}

let msg = "<ul style='list-style-type: none;'></ul>";
function sendmsg() {
  msg += "<li style='list-style-type: none; padding-left: 1vw;'>Ryan: " + document.getElementById('text').value + "</li>";
  document.getElementById("messages").innerHTML = msg;
  document.getElementById("text").value = "";
}

function select() {
  alert("Navigate to file page");
}
