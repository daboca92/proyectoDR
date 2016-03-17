app.directive('portfolioInfo', function(){
return{
restrict: 'E',
scope:{
info: '='
},
templateUrl:
'/templates/portfolioTemplate.html'
};
});