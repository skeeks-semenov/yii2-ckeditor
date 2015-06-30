<?php
/**
 * @author Semenov Alexander <semenov@skeeks.com>
 * @link http://skeeks.com/
 * @copyright 2010 SkeekS (СкикС)
 * @date 30.06.2015
 */
namespace skeeks\yii2\ckeditor;

use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\widgets\InputWidget;

/**
 * Class CKEditorWidget
 * @package skeeks\yii2\ckeditor
 */
class CKEditorWidget extends InputWidget
{
	/**
	 * @var string
	 */
	public $preset = CKEditorPresets::FULL;

	/**
	 * @var array the options for the CKEditor 4 JS plugin.
	 * Please refer to the CKEditor 4 plugin Web page for possible options.
	 * @see http://docs.ckeditor.com/#!/guide/dev_installation
	 */
	public $clientOptions = [];


	/**
	 * @inheritdoc
	 */
	public function init()
	{
		parent::init();
		$this->_initOptions();
	}

	/**
	 * Initializes the widget options.
	 * This method sets the default values for various options.
	 */
	protected function _initOptions()
	{
		if ($this->preset)
		{
			$options = CKEditorPresets::getPresets($this->preset);
		}

		$this->clientOptions = ArrayHelper::merge($options, $this->clientOptions);
	}

	/**
	 * @inheritdoc
	 */
	public function run()
	{
		if ($this->hasModel()) {
			echo Html::activeTextarea($this->model, $this->attribute, $this->options);
		} else {
			echo Html::textarea($this->name, $this->value, $this->options);
		}
		$this->registerAssets();
		$this->_registerPlugin();
	}

    /**
     * @return $this
     */
    public function registerAssets()
    {
        $view = $this->getView();
		CKEditorWidgetAsset::register($view);

        return $this;
    }

	/**
	 * Registers CKEditor plugin
	 */
	protected function _registerPlugin()
	{
        $view 	= $this->getView();
		$id 	= $this->options['id'];

		$options = $this->clientOptions !== false && !empty($this->clientOptions)
			? Json::encode($this->clientOptions)
			: '{}';

        $js[] = "CKEDITOR.replace('$id', $options);";
        $js[] = "skeeks.ckEditorWidget.registerOnChangeHandler('$id');";

        if(isset($this->clientOptions['filebrowserUploadUrl'])) {
            $js[] = "skeeks.ckEditorWidget.registerCsrfImageUploadHandler();";
        }

        $view->registerJs(implode("\n", $js));
	}
}