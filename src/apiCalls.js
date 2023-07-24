const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
}

const postNewTrick = (newTrick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST', 
    body: JSON.stringify(newTrick),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  })
}

export { getTricks, postNewTrick }