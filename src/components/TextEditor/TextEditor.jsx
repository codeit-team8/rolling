import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const modules = {
  toolbar: {
    container: [['bold', 'italic', 'underline'], [{ align: [] }], [{ list: 'bullet' }, { list: 'ordered' }]],
  },
};

function TextEditor({ content, onChange }) {
  return (
    <TextEditorContainer>
      <ReactQuill
        modules={modules}
        value={content || ''}
        style={{ height: '100%' }}
        onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      />
    </TextEditorContainer>
  );
}

export default TextEditor;

const TextEditorContainer = styled.div`
  width: 72rem;
  height: 26rem;
  padding: 0.1rem 0.1rem 1.6rem 0.1rem;
`;
