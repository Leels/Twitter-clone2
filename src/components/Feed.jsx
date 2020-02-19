import React from "react";
import Tweet from './Tweet';
import TweetForm from './TweetForm';
import PropTypes from 'prop-types';
import { Card, ListGroup }from 'react-bootstrap';
import '../App.css';

function Feed(props){

  return (


    <Card bg="dark" style={{ width: '28rem' }}>

      <ListGroup variant="flush">
        {props.feed.map((tweet, index) =>
          <Tweet author={tweet.author}
            body={tweet.body}
            changeLikes={props.changeLikes}
            id={tweet.id}
            count={tweet.count}
            key={tweet.id}/>
          )}
          </ListGroup>
        </Card>


    );
  }

  Feed.propTypes = {
    feed: PropTypes.array
  };

  export default Feed;
