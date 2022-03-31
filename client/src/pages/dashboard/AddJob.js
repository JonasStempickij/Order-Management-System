import {
  FormRow,
  Alert,
  FormRowSelect,
  FormRowCheckbox,
} from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useRef } from 'react';

const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    company,
    jobFile,
    isEditing,
    handleChange,
    handleSelectChange,
    handleSelectAdd,
    handleInputChange,
    clearValues,
    createJob,
    editJob,
    jobPositions,
    uploadChange,
    downloadFile,
  } = useAppContext();

  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !jobFile) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handlePositionStatus = (e, index) => {
    const name = e.target.name;
    const value = e.target.checked;
    handleInputChange({ name, value, index });
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  const handleSelectJobInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    handleSelectChange({ name, value, index });
  };

  const handleJobPositionsInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    handleInputChange({ name, value, index });
  };

  const handleDownload = (e) => {
    e.preventDefault();
    downloadFile();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {jobPositions.map((item, index) => {
            return (
              <div className='position' key={index}>
                <FormRow
                  labelText='Position name'
                  name='positionName'
                  value={item.positionName}
                  handleChange={handleJobPositionsInput}
                  type='text'
                  index={index}
                ></FormRow>
                <FormRowSelect
                  name='material'
                  value={item.material}
                  list={item.materialOptions}
                  handleChange={handleSelectJobInput}
                  index={index}
                />
                <FormRow
                  labelText='Thickness'
                  name='materialThickness'
                  value={item.materialThickness}
                  handleChange={handleJobPositionsInput}
                  type='number'
                  index={index}
                />
                <FormRow
                  labelText='Quantity'
                  name='positionQuantity'
                  value={item.positionQuantity}
                  handleChange={handleJobPositionsInput}
                  type='number'
                  index={index}
                />
                <FormRowCheckbox
                  labelText='Status'
                  name='positionStatus'
                  checked={item.positionStatus}
                  handleChange={handlePositionStatus}
                  type='checkbox'
                  index={index}
                />
              </div>
            );
          })}
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block add-btn'
              onClick={handleSelectAdd}
            >
              Add
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                console.log(fileInput);
                fileInput.current.value = null;
                clearValues();
              }}
            >
              Clear
            </button>
            <input
              className='file-upload'
              type='file'
              name='jobFile'
              ref={fileInput}
              onChange={(e) => {
                uploadChange(e);
              }}
            />
            <button
              className={isEditing ? 'btn btn-block' : 'hidden'}
              onClick={handleDownload}
            >
              download
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
