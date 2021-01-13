import React from 'react';
// import { Link } from 'react-router-dom';

import JobListing from '../components/JobListing';
import AddJobModal from '../components/AddJobModal';
import { Container } from 'reactstrap';

// import store from './store';

const Home = () => (
  <div>
    {/* This is the generated root route. */}
     {/* <div className="App"> */}
    {/* <Link to="/page-2">Click here for page 2.</Link> */}
    <Container>
      <AddJobModal />
      <JobListing />
    </Container>
    {/* </div> */}
  </div>
);

export default Home;
