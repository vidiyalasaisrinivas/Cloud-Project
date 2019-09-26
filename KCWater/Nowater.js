var app = angular.module("app",[]);

app.controller('MainCtrl',function ($scope,$http) {

    $http.get("\n" +
        "https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&creation_year=2018&request_type=Water-No%20Water%20/%20Pressure-No%20Water&$select=creation_month,count(case_id)&$order=count(case_id)%20DESC&$group=creation_month&$LIMIT=12").then(function (value) {

        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.fiscal_year2012 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.fiscal_year2013 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.fiscal_year2014 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.fiscal_year2015 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.fiscal_year2016 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.fiscal_year2017 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.fiscal_year2018 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.fiscal_year2019 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.fiscal_year2020 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.fiscal_year2021 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.fiscal_year2022 = parseInt($scope.kcvalue[10].count_case_id);
        $scope.fiscal_year2023 = parseInt($scope.kcvalue[11].count_case_id);
        drawChart();
    });

    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'count'],
            ['5', $scope.fiscal_year2012 ],
            ['3', $scope.fiscal_year2013 ],
            ['4', $scope.fiscal_year2014 ],
            ['10', $scope.fiscal_year2015 ],
            ['11', $scope.fiscal_year2016 ],
            ['2', $scope.fiscal_year2017 ],
            ['6', $scope.fiscal_year2018 ],
            ['9', $scope.fiscal_year2019 ],
            ['8', $scope.fiscal_year2020 ],
            ['12', $scope.fiscal_year2021 ],
            ['7', $scope.fiscal_year2022 ],
            ['1', $scope.fiscal_year2023 ]


        ]);

        var options = {
            title: 'Monthly analysis',
            is3D: true,

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }
});


