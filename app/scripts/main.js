
$(document).ready(function(){

        myTodo.init();

}); //end document..

    var myTodo = {
      init: function(){
        this.initStyling();
        this.initEvents();
      },

      initStyling: function(){
        myTodo.getTodos();   ///...figure this naming out.
      },


      initEvents: function(){

        //create the todo....
        $("input").on("change", function(event){
            event.preventDefault();

            var newTodo = {
                description: $(".description").val(),
                check: $(".check").val(),
                delete: $(".delete").val()
          };

          myTodo.createTodos();
        });

        //delete the todo....
        $('.container').on('click', 'delete', function(event){
            event.preventDefault();

            var todoId = $(this).closest('.content').data("todoid");

                console.log(todoID);
                myBlog.deleteTodos(todoId);
        });

      // // // edit the todo...
      // $('.container').on('click', '.edit', function (event) {
      //     event.preventDefault();
      //
      //     //make the input field visible...
      //
      //     $(this).siblings('.todos').find('input').toggleClass('.hide'); ///not sure about this one...
      //
      //     });






    },  // end of initEvents


        render: function (template, data, $el){
                var markup = _.template(template,data);
                $el.html(markup);
      },

        url:"http://tiy-fee-rest.herokuapp.com/collections/susiestarkman",
        getTodos: function (){
                  $.ajax({
                      url:myTodo.url,
                      type:'GET',
                      success: function (response){
                          var todos = window.post = response;
                          myTodo.render(todosTmpl, todos,$('.content'));
                      }
                  });

        },//end of getTodos..

        creatTodos: function(newTodo){
                  $.ajax({
                    url: myTodo.url,
                    data: newTodo,
                    type:'POST',
                    success: function (response){
                      myTodo.getTodos();
                    }


                  });
        }, //end of createTodos

        deleteTodos: function (todoId) {
                  $.ajax({
                    url:myTodo.url + '/' + postId,
                    type:'DELETE',
                    success: function(){
                      myTodo.getTodos();
                    }


                  });

        }, //end of deleteTodos..

        // updatePost: function (todoId, updatedPost){
        //           $.ajax({
        //             url:myTodo.url + '/' + postId,
        //             type:'PUT',
        //             data:updatedPost,
        //             success: function(){
        //               console.log(response);
        //               myTodo.getTodos();
        //             }
        //
        //
        //           });
        // }






  };//end of var myTodo
