import { isEmpty } from "lodash";
import { useEffect } from "react";
import { usePapaParse } from "react-papaparse";

// url https://docs.google.com/spreadsheets/d/{ID-google-sheet}/gviz/tq?tqx=out:csv

export const useGoogleSheet = ({
  isRead = false,
  url = "",
  onLoad = () => {},
  onSuccess = () => {},
  onFailed = () => {},
}) => {
  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
    if (isRead) {
      if (isEmpty(url)) {
        console.error("Invalid url:", url);
        onFailed({ data: [] });
      } else {
        onReadUrl();
      }
    }
  }, [url, isRead]);

  function onReadUrl() {
    onLoad(true);
    readRemoteFile(url, {
      complete: (results) => {
        onLoad(false);
        if (results.errors.length > 0) {
          console.error("Error reading Google Sheet:", results.errors);
          onFailed({ data: [] });
        } else {
          onSuccess({ data: results.data });
        }
      },
      error: (error) => {
        console.error("Error reading Google Sheet:", error);
        onLoad(false);
        onFailed({ data: [] });
      },
    });
  }
};
