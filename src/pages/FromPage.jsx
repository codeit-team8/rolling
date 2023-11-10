import { useState } from 'react';
import TextEditor from '@/components/TextEditor/TextEditor';
import ProfileSelect from '@/components/Profile/ProfileSelect';

function FromPage() {
  const [contentHTML, setContentHTML] = useState('');

  return (
    <div>
      <TextEditor contentHTML={contentHTML} setContentHTML={setContentHTML} />
      <ProfileSelect />
    </div>
  );
}

export default FromPage;
