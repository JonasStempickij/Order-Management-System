import moment from 'moment';
import { useState } from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';

const Job = ({ company, createdAt, _id, jobPositions }) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{company}</h5>
          <p>22-01-01-001</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo jobPositions={jobPositions}> </JobInfo>
          {jobPositions.length > 3 && <p>More positions</p>}
        </div>

        <footer>
          <div className='actions'>
            {jobPositions.length > 3 && (
              <button className='btn more-btn'>Details</button>
            )}
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteJob(_id)}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
