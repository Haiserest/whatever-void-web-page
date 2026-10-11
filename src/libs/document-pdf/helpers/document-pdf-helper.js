export const getDocumentDimensionHelper = (view) => {
  /**
   * PDFPageProxy.view contain document size in [x1, y1, x2, y2]
   * we can use this instead of pdf-lib
   * x2: width
   * y2: hight
   */
  return { width: view[2], height: view[3] };
};

export const getCanvasScaleHelper = (selectorClass) => {
  const canvas = document.querySelector(selectorClass).style;

  const width = canvas.width;
  const height = canvas.height;

  const cw = parseFloat(width.substr(0, width.length - 2));
  const ch = parseFloat(height.substr(0, height.length - 2));

  return { cw, ch };
};
