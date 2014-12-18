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

    	AddNewUser.insertUser($scope.newUser)
            .success(function () {
                $scope.status = 'Inserted Customer! Refreshing customer list.';
            }).
            error(function(error) {
                $scope.status = 'Unable to insert customer: ' + error.message;
            });

    }

    init();

});


app.controller('PostsController', function ($scope, Posts) {

    function init() {

        $scope.posts = Posts.query();
    }

    init();

});


app.controller('UserPostsController', function ($scope, $routeParams, GetPostsUser) {

    function init() {
        $scope.userPosts = GetPostsUser.query({userId:$routeParams.userID});
    }

    init();

});


app.controller('AlbumsController', function ($scope, GetAlbums) {

    function init() {
        $scope.albums = GetAlbums.query();
    }

    init();

});


app.controller('AlbumDetailController', function ($scope, $routeParams, GetAlbumDetail) {

    function init() {
        $scope.albumDetail = GetAlbumDetail.query({albumId:$routeParams.albumID});
    }

    init();

});


app.controller('AlbumsUserController', function ($scope, $routeParams, GetAlbumsUser) {

    function init() {
        $scope.albumsUser = GetAlbumsUser.query({userId:$routeParams.userID});
    }

    init();

});



