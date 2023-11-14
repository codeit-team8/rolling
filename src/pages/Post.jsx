import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostHeader from '@/components/Header/PostHeader.jsx';
import { getRecipientsId } from '@/api/recipients.js';

function Post() {
  const [postName, setPostName] = useState('');
  const [postMessageCount, setPostMessageCount] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [profileImages, setProfileImages] = useState([]);

  const { recipientId } = useParams();

  const handleRollingPaper = useCallback(async () => {
    const results = await getRecipientsId({ id: recipientId });
    const { name, messageCount, topReactions } = { ...results };
    const recentMessages = [...results.recentMessages];

    setPostName(name);
    setPostMessageCount(messageCount);
    setReactions([...topReactions].slice(0, 3));
    const recentPostProfileImages = recentMessages.length === 0 ? []
      : recentMessages
        .map((message) => message.profileImageURL)
        .slice(0, 3);
    setProfileImages(recentPostProfileImages);
  }, [getRecipientsId]);

  useEffect(() => {
    handleRollingPaper();
  }, [handleRollingPaper]);

  return (
    <>
      <PostHeader
        name={postName}
        messageCount={postMessageCount}
        reactions={reactions}
        profileImages={profileImages}
      />
    </>
  );
}

export default Post;
