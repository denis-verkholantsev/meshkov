(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {"data":{"bodyScale":1,"titlesScale":1},"autoFinish":true,"objectives":[{"visibleInScore":true,"label":trans('score1.label'),"id":"score1"}],"items":[{"objective":"score1","id":"item_67F7836E_41A4_ADB7_41CE_942FE33D501C","score":1},{"objective":"score1","id":"item_65587127_41A4_ADB4_41B9_1F1993C95DCE","score":1}],"theme":{"question":{"window":{"option":{"label":{"correct":{"fontFamily":"Gilroy Light"},"incorrect":{"fontFamily":"Gilroy Light"},"fontFamily":"Gilroy Light"},"text":{"fontFamily":"Gilroy Light","selected":{"fontFamily":"Gilroy Light"}}},"buttonsContainer":{"button":{"backgroundOpacity":0.7,"fontFamily":"Gilroy Light","backgroundColor":"#259DAE"}},"title":{"fontFamily":"Gilroy Light"},"backgroundColor":"#FFFFFF","backgroundOpacity":1,"mediaContainer":{"panoramaPlayer":{"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation"}},"closeButton":{"backgroundOpacity":1,"backgroundColor":"#259DAE"}}},"score":{"window":{"closeButton":{"backgroundOpacity":1,"backgroundColor":"#259DAE"},"backgroundColor":"#FFFFFF","buttonsContainer":{"button":{"backgroundOpacity":1,"fontFamily":"Gilroy Light","backgroundColor":"#259DAE"}},"title":{"fontFamily":"Gilroy Light"},"description":{"fontFamily":"Gilroy Light"},"calification":{"fontFamily":"Gilroy Light"},"backgroundOpacity":1,"stats":{"borderOpacity":1,"borderColor":"#259DAE","title":{"fontFamily":"Gilroy Light"},"secondaryValue":{"fontFamily":"Gilroy Light"},"label":{"fontFamily":"Gilroy Light"},"mainValue":{"fontFamily":"Gilroy Light"}}}},"timeout":{"window":{"backgroundOpacity":1,"button":{"backgroundOpacity":1,"fontFamily":"Gilroy Light","backgroundColor":"#259DAE"},"title":{"fontFamily":"Gilroy Light"},"backgroundColor":"#FFFFFF"}}},"timeout":{"title":trans('quizTimeout_D56403B3_F6D9_0F25_41DC_DE8E693EA8BE.title'),"repeat":{"label":trans('quizTimeout_D56403B3_F6D9_0F25_41DC_DE8E693EA8BE.repeat','quizTimeout_D56403B3_F6D9_0F25_41DC_DE8E693EA8BE.repeat.label'),"visible":false},"id":"quizTimeout_D56403B3_F6D9_0F25_41DC_DE8E693EA8BE","score":{"label":trans('quizTimeout_D56403B3_F6D9_0F25_41DC_DE8E693EA8BE.score','quizTimeout_D56403B3_F6D9_0F25_41DC_DE8E693EA8BE.score.label'),"visible":true}},"question":{"id":"quizQuestion_D56503B3_F6D9_0F25_41EB_3C490FDFF4C7","scoreZeroIsIncorrect":true,"ok":trans('quizQuestion_D56503B3_F6D9_0F25_41EB_3C490FDFF4C7.ok'),"responseDisplayTime":2000},"score":{"questions":{"incorrectLabel":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.questionsIncorrect','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.questions.incorrectLabel'),"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.questions','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.questions.label'),"correctLabel":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.questionsCorrect','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.questions.correctLabel'),"visible":true},"canClose":true,"items":{"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.items','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.items.label'),"visible":true},"completion":{"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.completion','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.completion.label'),"visible":false},"id":"quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C","downloadCSV":{"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.downloadCSV','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.downloadCSV.label'),"visible":false},"description":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.description'),"repeat":{"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.repeat','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.repeat.label'),"visible":false},"submitToLMS":{"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.submitToLMS','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.submitToLMS.label'),"visible":false},"elapsedTime":{"label":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.elapsedTime','quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.elapsedTime.label'),"visible":false},"title":trans('quizScore_D56513B4_F6D9_0F23_41D0_D7B66634E50C.title')}};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.7.js.map
})();
//Generated with v2024.0.7, Mon Jul 8 2024