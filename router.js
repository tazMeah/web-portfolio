angular.module("app").config(function($routeProvider){
    $routeProvider
    .when("/facebook", {
        template: `
        <facebook></facebook>
        `
    })
    .when("/twitter", {
        template: `
        `
    })
    .otherwise({
        redirectTo: "/facebook"
    })

})