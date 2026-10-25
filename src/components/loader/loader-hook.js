import { useDisclosure } from "@mantine/hooks";

export const useLoaderHook = () => {
  const [visible, { toggle }] = useDisclosure(false);

  return {
    loading: visible,
    onLoading: toggle,
  };
};
