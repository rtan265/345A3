function uploaded_file(){
  
var fileName = document.getElementById('theFile').files[0].name;
document.getElementById("show_file_name").innerHTML = fileName;
document.getElementById("show_file_name").style.display = "block";
}
function pushed_submit(){
  var file = document.getElementById("show_file_name").innerHTML;
  if(file !== ""){
    window.location.href="../File_page_uploaded_a_file/file_page.html";
  }
  else{
    alert("You have not selected a file");
  }

}