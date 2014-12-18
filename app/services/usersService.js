//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

app.constant('BaseUrl', 'http://jsonplaceholder.typicode.com');

app.factory('GetUsers', function(BaseUrl, $resource) {

  return $resource(BaseUrl + '/users');
  
});

app.factory('GetDetailUser', function(BaseUrl, $resource) {

   return $resource(BaseUrl + '/users' );
  
});

app.factory('AddNewUser', function() {

   var AddNewUser = {};
   
   AddNewUser.insertUser = function (objUser) {
      //Method to add new user  
    };

    return AddNewUser;
  
});

app.factory('Posts', function(BaseUrl, $resource) {

  return $resource(BaseUrl + '/posts');
  
});

app.factory('GetPostsUser', function(BaseUrl, $resource) {

   return $resource(BaseUrl + '/posts' );
  
});

app.factory('GetAlbums', function(BaseUrl, $resource) {

  return $resource(BaseUrl + '/albums');
  
});

app.factory('GetAlbumDetail', function(BaseUrl, $resource) {

   return $resource(BaseUrl + '/photos' );
  
});

app.factory('GetAlbumsUser', function(BaseUrl, $resource) {

  return $resource(BaseUrl + '/albums');
  
});


