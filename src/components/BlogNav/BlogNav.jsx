import styled from 'styled-components';

const BlogNav = ({ filterProps }) => {
  const filterState = filterProps.filterState;

  return (
    <div className="modal-in-nav">
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
    </div>
  );
};

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
