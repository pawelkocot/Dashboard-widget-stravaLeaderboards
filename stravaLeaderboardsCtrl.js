angular.module('widget')
    .controller('stravaLeaderboardsCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.$watch('widget.data', resetData);

        function resetData(data) {
            $scope.items = [];
            $timeout(function() {
                $scope.items = data.leaderboard.slice(0, 3);
            }, 1000);
        }
    }]);