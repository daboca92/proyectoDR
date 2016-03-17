app.directive('portfolioTemplate', function(){
return{
restrict: 'E',
scope:{
info: '='
},
templateUrl:
'../../templates/portfolioTemplate.html'
};
});