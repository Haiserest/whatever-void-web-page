import {
  getCanvasScaleHelper,
  getDocumentDimensionHelper,
} from "../helpers/document-pdf-helper";

export const getMetadataDocumentService = async (document) => {
  const numpages = document.numpages;

  // return dimension ของ page
  const getViewPort = async (page) => {
    const currentPage = await document.getPage(page);
    const documentDimension = getDocumentDimensionHelper(currentPage.view);
    return {
      ...documentDimension,
      rotate: currentPage.rotate,
    };
  };

  const promise = [];
  for (let i = 1; i <= numpages; i++) {
    promise.push(getViewPort(i));
  }

  const result = await Promise.all(promise);

  return {
    pages: numpages,
    dimensions: result,
  };
};

export const getCanvasRenderService = (page) => {
  const selectorClass =
    ".document-react-pdf-container .react-pdf__page__canvas";
  const documentDimension = getDocumentDimensionHelper(page.view);
  const scaleDimension = getCanvasScaleHelper(selectorClass);
  return {
    rw: documentDimension.width,
    rh: documentDimension.height,
    cw: scaleDimension.cw,
    ch: scaleDimension.ch,
  };
};
