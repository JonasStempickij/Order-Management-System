import underConstruction from '../../assets/images/under-construction.svg';

const Stats = () => {
  return (
    <>
      <h3>
        Sorry <strong>Stats</strong> are under construction
      </h3>
      <img
        src={underConstruction}
        alt='under construction'
        className='under-construction'
      />
    </>
  );
};

export default Stats;
