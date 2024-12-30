import styled from 'styled-components';
import { IBlogNav } from '../ModalBlog/ModalBlog';

const BlogNav = ({ filterProps }: { filterProps: IBlogNav }) => {
  const filterState = filterProps.filterState;

  return (
    <ModalInNav className="modal-in-nav">
      {filterProps.filterProps.map((item, i) => {
        return item === filterState ? (
          <Button className="buttons active" onClick={() => filterProps.setFilterState(item)} key={i}>
            {item}
          </Button>
        ) : (
          <Button className="buttons" onClick={() => filterProps.setFilterState(item)} key={i}>
            {item}
          </Button>
        );
      })}
    </ModalInNav>
  );
};

const ModalInNav = styled.div`
  max-height: 10vh;
  box-sizing: border-box;
  grid-column: 2/12;
  grid-row: 3;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));

  ${(props) => props.theme.breakpoints.mq[2]} {
    // bis 960px
    max-height: 12vh;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    // bis 400px
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  }
`;

const Button = styled.button`
  &.buttons {
    padding: 0 15px;
    margin: 1vh 1vw;
    border-radius: 25px;
    font-size: calc(1rem + 0.75vw);
    border: 0px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.bgGrey};

    &.active {
      background-color: ${(props) => props.theme.colors.bgRed};
      color: ${(props) => props.theme.colors.bgWhite};
    }
  }
`;

export default BlogNav;
