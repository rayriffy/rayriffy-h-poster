import fetch from 'isomorphic-unfetch'

export const getCover = async (id: string) => {
  const res = await fetch(`https://opener.now.sh/api/data/${id}`).then(o =>
    o.json()
  )

  return `https://t.nhentai.net/galleries/${res.media_id}/cover.${
    res.images.cover.t === 'p' ? 'png' : 'jpg'
  }`
}
