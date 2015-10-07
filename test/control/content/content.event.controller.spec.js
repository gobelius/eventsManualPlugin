describe('Unit : Event Manual Plugin content.home.controller.js', function () {
    var ContentEvent, scope, $rootScope, $controller, Buildfire, ActionItems, TAG_NAMES, STATUS_CODE, LAYOUTS, STATUS_MESSAGES, CONTENT_TYPE, q, Utils;
    beforeEach(module('eventsManualPluginContent'));
    var editor;
    beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _TAG_NAMES_, _STATUS_CODE_, _LAYOUTS_, _STATUS_MESSAGES_) {
        $rootScope = _$rootScope_;
        q = _$q_;
        scope = $rootScope.$new();
        $controller = _$controller_;
        TAG_NAMES = _TAG_NAMES_;
        STATUS_CODE = _STATUS_CODE_;
        STATUS_MESSAGES = _STATUS_MESSAGES_;
        LAYOUTS = _LAYOUTS_;
        Buildfire = {
            components: {
                carousel: {
                    editor: function (name) {
                        return {}
                    },
                    viewer: function (name) {
                        return {}
                    }
                }
            }
        };
        it('DataStore should exist and be an object', function () {
            expect(ContentEvent.isUpdating).toEqual(false);
        });
         }));

    beforeEach(function () {
        ContentEvent = $controller('ContentHomeCtrl', {
            $scope: scope,
            $q: q,
            Buildfire: Buildfire,
            TAG_NAMES: TAG_NAMES,
            ActionItems: ActionItems,
            STATUS_CODE: STATUS_CODE,
            CONTENT_TYPE: CONTENT_TYPE,
            LAYOUTS: LAYOUTS,
            Utils:Utils
        });
    });

    var  _data = {
        "title": "",
        "listImage": "",
        "deepLinkUrl": "",
        "carouselImages": [],
        "startDate": "",
        "endDate": "",
        "isAllDay": "",
        "timezone": "",
        "timeDisplay": {},
        "repeat": {},
        "addressTitle": "",
        "address": {},
        "description": "",
        "links": []

    };


})
;