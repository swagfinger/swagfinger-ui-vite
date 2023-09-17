import React from 'react';
import styled from 'styled-components';

type TextProps = {
  children: any;
};

export const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <TextContainer {...rest}>{children}</TextContainer>;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const TextContainer = styled.p`
  color: ${({ theme }) => theme?.Text?.marginBottom};
  margin-bottom: ${({ theme }) => theme?.Text?.marginBottom};
`;