import styled from 'styled-components';

export const SidebarContainer = styled.section`
  position: fixed;
  overflow-x: hidden;
  left: 0px;
  padding-right: 1rem;
  background: var(--gray-color);
  min-width: 300px;
  height: 100vh;
  border-right: 1px solid var(--border-color);
`;
export const SideBarContent = styled.div``;
export const SideBarBoard = styled.div`
  padding-top: 2rem;
  span {
    font-weight: 700;
    text-transform: uppercase;
    padding: 0px 1rem;
    font-size: var(--normal-font-size);
    margin-bottom: 1rem;
    display: block;
    color: var(--gray-color-alt);
  }
  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const verifyActiveAndBg = (bg?: boolean, active?: boolean) => {
  if (bg && !active) {
    return 'var(--first-color)';
  }

  if (!bg && active) {
    return 'var(--text-color)';
  }
  return 'var(--gray-color-alt)';
};

export const SideBarButton = styled.button<{ bg?: boolean; active?: boolean }>`
  width: 100%;
  padding: 0.5rem 1.2rem;
  color: ${(props) => verifyActiveAndBg(props.bg, props.active)};
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: ${(props) => (props.active ? 'var(--first-color)' : 'none')};
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  min-height: 50px;
  display: flex;
  font-size: var(--normal-font-size);
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  border-left: none;
  &:hover {
    background: ${(props) => (props.bg ? 'rgba(0,0,0, .3)' : 'var(--first-color)')};
    color: ${(props) => (props.bg ? 'none' : ' var(--text-color)')};
  }
`;
