import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default ({ setup, punchline }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => setIsRevealed(false), [setup, punchline]);

  const Setup = styled.h1``;
  const Punchline = styled.h2`
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    background-color: ${isRevealed ? 'none' : 'black'};
    color: #E6D0EE;
    user-select: none;
  `;

  return (
    <>
      {/* <label for='setup' className='sr-only'>setup</label> */}
      <Setup id='setup'>{setup}</Setup>
      <br aria-hidden='true' />
      <label for='punchline' className='sr-only'>punchline</label>
      <Punchline
        id='punchline'
        onClick={() => setIsRevealed(true)}
      >{isRevealed ? punchline : 'Click for the punchline'}
      </Punchline>
    </>
  );
}
;
