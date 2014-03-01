function NotesControl($scope){

	$scope.notesTitle = {};
	$scope.notesTitle.title = "My Notes";
	
	$scope.inlineT = {};
	$scope.inlineT.title = "Inline"
	
	$scope.stuff = {};
	$scope.stuff.text = "ADSF";
	
	$scope.boolIn = false;
	
		
	$scope.tableitems = [];
	$scope.tableitems.push("qmodel1");
	$scope.rowCount = 1;
		//[{text:'Question', bold:true}, {text:'enter text...', bold:false}]
	//];
	
	var JSONItems = [];
	var myJSON = "";
	

	$scope.addRow = function(){
		$scope.rowCount++;
		$scope.tableitems.push($scope.rowCount);
		//$scope.tableitems.push([{text:"Question", bold:true}, {text:'enter text...', bold:false}]);
	};
	
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