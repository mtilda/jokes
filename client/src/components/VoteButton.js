import Button from '../ui/Button';
import {
  MdThumbUp as ThumbUp,
  MdThumbDown as ThumbDown
} from 'react-icons/md';

export default ({ up, down, handleVote }) => {
  // default to up (true) if none or both are specified
  const isUp = up || !down;

  return (
    <Button
      size='100px'
      color={isUp ? '#B7E1CD' : '#F5BC8D'}
      hoverColor={isUp ? '#6BAA8C' : '#F48024'}
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
