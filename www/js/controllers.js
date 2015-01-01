angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AppointmentsCtrl', function($scope, Appointments) {
  $scope.appointments = Appointments.all();
  $scope.remove = function(appointment) {
    Appointments.remove(appointment);
  }
})

.controller('AppointmentDetailCtrl', function($scope, $stateParams, Appointments) {
  $scope.appointment = Appointments.get($stateParams.appointmentId);
})

.controller('ClinicsCtrl', function($scope, Clinics) {
  $scope.clinics = Clinics.all();
  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: false,
      header:{
        left: 'Clinic Availability',
        center: '',
        right: 'today prev,next'
      }//,
      //eventClick: $scope.alertOnEventClick,
      //eventDrop: $scope.alertOnDrop,
      //eventResize: $scope.alertOnResize
    }
  }; 
  $scope.remove = function(clinic) {
    Clinics.remove(clinic);
  }
})

.controller('ClinicDetailCtrl', function($scope, $stateParams, Clinics) {
  $scope.clinic = Clinics.get($stateParams.clinicId);
})

.controller('ClinicBookCtrl', function($scope, $stateParams, eventSources) {
	$scope.uiConfig = {
		calendar:{
			height: 450,
			editable: false,
			header:{
				left: 'Clinic Availability',
				center: '',
				right: 'today prev,next'
			},
			dayClick: function(date, something, event, view) {
				var calendar = view.element.parents('[ui-calendar]').first();

				if (view.name == 'month') {
					calendar.fullCalendar('changeView', 'agendaDay');
					calendar.fullCalendar('gotoDate', date);
					return;
				}

				$scope.bookDate(date);
			},
			//eventDrop: $scope.alertOnDrop,
			//eventResize: $scope.alertOnResize
		}
	};
	
	$scope.eventSources = [
		{
			events: eventSources.all(),
			color: 'yellow',   // an option!
			textColor: 'black' // an option!
		}
	];
	
	$scope.bookDate = function(date) {
		var endDate = date,
			duration = 1; // in hours
			
		endDate.setTime(endDate.getTime() + (duration*60*60*1000)); 
		eventSources.add({
			id: 3,
			date: date,
			clinic: $stateParams.clinicId,
			title: prompt('Event title'),
			start: date.toISOString(),
			end: endDate.toISOString(),
			allDay: false,
		});
	}
})

.controller('VaccinesCtrl', function($scope, Vaccines) {
  $scope.vaccines = Vaccines.all();
})

.controller('VaccineDetailCtrl', function($scope, $stateParams, Vaccines) {
  $scope.vaccine = Vaccines.get($stateParams.vaccineId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableEmail: true
  };
})

.controller('calCtrl', function ($scope, $rootScope, $log, $state) {
	$scope.eventSources = [
	    {
	        events: [
	            {
	                title: 'Event1',
	                start: '2011-04-04'
	            },
	            {
	                title: 'Event2',
	                start: '2011-05-05'
	            }
	            // etc...
	        ],
	        color: 'yellow',   // an option!
	        textColor: 'black' // an option!
	    }
	];
});