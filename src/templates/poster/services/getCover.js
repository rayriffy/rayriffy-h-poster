import axios from 'axios'

export const getCover = async id => {
  const res = await axios.get(`https://opener.now.sh/api/data/${id}`)

  return `https://t.nhentai.net/galleries/${res.data.media_id}/cover.${res.data.images.cover.t === p ? 'png' : 'jpg'}`
}
