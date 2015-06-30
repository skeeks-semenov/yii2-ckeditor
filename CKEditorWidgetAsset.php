<?php
/**
 * @author Semenov Alexander <semenov@skeeks.com>
 * @link http://skeeks.com/
 * @copyright 2010 SkeekS (СкикС)
 * @date 30.06.2015
 */
namespace skeeks\yii2\ckeditor;

use yii\web\AssetBundle;

/**
 * Class CKEditorWidgetAsset
 * @package skeeks\widget\ckeditor
 */
class CKEditorWidgetAsset extends CKEditorAsset
{
	public $depends = [
		'skeeks\yii2\ckeditor\CKEditorAsset'
	];

	public $js = [
		'js/skeeks-ckeditor.widget.js'
	];
} 