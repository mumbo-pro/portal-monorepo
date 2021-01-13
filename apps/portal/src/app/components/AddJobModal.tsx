import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

// import { connect } from 'react-redux';
// import { addJob } from '../actions/jobActions';
// import PropTypes from 'prop-types';
import { AppState } from '../store/interface';
import { useAppStore } from '../store/index';



function AddJobModal() {
  // state = {
  //   modal: false,
  //   name: ''
  // };

  const { user, addJob } = useAppStore((state: AppState) => state);

  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // static propTypes = {
  //   isAuthenticated: PropTypes.bool
  // };



  const toggle = () => {
    setIsModalOpen(!isModalOpen);
    // this.setState({
    //   modal: !this.state.modal
    // });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addJob(name);
    setName('');
    // Close modal
    toggle();
  };

  return (
    <div>
      {user ? (
        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={toggle}>
          Add Job
        </Button>
      ) : (
        <h4 className="mb-3 ml-4">Please log in to manage items</h4>
      )}

      <Modal isOpen={isModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Job</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add job"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Add Job
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

// const mapStateToProps = state => ({
//   item: state.item,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//   mapStateToProps,
//   { addItem: addJob }
// )(AddJobModal);

export default AddJobModal;
