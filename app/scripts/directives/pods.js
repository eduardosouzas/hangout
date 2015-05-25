/**
 * Created by Dany on 23/05/2015.
 */
'use strict';

app.directive('pod',function(){
  return {
    restrict:'A',
    replace:false,
    scope:{
      'titulo':'@',
      'conteudo':'@'
    },
    templateUrl:'../partials/pod.html'
  };
});
