import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImageGroup from '@/components/profileImage/ProfileImageGroup.jsx';
import { FONT18B, FONT24B } from '@/styles/fontType.js';
import Emoji from '@/components/Emoji/Emoji.jsx';
import { BACKGROUND_COLOR_PALETTE } from '@/util/backgroundColors.jsx';

function PaperCard({ card }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, topReactions } = card;
  const { recentMessages } = card;
  const profileImages = recentMessages === 0 ? []
    : recentMessages
      .map((message) => message.profileImageURL)
      .slice(0, 3);
  const reactions = [...topReactions].slice(0, 3);
  const colorPalette = BACKGROUND_COLOR_PALETTE[backgroundColor];

  return (
    <Link to={`/post/${card.id}`}>
      <CardContainer $backgroundColor={colorPalette.color} $imageUrl={backgroundImageURL}>
        <CardInfo>
          <Recipient $isImage={backgroundImageURL}>{`To. ${name}`}</Recipient>
          <ProfileImageGroup profileImages={profileImages} messageCount={messageCount} />
          <WriterCounter $isImage={backgroundImageURL}>
            <span>{messageCount}</span>
            명이 작성했어요!
          </WriterCounter>
        </CardInfo>
        <BottomContainer>
          <EmojiContainer>
            {reactions.length !== 0 && reactions.map((el) => <Emoji reaction={el} key={el.emoji} />)}
          </EmojiContainer>
        </BottomContainer>
        <PatternImg src={colorPalette.pattern} $isImage={backgroundImageURL} />
      </CardContainer>
    </Link>
  );
}

export default PaperCard;

const CardContainer = styled.div`
  position: relative;
  width: 20.8rem;
  height: 23.2rem;
  flex-shrink: 0;
  padding: 3rem 2.4rem 2rem;
  border-radius: 16px;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: ${({ $backgroundColor, $imageUrl }) =>
          ($imageUrl
                  ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$imageUrl})`
                  : `${$backgroundColor}`)};
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 27.5rem;
    height: 26rem;
  }
`;

const Recipient = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
  color: ${({ $isImage }) => ($isImage ? 'var(--white, #fff)' : 'var(--gray-900, #181818)')};
  text-overflow: ellipsis;
  ${FONT18B};

  @media (min-width: 768px) {
    ${FONT24B};
  }
`;

const CardInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.2rem;
`;

const WriterCounter = styled.div`
  color: ${({ $isImage }) => ($isImage ? 'var(--grey-200, #eee)' : 'var(--gray-700, #3a3a3a)')};

  span {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.007rem;
    color: ${({ $isImage }) => ($isImage ? 'var(--grey-200, #eee)' : 'var(--gray-700, #3a3a3a)')};
  }

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.016px;

    span {
      font-size: 1.6rem;
      letter-spacing: -0.016px;
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 16.2rem;
  gap: 1.6rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 1.6rem;
  margin-top: 4.3rem;

  @media (min-width: 768px) {
    width: 22.7rem;
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  align-items: flex-start;
  z-index: 1;
  gap: 0.8rem;
`;

const PatternImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10.7rem;
  height: 14.2rem;
  flex-shrink: 0;
  border-radius: 0 0 16px 0;
  display: ${({ $isImage }) => ($isImage ? 'none' : 'static')} !important;

  @media (min-width: 768px) {
    width: 14.2rem;
  }
`;
