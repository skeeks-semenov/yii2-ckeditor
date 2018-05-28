<?php
/**
 * @link https://cms.skeeks.com/
 * @copyright Copyright (c) 2010 SkeekS
 * @license https://cms.skeeks.com/license/
 * @author Semenov Alexander <semenov@skeeks.com>
 */

namespace skeeks\yii2\ckeditor;

/**
 * @author Semenov Alexander <semenov@skeeks.com>
 */
class CKEditorWidgetAsset extends CKEditorAsset
{
    public $depends = [
        'skeeks\yii2\ckeditor\CKEditorAsset',
    ];

    public $js = [
        'js/skeeks-ckeditor.widget.js',
    ];
} 