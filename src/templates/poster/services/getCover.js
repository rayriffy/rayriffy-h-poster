import axios from 'axios'

export const getCover = async id => {
  const res = await axios.get(`https://opener.now.sh/api/data/${id}`)

  return res.data.images.cover.src
}
