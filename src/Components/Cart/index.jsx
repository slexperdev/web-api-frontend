import { Drawer } from "@material-tailwind/react";

export const Cart = ({ open, onClose }) => {
  return (
    <Drawer placement="right" open={open} onClose={onClose} className="p-4">
      <div className="mb-6 flex items-center justify-between"></div>
    </Drawer>
  );
};
