var app = angular.module("app1",[]);

app.controller('Main',function ($scope,$http) {

    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&request_type=Water-Leak-Emergency%20Off%20/%20Flooding&$select=count(case_id),zip_code&$order=count(case_id)%20DESC&$group=zip_code").then(function (value) {

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