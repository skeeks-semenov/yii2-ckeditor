/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#AADC6E';
    //Подключение экстра плагинов                    pbckcode | codesnippetgeshi
    //CKEDITOR.config.extraPlugins = 'ckwebspeech,youtube,doksoft_stat,sourcedialog,codemirror,ajax,codesnippet,xml,widget,lineutils,dialog,dialogui';

    config.ckwebspeech = {'culture' : 'ru-Ru',
         'commandvoice' : 'command',   //trigger voice commands
         'commands': [                 //command list
             {'newline': 'new line'},            //trigger to add a new line in CKEditor
             {'newparagraph': 'new paragraph'},  //trigger to add a new paragraph in CKEditor
             {'undo': 'undo'},                   //trigger to undo changes in CKEditor
             {'redo': 'redo'}                    //trigger to redo changes in CKEditor
          ]
   };

    //config.codeSnippetGeshi_url = '../lib/colorize.php';

    //config.codeSnippet_theme = 'monokai_sublime';

    /*config.codeSnippet_languages = {
        javascript: 'JavaScript',
        php: 'PHP'
    };*/

    config.codemirror = {

        // Whether or not you want Brackets to automatically close themselves
        autoCloseBrackets: true,

         // Whether or not you want tags to automatically close themselves
        autoCloseTags: true,

         // Whether or not to automatically format code should be done when the editor is loaded
        autoFormatOnStart: true,

        // Whether or not to automatically format code which has just been uncommented
        autoFormatOnUncomment: true,

        // Whether or not to continue a comment when you press Enter inside a comment block
        continueComments: true,

         // Whether or not you wish to enable code folding (requires 'lineNumbers' to be set to 'true')
        enableCodeFolding: true,

        // Whether or not to enable code formatting
        enableCodeFormatting: true,

        // Whether or not to enable search tools, CTRL+F (Find), CTRL+SHIFT+F (Replace), CTRL+SHIFT+R (Replace All), CTRL+G (Find Next), CTRL+SHIFT+G (Find Previous)
        enableSearchTools: true,

        // Whether or not to highlight all matches of current word/selection
        highlightMatches: true,

         // Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs
        indentWithTabs: false,

         // Whether or not you want to show line numbers
        lineNumbers: true,

        // Whether or not you want to use line wrapping
        lineWrapping: true,

         // Define the language specific mode 'htmlmixed' for html  including (css, xml, javascript), 'application/x-httpd-php' for php mode including html, or 'text/javascript' for using java script only
        mode: 'htmlmixed',

        // Whether or not you want to highlight matching braces
        matchBrackets: true,

        // Whether or not you want to highlight matching tags
        matchTags: true,

        // Whether or not to show the showAutoCompleteButton   button on the toolbar
        showAutoCompleteButton: true,

         // Whether or not to show the comment button on the toolbar
        showCommentButton: true,

        // Whether or not to show the format button on the toolbar
        showFormatButton: true,

         // Whether or not to show the search Code button on the toolbar
        showSearchButton: true,

         // Whether or not to show Trailing Spaces
        showTrailingSpace: true,

        // Whether or not to show the uncomment button on the toolbar
        showUncommentButton: true,

         // Whether or not to highlight the currently active line
        styleActiveLine: true,

         // Set this to the theme you wish to use (codemirror themes)
        theme: 'default',

        // "Whether or not to use Beautify for auto formatting
        useBeautify: false
    };
};
