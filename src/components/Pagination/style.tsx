import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  width: auto;
  margin: 0 auto;
`;

const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  padding-bottom: 30px;
`;

const Item = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  font-weight:
  min-width: 32px;

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  &.selected {
    background-color: rgba(5,137,255,0.8);
    color: white;
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

const Arrow = styled.div`
  &::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: '';
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }

  &.left {
    transform: rotate(-135deg) translate(-50%);
  }

  &.right {
    transform: rotate(45deg);
  }
`;

const SC = {
  Container,
  Navigation,
  Item,
  Arrow
};

export default SC;