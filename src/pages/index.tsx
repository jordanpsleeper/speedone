import * as React from 'react';
import styled from 'styled-components';

const Hello = styled.div`background: blue;`;

const Homepage: React.FC = () => {
  return <Hello>Hello, World!</Hello>
}

export default Homepage;