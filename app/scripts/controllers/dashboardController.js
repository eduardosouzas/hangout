'use strict';
/* global app */

app.controller('DashboardController',['$scope',function($scope){

  $scope.menu = [
    {'label':'Home','active':'true'},
    {'label':'Clientes','active':'false'},
    {'label':'Pedidos','active':'false'},
    {'label':'Produtos','active':'false'},
    {'label':'Fornecedores','active':'false'},
    {'label':'Financeiro','active':'false'},
  ];
  $scope.init=function(){

  };
  $scope.init();

}]);
