import type { ButtonHTMLAttributes } from 'react';
import { MdClose, MdMinimize, MdRestartAlt } from 'react-icons/md';

const ICON_SIZE = 40;

interface WindowControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  controlType: 'close' | 'minimize' | 'restart';
}

function WindowControl({ controlType, ...props }: WindowControlProps) {
  const iconProps = {
    size: ICON_SIZE,
  };
  let icon = <MdClose {...iconProps} />;
  if (controlType === 'minimize') {
    icon = <MdMinimize {...iconProps} />;
  } else if (controlType === 'restart') {
    icon = <MdRestartAlt {...iconProps} />;
  }
  return (
    <button
      className="w-12 h-12 bg-pink-300 hover:cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.8)] flex items-center justify-center"
      {...props}
    >
      {icon}
    </button>
  );
}

export default WindowControl;
