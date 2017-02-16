var toDoAPI = "https://nodetodolistapi.herokuapp.com/api/todos";

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
}

getList();

function toggleCompletion(task){
  console.log(task);
  var completionStatus = task.getAttribute("data-finished");
  var completionBool = !(completionStatus == 'true');
  var taskID = task.getAttribute("data-ID");
  var taskName = task.innerHTML;
  console.log(taskName);
  console.log(completionBool);
  $.ajax({
    url: toDoAPI + '/' + taskID,
    type: 'PUT',
    data: {
      title: taskName,
      finished: (completionBool)
    }
  })
  $(".todo-elements").empty();
  getList();
}

$(document).ready(function(){
  $(".text-button").click(function(){
    var input = $(".task-input").val();
    if(input){
      $.ajax({
        url: toDoAPI,
        type: 'POST',
        data: {
          title: input
        },
        success: function(){
          var added = "<p style='font-size:25px' onclick='toggleCompletion(this)' data-finished='false'>" + input + "</p>";
          $(".todo-elements").append(added);
        }
      })
    }
  })
})
