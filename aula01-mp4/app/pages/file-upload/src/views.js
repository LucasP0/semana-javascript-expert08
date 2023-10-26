export default class View {
  #fileUpload = document.getElementById('fileUpload')
  #btnUploadVideo = document.getElementById('btnUploadVideos')
  #fileSize = document.getElementById('fileSize')
  #fileInfo = document.getElementById('fileInfo')
  #txtfileName = document.getElementById('fileName')
  #fileUploadWrapper = document.getElementById('fileUploadWrapper')
  #elapsed = document.getElementById('elapsed')
  #canvas = document.getElementById('preview-144p')

  onChange(e) {
  const file = e.target.files[0]
  const { name, size } = file
  this.#txtfileName.innerText = name
  this.#fileSize.innerText = parseBytesIntoMBAndGB(size)

  this.#fileInfo.classList.remove('hide')
  this.#fileUploadWrapper.classList.add('hide')

  clock.start((time) => {
    took = time;
    this.#elapsed.innerText = `Process started ${time}`
  })

  setTimeout(() => {
    clock.stop()
    this.#elapsed.innerText = `Process took ${took.replace('ago', '')}`
  }, 5000)
}


configureOnFileChange(fn) {
  this.#fileUpload.addEventListener('change', this.onChange(fn))
}


}