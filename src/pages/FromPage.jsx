import { useState } from 'react';
import TextEditor from '@/components/TextEditor/TextEditor';

function FromPage() {
  const [contentHTML, setContentHTML] = useState('');

  return (
    <div>
      <TextEditor contentHTML={contentHTML} setContentHTML={setContentHTML} />
    </div>
  );
}

export default FromPage;
