var toDoAPI = "https://nodetodolistapi.herokuapp.com/api/todos";

function toggleCompletion(task){
  var completionStatus = task.getAttribute(data-finished);
  var taskID = task.getAttribute(data-ID);
  var taskTitle = task.InnerHTML;
  $.ajax({
    url: todDoAPI + '/' + taskID,
    type: 'PUT',
    data: {
      title: taskTitle,
      finished: (!completionStatus)
    }
  })
  getList();
}

$(document).ready(function(){
  function getList(){
      $.ajax({
        url: toDoAPI,
        success: function(load){
          console.log(load);
          for(var index = 0; index < load.length; index++){
            if(load[index].finished  == true){
              var task = "<p style='text-decoration:line-through;font-size:25px' onclick='toggleCompletion(this)' data-finished='true' data-ID='" + load[index]._id + "'>" + load[index].title + "</p>";
            }
            else
            {
              var task = "<p style='font-size:25px' onclick='toggleCompletion(this)' data-finished='false' data-ID='" + load[index]._id + "'>" + load[index].title + "</p>";
            }
            $(".todo-elements").append(task);
          }
        }
      })
    getList();
  }
})

getList();



var texts = "<p data-finished='true' style='text-decoration:line-through;font-size:25px'>hi</p>";
$(document).ready(function(){
  $(".text-button").click(function(){
    alert("hi");
    $(".todo-elements").append(texts);
  })
})
