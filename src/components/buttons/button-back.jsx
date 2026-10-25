import { Button } from "@mantine/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useButtonBackHook } from "./button-back-hook";

const ButtonBack = () => {
  const { disabled, goBack } = useButtonBackHook();

  return (
    <Button
      disabled={disabled}
      variant="default"
      color="gray"
      leftSection={<ArrowLeftIcon size={14} />}
      onClick={goBack}
    >
      Back
    </Button>
  );
};

export default ButtonBack;
