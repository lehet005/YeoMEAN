'use strict';

angular.module('yeoMeanApp')
  .controller('GpacalcCtrl', function ($scope) {
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

//this is each class item with a name, credit amount, and a value of each grade letter
        $scope.classes = [{
            name:'name',
            credit: 0,
            grade:{
                sign:'',
                value:''}
        }];

        //this function will push a new class to the class list
        $scope.addClass = function() {
            $scope.classes.push({
                name:'name',
                credit: 0,
                grade: {
                    sign:'',
                    value:''}
            });
        };

        //This function allows you to remove only if the number of classes is > 1
        $scope.removeClass = function(index) {
            if($scope.classes.length > 1) {
                $scope.classes.splice(index, 1);
            } else {window.alert("You can't drop the only class")
            }

        };

        //This function will calculate the GPA, including credits per class
        $scope.total = function() {
            var total = 0;
            var cred = 0;
            angular.forEach($scope.classes, function(item) {
                total += item.credit * item.grade.value;
                cred += item.credit;
            });
            $scope.returnCred = cred;
            $scope.gpa = ((total)/cred).toFixed(3);
        };

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            console.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
  });