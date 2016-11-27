function addTodo() {
    var createLi  = document.createElement('li');
    var input = document.getElementById('textInput').value;
    var text = document.createTextNode(input);
        createLi.appendChild(text);

    if (input === "" || input === " ") {
        alert("please write some thing");
    }
   
  else { var plus = document.getElementById("listItems").appendChild(createLi);
        document.getElementById("heading_3").innerHTML = "Your Activities...";
     
        var liItems = document.getElementsByTagName("Li");
        var spanBtn = document.createElement("button");
        var closeBtn = document.createTextNode("remove");
            spanBtn.className ="removeSingle";
            spanBtn.appendChild(closeBtn); 
        for (var i =0; i <liItems.length; i++) {
            liItems[i].appendChild(spanBtn);
     
    
}
    document.getElementById("textInput").value = "";
        var hideItem =  document.getElementsByClassName("removeSingle");
            for (var i=0; i <hideItem.length; i++) {
                hideItem[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
         } 
     }
}
      

}


function removeAll() {
    document.getElementById("listItems").innerHTML = "";
    document.getElementById("heading_3").innerHTML = "";
    document.getElementById("textInput").value = "";
}


