var myBlog = angular.module("myBlog", []);

myBlog.controller("blogCtrl", function ($scope, $http) {
    var scope = $scope;

    scope.title = "My News";
    //API callback URI
    var url = "https://www.googleapis.com/blogger/v3/blogs/6081790175238890686/posts?&key=AIzaSyBM8dxhhp1Zf0PFTFpLslGHYEW55Z9SRnk";


    $http.get(url).then(function (data) {
        //variable to hold the items obj in data
        scope.posts = data.data.items;
        console.log(scope.posts);
    }).catch(function (error) {
        console.log("Error: " + error);
    });
});