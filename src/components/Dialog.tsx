function OrderDialog() {
  return (
    <div className="w-3xl p-2 border-4 border-amber-500 bg-amber-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl">Bongo Cafe</h1>
        <div className="flex items-end">
          <div>_</div>
          <div>X</div>
        </div>
      </div>
      {/* Content */}
      <div className="border-4 border-amber-500 bg-pink-100 p-3"></div>
    </div>
  );
}

export default OrderDialog;
