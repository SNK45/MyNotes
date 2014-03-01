/* Javascript (AngularJS) Document to accompany the MyNotes web application by Srinath Kadambi ------------------------------- */

/* Define Controller as NotesControl ----------------------------------------------------------------------------------------- */

function NotesControl($scope){

/* Variables defined as strings for use in HTML document --------------------------------------------------------------------- */

	$scope.notesTitle = {};
	$scope.notesTitle.title = "My Notes";
	
	$scope.inlineT = {};
	$scope.inlineT.text = "Inline"
	
/* Boolean variable to check whether questions and answers are inline -------------------------------------------------------- */
	
	$scope.boolIn = false;
	
/* Array defined to hold string naems of models but currently not working and needs to be modified!!!------------------------- */
/* Different approach described in word document ----------------------------------------------------------------------------- */
		
	$scope.tableitems = [];
	$scope.tableitems.push("qmodel1");
	$scope.rowCount = 1;

/* Object array to be converted to JSONString -------------------------------------------------------------------------------- */
	
	var JSONItems = [];
	var myJSON = "";
	
/* Function to add a row to the main table for another question and answer --------------------------------------------------- */

	$scope.addRow = function(){
		$scope.rowCount++;
		$scope.tableitems.push($scope.rowCount);
	};
	
/* Function to convert object array into JSONString but is currently not working and needs to be modified!!! ----------------- */
	
	/*
	$scope.toJSON = function(){
	
		for (i = 0; i < tableitems.length; i++){
			var item = {
				"question": tableitems[i][0],
				"answer" : tableitems[i][1],
				"inline" : $scope.boolIn
			};
			
			JSONItems.push(item);
		}
		
		myJSON = JSON.stringify({JSONItems: JSONItems});

		var el = document.createElement('p');
		el.appendChild(document.createTextNode(myJSON));
		
		$scope.stuff.text = JSONItems.length;
	};
	*/
}

/* End of document ----------------------------------------------------------------------------------------------------------- */