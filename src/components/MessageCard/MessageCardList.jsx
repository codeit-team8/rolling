import styled from 'styled-components';
import MessageCard from '@/components/MessageCard/MessageCard';

function MessageCardList({ cards }) {
  return (
    <div>
      <MessageCardWrapper>
        {cards && cards.map((messageCard) => <MessageCard value={messageCard} key={messageCard.id} />)}
      </MessageCardWrapper>
    </div>
  );
}

const MessageCardWrapper = styled.div`
  display: flex;
`;

export default MessageCardList;
