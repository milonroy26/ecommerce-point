"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { relative } from "path";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      {/* dailog */}
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* background*/}
        <div className="fixed inset-0 bg-black opacity-25" />
        {/* dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex w-full max-w-xs flex-col overflow-y-auto bg-white py-4 shadow-xl">
            {/* Close btn */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={20} />} onclick={onClose} />
            </div>

            {/* Render the filters */}
            <div className="p-4">
              <Filter valuekey="sizeId" name="sizes" data={sizes} />
              <Filter valuekey="colorId" name="colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
