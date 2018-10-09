angular.module("app").config(function($routeProvider){
    $routeProvider
    .when("/facebook", {
        template: `
        <facebook></facebook>
        `
    })
    .when("/twitter", {
        template: `
        <twitter></twitter>
        `
    })
    .when("/instagram", {
        template: `
        <instagram></instagram>
        `
    })
    .otherwise({
        redirectTo: "/facebook"
    })

})