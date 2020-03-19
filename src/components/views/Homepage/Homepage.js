import React from 'react';
import PropTypes from 'prop-types';

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import { myads } from '../../../db';

const Component = ({ className, user }) => (
  <div className={clsx(className, styles.root)}>
    <h3>My ads</h3>
    <CardGroup>
      {myads.map(ad => (
        <Card {...ad} className={styles.ad} key={ad.id}>
          <Card.Img className={styles.cardImage} variant="top" src={ad.image} />
          <Card.Body>
            <Card.Title><a href={`/post/:${ad.id}`}>{ad.title}</a></Card.Title>
            <Card.Text>
              {ad.location}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published {ad.publishedDate}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
    {user.authenticated ? (
      <Button href="/post/add" variant="dark">Add new post</Button>
    ) : ''}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
