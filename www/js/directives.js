angular.module('starter.directives', [])

   .directive('tweetItem', function () {
      return {
         scope     : {
            tweet: "="
         },
         controller: function ($scope) { },
         link      : function ($scope, element, attrs) {
            twttr.widgets.createTweet(
               $scope.tweet, element[0],
               {
                  dnt         : false,
                  conversation: 'none',    // or all
                  linkColor   : '#39b54a', // default is blue
                  theme       : 'light'    // or dark
               })
               .then(function (element) {
                  console.log(element);
               

               }, function(err){
                  console.log(err)
               });
         },
         restrict  : 'E'
      };
   });
