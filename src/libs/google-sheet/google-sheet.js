import { useEffect } from "react";
import { usePapaParse } from "react-papaparse";

export const useGoogleSheet = ({
  url,
  onLoad = () => {},
  onSuccess = () => {},
  onFailed = () => {},
}) => {
  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
    if (!url) {
      console.error("Invalid url:", url);
      onFailed({ data: [] });
      return;
    }

    onLoad(true);
    readRemoteFile(url, {
      complete: (results) => {
        onLoad(false);
        onSuccess({ data: results.data });
      },
      error: (error) => {
        console.error("Error reading Google Sheet:", error);
        onLoad(false);
        onFailed({ data: [] });
      },
    });
  }, [url]);
};
