import React from 'react'

import {useParams} from 'react-router'

import PosterComponent from './poster'

const Poster = props => {
  const {id} = useParams()

  return <PosterComponent id={id} />
}

export default Poster