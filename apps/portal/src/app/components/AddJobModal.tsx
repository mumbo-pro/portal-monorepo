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

import { AppState } from '../store/interface';
import { useAppStore } from '../store/index';


const AddJobModal = ()  =>{
  
  const { user } = useAppStore((state: AppState) => state);

  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggle = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
              <Button type="submit" color="dark" style={{ marginTop: '2rem' }} block>
                Add Job
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}



export default AddJobModal;
