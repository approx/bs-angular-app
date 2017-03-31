app.controller("NavClickController",function($scope){
  console.log('teste');
  $scope.open=false;
  var isPlay=false;
  var button = document.getElementById('navButton')
  $scope.Click = function(){
    if(!isPlay){
      if($scope.open){
        button.classList.remove('mobileNavEnter');
        setTimeout(function() {
          button.classList.add('mobileNavLeft');
          isPlay=true;
        }, 100);
        setTimeout(function() {
          button.classList.add('mobileNavStart');
          isPlay=false;
        }, 700);
        $scope.open=false;
        console.log("fechou");
      }
      else {
        button.classList.remove('mobileNavLeft');
        setTimeout(function() {
          button.classList.remove('mobileNavStart');
          button.classList.add('mobileNavEnter');
          isPlay=true;
        }, 100);
        setTimeout(function() {
          isPlay=false;
        }, 1100);
        $scope.open=true;
        console.log("abriu");
      }
    }
  }
})
