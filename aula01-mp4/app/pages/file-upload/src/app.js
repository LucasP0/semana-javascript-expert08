import Clock from './deps/clock.js';
import View from './views';
const view = new View();



btnUploadVideo.addEventListener('click', () => {
    // trigger file input
    fileUpload.click()
})
let took = ''

function parseBytesIntoMBAndGB(bytes) {
    const mb = bytes / (1024 * 1024)
    // if mb is greater than 1024, then convert to GB
    if (mb > 1024) {
        // rount to 2 decimal places
        return `${Math.round(mb / 1024)}GB`
    }
    return `${Math.round(mb)}MB`
}
const clock = new Clock()

