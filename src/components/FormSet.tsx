import { useState } from "react";
import LensForm from "./LensForm";
import FrameForm from "./FrameForm";
import lens from "../icons/lens.svg";
import glasses from "../icons/glasses.svg";
import returnIcon from "../icons/returnIcon.svg";

type FormType = "none" | "lens" | "frame";

function FormSet() {
  const [form, setForm] = useState<FormType>("none");
  return (
    <div>
      {form === "none" && (
        <div className="flex flex-wrap justify-center m-auto md:px-3">
          <div className="h-60 w-60 mx-6 my-3 bg-[#c2e7da] inline-block rounded-sm">
            <button
              className="relative -top-3 active:top-0 active:left-0 left-3 flex flex-col w-full h-full rounded-sm shadow-lg border-2 border-[var(--lime)] border-solid"
              onClick={() => setForm("lens")}
            >
              <div className="font-(family-name:--font-primary) text-center text-2xl rounded-sm px-2 py-1">
                Lenses
              </div>
              <img
                src={lens}
                alt="lens icon"
                className="w-50 h-full m-auto hover:rotate-15 transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
          <div className="h-60 w-60 mx-6 my-3 bg-[#c2e7da] inline-block rounded-sm">
            <button
              className="relative -top-3 left-3 active:top-0 active:left-0 flex flex-col w-full h-full rounded-sm shadow-lg border-2 border-[var(--lime)] border-solid"
              onClick={() => setForm("frame")}
            >
              <div className="font-(family-name:--font-primary) text-center text-2xl rounded-sm px-2 py-1">
                Frames
              </div>
              <img
                src={glasses}
                alt="frame icon"
                className="w-50 h-full m-auto -rotate-30 hover:-rotate-20 transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      )}
      {form === "lens" && (
        <div className="md:px-3">
          <button
            className="flex px-3 py-1 bg-[#c2e7da] rounded-sm hover:bg-[#9fe0c9] transition-color duration-200 ease-in-out"
            onClick={() => setForm("none")}
          >
            <img src={returnIcon} className="w-4 my-auto" />
            Back
          </button>
          <LensForm />
        </div>
      )}
      {form === "frame" && (
        <div className="md:px-3">
          <button
            className="flex px-3 py-1 bg-[#c2e7da] rounded-sm hover:bg-[#9fe0c9] transition-color duration-200 ease-in-out"
            onClick={() => setForm("none")}
          >
            <img src={returnIcon} className="w-4 my-auto" />
            Back
          </button>
          <FrameForm />
        </div>
      )}
    </div>
  );
}

export default FormSet;
