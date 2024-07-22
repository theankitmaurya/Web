import { Modal, useMantineTheme } from "@mantine/core";

function Modals({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
      >
        <div className="bioForm">
          <h3>Your Bio</h3>
        </div>
      </Modal>
    </>
  );
}

export default Modals;
