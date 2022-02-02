import * as React from 'react';
import styled from 'styled-components';

const Hello = styled.div`
  background: purple;
  color: #000;
`;

const Homepage: React.FC = () => {
  return <Hello>Hello, World!</Hello>
}

export default Homepage;