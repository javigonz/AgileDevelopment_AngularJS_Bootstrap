/*#######################################################################

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


app.controller('UsersController', function ($scope, GetUsers) {

    function init() {
        $scope.users = GetUsers.query();
    }

    init();

});

app.controller('UserDetailController', function ($scope, $routeParams, GetDetailUser) {

    function init() {
        $scope.user = GetDetailUser.query({id:$routeParams.userID});
    }

    init();

});

app.controller('NavbarController', function ($scope, $location) {

    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true;
        } else {
            return false;
        }
    };
});

app.controller('AddNewUserController', function ($scope, AddNewUser) {

    function init() {
       
    }
    
    $scope.insertUser = function()
    {
    	var name = $scope.newUser.name;
    	var email = $scope.newUser.email; 

    	AddNewUser.insertUser(name,email)
            .success(function () {
                $scope.status = 'Inserted Customer! Refreshing customer list.';
            }).
            error(function(error) {
                $scope.status = 'Unable to insert customer: ' + error.message;
            });

    }

    init();

});



