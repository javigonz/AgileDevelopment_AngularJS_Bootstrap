//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

app.constant('BaseUrl', 'http://jsonplaceholder.typicode.com');

app.factory("GetUsers", function(BaseUrl, $resource) {

  return $resource(BaseUrl + "/users");
  
});

app.factory("GetDetailUser", function(BaseUrl, $resource) {

   return $resource(BaseUrl + '/users' );
  
});

app.factory("AddNewUser", function() {

   var AddNewUser = {};
   
   AddNewUser.insertUser = function (name, email) {
        
    };

    return AddNewUser;
  
});


