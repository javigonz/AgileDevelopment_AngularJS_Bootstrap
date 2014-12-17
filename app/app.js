/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('usersApp', ['ngRoute','ngResource']);

app.config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when ('/',
          {
            controller: 'UsersController',
            templateUrl: '/app/partials/users.html'
          })
      .when('/userDetail:userID',//Define a route that has a route parameter in it (:userID)
          {
            controller: 'UserDetailController',
            templateUrl: '/app/partials/userDetail.html'
          })
      .when('/addNewUser',
          {
            controller: 'AddNewUserController',
            templateUrl: '/app/partials/addNewUser.html'
          })
      .otherwise ({ redirectTo: '/'});
});




