myApp.controller('RegistrationController',
  ['$scope', 'Authentication',
  function($scope, Authentication) {
  
  $scope.login = function() {
    Authentication.login($scope.user);
  }; //login

  $scope.logout = function() {
    Authentication.logout($scope.user);
  }; //logout

  $scope.register = function() {
    Authentication.register($scope.user);
  }; // register

//Jquery
$(function inputFocusColor() {
    $('input').css({
    'background-color' : '#dcdcdc'
  });
    $('input').focus(
    function(){
        $(this).css({'background-color' : '#6f6f6f',
              'color' : '#e1e1e1',
              'transition' : 'all .5s ease-in-out',
      });
    });

    $('input').blur(
    function(){
        $(this).css({'background-color' : '#dcdcdc',
              'color' : '#000000',
              'transition' : 'all .5s ease-in-out'
      });
    });

  });


}]); // Controller



 