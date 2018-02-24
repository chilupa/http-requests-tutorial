var app = angular.module('myApp', []);

app.controller('myCtrl', function ($http) {

    vm = this; // Using 'Controller as' Syntax
    serverData = '';
    vm.errorMsg = false;
    vm.btnClickEvent = false;
    vm.submitBtnClick = false;
    vm.isGetReqClicked = false;
    vm.isPostReqClicked = false;

    vm.getReqClick = function () {
        vm.isGetReqClicked = true;
        vm.isPostReqClicked = false;
        //GET Request 
        vm.getDataFromServer = function () {
            vm.btnClickEvent = true;
            console.log('button clicked');
            $http({
                method: "GET",
                url: "http://localhost:3000/record"
            }).then(function mySuccess(response) {
                vm.listHeading = "List of Users"
                vm.serverData = response.data;
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }

    vm.postReqClick = function () {
        vm.isPostReqClicked = true;
        vm.isGetReqClicked = false;
        //POST Request
        vm.postRequestToServer = function () {
            vm.submitBtnClick = true;
            var dataObject = {
                "userFirstName": vm.firstName,
                "userLastName": vm.lastName
            }

            console.log(dataObject)

            $http({
                method: "POST",
                url: "http://localhost:3000/record",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: dataObject
            }).then(function mySuccess(response) {
                vm.serverData = response.data;
                console.log(vm.serverData)
            }, function myError(response) {
                console.log(response.statusText);
            });
        }
    }
}
);