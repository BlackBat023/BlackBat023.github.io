var myBlog = angular.module("myBlog", []);

myBlog.controller("blogCtrl", function ($scope, $http) {
    var scope = $scope;

    scope.title = "My News";
    //API callback URI
    var blogId = "6081790175238890686";
    var accessToken = "AIzaSyBM8dxhhp1Zf0PFTFpLslGHYEW55Z9SRnk";
    var url = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts?&key=" + accessToken;

    $http.get(url).then(function (data) {
        //variable to hold the items obj in data
        scope.posts = data.data.items;
        console.log(scope.posts);
    }).catch(function (error) {
        console.log("Error: " + error);
    });

    /*
    var url = "https://bloggerstefan-skliarovv1.p.rapidapi.com/getSinglePostById";
    var blogId = "6081790175238890686";
    var accessToken = "AIzaSyBM8dxhhp1Zf0PFTFpLslGHYEW55Z9SRnk";
    */

});