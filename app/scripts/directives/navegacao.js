/**
 * Created by eduardosilva on 25/05/2015.
 */
/**
 * Created by Dany on 23/05/2015.
 */
'use strict';

app.directive('navegacao',function(){
  return {
    restrict:'E',
    replace:false,
    scope:{
      'titulo':'@',
      'conteudo':'@'
    },
    controller:function($scope){
      $scope.menu = [
        {'label':'Home',        'active':'true',  'url':'/'             },
        {'label':'Clientes',    'active':'false', 'url':'/clientes'     },
        {'label':'Pedidos',     'active':'false', 'url':'/pedidos'      },
        {'label':'Produtos',    'active':'false', 'url':'/produtos'     },
        {'label':'Fornecedores','active':'false', 'url':'/fornecedores' },
        {'label':'Financeiro',  'active':'false', 'url':'/financeiro'   },
      ];
    },
    templateUrl:'../partials/navbar.html'
  };
});
