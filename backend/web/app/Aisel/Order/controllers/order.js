'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            AiselOrder
 * @description     ...
 */

define(['app'], function (app) {
    app.controller('OrderCtrl', ['$scope', 'orderService', 'collectionService',
        function ($scope, orderService, collectionService) {

            $scope.collectionTitle = 'Orders';
            $scope.pageLimit = 20;
            $scope.pageNumber = 1;
            $scope.columns = [
                {name: 'id', enableColumnMenu: false, width: '100'},
                {name: 'status', enableColumnMenu: false},
                {name: 'totalamount', enableColumnMenu: false},
                {name: 'currency', enableColumnMenu: false},
                {name: 'description', enableColumnMenu: false},
                {name: 'country', enableColumnMenu: false},
                {name: 'region', enableColumnMenu: false},
                {name: 'city', enableColumnMenu: false},
                {name: 'created_at', enableColumnMenu: false},
                {name: 'updated_at', enableColumnMenu: false},
            ];
            $scope.gridOptions = collectionService.gridOptions($scope);

            // === Load collection from remote ===
            $scope.loadCollection = function (pageNumber) {
                collectionService.loadCollection($scope, orderService, pageNumber);
            }
            $scope.loadCollection();

        }]);
});