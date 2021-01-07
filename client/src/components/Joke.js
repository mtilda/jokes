import { useState } from 'react';
import styled from 'styled-components';

export default ({ setup, punchline }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  const Setup = styled.h1``;
  const Punchline = styled.h2`
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    background-color: ${showPunchline ? 'none' : 'black'};
    color: ${showPunchline ? '#E6D0EE' : 'black'};
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
        onMouseEnter={() => setShowPunchline(true)}
        onMouseLeave={() => setShowPunchline(false)}
      >{punchline}
      </Punchline>
    </>
  );
}
;
