var todosTmpl = [

    "<%_.each(todos, function(element, index, list){ %>",
          "<div  data-todoid = \"<%= element._id %>\" class = \"content\">",
          "<div =\"check\"> <%=element.check %> </div>",
          "<div =\"description\"><p> <%=element.description %> </P></div>",
          "<div =\"delete\"> <%=element.delete %> </div>",
          "</div>",

      "<div class = \"hide\">"
      "<input type = \"text\" class = \"editDescription\"  value = \"<%= element.description %>\">",
      "</div>",


    "<% }); %>"

].join("\n");
