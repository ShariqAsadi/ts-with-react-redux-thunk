import React from 'react';
import { connect } from 'react-redux';
import { initUsersPosts } from '../../store/actions/usersPosts'
import UsersPosts from './UsersPosts';
import { Post } from '../../types/Posts';
import { AppState } from '../../store/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';

interface UsersPostsContainerProps { }

interface UsersPostsContainerState { }

type Props = UsersPostsContainerProps & LinkDispatchProps & LinkStateProps;

class UsersPostsContainer extends React.Component<Props, UsersPostsContainerState> {
  componentDidMount() {
    this.props.initUsersPosts()
  }
  render() {
    let { posts } = this.props;
    return (
      <UsersPosts posts={posts} />
    )
  }
};

interface LinkStateProps {
  posts: Post[]
}

interface LinkDispatchProps {
  initUsersPosts: () => void
}

const mapStateToProps = (state: AppState, ownProps: UsersPostsContainerProps): LinkStateProps => ({
  posts: state.usersPosts.posts
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: UsersPostsContainerProps): LinkDispatchProps => ({
  initUsersPosts: bindActionCreators(initUsersPosts, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(UsersPostsContainer);