﻿/// <reference path="../Scripts/angular-1.1.4.js" />

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
      .when('/userDetail:userID',
          {
            controller: 'UserDetailController',
            templateUrl: '/app/partials/userDetail.html'
          })
      .when('/addNewUser',
          {
            controller: 'AddNewUserController',
            templateUrl: '/app/partials/addNewUser.html'
          })
      .when('/posts',
          {
            controller: 'PostsController',
            templateUrl: '/app/partials/posts.html'
          })
      .when('/userPosts:userID',
          {
            controller: 'UserPostsController',
            templateUrl: '/app/partials/userPosts.html'
          })
       .when('/albums',
          {
            controller: 'AlbumsController',
            templateUrl: '/app/partials/albums.html'
          })
       .when('/albums:userID',
          {
            controller: 'AlbumsUserController',
            templateUrl: '/app/partials/albumsUser.html'
          })
       .when('/albumDetail:albumID',
          {
            controller: 'AlbumDetailController',
            templateUrl: '/app/partials/albumDetail.html'
          })
      .otherwise ({ redirectTo: '/'});
});




