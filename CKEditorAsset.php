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
 * Class CKEditorAsset
 * @package skeeks\yii2\ckeditor
 */
class CKEditorAsset extends AssetBundle
{
	public $sourcePath = '@vendor/skeeks/yii2-ckeditor/assets';

	public $js = [
		'ckeditor/ckeditor.js',
	];

	public $depends = [
        'yii\web\YiiAsset',
		'yii\web\JqueryAsset'
	];
} 