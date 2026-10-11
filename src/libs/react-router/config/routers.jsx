import LandingPage from "../../../pages/page";

import SandBoxPage from "../../../pages/sandbox/page";
import DocumentPDFPage from "../../../pages/sandbox/document-pdf/page";

import TravelPage from "../../../pages/travel/page";

const URI = "/whatever-void-web-page";

export const ROUTERS = [
  {
    PATH: URI,
    COMPONENT: LandingPage,
  },
  {
    PATH: `${URI}/sandbox`,
    MENU: [
      {
        COMPONENT: SandBoxPage,
      },
      {
        PATH: "document-pdf",
        COMPONENT: DocumentPDFPage,
      },
    ],
  },
  {
    PATH: `${URI}/travel`,
    COMPONENT: TravelPage,
  },
];
