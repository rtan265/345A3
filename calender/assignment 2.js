function on(the_class_pushed) {
  var date_pushed = the_class_pushed
  document.getElementById("overlay").style.display = "block";
  document.getElementById("the_class").value = date_pushed;
  var getting_date_from_calendar = get_date_of_calendar(date_pushed)

  document.getElementById("start_date").value = getting_date_from_calendar;
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function submit_todo(){

  var the_class_for_the_date = document.getElementById('the_class').value;

  var the_time = document.getElementById('time').value;
  the_time = convertTo12Hour(the_time)

  var start_date = document.getElementById('start_date').value;
  start_date = start_date.slice(8,) + " " + get_month(start_date);


    if(the_time === "NaN:undefined AM" || the_time === "NaN:undefined PM"){
      the_time = "";
    }
  var event_description = document.getElementById('the_event').value;

  if (event_description !== ""){
    var final_event_description = event_description + " " + start_date + " at " + the_time ;
    var node = document.createElement("LI");
    node.setAttribute("class", the_class_for_the_date + "todo_list");
    let check_box = document.createElement("input");
    check_box.setAttribute("type", "checkbox");
    var textnode = document.createTextNode(final_event_description);
    node.appendChild(textnode);
    document.getElementsByClassName("todo")[0].appendChild(node);

    event_on_calendar = add_events(the_class_for_the_date,event_description, the_time)
  }
  else{
    alert("Please add a title");
  }

}


function add_events(the_class_for_the_date,event_description, the_time){
  var div = document.getElementById(the_class_for_the_date);

  div.innerHTML +=  '<p>'+ event_description + " " + the_time + '</p>';
}




function get_month(dt){
  dt = new Date(dt);
  mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mlist[dt.getMonth()];
  };


function convertTo12Hour(oldFormatTime) {
    var oldFormatTimeArray = oldFormatTime.split(":");

    var HH = parseInt(oldFormatTimeArray[0]);
    var min = oldFormatTimeArray[1];

    var AMPM = HH >= 12 ? "PM" : "AM";
    var hours;
    if(HH == 0){
      hours = HH + 12;
    } else if (HH > 12) {
      hours = HH - 12;
    } else {
      hours = HH;
    }
    var newFormatTime = hours + ":" + min + " " + AMPM;
    return newFormatTime;
}

function get_date_of_calendar(date_pushed){
  var the_month = "";
  if(date_pushed.slice(8,) === "may"){
    var the_month = "05"
  }
  if(date_pushed.slice(8,) === "june"){
    var the_month = "06"
  }
  if(date_pushed.slice(8,) === "april"){
    var the_month = "04"
  }
  var return_date = "2019-"+the_month+ "-" + date_pushed.slice(5,7)

  return return_date;
}


function delete_todo(){
  var element_name = document.getElementById("the_class").value
  document.querySelector("."+element_name+ "todo_list").remove();
  // document.querySelector(element_name+ " p");

  // elements[0].parentNode.removeChild(elements[0]);

  document.querySelector("#"+element_name+ " P").remove();

}





