// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngAnimate'])

.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state('home',{
    controller: 'HomeController',
    url: '/home',
    templateUrl: './template/home.html'
  })
  .state('inicio',{
    controller: 'InicioController',
    url: '/bsa',
    templateUrl: './template/inicio.html'
  })
  .state('auditoria',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento',
    templateUrl: './template/auditoria.html'
  })
  .state('auditoriaI',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento-I',
    templateUrl: './template/auditoriaI.html'
  })
  .state('auditoriaII',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento-II',
    templateUrl: './template/auditoriaII.html'
  })
  .state('auditoriaIII',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento-III',
    templateUrl: './template/auditoriaIII.html'
  })
  .state('auditoriaIV',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento-IV',
    templateUrl: './template/auditoriaIV.html'
  })
  .state('auditoriaV',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento-V',
    templateUrl: './template/auditoriaV.html'
  })
  .state('auditoriaVI',{
    controller: 'HomeController',
    url: '/auditoriaFolhaPagamento-VI',
    templateUrl: './template/auditoriaVI.html'
  })
  .state('revisaoFiscal',{
    controller: 'HomeController',
    url: '/revisaoFiscal',
    templateUrl: './template/revisaoFiscal.html'
  })
  .state('revisaoFiscalI',{
    controller: 'HomeController',
    url: '/revisaoFiscalI',
    templateUrl: './template/revisaoFiscalI.html'
  })
  .state('revisaoFiscalII',{
    controller: 'HomeController',
    url: '/revisaoFiscalII',
    templateUrl: './template/revisaoFiscalII.html'
  })
  .state('revisaoFiscalIII',{
    controller: 'HomeController',
    url: '/revisaoFiscalIII',
    templateUrl: './template/revisaoFiscalIII.html'
  })
  .state('revisaoFiscalIV',{
    controller: 'HomeController',
    url: '/revisaoFiscalIV',
    templateUrl: './template/revisaoFiscalIV.html'
  })
  .state('gestaoTrabalhista',{
    controller: 'HomeController',
    url: '/gestaoTrabalhista',
    templateUrl: './template/gestaoTrabalhista.html'
  })
  .state('gestaoTrabalhistaI',{
    controller: 'HomeController',
    url: '/gestaoTrabalhistaI',
    templateUrl: './template/gestaoTrabalhistaI.html'
  })
  .state('gestaoTrabalhistaII',{
    controller: 'HomeController',
    url: '/gestaoTrabalhistaII',
    templateUrl: './template/gestaoTrabalhistaII.html'
  })
  .state('gestaoTrabalhistaIII',{
    controller: 'HomeController',
    url: '/gestaoTrabalhistaIII',
    templateUrl: './template/gestaoTrabalhistaIII.html'
  })
  .state('gestaoTrabalhistaIV',{
    controller: 'HomeController',
    url: '/gestaoTrabalhistaIV',
    templateUrl: './template/gestaoTrabalhistaIV.html'
  })
  .state('desenvolvimento',{
    controller: 'HomeController',
    url: '/desenvolvimento',
    templateUrl: './template/desenvolvimento.html'
  })
  .state('desenvolvimentoI',{
    controller: 'HomeController',
    url: '/desenvolvimentoI',
    templateUrl: './template/desenvolvimentoI.html'
  })
  .state('desenvolvimentoII',{
    controller: 'HomeController',
    url: '/desenvolvimentoII',
    templateUrl: './template/desenvolvimentoII.html'
  })
  .state('desenvolvimentoIII',{
    controller: 'HomeController',
    url: '/desenvolvimentoIII',
    templateUrl: './template/desenvolvimentoIII.html'
  })
  .state('desenvolvimentoIV',{
    controller: 'HomeController',
    url: '/desenvolvimentoIV',
    templateUrl: './template/desenvolvimentoIV.html'
  })
  .state('desenvolvimentoV',{
    controller: 'HomeController',
    url: '/desenvolvimentoV',
    templateUrl: './template/desenvolvimentoV.html'
  })
  .state('contato',{
    controller: 'HomeController',
    url: '/contato',
    templateUrl: './template/contato.html'
  })
  .state('clientes',{
    controller: 'ClientesController',
    url: '/clientes',
    templateUrl: './template/clientes.html'
  })
  ;

  $urlRouterProvider.otherwise('/home');
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
