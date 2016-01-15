// Creates a new module called 'calculatorApp'
        angular.module('calculatorApp', ["ngResource"]);

        // Registers a controller to our module 'calculatorApp'.
        angular.module('calculatorApp').controller('CalculatorController', function CalculatorController($scope) {
          $scope.z = 0;
          $scope.sum = function() {
            $scope.z = $scope.x + $scope.y;
          };
        });

        angular.module('calculatorApp').controller('ContactoCtrl', function ContactoCtrl($scope, $http) {
    		$scope.enviarconsulta = function(){
    			$http.put('https://api.mongolab.com/api/1/databases/lapalmaiiss/collections/Consulta/1?apiKey=D60O7v07BvUYuFYQ8HX6QB5NAgVdy-7A',
      				{ title: 'pruebadedobles',
        			  description: 'prueba4'
      				})
    		}

  		});

        // load the app
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['calculatorApp']);
        });



