// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ui.calendar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.appointments', {
      url: '/appointments',
      views: {
        'tab-appointments': {
          templateUrl: 'templates/tab-appointments.html',
          controller: 'AppointmentsCtrl'
        }
      }
    })
    .state('tab.appointment-detail', {
      url: '/appointments/:appointmentId',
      views: {
        'tab-appointments': {
          templateUrl: 'templates/appointment-detail.html',
          controller: 'AppointmentDetailCtrl'
        }
      }
    })

  .state('tab.clinics', {
      url: '/clinics',
      views: {
        'tab-clinics': {
          templateUrl: 'templates/tab-clinics.html',
          controller: 'ClinicsCtrl'
        }
      }
    })
    .state('tab.clinic-detail', {
      url: '/clinics/:clinicId',
      views: {
        'tab-clinics': {
          templateUrl: 'templates/clinic-detail.html',
          controller: 'ClinicDetailCtrl'
        }
      }
    })

  .state('tab.clinic-book', {
      url: '/clinics/:clinicId/book',
      views: {
        'tab-clinics': {
	      templateUrl: 'templates/tab-book.html',
	      controller: 'ClinicBookCtrl'
        }
      }
    })

  .state('tab.vaccines', {
      url: '/vaccines',
      views: {
        'tab-vaccines': {
          templateUrl: 'templates/tab-vaccines.html',
          controller: 'VaccinesCtrl'
        }
      }
    })
    .state('tab.vaccine-detail', {
      url: '/vaccine/:vaccineId',
      views: {
        'tab-vaccines': {
          templateUrl: 'templates/vaccine-detail.html',
          controller: 'VaccineDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
