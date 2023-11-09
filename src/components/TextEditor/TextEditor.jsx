import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function TextEditor() {
  return (
    <Editor
      toolbarHidden
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
  );
}

export default TextEditor;
