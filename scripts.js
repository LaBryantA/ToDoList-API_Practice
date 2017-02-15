var todDoAPI = "https://nodetodolistapi.herokuapp.com/api/todos";

$(document).ready(function(){
  function getList(){
    $.ajax({
      url: todDoAPI,
      success: function(toDolist){
        alert("loaded");
      }
    })
  }
  getList();
})


/*
var text = "<p>hi</p>";
$(document).ready(function(){
  $(".text-button").click(function(){
    alert("hi");
    $(".todo-elements").append(text);
  })
})
*/
