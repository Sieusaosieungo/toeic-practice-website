import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import { defaultConfig, builtinPlugins } from '../../utils/CKEditor.config';

import './style.scss';

class CKEditorCustom extends ClassicEditorBase {}

CKEditorCustom.defaultConfig = defaultConfig;
CKEditorCustom.builtinPlugins = builtinPlugins;

export default CKEditorCustom;
