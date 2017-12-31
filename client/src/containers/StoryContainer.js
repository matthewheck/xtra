import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getStoryData } from "../actions/storyActions"
import Story from "../components/stories/StoryComponent"

class StoryContainer extends Component {
  componentDidMount(){
    this.props.getStory({
      person: this.props.match.params.person,
      story:  this.props.match.params.story,
    })
  }
  render() {
    console.log(this.props.story)
    return (
      <Story story={this.props.story} />
    )
  }
}

StoryContainer.propTypes = {
    getStory: PropTypes.func.isRequired,
    story: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    story: state.story,
    person: state.person,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStory: (payload) => dispatch(getStoryData(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StoryContainer)
