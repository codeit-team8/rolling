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

function TextEditor({ setPostValue }) {
  const editorStyle = {
    height: '100%',
  };

  return (
    <TextEditorContainer>
      <ReactQuill
        modules={MODULES}
        style={editorStyle}
        onChange={(e) => setPostValue((prev) => ({ ...prev, content: e }))}
      />
    </TextEditorContainer>
  );
}

export default TextEditor;

const TextEditorContainer = styled.div`
  width: -webkit-fill-available;
  height: 26rem;
  padding: 0.1rem 0.1rem 1.6rem 0.1rem;
`;
