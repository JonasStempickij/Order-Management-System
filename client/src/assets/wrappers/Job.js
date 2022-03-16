import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  display: grid;
  grid-template-rows: 150px auto;

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      color: var(--grey-500);
    }
  }
  .content {
    display: grid;
    padding: 1rem 1.5rem;
  }
  .content-center {
    p {
      /* margin: 0; */
      text-align: center;
    }
  }
  footer {
    align-self: end;
    margin-bottom: 1rem;
  }
  .more-btn {
    color: var(--white);
    background: var(--primary-500);
    margin-right: 0.5rem;
    grid-column-start: 1;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
    grid-column-start: 2;
    text-align: center;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
    grid-column-start: 3;
  }
`;

export default Wrapper;
