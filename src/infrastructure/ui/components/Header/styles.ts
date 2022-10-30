import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: var(--gray-color);
`;
export const HeaderContent = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0px 1.5rem;
  margin: 0 auto;
`;
export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
`;

export const HeaderLogo = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid var(--border-color);
  padding-right: 2rem;
  width: 319px;
`;
