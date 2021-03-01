import React, { useEffect } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useQuery } from 'react-query';

import { AppState } from '../store/interface';
import { useAppStore } from '../store/index';


const fetchJobs = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

function JobListing() {
  const { user } = useAppStore((state: AppState) => state);
  const { status, data, isFetching, error } = useQuery('posts', fetchJobs);

  useEffect(() => {
    console.log('Jobs list mounted');
  }, []);

  const onDeleteClick = (id) => {
    console.log('Delete me ' + id);
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

export default JobListing;
