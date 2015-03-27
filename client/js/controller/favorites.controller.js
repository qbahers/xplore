angular
    .module('xplore-app')
    .controller('FavoritesController', FavoritesController);

FavoritesController.$inject = ['$scope', 'Account', 'User'];

function FavoritesController ($scope, Account, User) {

    $scope.favorites = [];

    Account.get({}, function (account) {
        User.get({ _id: account._id }, function (user) {
            tracks = user.favoriteTracks;

            tracks.forEach(function(track) {
                $scope.favorites.push(track);
            });
        });
    });
};