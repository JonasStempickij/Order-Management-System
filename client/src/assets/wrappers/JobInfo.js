import styled from 'styled-components';

const Wrapper = styled.div`
  ol {
    padding-left: 1rem;
  }
  .hide {
    li:nth-child(n + 4) {
      display: none;
    }
  }
  li {
    border-bottom: 1px solid var(--grey-100);
  }
  .position-material {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .position-header {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .positio-status {
    display: block;
  }
  .done {
    color: var(--green-dark);
  }
  .todo {
    color: var(--red-dark);
  }
`;
export default Wrapper;
