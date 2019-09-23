import React from 'react'

import {withRouter} from 'react-router'

import PosterComponent from './poster'

const Poster = props => {
  const {id} = props.match.params

  return <PosterComponent id={id} />
}

export default withRouter(Poster)