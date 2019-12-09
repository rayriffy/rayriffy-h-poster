import React from 'react'

import { useRouter } from 'next/router'

import Poster from '../../templates/poster/components'

const EncodePage = props => {
  const router = useRouter()
  const { id } = router.query

  return (
    <React.Fragment>
      {id && <Poster id={id} />}
    </React.Fragment>
  )
}

export default EncodePage
