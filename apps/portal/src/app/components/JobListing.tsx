import React, { useEffect } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { connect } from 'react-redux';
// import { deleteItem, getJobs } from '../actions/jobActions';
// import PropTypes from 'prop-types';

import { AppState } from '../store/interface';
import { useAppStore } from '../store/index';

import { useQuery } from 'react-query';

const fetchJobs = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

function JobListing(props) {
  // static propTypes = {
  //   getItems: PropTypes.func.isRequired,
  //   item: PropTypes.object.isRequired,
  //   isAuthenticated: PropTypes.bool
  // };

  const { user, jobs, setJobs } = useAppStore((state: AppState) => state);
  const { status, data, isFetching, error } = useQuery('posts', fetchJobs);

  // const getItems = () =>{

  // axios

  // }

  useEffect(() => {
    // this.props.getItems();
    console.log('asd');
  }, []);

  const onDeleteClick = (id) => {
    // this.props.deleteItem(id);
    console.log(id);
  };

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {data.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {user ? (
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    // onClick={onDeleteClick(_id)}
                  >
                    &times;
                  </Button>
                ) : null}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

// const mapStateToProps = state => ({
//   item: state.item,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//   mapStateToProps,
//   { getItems: getJobs, deleteItem }
// )(JobListing);

export default JobListing;
