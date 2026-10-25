import { useDisclosure } from "@mantine/hooks";

export const useDrawerHook = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return {
    open: opened,
    onOpen: open,
    onClose: close,
  };
};
