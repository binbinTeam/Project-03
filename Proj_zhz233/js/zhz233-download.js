$(function () {
        $('#notice_tab li:eq(0) a').tab('show');
    });
    $('#help_q_1').on('show.bs.collapse', function () {
        $('#help_q_2').collapse('hide');
        $('#help_q_3').collapse('hide');
        $('#help_q_4').collapse('hide');
        $('#help_q_5').collapse('hide');
    })
    $('#help_q_2').on('show.bs.collapse', function () {
        $('#help_q_1').collapse('hide');
        $('#help_q_3').collapse('hide');
        $('#help_q_4').collapse('hide');
        $('#help_q_5').collapse('hide');
    })
    $('#help_q_3').on('show.bs.collapse', function () {
        $('#help_q_1').collapse('hide');
        $('#help_q_2').collapse('hide');
        $('#help_q_4').collapse('hide');
        $('#help_q_5').collapse('hide');
    })
    $('#help_q_4').on('show.bs.collapse', function () {
        $('#help_q_2').collapse('hide');
        $('#help_q_3').collapse('hide');
        $('#help_q_1').collapse('hide');
        $('#help_q_5').collapse('hide');
    })
    $('#help_q_5').on('show.bs.collapse', function () {
        $('#help_q_2').collapse('hide');
        $('#help_q_3').collapse('hide');
        $('#help_q_4').collapse('hide');
        $('#help_q_1').collapse('hide');
    })