import Button from '../Button';

function OpeningScreen() {
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Welcome to papa's cafe!</h2>
      <div className="my-10"></div>
      <Button pulsing>Start</Button>
    </div>
  );
}

export default OpeningScreen;
