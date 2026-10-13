import HomePage from "../../../pages/home/page";

import SandBoxPage from "../../../pages/sandbox/page";
import DocumentPDFPage from "../../../pages/sandbox/document-pdf/page";

import TravelPage from "../../../pages/travel/page";
import NotFoundPage from "../../../pages/not-found/page";

export const ROUTERS = [
  {
    PATH: "/",
    COMPONENT: HomePage,
  },
  {
    PATH: "sandbox",
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
    PATH: "travel",
    COMPONENT: TravelPage,
  },
  {
    PATH: "*",
    COMPONENT: NotFoundPage,
  },
];
