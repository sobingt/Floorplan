var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Floor1', 'top': 0, 'left': 0, 'height': 382, 'width': 336, 'color': '#ddd', 'zIndex': 1},
	{'name': 'Floor2', 'top': 44, 'left': 336, 'height': 338, 'width': 110, 'color': '#ddd', 'zIndex': 1},
	{'name': 'Door1', 'top': 200, 'left': 444, 'height': 80, 'width': 4, 'color': '#fff', 'zIndex': 2},
	{'name': 'Door2', 'top': 380, 'left': 300, 'height': 4, 'width': 80, 'color': '#fff', 'zIndex': 2},
	{'name': 'Door3', 'top': -2, 'left': 236, 'height': 4, 'width': 80, 'color': '#fff', 'zIndex': 2},
	{'name': 'Window', 'top': 380, 'left': 40, 'height': 4, 'width': 100, 'color': '#fff', 'zIndex': 2},
	
	
    {'name': 'Soffa', 'top': 320, 'left': 0, 'height': 60, 'width': 220, 'color': '#B97A57', 'zIndex': 2},
    {'name': 'Tv-bänk', 'top': 0, 'left': 50, 'height': 50, 'width': 160, 'color': '#222', 'zIndex': 2},
    
  ];
});
