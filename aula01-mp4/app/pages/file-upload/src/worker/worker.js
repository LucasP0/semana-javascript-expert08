onmessage = ({ data }) => {
  console.log('Recebido', data)
  self.postMessage('Hey from worker!!!')
  while(true) {}
}