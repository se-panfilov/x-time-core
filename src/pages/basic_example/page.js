'use strict';

angular.module('app.pages.basic_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('users', {
                url: '/users',
                templateUrl: 'users/users.html',
                controller: 'UsersPageCtrl'
            })
        ;
    })

    .controller('BasicExamplePageCtrl', function ($scope) {

    });