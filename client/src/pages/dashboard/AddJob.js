import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    company,
    isEditing,
    handleChange,
    handleSelectChange,
    handleSelectAdd,
    handleInputChange,
    clearValues,
    createJob,
    editJob,
    jobPositions,
    uploadFile,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
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

  const handleUpload = (e) => {
    e.preventDefault();
    const fileToUpload = e.target.files[0];
    uploadFile(fileToUpload);
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* Company */}
          <FormRow
            style={{ background: 'red' }}
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
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
            <input type='file' name='fileUpload' onChange={handleUpload} />
            <button className='btn btn-block' onClick={handleUpload}>
              UPLOAD
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
