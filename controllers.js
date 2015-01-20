var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Golv1',          'top': 0,   'left': 0,   'height': 382, 'width': 336, 'color': '#ddd', 'zIndex': 1, 'group':'Golv'},
	{'name': 'Golv2',          'top': 44,  'left': 336, 'height': 338, 'width': 110, 'color': '#ddd', 'zIndex': 1, 'group':'Golv'},
	{'name': 'Dörr Sovrum',    'top': 154, 'left': 444, 'height': 80,  'width': 4,   'color': '#fff', 'zIndex': 2},
	{'name': 'Dörr Balkong',   'top': 380, 'left': 300, 'height': 4,   'width': 80,  'color': '#fff', 'zIndex': 2},
	{'name': 'Dörr Hall',      'top': -2,  'left': 236, 'height': 4,   'width': 80,  'color': '#fff', 'zIndex': 2},
	{'name': 'Fönster',        'top': 380, 'left': 40,  'height': 4,   'width': 100, 'color': '#fff', 'zIndex': 2},
	
	
    {'name': 'Soffa',     'top': 300, 'left': 0,   'height': 80, 'width': 220, 'color': '#c86', 'zIndex': 2},
    {'name': 'Soffbord1', 'top': 220, 'left': 50,  'height': 55, 'width': 55,  'color': '#222', 'zIndex': 2},
    {'name': 'Soffbord2', 'top': 220, 'left': 110, 'height': 55, 'width': 55,  'color': '#222', 'zIndex': 2},
    {'name': 'Tv-bänk',   'top': 0,   'left': 40,  'height': 50, 'width': 160, 'color': '#222', 'zIndex': 2},
    {'name': 'Spritskåp', 'top': 0,   'left': 0,   'height': 40, 'width': 40,  'color': '#fff', 'zIndex': 2},
    {'name': 'Spritskåp', 'top': 44,  'left': 336, 'height': 30, 'width': 40,  'color': '#222', 'zIndex': 2},
    {'name': 'Spritskåp', 'top': 44,  'left': 376, 'height': 30, 'width': 40,  'color': '#222', 'zIndex': 2},
    {'name': 'Spritskåp', 'top': 74,  'left': 416, 'height': 80, 'width': 30,  'color': '#222', 'zIndex': 2},
    {'name': 'Gungstol',  'top': 300, 'left': 370, 'height': 60, 'width': 60,  'color': '#aca', 'zIndex': 2},
    
  ];
  
  $scope.multiplier = 1.5;
  $scope.offsetTop = 5;
  $scope.offsetLeft = 5;
  
  $scope.selectItem = function(item) {
    $scope.selectedItem = item;
  };
  
  $scope.selectedItem = "hej";
  
});
