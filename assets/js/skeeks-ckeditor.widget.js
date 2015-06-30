/*!
 * @author Semenov Alexander <semenov@skeeks.com>
 * @link http://skeeks.com/
 * @copyright 2010-2014 SkeekS (Sx)
 * @date 27.10.2014
 * @since 1.0.0
 */
if (typeof skeeks == "undefined" || !skeeks) {
    var skeeks = {};
}

skeeks.ckEditorWidget = (function ($) {

    var pub = {
        registerOnChangeHandler: function (id) {
            CKEDITOR && CKEDITOR.instances[id] && CKEDITOR.instances[id].on('change', function () {
                CKEDITOR.instances[id].updateElement();
                $('#' + id).trigger('change');
                return false;
            });
        },
        registerCsrfImageUploadHandler: function () {
            yii & $(document).off('click', '.cke_dialog_tabs a:eq(2)').on('click', '.cke_dialog_tabs a:eq(2)', function () {
                var $form = $('.cke_dialog_ui_input_file iframe').contents().find('form');
                var csrfName = yii.getCsrfParam();
                if (!$form.find('input[name=' + csrfName + ']').length) {
                    var csrfTokenInput = $('<input/>').attr({'type': 'hidden', 'name': csrfName}).val(yii.getCsrfToken());
                    $form.append(csrfTokenInput);
                }
            });
        }
    };
    return pub;
})(jQuery);
