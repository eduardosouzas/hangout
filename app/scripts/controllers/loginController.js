/**
 * Created by Dany on 23/05/2015.
 */
/* global app */
'use strict';

app.controller('loginController',['$scope','$location',function($scope,$location ){

  $scope.falhou= false;
  $scope.Padrao= {};
  $scope.Padrao.usuario = 'admin';
  $scope.Padrao.senha = '123mudar';

  $scope.doLogin = function(){
    //simular o login no applicativo
    if($scope.LoginModel.usuario === $scope.Padrao.usuario && $scope.Padrao.senha === $scope.LoginModel.senha){
        $location.path('/dashboard');
    } else {
      $scope.falhou = true;
    }
  };
}]);
