import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  // compondentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render () {
    // const user = this.props.users.find(user => user.id === this.props.userId); //find is built in method for js arr. 
    const { user } = this.props;

    if(!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  } 
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect (
  mapStateToProps, 
  )(UserHeader);