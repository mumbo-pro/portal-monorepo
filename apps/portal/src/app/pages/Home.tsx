import React from 'react';
// import { Container } from 'reactstrap/container';

import JobListing from '../components/JobListing';
import AddJobModal from '../components/AddJobModal';

const Home = () => {
  return (
    <div>
      <AddJobModal />
      <JobListing />
    </div>
  );
};

export default Home;
