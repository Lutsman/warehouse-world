(function () {
    const $chatList = $('.tm-dialog-list');

    if (!$chatList.length) return;

    const $modal = $('#modal-messages');
    const $chat = $('#tm-chat-switcher');
    const setCarret = setCarretTop.bind(null, $chatList);

    setCarret();
    $chat.on('beforeshow show', setCarret);
    $modal.on('beforeshow show', setCarret);
    $chatList.on('scroll', setCarret);

    function setCarretTop($list) {
        const $activeLi = $list.find('> li.uk-active');
        const $inactiveLi = $list.find('> li:not(.uk-active)');
        const $inactiveCarets = $inactiveLi.find('.tm-caret');
        const $carret = $activeLi.find(".tm-caret");

        $inactiveCarets.hide();
        setSameMiddle($activeLi[0], $carret[0]);
        $carret.fadeIn(200);
    }

    function setSameMiddle(base, caret) {
        const baseMiddle = getMiddle(base);
        const caretMiddle = getMiddle(caret);
        const newTop = parseFloat(getComputedStyle(caret).top) + (baseMiddle.y - caretMiddle.y);

        caret.style.top = newTop + 'px';
    }

    function getMiddle(elem) {
        const size = getCoords(elem);
        const width = size.right - size.left;
        const height = size.bottom - size.top;

        return {
            x: size.left + width / 2,
            y: size.top + height / 2,
        };
    }

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            bottom: box.bottom + pageXOffset,
            left: box.left + pageXOffset,
            right: box.right + pageXOffset,
        };

    }
})();