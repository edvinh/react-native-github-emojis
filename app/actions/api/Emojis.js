import fetch from 'isomorphic-fetch'

export function getEmojis () {
  return fetch('https://api.github.com/emojis', {
    method: 'GET',
  })
}
