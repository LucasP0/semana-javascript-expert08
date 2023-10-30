import VideoProcessor from "./videoProcessor.js"
import MP4Demuxer from "./mp4Demuxer.js";

const qvgaConstraints = {
  width: 320,
  height: 240
}
const vgaContraints = {
  width: 640,
  height: 480
}
const hdContraints = {
  width: 1280,
  height: 720
}

const encoderConfig = {
  // webM
  ...qvgaConstraints,
  bitrate: 10e6,
  codec: 'vp09.00.10.08',
  pt: 4,
  hardwareAcceleration: 'prefer-software',

  // // mp4
  // codec: 'avc1.42002A',
  // pt: 1,
  // hardwareAcceleration: 'prefer-hardware',
  // avc: { format: 'annexb' }

}

const mp4Demuxer = new MP4Demuxer()
const videoProcessor = new VideoProcessor({
  mp4Demuxer
})

onmessage = async ({ data }) => {

  await videoProcessor.start({
    file: data.file,
    encoderConfig,
    sendMessage(message) {
      self.postMessage(message)
    }
  })


  self.postMessage({
    status: 'done'
  })
    


}