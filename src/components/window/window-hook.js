import { useDisclosure } from "@mantine/hooks";

export const useWindowModalHook = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return {
    visible: opened,
    onOpen: open,
    onClose: close,
  };
};
