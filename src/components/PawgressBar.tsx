import pawShadowUrl from './assets/paw-shadow.svg';
import pawFilledUrl from './assets/paw-filled.svg';

export type PawgressBarProps = {
  total: number;
  current: number;
  onStepClick?: (step: number) => void;
};

function PawgressBar({ current, total, onStepClick }: PawgressBarProps) {
  const remaining = total - current;
  return (
    <div className="flex justify-center mt-10">
      {new Array(current).fill('').map((_, i) => (
        <button
          key={`completed-${i}`}
          className="hover:cursor-pointer"
          onClick={() => onStepClick?.call(null, i + 1)}
        >
          <img
            src={pawFilledUrl}
            alt={`Completed step ${i + 1}`}
            className={`${i % 2 ? '-rotate-[30deg] ' : ''} ${
              i === current - 1 ? 'animate-wiggle' : ''
            }`}
          />
        </button>
      ))}
      {new Array(remaining).fill('').map((_, i) => (
        <img
          key={`remaining-${i}`}
          src={pawShadowUrl}
          alt={`Remaining step ${i + 1}`}
          className={(i + current) % 2 ? '-rotate-[30deg]' : ''}
        />
      ))}
    </div>
  );
}

export default PawgressBar;
