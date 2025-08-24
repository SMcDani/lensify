import lens from "../icons/lens.svg";
import glasses from "../icons/glasses.svg";

function Order() {
  return (
    <div className="h-screen">
      <div className="w-fit mx-5 md:mx-auto mt-[12vh] rounded-sm shadow-xl overflow-hidden">
        <div className="w-full mb-10">
          <p className="h-10 bg-[var(--silver-lake-blue)] text-center text-white">
            Add to Cart
          </p>
        </div>
        <div className="flex flex-wrap justify-center m-auto">
          <div className="h-60 w-60 mx-6 my-3 bg-[#c2e7da] inline-block rounded-sm">
            <button className="relative -top-3 left-3 flex flex-col w-full h-full rounded-sm shadow-lg border-2 border-[var(--lime)] border-solid">
              <div className="font-(family-name:--font-primary) text-center text-2xl rounded-sm px-2 py-1">
                Lenses
              </div>
              <img src={lens} alt="lens icon" className="w-50 h-full m-auto" />
            </button>
          </div>
          <div className="h-60 w-60 mx-6 my-3 bg-[#c2e7da] inline-block rounded-sm">
            <button className="relative -top-3 left-3 flex flex-col w-full h-full rounded-sm shadow-lg border-2 border-[var(--lime)] border-solid">
              <div className="font-(family-name:--font-primary) text-center text-2xl rounded-sm px-2 py-1">
                Frames
              </div>
              <img
                src={glasses}
                alt="frame icon"
                className="w-50 h-full m-auto -rotate-30"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
