import { Drawer as DrawerLib } from "@mantine/core";

const Drawer = ({
  open = false,
  onClose = () => {},
  title,
  position = "left",
  children,
}) => {
  return (
    <DrawerLib
      opened={open}
      onClose={onClose}
      position={position}
      title={title}
      size="80%"
    >
      {children}
    </DrawerLib>
  );
};

export default Drawer;
