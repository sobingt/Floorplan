var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Golv1',          'top': 0,   'left': 0,   'height': 382, 'width': 336, 'color': '#ddd', 'zIndex': 1, 'group':'Golv', 'border': 0,},
	{'name': 'Golv2',          'top': 44,  'left': 336, 'height': 338, 'width': 110, 'color': '#ddd', 'zIndex': 1, 'group':'Golv', 'border': 0,},
	{'name': 'Dörr Sovrum',    'top': 162, 'left': 444, 'height': 96,  'width': 4,   'color': '#fff', 'zIndex': 200, 'border': 0,},
	{'name': 'Dörr Balkong',   'top': 380, 'left': 235, 'height': 4,   'width': 128,  'color': '#fff', 'zIndex': 200, 'border': 0,},
	{'name': 'Dörr Hall',      'top': -2,  'left': 232, 'height': 4,   'width': 95,  'color': '#fff', 'zIndex': 200, 'border': 0,},
	{'name': 'Fönster',        'top': 380, 'left': 58,  'height': 4,   'width': 126, 'color': '#fff', 'zIndex': 200, 'border': 0,},
	
	
    {'name': 'Soffa',     'top': 267, 'left': 0,   'height': 90, 'width': 220, 'color': '#c86', 'zIndex': 2, 'border': 0, },
    {'name': 'Soffbord1', 'top': 192, 'left': 50,  'height': 55, 'width': 55,  'color': '#222', 'zIndex': 2, 'border': 0,},
    {'name': 'Soffbord2', 'top': 192, 'left': 110, 'height': 55, 'width': 55,  'color': '#222', 'zIndex': 2, 'border': 0,},
    {'name': 'Tv-bänk',   'top': 11,   'left': 35,  'height': 50, 'width': 191, 'color': '#222', 'zIndex': 2, 'border': 0,},
    {'name': 'Spritskåp', 'top': 0,   'left': 0,   'height': 30, 'width': 30,  'color': '#fff', 'zIndex': 2, 'border': 0,},
    {'name': 'Hylla1', 'top': 44,  'left': 336, 'height': 30, 'width': 40,  'color': '#222', 'zIndex': 2, 'border': 0,},
    {'name': 'Hylla2', 'top': 44,  'left': 376, 'height': 30, 'width': 40,  'color': '#222', 'zIndex': 2, 'border': 0,},
    {'name': 'Hylla3', 'top': 84,  'left': 416, 'height': 80, 'width': 30,  'color': '#222', 'zIndex': 2, 'border': 0,},
    {'name': 'Gungstol',  'top': 300, 'left': 370, 'height': 60, 'width': 67,  'color': '#aca', 'zIndex': 2, 'border': 0,},
    
  ];
  
  $scope.multiplier = 1.5;
  $scope.offsetTop = 5;
  $scope.offsetLeft = 5;
  
  $scope.selectItem = function(item) {
    $scope.selectedItem = item;
	angular.forEach($scope.items, function(anItem) {
      anItem.border = 0;
    });
	item.border = 2;
  };
  
  
  
});
