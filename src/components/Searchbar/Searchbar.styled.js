import styled from '@emotion/styled';

export const StyledSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  padding: ${p => p.theme.spacing(3)};
  min-height: ${p => p.theme.spacing(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 1000;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radius.normal};
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.xl};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spacing(2)};
  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
