var myApp = angular.module('randApp', ['ngRoute', 'firebase'])
                            .constant('FIREBASE_URL', 'https://dataangular.firebaseio.com/'); //use a constant to avoid repeating URL throughout 


myApp.run(['$rootScope', '$location',
            function($rootScope, $location) { //if user isn't logged in, display errror message
              $rootScope.$on('$routeChangeError', 
                function(event,next,previous,error){
                  if(error='AUTH_REQUIRED'){
                    $rootScope.message = 'Sorry, you must login';
                    $location.path('/login');
                  } //AUTH_REQUIRED
              }); //event info
            }]); //run


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/checkins/:uId/:mId/checkinsList', {
      templateUrl: 'views/checkinsList.html',
    }).
    when('/checkins/:uId/:mId', {
      templateUrl: 'views/checkins.html',
    }).
    when('/meetings', {
      templateUrl: 'views/meetings.html',
      resolve: {
        currentAuth: function(Authentication){
          return Authentication.requireAuth();
        } //currentAuth
      } //reslove
    }).
    otherwise({
      redirectTo: '/login'
    });

}]);



//Jquery


  
