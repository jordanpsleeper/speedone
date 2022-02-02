import * as React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`background: blue;`;

const NotFoundPage: React.FC = () => {
  return <NotFound>404 Not Found!</NotFound>
}

export default NotFoundPage;