import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, NavLink } from 'reactstrap';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { register } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';
import { AppState } from '../../store/interface';
import { useAppStore } from '../../store/index';


function RegisterModal () {
  // state = {
  //   modal: false,
  //   name: '',
  //   email: '',
  //   password: '',
  //   msg: null
  // };

  // static propTypes = {
  //   isAuthenticated: PropTypes.bool,
  //   error: PropTypes.object.isRequired,
  //   register: PropTypes.func.isRequired,
  //   clearErrors: PropTypes.func.isRequired
  // };

  const [modal,setModal] = useState( false)
  const [name,setName] = useState( '')
  const [email,setEmail] = useState( '')
  const [password,setPassword] = useState( '')
  const [msg,setMsg] = useState( null)




  const { setUser  } = useAppStore(
    (state:AppState) => state
  );




  // componentDidUpdate(prevProps) {
  //   const { error, isAuthenticated } = this.props;
  //   if (error !== prevProps.error) {
  //     // Check for register error
  //     if (error.id === 'REGISTER_FAIL') {
  //       this.setState({ msg: error.msg.msg });
  //     } else {
  //       this.setState({ msg: null });
  //     }
  //   }

  //   // If authenticated, close modal
  //   if (this.state.modal) {
  //     if (isAuthenticated) {
  //       this.toggle();
  //     }
  //   }
  // }

  const toggle = () => {
    // Clear errors
    // this.props.clearErrors();
    setModal(!modal)
    // this.setState({
    //   modal: !this.state.modal
    // });
  };

  const onSubmit = e => {
    e.preventDefault();

    // Create user object
    const newUser = {
      name,
      email,
      password
    };
    // Api call
    // axios

    // Attempt to register
    setUser(newUser);
  };


    return (
      <div>
        <NavLink onClick={toggle} href="#">
          Register
        </NavLink>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Register</ModalHeader>
          <ModalBody>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Name" className="mb-3" onChange={(e)=>{setName(e.target.value)}} />

                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }


export default RegisterModal;

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// });


// export default connect(
//   mapStateToProps,
//   { register, clearErrors }
// )(RegisterModal);
