import FormSet from "../components/FormSet";

function Order() {
  return (
    <div className="h-screen">
      <div className="w-fit mx-5 mt-[12vh] md:mx-auto rounded-sm shadow-xl overflow-hidden">
        <div className="w-full mb-5">
          <p className="h-10 bg-[var(--silver-lake-blue)] text-center text-white">
            Add to Cart
          </p>
        </div>
        <FormSet />
      </div>
    </div>
  );
}

export default Order;
