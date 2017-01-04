(function(){
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.message="";
  //var lunchMenu = $scope.lunchMenu;
  
  $scope.borderColorObj="";
  $scope.colorObj="";
  $scope.message="";
  
  $scope.checkLunchMenu = function(){
      
      var lunchMenuCount = getNumberofItems($scope.lunchMenu);
      console.log(lunchMenuCount);
      
      switch(true){
          case (lunchMenuCount>0 && lunchMenuCount <=3):
              // do something
              $scope.message="Enjoy!";
              $scope.colorObj={'color':'green'};
              $scope.borderColorObj={'border-color':'green'};
              break;
          case (lunchMenuCount >3):
              // do something
              $scope.message="Too much!";
              $scope.colorObj={'color':'green'};
              $scope.borderColorObj={'border-color':'green'};
              break;
          default:
              // do something
              $scope.message="Please enter data first";
              $scope.colorObj={'color':'red'};
              $scope.borderColorObj={'border-color':'red'};
              break;
      }
  };
  
  var getNumberofItems = function(string){
    
    if(string){
        var items = string.split(",");
        var arr=[];
        
        for(var i=0;i<items.length;i++){
            if(items[i] !='')
                arr.push(items[i]);
        }
        return arr.length;
    }else{
        return 0;
    }
  };
}

})();
