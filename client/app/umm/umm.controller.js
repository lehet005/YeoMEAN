'use strict';

angular.module('yeoMeanApp')
  .controller('UmmCtrl', function ($scope, $http) {
    $scope.movieList = [];
    $scope.courseList = [];

    //Update movieList to have the same data that's in the database on the sever
    $http.get('/api/movies').success(function(movieList) {
        $scope.movieList = movieList;
    });



    $scope.addClass = function() {
        if($scope.newMovie === ''  || $scope.newRating === '') {
            return;
        }
        switch($scope.newGrade) {
            case "A":
                $scope.newValue = 4.000;
                break;
            case "A-":
                $scope.newValue = 3.667;
                break;
            case "B+":
                $scope.newValue = 3.333;
                break;
            case "B":
                $scope.newValue = 3.000;
                break;
            case "B-":
                $scope.newValue = 2.667;
                break;
            case "C+":
                $scope.newValue = 2.333;
                break;
            case "C":
                $scope.newValue = 2.000;
                break;
            case "C-":
                $scope.newValue = 1.667;
                break;
            case "D+":
                $scope.newValue = 1.333;
                break;
            case "D":
                $scope.newValue = 1.000;
                break;
            case "F":
                $scope.newValue = 0.000;
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
        $http.post('/api/movies', { name: $scope.newMovie, rating: $scope.newRating, grade: $scope.newGrade, GPAvalue:
            $scope.newValue }).success(function (movieName){
            //Update movieList to have the same data that's in the database on the sever
            $http.get('/api/movies').success(function(movieList) {
                $scope.movieList = movieList;
            });
            $scope.newMovie = '';
            $scope.newRating = '';
            $scope.newGrade = '';
            $scope.newValue = '';
        });
    };

        $scope.gpaCalc = function() {
            var total = 0;
            var totalCredit = 0;
            for(var i = 0; i < $scope.movieList.length; i++) {
                total += ($scope.movieList[i].GPAvalue * $scope.movieList[i].rating);
                totalCredit += $scope.movieList[i].rating;
            }
            var gpa = 0;
            if(totalCredit == 0){
                return "YOU SUCK";
            } else {
                gpa = (total / totalCredit).toFixed(3);
                return gpa;
            }
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
