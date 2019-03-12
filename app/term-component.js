angular.module('termApp').component('termComponent', {
    template:
        '<ul ng-repeat="item in $ctrl.termsrelation">\n' +
        '        <li>{{item.rel}}</li>\n' +
        '        <ul ng-repeat="term in item.terms">\n' +
        '            <li>{{term.name}}</li>\n' +
        '            <ul ng-if="term.name === \'Vegetables\'" ng-repeat="item2 in level2.termsrelation">\n' +
        '                <li>{{item2.rel}}</li>\n' +
        '                <ul ng-repeat="term2 in item2.terms">\n' +
        '                    <li>{{term2.name}}</li>\n' +
        '                </ul>\n' +
        '            </ul>\n' +
        '        </ul>\n' +
        '    </ul>',
    controller: function () {
    }
});