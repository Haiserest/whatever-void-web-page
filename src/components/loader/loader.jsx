import { Box, Loader as LoaderLib, LoadingOverlay } from "@mantine/core";

const Loader = ({ loading = false, children }) => {
  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={loading}
        loaderProps={{ children: <LoaderLib color="green" type="dots" /> }}
      />
      {children}
    </Box>
  );
};

export default Loader;
