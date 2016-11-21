// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var module = angular.module('starter', ['ionic', 'ui.rCalendar'])
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
    .controller('SuperController',function($scope) {
    console.log('CARDS CTRL');

    $scope.sliderOptions = {
        loop: false,
        direction: 'horizontal', //or vertical
        speed: 500,
        pagination: false
    }

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        console.log('slider init');
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        console.log('active index',$scope.activeIndex);
        if($scope.activeIndex === 5) {
            var audio = new Audio('tidsrapportera.mp3');
            audio.play();
        }
//        var firstDate = new Date('2016-11-13');
//        var eventSource = [];
//        for(var i=0; i<$scope.activeIndex+1) {
//            var date = new Date(firstDate.getTime());
//            date.setDate(date.getDate() + i);
//            eventSource.push({
//                title: 'adsf',
//                startTime: date,
//                endTime: date,
//                allDay: true
//            });
//        }
//        $scope.calendar.eventSource = eventSource;
        
        $scope.previousIndex = data.slider.previousIndex;
    });
        
    $scope.calendar = {};
        
    $scope.changeMode = function (mode) {
        $scope.calendar.mode = mode;
    };

    $scope.loadEvents = function () {
        $scope.calendar.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };

    $scope.onViewTitleChanged = function (title) {
        $scope.viewTitle = title;
    };

    $scope.today = function () {
        $scope.calendar.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.calendar.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.onTimeSelected = function (selectedTime, events) {
        console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0));
        
    };
})
    .controller('HoursSwiper',function($scope) {
    console.log('CARDS CTRL');

    $scope.sliderOptions = {
        loop: true,
        direction: 'vertical',
        speed: 500,
        spaceBetween: -50,
        pagination: false
    }
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        console.log('slider init');
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
    });
})
    .controller('MinutesSwiper',function($scope) {
    console.log('activity CTRL');

    $scope.sliderOptions = {
        loop: true,
        direction: 'vertical',
        speed: 500,
        spaceBetween: -50,
        pagination: false
    }
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        console.log('slider init');
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
    });
})
    .controller('ActivitySwiper',function($scope) {
    console.log('activity CTRL');

    $scope.sliderOptions = {
        loop: true,
        direction: 'vertical',
        speed: 500,
        spaceBetween: -50,
        pagination: false
    }
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        console.log('slider init');
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
    });
})
.directive('martin',function(){
    return {
        templateUrl: 'martin.html'
    };
});
