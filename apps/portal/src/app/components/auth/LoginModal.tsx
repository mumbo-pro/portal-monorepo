import React, { useState } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  NavLink,
} from 'reactstrap';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { login } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';

import { AppState } from '../../store/interface';
import { useAppStore } from '../../store/index';


function LoginModal() {
  const [modal, setModal] = useState(false);
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const { setUser } = useAppStore((state: AppState) => state);

  // state = {
  //   modal: false,
  //   email: '',
  //   password: '',
  //   msg: null
  // };

  // static propTypes = {
  //   isAuthenticated: PropTypes.bool,
  //   error: PropTypes.object.isRequired,
  //   login: PropTypes.func.isRequired,
  //   clearErrors: PropTypes.func.isRequired
  // };

  // componentDidUpdate(prevProps) {
  //   const { error, isAuthenticated } = this.props;
  //   if (error !== prevProps.error) {
  //     // Check for register error
  //     if (error.id === 'LOGIN_FAIL') {
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

  // toggle = () => {
  //   // Clear errors
  //   this.props.clearErrors();
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  const toggle = () => {
    // Clear errors
    // this.props.clearErrors();
    setModal(!modal);
    // this.setState({
    //   modal: !this.state.modal
    // });
  };

  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    // Attempt to login
    // this.props.login(user);
    setUser(user);
  };

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error
// });

// export default connect(
//   mapStateToProps,
//   { login, clearErrors }
// )(LoginModal);

export default LoginModal;
