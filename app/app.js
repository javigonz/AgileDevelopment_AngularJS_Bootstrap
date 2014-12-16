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

var app = angular.module('customersApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when ('/customers',
          {
            controller: 'CustomersController',
            templateUrl: '/app/partials/customers.html'
          })

      .otherwise ({ redirectTo: '/customers'});
});




