import { MdClose, MdMinimize } from 'react-icons/md';

const ICON_SIZE = 40;

interface WindowControlProps {
  controlType: 'close' | 'minimize';
}

function WindowControl({ controlType }: WindowControlProps) {
  const iconProps = {
    size: ICON_SIZE,
  };
  const icon =
    controlType === 'close' ? (
      <MdClose {...iconProps} />
    ) : (
      <MdMinimize {...iconProps} />
    );
  return (
    <button className="w-12 h-12 bg-pink-300 hover:cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.8)] flex items-center justify-center">
      {icon}
    </button>
  );
}

export default WindowControl;
