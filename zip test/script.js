//Setting up a table and adding borders.
var newTable = document.createElement("table");
newTable.style.borderWidth = "1px";
newTable.style.borderStyle = "solid";
var tableBody = document.createElement('tbody');
newTable.appendChild(tableBody);

//Loops to add rows, headers, and data cells.
for(var i = 0; i < 4; i++)
{
    var tr = document.createElement("tr");
    tr.style.borderWidth = "1px";
    tr.style.borderStyle = "solid";
    tableBody.appendChild(tr);
    tableBody.style.borderWidth = "1px";
    tableBody.style.borderStyle = "solid";

    if (i == 0)
    {
    	for(var j = 1; j < 5; j++)
    	{
      	var th = document.createElement("th");
        th.style.borderWidth = "1px";
    		th.style.borderStyle = "solid";
        th.textContent = "Header " + j.toString();
        tr.appendChild(th);
    	}
    }
    else{
    for(var j = 0; j < 4; j++)
{
    	var td = document.createElement('td');
      td.style.borderWidth = "1px";
    	td.style.borderStyle = "solid";
      td.textContent = i.toString() + ", " + (j+1).toString();
      if(td.textContent == "1, 1")
      {
      	td.style.borderWidth = "3px";
        td.style.borderStyle = "solid";
        td.id = "currentPos";
      }
      tr.appendChild(td);
}
}
}

document.getElementsByTagName("body")[0].appendChild(newTable);

//Creation of movement buttons including positioning.
var upButton = document.createElement("button");
var upArrow = document.createTextNode('\u2191');
upButton.appendChild(upArrow);
upButton.style.position = "relative";
upButton.style.left = "65.5px";
upButton.style.top = "9px";
upButton.onclick = function () {makeMove(upButton.textContent)};

var downButton = document.createElement("button");
var downArrow = document.createTextNode('\u2193');
downButton.appendChild(downArrow);
downButton.style.position = "relative";
downButton.style.left = "43px";
downButton.style.top = "30px";
downButton.onclick = function () {makeMove(downButton.textContent)};

var leftButton = document.createElement("button");
var leftArrow = document.createTextNode('\u2190');
leftButton.appendChild(leftArrow);
leftButton.style.position = "relative";
leftButton.style.left = "-8.5px";
leftButton.style.top = "30px";
leftButton.onclick = function () {makeMove(leftButton.textContent)};

var rightButton = document.createElement("button");
var rightArrow = document.createTextNode('\u2192');
rightButton.appendChild(rightArrow);
rightButton.style.position = "relative";
rightButton.style.left = "13px";
rightButton.style.top = "30px";
rightButton.onclick = function () {makeMove(rightButton.textContent)};

var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";
markButton.style.position = "relative";
markButton.style.left = "30px";
markButton.style.top = "20px";
markButton.onclick = function () {newColor(markButton.textContent)};

//Appending each button to the body of the HTML. 
document.getElementsByTagName("body")[0].appendChild(upButton);
document.getElementsByTagName("body")[0].appendChild(downButton);
document.getElementsByTagName("body")[0].appendChild(leftButton);
document.getElementsByTagName("body")[0].appendChild(rightButton);
document.getElementsByTagName("body")[0].appendChild(markButton);

//This function moves the selector to the appropriate cell.
function makeMove(buttonTextContent)
{

    var tdList = Array.from(document.getElementsByTagName("td"));
    var currentTag = document.getElementById("currentPos");
    var currIndex = tdList.indexOf(currentTag);
    console.log(currIndex);

    var newTag;
    var newIndex;
    console.log(buttonTextContent);
    if (buttonTextContent == rightArrow.textContent && !(currentTag.textContent.endsWith("4"))){
        newIndex = currIndex + 1;
        newTag = document.getElementsByTagName("td")[newIndex];
        
        currentTag.style.borderWidth = "1px";
        currentTag.id = "";

        newTag.style.borderWidth = "3px";
        newTag.style.borderStyle = "solid";
        newTag.id = "currentPos";
    }

    if (buttonTextContent == leftArrow.textContent && !(currentTag.textContent.endsWith("1"))){
      newIndex = currIndex - 1;
      newTag = document.getElementsByTagName("td")[newIndex];
      
      currentTag.style.borderWidth = "1px";
      currentTag.id = "";

      newTag.style.borderWidth = "3px";
      newTag.style.borderStyle = "solid";
      newTag.id = "currentPos";
    }

    if (buttonTextContent == downArrow.textContent && !(currentTag.textContent.startsWith("3"))){
      newIndex = currIndex + 4;
      newTag = document.getElementsByTagName("td")[newIndex];
      
      currentTag.style.borderWidth = "1px";
      currentTag.id = "";

      newTag.style.borderWidth = "3px";
      newTag.style.borderStyle = "solid";
      newTag.id = "currentPos";
    }

    if (buttonTextContent == upArrow.textContent && !(currentTag.textContent.startsWith("1"))){
      newIndex = currIndex - 4;
      newTag = document.getElementsByTagName("td")[newIndex];
      
      currentTag.style.borderWidth = "1px";
      currentTag.id = "";

      newTag.style.borderWidth = "3px";
      newTag.style.borderStyle = "solid";
      newTag.id = "currentPos";
    }
    }


//This function changes the color of the cell to yellow when the mark cell button is pressed.
function newColor(buttonTextContent)
{
    var tdList = Array.from(document.getElementsByTagName("td"));
    var currentTag = document.getElementById("currentPos");

    if (buttonTextContent == "Mark Cell")
    {
      currentTag.style.backgroundColor = "yellow";
    }
}









