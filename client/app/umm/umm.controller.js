'use strict';

angular.module('yeoMeanApp')
  .controller('UmmCtrl', function ($scope, $http) {
    $scope.movieList = [];

    //Update movieList to have the same data that's in the database on the sever
    $http.get('/api/movies').success(function(movieList) {
        $scope.movieList = movieList;
    });

        $scope.grades = [
            {grade:'A', value:4.000},
            {grade:'A-', value:3.667},
            {grade:'B+', value:3.333},
            {grade:'B', value:3.000},
            {grade:'B-', value:2.667},
            {grade:'C+', value:2.333},
            {grade:'C', value:2.000},
            {grade:'C-', value:1.667},
            {grade:'D+', value:1.333},
            {grade:'D', value:1.000},
            {grade:'F', value:0.000}
        ];

    $scope.addMovie = function() {
        if($scope.newMovie === ''  || $scope.newRating === '') {
            return;
        }
        switch($scope.newGrade) {
            case "A":
                break;
            case "A-":
                break;
            case "B+":
                break;
            case "B":
                break;
            case "B-":
                break;
            case "C+":
                break;
            case "C":
                break;
            case "C-":
                break;
            case "D+":
                break;
            case "D":
                break;
            case "F":
                break;
            default:
                return;
        }
        switch($scope.newRating) {
            case 5:
                break;
            case 4:
                break;
            case 3:
                break;
            case 2:
                break;
            case 1:
                break;
            default:
                return;
        }
        $http.post('/api/movies', { name: $scope.newMovie, rating: $scope.newRating, grade: $scope.newGrade }).success(function(){
            //Update movieList to have the same data that's in the database on the sever
            $http.get('/api/movies').success(function(movieList) {
                $scope.movieList = movieList;
            });
            $scope.newMovie = '';
            $scope.newRating = '';
            $scope.newGrade = '';
        });
    };

        $scope.gpaCalc = function() {
            
        }

    $scope.deleteMovie = function(movie) {
        $http.delete('/api/movies/' + movie._id).success(function(){
            //Update movieList to have the same data that's in the database on the sever
            $http.get('/api/movies').success(function(movieList) {
                $scope.movieList = movieList;
            });
        });
    };
  });
