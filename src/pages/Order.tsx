function Order() {
  return (
    <div className="h-screen">
      <div className="flex-wrap my-auto">
        <div className="bg-[#c2e7da] rounded-sm w-lg mt-5 shadow-lg">
          <div className="relative -top-1 left-1 font-(family-name:--font-primary) text-2xl border-2 border-[var(--lime)] border-solid rounded-sm text-white px-2 py-1">
            Lenses
          </div>
        </div>
        <div className="bg-[#c2e7da] inline-block rounded-sm mt-5 shadow-lg">
          <div className="relative -top-1 left-1 font-(family-name:--font-primary) text-2xl border-2 border-[var(--lime)] border-solid rounded-sm text-white px-2 py-1">
            Frames
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
