let msg = "<ul style='list-style-type: none;'></ul>";
function sendmsg() {
  msg += "<li style='list-style-type: none; padding-left: 1vw;'>Ryan: " + document.getElementById('text').value + "</li>";
  document.getElementById("messages").innerHTML = msg;
  document.getElementById("text").value = "";
}