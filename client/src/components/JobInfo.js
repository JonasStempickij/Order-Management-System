import Wrapper from '../assets/wrappers/JobInfo';

const JobInfo = ({ jobPositions }) => {
  return (
    <Wrapper>
      <ol
        className={
          jobPositions.length > 3 ? 'position-list hide' : 'position-list'
        }
      >
        {jobPositions.map((jobPosition, index) => {
          return (
            <li key={index}>
              <div className='position-name'>{jobPosition.positionName}</div>
              <div className='position-material'>
                <span className='material-name'>{jobPosition.material}</span>
                <span className='material-thickness'>
                  {jobPosition.materialThickness}mm{' '}
                </span>
                <span className='position-quantity'>
                  {jobPosition.positionQuantity} vnt
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </Wrapper>
  );
};

export default JobInfo;
