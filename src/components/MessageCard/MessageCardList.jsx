import styled from 'styled-components';
import MessageCard from './MessageCard';

function MessageCardList({ cards }) {
  console.log('cards:', cards);

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
