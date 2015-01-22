var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $log) {
  $scope.rooms = [{
  'name':'Living room', 'items' : [
    { 'name': 'Golv', 
	  'visible':true ,
	  'parts' : [
	    { 'top': 0,   'left': 0,   'height': 382, 'width': 336, 'color': '#ddd', 'zIndex': 1, 'border': 0,},
	    { 'top': 44,  'left': 336, 'height': 338, 'width': 110, 'color': '#ddd', 'zIndex': 1, 'border': 0,},
	  ]},	
	{ 'name': 'Dörr Sovrum',
	  'visible':true,
	  'parts' : [
        { 'top': 162, 'left': 444, 'height': 96,  'width': 4,   'color': '#fff', 'zIndex': 200, 'border': 0,},
	  ]},
	{ 'name': 'Dörr Balkong', 
	  'visible':true,
	  'parts' : [
        {'top': 380, 'left': 235, 'height': 4,   'width': 128,  'color': '#fff', 'zIndex': 200, 'border': 0,},
	  ]},
	{ 'name': 'Dörr Hall', 
	  'visible':true,
	  'parts' : [
        {'top': -2,  'left': 232, 'height': 4,   'width': 95,  'color': '#fff', 'zIndex': 200, 'border': 0,},
	  ]},
	{ 'name': 'Fönster',
	  'visible':true,
	  'parts' : [
        {'top': 380, 'left': 58,  'height': 4,   'width': 126, 'color': '#fff', 'zIndex': 200, 'border': 0,},
	  ]},
	
    { 'name': 'Soffa',
	  'visible':true,
	  'parts' : [
        {'top': 267, 'left': 10,   'height': 90, 'width': 220, 'color': '#c86', 'zIndex': 3, 'border': 0,},
	  ]},
    { 'name': 'HartfordSoffa',
	  'visible':true,
	  'parts' : [
        {'top': 181, 'left': 0, 'height': 201, 'width': 70, 'color': '#e11', 'zIndex': 2, 'border': 0,},
		{'top': 312, 'left': 70, 'height': 70, 'width': 152, 'color': '#e11', 'zIndex': 2, 'border': 0,},
		{'top': 232, 'left': 202, 'height': 150, 'width': 70, 'color': '#e11', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name': 'Soffbord1', 
	  'visible':true,
	  'parts' : [
        { 'top': 192, 'left': 50,  'height': 55, 'width': 55,  'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name':'Soffbord2', 
	  'visible':true,
	  'parts' : [
        { 'top': 192, 'left': 110, 'height': 55, 'width': 55,  'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name':'Tv-bänk',   
	  'visible':true,
	  'parts' : [
        { 'top': 11,   'left': 35,  'height': 50, 'width': 191, 'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name':'Spritskåp', 
	  'visible':true,
	  'parts' : [
        { 'top': 0,   'left': 0,   'height': 30, 'width': 30,  'color': '#fff', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name':'Hylla1', 
	  'visible':true,
	  'parts' : [
        { 'top': 44,  'left': 336, 'height': 30, 'width': 40,  'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name':'Hylla2', 
	  'visible':true,
	  'parts' : [
        { 'top': 44,  'left': 376, 'height': 30, 'width': 40,  'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name':'Hylla3', 
	  'visible':true,
	  'parts' : [
        { 'top': 84,  'left': 416, 'height': 80, 'width': 30,  'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    { 'name': 'Gungstol',  
	  'visible':true,
	  'parts' : [
        { 'top': 300, 'left': 370, 'height': 60, 'width': 67,  'color': '#aca', 'zIndex': 2, 'border': 0,},
	  ]},
    ]},
	
  {'name':'Bedroom', 'items' : [
    { 'name': 'Golv',
	  'visible':true ,
      'parts': [
  	    { 'top': 0,   'left': 0,   'height': 382, 'width': 336, 'color': '#ddd', 'zIndex': 1, 'border': 0,},
	    { 'top': 7,  'left': 336, 'height': 375, 'width': 11, 'color': '#ddd', 'zIndex': 1, 'border': 0,},
	  ]},	
	{ 'name': 'Dörr Vardagsrum',
	  'visible':true ,
	  'parts' : [
	    { 'top': 132, 'left': -2, 'height': 96,  'width': 4,   'color': '#fff', 'zIndex': 200, 'border': 0,},
	  ]},
	{'name': 'Fönster',
	  'visible':true ,
	  'parts' : [
	    {          'top': 380, 'left': 58,  'height': 4,   'width': 126, 'color': '#fff', 'zIndex': 200, 'border': 0,},
	  ]},
	
    {'name': 'Säng',
	  'visible':true ,
	  'parts' : [
	    {'top': 100,  'left': 140,   'height': 180, 'width': 200, 'color': '#fff', 'zIndex': 2, 'border': 0,},
	  ]},
    {'name': 'Headboard',
	  'visible':true ,
	  'parts' : [
	    { 'top': 70,  'left': 339,  'height': 240, 'width': 8,  'color': '#222', 'zIndex': 2, 'border': 0,},
	  ]},
    {'name': 'Garderob1',
	  'visible':true ,
	  'parts' : [
	    { 'top': 0, 'left': 0, 'height': 60, 'width': 60,  'color': '#fff', 'zIndex': 2, 'border': 0,},
	  ]},
    {'name': 'Garderob2',
	  'visible':true ,
	  'parts' : [
	    { 'top': 61,  'left': 0,  'height': 60, 'width': 60, 'color': '#fff', 'zIndex': 2, 'border': 0,},
	  ]},
    {'name': 'Garderob3',
	  'visible':true ,
	  'parts' : [
	    { 'top': 244,   'left': 0,   'height': 60, 'width': 60,  'color': '#fff', 'zIndex': 2, 'border': 0,},
	  ]},
    {'name': 'Garderob4',
	  'visible':true ,
	  'parts' : [
	    { 'top': 305,  'left': 0, 'height': 60, 'width': 60,  'color': '#fff', 'zIndex': 2, 'border': 0,},
	  ]},
    ]},
	
	
	];
  
  $scope.selectedRoom = $scope.rooms[0];
  
  $scope.multiplier = 2;
  $scope.offsetTop = 5;
  $scope.offsetLeft = 5;
  $scope.displayLeft = 10;
  $scope.displayTop = 36;
  
  $scope.measurementBoxPlacements = [{'name': 'topLeft', 'positionString': 'top: 26px; left: 0px;'},
									 {'name': 'topRight', 'positionString': 'top: 26px; right: 0px;'},
									 {'name': 'bottomLeft', 'positionString': 'bottom: 0px; left: 0px;'},
									 {'name': 'bottomRight', 'positionString': 'bottom: 0px; right: 0px;'},]
									 
  $scope.measurementBoxPlacement = $scope.measurementBoxPlacements[0]
  
  $scope.selectItemInDisplay = function(item) {
    $scope.selectItem(item);
  };

  $scope.selectItemInDropDown = function() {
	$scope.selectItem($scope.mySelect);
  };  
  
  $scope.selectItem = function(item) {
    $scope.selectedItem = item;
	$scope.deselectAllItems();
	angular.forEach(item.parts, function(part) {
	  part.border = 2;
	  part.top = part.top - 1;
	  part.left = part.left - 1;
	});
  };
  
  $scope.deselectAllItems = function() {
    angular.forEach($scope.rooms, function(room) {
	  angular.forEach(room.items, function(item) {
	    angular.forEach(item.parts, function(part) {
	      if (part.border == 2) {
	        part.left = part.left + 1;
		    part.top = part.top + 1;
	      }
          part.border = 0;
		});
      });
	});
  }
  $scope.switchValues = function() {
    tmp = $scope.selectedItem.height;
	$scope.selectedItem.height = $scope.selectedItem.width;
	$scope.selectedItem.width = tmp;
  };
  
  $scope.displayWidth = function() {
	maxWidth = 0;
	angular.forEach($scope.selectedRoom.items, function(item) {
	  angular.forEach(item.parts, function(part) {
	    itemMostRight = part.left * $scope.multiplier + $scope.offsetLeft * 2 + part.width * $scope.multiplier + part.border;
	    //console.log("itemMostRight: " + itemMostRight);
        if (itemMostRight > maxWidth) {
	      maxWidth = itemMostRight;
	    }
	  });
    });
	return maxWidth;
  };
  
  $scope.displayHeight = function() {
    maxHeight = 0;
	angular.forEach($scope.selectedRoom.items, function(item) {
	  angular.forEach(item.parts, function(part) {
	    itemMostBottom = part.top * $scope.multiplier + $scope.offsetTop * 2 + part.height * $scope.multiplier + part.border;
	    //console.log("itemMostBottom: " + itemMostBottom);
        if (itemMostBottom > maxHeight) {
	      maxHeight = itemMostBottom;
	    }
	  });
    });
	return maxHeight;
  };

});
