import React, {useEffect, useState} from 'react'

import {Box, Text} from 'rebass'
import styled from 'styled-components'

import {getCover} from '../services/getCover'

const CoverBox = styled(Box)`
  overflow: hidden;
`

const BlurBox = styled(Box)`
  height: 747px;
  filter: blur(50px);
`

const PosterComponent = props => {
  const {id} = props

  const [raw, setRaw] = useState(null)

  const fetchCover = async id => {
    const cover = await getCover(id)
    setRaw(cover)
  }

  useEffect(() => {
    fetchCover(id)
  }, [])

  return (
    <Box>
      {raw !== null ? (
        <CoverBox>
          <BlurBox 
            sx={{
              backgroundImage: `url(${raw})`,
              backgroundSize: 'cover',
            }}
          />
        </CoverBox>
      ) : (
        <CoverBox>
          <BlurBox />
        </CoverBox>
      )}
      <Box backgroundColor={`#${String(id).padStart(6, '0')}`} p={4}>
        <Box py={2}>
        <Text fontFamily={`RM4SCC`} fontSize={76} color={`white`} textAlign={`center`} py={4}>{String(id).padStart(6, '0')}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default PosterComponent
