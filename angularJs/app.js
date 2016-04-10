var app = angular.module('WebSite',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl:'pages/home/home.html',
			controller:'HomeController'
		})

		.state('blog',{
			url:'/blog',
			templateUrl:'pages/blog/blog.html',
			controller:'BlogController'
		})

		.state('projects',{
			url:'/projects',
			templateUrl:'pages/projects/projects.html',
			controller:'ProjectsController'
		})

		.state('projectDetails',{
			url:'/projectDetails',
			templateUrl:'pages/projects/projectDetails.html',
			controller:'ProjectDetailsController'
		})

});
