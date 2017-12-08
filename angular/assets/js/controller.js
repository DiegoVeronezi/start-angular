var app = angular
        .module("myModule",[])
        .controller("myController", function($scope) {

            var empregados = [
                { nome: "Diego", sexo: "Masculino", cidade: "Poa", salario: 5000},
                { nome: "Pedro", sexo: "Masculino", cidade: "Santa Maria", salario: 5500},
                { nome: "João", sexo: "Masculino", cidade: "Guaíba", salario: 6000},
                { nome: "Gustavo", sexo: "Masculino", cidade: "Canoas", salario: 4000},
                { nome: "Henrique", sexo: "Masculino", cidade: "Gravataí", salario: 7500}
            ];

            $scope.empregados = empregados;

        });