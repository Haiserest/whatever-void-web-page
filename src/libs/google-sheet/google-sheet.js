import { useState, useEffect } from "react";
import { usePapaParse } from "react-papaparse";

export const useGoogleSheet = ({
  url,
  onLoad = () => {},
  onSuccess = () => {},
  onFailed = () => {},
}) => {
  const { readRemoteFile } = usePapaParse();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    readGoogleSheet();
  }, [url]);

  useEffect(() => {
    onLoad(loading);
  }, [loading]);

  function readGoogleSheet() {
    if (url) {
      setLoading(true);
      readRemoteFile(url, {
        complete: (results) => {
          setLoading(false);
          onSuccess({ data: results.data });
        },
        error: (error) => {
          console.error("Error reading Google Sheet:", error);
          setLoading(false);
          onFailed({ data: [] });
        },
      });
    } else {
      console.error("Invalid url:", url);
      onFailed({ data: [] });
    }
  }
};
