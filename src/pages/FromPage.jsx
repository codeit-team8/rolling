import { useState } from 'react';
import TextEditor from '@/components/TextEditor/TextEditor';

function FromPage() {
  const [contentHTML, setContentHTML] = useState('');

  const handleContent = (value) => setContentHTML(value);

  return <TextEditor contentHTML={contentHTML} onChange={handleContent} />;
}

export default FromPage;
