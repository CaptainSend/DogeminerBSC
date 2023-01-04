

    $(document).on('click', '.inputTN__bottom', function () {
        let total = $(this).prev().prev();
        if ( total.val() > 0.01 ) {
            total.val(+total.val() - 0.01);
        }
    });

    $(document).on('click', '.inputTN__top', function () {
        let total = $(this).prev();
        total.val(+total.val() + 0.01);
    });

