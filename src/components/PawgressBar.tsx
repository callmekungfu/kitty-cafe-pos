import pawShadowUrl from './assets/paw-shadow.svg';
import pawFilledUrl from './assets/paw-filled.svg';

export type PawgressBarProps = {
  total: number;
  current: number;
};

function PawgressBar({ current, total }: PawgressBarProps) {
  const remaining = total - current;
  return (
    <div className="flex justify-center mt-10">
      {new Array(current).fill('').map((_, i) => (
        <img
          src={pawFilledUrl}
          alt={`Completed step ${i + 1}`}
          className={i % 2 ? '-rotate-[30deg]' : ''}
        />
      ))}
      {new Array(remaining).fill('').map((_, i) => (
        <img
          src={pawShadowUrl}
          alt={`Remaining step ${i + 1}`}
          className={(i + current) % 2 ? '-rotate-[30deg]' : ''}
        />
      ))}
    </div>
  );
}

export default PawgressBar;
