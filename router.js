angular.module("app").config(function($routeProvider){
    $routeProvider
    .when("/profile", {
        template: `
        
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