const $sortingContainer = $('.tm-table-sort');

$sortingContainer.each(function () {
    const $container = $(this);
    const $headCols = $container.find('thead th');
    const $tbody = $container.find('tbody');
    const $rows = $container.find('tbody > tr');

    $headCols.not($headCols.eq(0)).on('click', function () {
        const $filterCol = $(this);
        const $btn = $filterCol.find('button');

        $headCols.removeClass('tm-active');
        $filterCol.addClass('tm-active');
        $headCols.not('.tm-active')
            .find('.tm-filter-min-to-max, .tm-filter-max-to-min')
            .removeClass('tm-filter-min-to-max tm-filter-max-to-min');

        if ($btn.hasClass('tm-filter-min-to-max')) {
            $btn.removeClass('tm-filter-min-to-max');
            $btn.addClass('tm-filter-max-to-min');
            sortRows(1);
        } else if ($btn.hasClass('tm-filter-max-to-min')) {
            $btn.removeClass('tm-filter-max-to-min');
            $btn.addClass('tm-filter-min-to-max');
            sortRows();
        } else {
            $btn.addClass('tm-filter-min-to-max');
            sortRows();
        }

        function sortRows(order) {
            const collIndex = $headCols.index($filterCol);

            $rows.sort(function (a, b) {
                const x = +$(a).find('> td').eq(collIndex).text();
                const y = +$(b).find('> td').eq(collIndex).text();

                return order ? y - x : x - y;
            });

            $rows.detach().appendTo($tbody);
        }
    });
});