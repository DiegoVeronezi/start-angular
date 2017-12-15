const app = angular.module("tic-tac-toe", [])
.controller("gameController", $scope => {
  $scope.matriz = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];


  var letra = 'X';
  var cont = 0;

  $scope.verifica = function(raiz, raiz2){
    if($scope.matriz[raiz][raiz2] === 'X' || $scope.matriz[raiz][raiz2] === 'O'){
        $scope.msg = "Valor inválido!";
    } else{
        $scope.msg = " ";
        $scope.matriz[raiz][raiz2] = letra;
        var a = (letra === 'X') ? 'O' : 'X';
        letra = a;
    }  
    
    cont = 0;
    for(i=0;i<=2;i++){
        if($scope.matriz[0][i] === 'X'){
            cont = cont+1;                                   
        }
      } 
    
      if(cont === 3){
        $scope.ganhador = "Jogador com X ganhou!!"    
      } 
    
  }    
  
  var i; var j;
  $scope.reset = function(){
        for(i=0;i<=9;i++){
          for(j=0;j<=9;j++){
             if($scope.matriz[i][j] != ' '){
                $scope.matriz[i][j] = ' ';
             }     
          }      
        }         
  }



});
