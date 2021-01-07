import styled from 'styled-components';
import {
  MdThumbUp as ThumbUp,
  MdThumbDown as ThumbDown
} from 'react-icons/md';

export default ({ up, down, handleClick }) => {
  // default to up (true) if none or both are specified
  const isUp = up || !down;

  const Button = styled.button`
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${isUp ? '#B7E1CD' : '#F5BC8D'};
    font-size: 4rem;

    :hover {
      background-color: ${isUp ? '#6BAA8C' : '#F48024'};
    }
  `;

  return (
    <Button onClick={handleClick}>
      {
        isUp
          ? <ThumbUp />
          : <ThumbDown />
      }
    </Button>
  );
};
