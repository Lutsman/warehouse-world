const $tables = $('.js__et-table');

$tables.each(function (el, i) {
    const $table = $(this);
    const $rows = $table.find('tbody > tr');
    const options = {
        animation: 'none',
        groupName: 'table-togglers-' + i,
    };

    $rows.jElementToggler(options);
});