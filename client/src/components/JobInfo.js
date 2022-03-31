import Wrapper from '../assets/wrappers/JobInfo';
import { BsFillXSquareFill, BsFillCheckSquareFill } from 'react-icons/bs';

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
              <div className='position-header'>
                <div className='position-name'>{jobPosition.positionName}</div>
                <div
                  className={
                    jobPosition.positionStatus
                      ? 'position-status done'
                      : 'position-status todo'
                  }
                >
                  {jobPosition.positionStatus ? (
                    <BsFillCheckSquareFill />
                  ) : (
                    <BsFillXSquareFill />
                  )}
                </div>
              </div>

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
