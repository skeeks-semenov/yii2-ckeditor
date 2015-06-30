/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#AADC6E';
    //Подключение экстра плагинов
    CKEDITOR.config.extraPlugins = 'ckwebspeech,youtube,pbckcode';

    config.ckwebspeech = {'culture' : 'ru-Ru',
         'commandvoice' : 'command',   //trigger voice commands
         'commands': [                 //command list
             {'newline': 'new line'},            //trigger to add a new line in CKEditor
             {'newparagraph': 'new paragraph'},  //trigger to add a new paragraph in CKEditor
             {'undo': 'undo'},                   //trigger to undo changes in CKEditor
             {'redo': 'redo'}                    //trigger to redo changes in CKEditor
          ]
   };
};
