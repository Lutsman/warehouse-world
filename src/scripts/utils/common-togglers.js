/*toggler simple*/
(function () {
    const $toggler = $('.js__et');
    const options = {};

    $toggler.jElementToggler(options);
})();

/*toggler no animate*/
(function () {
    const $toggler = $('.js__et-na');
    const options = {
        animation: 'none'
    };

    $toggler.jElementToggler(options);
})();

/*toggler fade*/
(function () {
    const $toggler = $('.js__et-fa');
    const options = {
        animation: 'fade'
    };

    $toggler.jElementToggler(options);
})();

/*toggler slide*/
(function () {
    const $toggler = $('.js__et-sla');
    const options = {
        animation: 'slide'
    };

    $toggler.jElementToggler(options);
})();

/*toggler simple parent lvl 1*/
(function () {
    const $toggler = $('.js__et-p1');
    const options = {
        getTarget: function ($btn) {
            return $btn.parent().find($btn.attr('data-et-target') || $btn.attr('href'));
        }
    };

    $toggler.jElementToggler(options);
})();

/*toggler no animate  parent lvl 1*/
(function () {
    const $toggler = $('.js__et-na-p1');
    const options = {
        getTarget: function ($btn) {
            return $btn.parent().find($btn.attr('data-et-target') || $btn.attr('href'));
        },
        animation: 'none'
    };

    $toggler.jElementToggler(options);
})();

/*toggler fade  parent lvl 1*/
(function () {
    const $toggler = $('.js__et-fa-p1');
    const options = {
        getTarget: function ($btn) {
            return $btn.parent().find($btn.attr('data-et-target') || $btn.attr('href'));
        },
        animation: 'fade'
    };

    $toggler.jElementToggler(options);
})();

/*toggler slide  parent lvl 1*/
(function () {
    const $toggler = $('.js__et-sla-p1');
    const options = {
        getTarget: function ($btn) {
            return $btn.parent().find($btn.attr('data-et-target') || $btn.attr('href'));
        },
        animation: 'slide'
    };

    $toggler.jElementToggler(options);
})();