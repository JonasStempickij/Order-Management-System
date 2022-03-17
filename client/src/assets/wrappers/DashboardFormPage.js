import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .position {
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    grid-column-gap: 10px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
  }
  .btn-container {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5rem;
  }
  .clear-btn {
    background: var(--grey-400);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  .submit-btn {
    background: var(--green-light);
    color: var(--green-dark);
  }
  .submit-btn:hover {
    background: var(--green-dark);
    color: var(--white);
  }
  .file-upload {
    align-items: center;
    border-radius: var(--borderRadius);
    background-color: var(--grey-200);
  }
`;

export default Wrapper;
