import styled from '@emotion/styled';

export const SectionApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
`;

export const ErrorMessage = styled.h2`
  width: 600px;
  text-align: center;
`;
