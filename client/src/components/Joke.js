import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Setup = styled.h1``;
const Punchline = styled.h2`
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isRevealed }) => isRevealed ? 'none' : 'black'};
  color: #E6D0EE;
  user-select: none;
`;

export default ({ setup, punchline }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => setIsRevealed(false), [setup, punchline]);

  return (
    <>
      {/* <label for='setup' className='sr-only'>setup</label> */}
      <Setup id='setup'>{setup}</Setup>
      <br aria-hidden='true' />
      <label htmlFor='punchline' className='sr-only'>punchline</label>
      <Punchline
        id='punchline'
        onClick={() => setIsRevealed(true)}
      >{isRevealed ? punchline : 'Click for the punchline'}
      </Punchline>
    </>
  );
};
