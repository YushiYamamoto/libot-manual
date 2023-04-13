const imageToDataURL = function (src: string) {
  return new Promise<string>((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    const img = new Image()
    img.setAttribute('crossOrigin', 'Anonymous')
    img.src = src
    img.onload = () => {
      canvas.width = img.width + 10
      canvas.height = img.height + 10
      context.clearRect(0, 0, img.width, img.height)
      context.drawImage(img, 10, 10)

      resolve(canvas.toDataURL())
    }

    img.onerror = (err) => {
      reject(err)
    }
  })
}

const imageToDataURLBatch = async function (srcs: string[]) {
  const allTask = srcs.map((v) => imageToDataURL(v))

  return await Promise.all(allTask)
}

export { imageToDataURL, imageToDataURLBatch }
