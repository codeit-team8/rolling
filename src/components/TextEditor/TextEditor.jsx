import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

// prettier-ignore
const MODULES = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      [{ list: 'bullet' }, { list: 'ordered' }],
    ],
  },
};

function TextEditor({ contentHTML, setContentHTML }) {
  return (
    <TextEditorContainer>
      <ReactQuill
        modules={MODULES}
        value={contentHTML || ''}
        style={{ height: '100%' }}
        onChange={(e) => setContentHTML(e)}
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