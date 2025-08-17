import Button from '../Button';

export interface OpeningScreenProps {
  onNext: () => void;
}

function OpeningScreen({ onNext }: OpeningScreenProps) {
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Welcome to yongo's cafe!</h2>
      <div className="my-10"></div>
      <Button pulsing onClick={onNext}>
        Start
      </Button>
    </div>
  );
}

export default OpeningScreen;
