import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
  argTypes: {
    enter: {
      table: {
        disable: true,
      },
    },
    leave: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const SlideFadeInDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div
        onClick={handleOpenModal}
        className="cursor-pointer rounded-lg bg-amber-700 w-fit px-5 py-3 text-white"
      >
        open Dialog
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        enter={{ default: 'fade-in' }}
        leave={{ default: 'fade-out' }}
      >
        <div className="w-full h-[200px] flex justify-center items-center bg-green-500">
          Dialog !!
        </div>
      </Dialog>
    </div>
  );
};
const SlideUpDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div
        onClick={handleOpenModal}
        className="cursor-pointer rounded-lg bg-amber-700 w-fit px-5 py-3 text-white"
      >
        open Dialog
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        enter={{ default: 'slide-up' }}
        leave={{ default: 'slide-up' }}
      >
        <div className="w-full h-[200px] flex justify-center items-center bg-green-500">
          Dialog !!
        </div>
      </Dialog>
    </div>
  );
};
const SlideDownDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div
        onClick={handleOpenModal}
        className="cursor-pointer rounded-lg bg-amber-700 w-fit px-5 py-3 text-white"
      >
        open Dialog
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        enter={{ default: 'slide-down' }}
        leave={{ default: 'slide-down' }}
      >
        <div className="w-full h-[200px] flex justify-center items-center bg-green-500">
          Dialog !!
        </div>
      </Dialog>
    </div>
  );
};
const SlideRightDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div
        onClick={handleOpenModal}
        className="cursor-pointer rounded-lg bg-amber-700 w-fit px-5 py-3 text-white"
      >
        open Dialog
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        enter={{ default: 'slide-right' }}
        leave={{ default: 'slide-right' }}
      >
        <div className="w-full h-[200px] flex justify-center items-center bg-green-500">
          Dialog !!
        </div>
      </Dialog>
    </div>
  );
};
const SlideLeftDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div
        onClick={handleOpenModal}
        className="cursor-pointer rounded-lg bg-amber-700 w-fit px-5 py-3 text-white"
      >
        open Dialog
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        enter={{ default: 'slide-left' }}
        leave={{ default: 'slide-left' }}
      >
        <div className="w-full h-[200px] flex justify-center items-center bg-green-500">
          Dialog !!
        </div>
      </Dialog>
    </div>
  );
};

const ZoomDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div
        onClick={handleOpenModal}
        className="cursor-pointer rounded-lg bg-amber-700 w-fit px-5 py-3 text-white"
      >
        open Dialog
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        enter={{ default: 'zoom-in' }}
        leave={{ default: 'zoom-out' }}
      >
        <div className="w-full h-[200px] flex justify-center items-center bg-green-500">
          Dialog !!
        </div>
      </Dialog>
    </div>
  );
};
export const FadeIn: Story = {
  render: () => {
    return <SlideFadeInDialog />;
  },
};
export const SlideUp: Story = {
  render: () => {
    return <SlideUpDialog />;
  },
};
export const SlideDown: Story = {
  render: () => {
    return <SlideDownDialog />;
  },
};
export const SlideRight: Story = {
  render: () => {
    return <SlideRightDialog />;
  },
};
export const SlideLeft: Story = {
  render: () => {
    return <SlideLeftDialog />;
  },
};
export const Zoom: Story = {
  render: () => {
    return <ZoomDialog />;
  },
};
