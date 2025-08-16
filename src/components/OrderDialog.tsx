import OpeningScreen from './order-screens/Opening';
import PawgressBar from './PawgressBar';
import WindowControl from './WindowControl';

function OrderDialog() {
  return (
    <div className="w-3xl p-2 border-8 border-amber-500 bg-amber-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-display text-4xl">Bongo Cafe</h1>
        <div className="flex items-end mr-1">
          <WindowControl controlType="minimize" />
          <div className="mx-1"></div>
          <WindowControl controlType="close" />
        </div>
      </div>
      {/* Content */}
      <div className="border-8 border-amber-500 bg-pink-100 p-3">
        <OpeningScreen />
        <PawgressBar current={1} total={7} />
      </div>
    </div>
  );
}

export default OrderDialog;
