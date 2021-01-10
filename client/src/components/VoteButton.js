import styled from 'styled-components';
import {
  MdThumbUp as ThumbUp,
  MdThumbDown as ThumbDown
} from 'react-icons/md';

const Button = styled.button`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ isUp }) => isUp ? '#B7E1CD' : '#F5BC8D'};
  font-size: 4rem;

  :hover {
    background-color: ${({ isUp }) => isUp ? '#6BAA8C' : '#F48024'};
  }
`;

export default ({ up, down, handleVote }) => {
  // default to up (true) if none or both are specified
  const isUp = up || !down;

  return (
    <Button
      isUp={isUp}
      onClick={() => handleVote(isUp ? 'up' : 'down')}
    >
      {
        isUp
          ? <ThumbUp />
          : <ThumbDown />
      }
    </Button>
  );
};
