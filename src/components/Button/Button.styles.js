import styled from '@emotion/styled';

export const StyleBtn = styled.button`
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(5)};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radius.normal};
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.33;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
