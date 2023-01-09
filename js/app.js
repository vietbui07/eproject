var app = angular.module("nobelprize", ["ngRoute", "ngAnimate"]);
    app.config(function($routeProvider) {
    $routeProvider
    .when("/",{ 
        templateUrl:"home.html", 
        controller:"CtrNobelprize"
    })
    .when("/video/",{
            templateUrl:"video.html", 
            controller:"pageVideo"
            // controller:"top" 
    })
    .when("/about/",{
      templateUrl:"about.html", 
      controller:"pageAbout"
      // controller:"top" 
    })
    .when("/nomination/",{
      templateUrl:"nomination.html", 
      controller:"pageNomination"
      // controller:"top" 
    })
    .when("/alfrednobel/",{
      templateUrl:"alfrednobel.html", 
      controller:"pageAlfred"
      // controller:"top" 
    })
    .when("/contentNomina/",{
            templateUrl:"contentNomina.html", 
            controller:"contentNomi"
    })
    .when("/laureates/",{
      templateUrl:"laureates.html", 
      controller:"contentlaureates"
    })
    .when("/physics/",{
      templateUrl:"physics.html", 
      controller:"contentphysics"
    })
    .when("/chemistry/",{
      templateUrl:"chemistry.html", 
      controller:"contentchemistry"
    })
    .when("/medicine/",{
      templateUrl:"medicine.html", 
      controller:"contentmedicine"
    })
    .when("/literature/",{
      templateUrl:"literature.html", 
      controller:"contentliterature"
    })
    .when("/peace/",{
      templateUrl:"peaceprize.html", 
      controller:"contentpeace"
    })
    .when("/economi/",{
      templateUrl:"economicsciences.html", 
      controller:"contenteconomi"
    })
    .when("/newsevent/",{
      templateUrl:"newsevent.html", 
      controller:"contentnewsevent"
    })
    .when("/nobelsupmid/",{
      templateUrl:"nobelsupmid.html", 
      controller:"contentnobelsupmid"
    })
    .when("/dialo/",{
      templateUrl:"nobeldialo.html", 
      controller:"contentdialo"
    })
    .when("/inspiration/",{
      templateUrl:"prize-inspiration.html", 
      controller:"contentinspiration"
    })
    .when("/dialogue/",{
      templateUrl:"dialogue.html", 
      controller:"contentdialogue"
    })
    .when("/fqa/",{
      templateUrl:"fqa.html", 
      controller:"contenfqa"
    })
    .otherwise({
        redirectTo: '/'
    });
});
/*app.controller("CtrNobelprize", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/content_json.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);*/
app.controller("CtrNobelprize", function($scope, $http){
  $http.get("json/contentjson.json").then(function(response){
      $scope.content = response.data;
  }); 

}
);
app.controller("pageNomination", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/contentjson.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("pageAbout", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/contentjson.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("pageAlfred", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/contentjson.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("pageVideo", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/contentjson.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentlaureates", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentphysics", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentchemistry", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentmedicine", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentliterature", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentpeace", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contenteconomi", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/nobel-prizes-laureates.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);
app.controller("contentNomi", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http.get("json/contentjson.json").then(function(response){
      $scope.content = response.data;
      console.log(response.data)
  })
  .then(function(response){
    $scope.content = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  });
}]);

/*app.controller("CtrNobelprize", function($scope, $http){
  $http.get("json/content_json.json").then(function(response){
      $scope.content = response.data;
  });
});
app.controller("pageNomination", function($scope, $http){
  $http.get("json/content_json.json").then(function(response){
      $scope.content = response.data;
  });
});
app.controller("pageAbout", function($scope, $http){
  $http.get("json/content_json.json").then(function(response){
      $scope.content = response.data;
  });
});
app.controller("pageAlfred", function($scope, $http){
  $http.get("json/content_json.json").then(function(response){
      $scope.content = response.data;
  });
});
app.controller("pageVideo", function($scope, $http){
  $http.get("json/content_json.json").then(function(response){
      $scope.content = response.data;
  });
});
app.controller("contentNomi", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.pagenominationId=$routeParams.id;
  $http({
      method: "GET",
      url: "content_json.json"
  })
  .then(function(response){
      $scope.content = $filter('filter')(response.data,{id: parseInt($scope.pagenominationId)}, true)[0];
  })
}]);
*/
/*app.controller("contentNomi", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.contentnominationId=$routeParams.id;
  $http({
      method: "GET",
      url: "content_json.json"
  })
  .then(function(response){
      $scope.products = $filter('filter')(response.data,{id: parseInt($scope.contentnominationId)}, true)[0];
  })
}]);*/
/*app.controller("CtrNobelprize", function($scope, $http){
    $http.get("json/nobelprize.json").then(function(response){
        $scope.products = response.data;
    });
}); */

/*'use strict';

angular.module("nobelprize",[
  'ngRoute',
  'ngMaterial',
  'nobelprize.about',
  'nobelprize.nomination',
  'nobelprize.nobelPrizeLaureates',
  'nobelprize.alfredNobel',
  'nobelprize.newEvent'
]).controller('CtrNobelprize',function($scope,$location){ // to add class
  $scope.isActive= function(route){
    return route === $location.path();
  };
  $scope.subCheck= function(){
    alert("Thank you for subscribing!");
  }
}).config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/",{templateUrl: "home.html",controller:"homeCtrl"})
    .when("/about",{templateUrl: "about.html",controller:"aboutCtrl"})
    .when("/nomination",{templateUrl: "nomination.html",controller:"nominationCtrl"})
    .when("/alfrednobel",{templateUrl:"alfrednobel.html",controller:"alfrednobelCtrl"})
    .when("/laureates",{templateUrl:"laureates.html",controller:"laureateslCtrl"});
    
   /* .when("/features",{templateUrl:"features/features.html"})
    .when("/facilities",{templateUrl:"features/facilities.html",controller:"facilityCtrl"})
    .when("/services",{templateUrl:"features/services.html",controller:"serviceCtrl"})
    .when("/centres",{templateUrl:"features/centres.html",controller:"centreCtrl"})

    .when("/contact",{templateUrl:"contact/contact-us.html",controller:"sectionCtrl"}) //same ctrl as about
    .when("/vacancies",{templateUrl:"vacancies/vacancies.html",controller:"vacancyCtrl"})
}]);*/
/*.controller("homeCtrl",function($scope){

}).controller("formCtrl",function($scope){
  $scope.queryCheck= function(){
    alert("Thank you for your query!");
  }
}).controller("vacancyCtrl",function($scope){

}).controller("cvCtrl",function($scope){
  $scope.cvCheck= function(){
    alert("Thank you for your time!");
  }
}).controller("registerCtrl", function ($scope) {
  $scope.registerCheck = function () {
    var x = registerFrm.password.value;
    var y = registerFrm.confirmPassword.value;
    if (x!=y) {
      alert("Password and Confirm Password not the same!");
    }
    if (x==y) {
      alert("Thank you for your register!");
    }
  }
});

// feedback
$(function() {
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
	});
	$("#feedback-form form").on('submit', function() {
		alert("Thank you for your feedback!");
    $("#feedback-form").toggle("slide");
	});
});

$(window).scroll(function(){
  if($(window).scrollTop()>110){
    $('#nav-scroll').addClass('fixed-top');
    $('#main').addClass('scroll-margin');
  }
  if($(window).scrollTop()<110){
    $('#nav-scroll').removeClass('fixed-top');
    $('#main').removeClass('scroll-margin');
  }
})*/