import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import {
  Collapse,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get('/api/posts/get')
      .then(response => {
         this.setState({
           posts: response.data
         })
      })
  }
  render() {
    return (
      <Row>
        <Col>
          <h4>Stories</h4>
          <hr/>
          {
            this.state.posts.map(({title, subtitle, author}) => {
              return <p key={title}>
              <Link to={`/@${author.username}/${title}`}>{title}</Link> - {subtitle}</p>
            })
          }
        </Col>
      </Row>
    )
  }
}

export default Stories
