import { Button } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import LoginModal from "./login";

class UserAuth extends React.Component {
  state = { isModalOpen: false };

  render() {
    return (
      <>
        <Button
          onClick={() => {
            if (!this.props.isSignedIn) {
              this.setState({ isModalOpen: true });
            } else {
              this.props.signOut();
            }
          }}
          colorScheme={this.props.isSignedIn ? "red" : "green"}
        >
          {this.props.isSignedIn ? "Logout" : "Login"}
        </Button>
        <LoginModal
          isModalOpen={this.state.isModalOpen}
          closeModal={() => this.setState({ isModalOpen: false })}
          setIsSignedIn={(ok) => {
            if (ok) {
              this.props.signIn();
            }
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(UserAuth);
