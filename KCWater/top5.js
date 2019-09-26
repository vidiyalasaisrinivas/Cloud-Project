var app = angular.module("app",[]);

app.controller('MainCtrl',function ($scope,$http) {

    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&creation_year=2018&$select=request_type,count(case_id)&$order=count(case_id)%20DESC&$group=creation_year,request_type&$LIMIT=10").then(function (value) {

        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);

    });


    google.charts.load('current', {packages:['bar']});
    google.charts.setOnLoadCallback(drawChart);


    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['zipcode','requests'],
            ['64028',  $scope.mydata64028],
            ['64082',  $scope.mydata64082],
            ['64167',  $scope.mydata64167],
            ['64055',  $scope.mydata64055],
            ['64030',  $scope.mydata64030]
        ]);

        var options = {
            title: 'Water service requests'
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_values'));

        chart.draw(data, options);
    }

});