import React, { useEffect } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { connect } from 'react-redux';
// import { deleteItem, getJobs } from '../actions/jobActions';
// import PropTypes from 'prop-types';

import { AppState } from '../store/interface';
import { useAppStore } from '../store/index';


function JobListing(props) {
  // static propTypes = {
  //   getItems: PropTypes.func.isRequired,
  //   item: PropTypes.object.isRequired,
  //   isAuthenticated: PropTypes.bool
  // };

  const { jobs,setJobs } = useAppStore((state: AppState) => state);
  const getItems = () =>{

    // axios
    
  }

  useEffect(() => {
    // this.props.getItems();
    console.log('asd');
  }, []);

  const onDeleteClick = (id) => {
    // this.props.deleteItem(id);
    console.log(id);
  };

  const { items } = props.item;

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {this.props.isAuthenticated ? (
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
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
