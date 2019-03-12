'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]).component('listElement', {
    template:
    // '<img src="https://img.icons8.com/color/48/000000/folder-invoices.png">' +
    // '<li class="inline">{{$ctrl.param}}</li>',
        '<p style = "line-height: 20px">\n' +
        '<img src = "https://img.icons8.com/office/16/000000/live-folder.png" style="vertical-align: middle"/> {{$ctrl.param}}\n' +
        '</p>',
    controller: function () {
    },
    bindings: {
        param: '<',
        showContent: '='
    }
});
