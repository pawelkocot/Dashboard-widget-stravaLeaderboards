angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('strava leaderboard', {
            sizex: 6,
            sizey: 2,
            color: '#2a6c62',
            template: 'Dashboard-widget-stravaLeaderboards/stravaLeaderboards.html',
            dataBind: {
                type: 'internal',
                source: '/api/strava'
            }
        });
    });
