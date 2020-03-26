import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';
import { getAll, loadPostsRequest } from '../../../redux/postsRedux.js';
import { displayTime } from '../../../utils/displayTime';
import clsx from 'clsx';
import { IMAGES_URL } from '../../../config';
import styles from './Homepage.module.scss';

class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    user: PropTypes.object,
    posts: PropTypes.array,
  }

  render() {
    const { posts, className, user } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        {user.authenticated ? (
          <Button href="/post/add" className="m-3" variant="dark">
            Add new post
          </Button>
        ) : ''}
        <Row>
          {posts.map(post => (
            <Col xs={12} md={6} lg={4} key={post._id}>
              <Card {...post} className={styles.ad}>
                <Card.Img
                  className={styles.cardImage}
                  variant="top"
                  src={post.image ? `${IMAGES_URL}/${post.image}` : `${IMAGES_URL}/photo_null.jpg`}
                />
                <Card.Body>
                  <Card.Title>
                    <NavLink exact to={`/post/${post._id}`}>{post.title}</NavLink>
                  </Card.Title>
                  <Card.Text>
                    {post.location}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Published {displayTime(post.published)}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getAll(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
