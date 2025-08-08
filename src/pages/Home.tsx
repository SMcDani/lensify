function Home() {
  const handleClick = () => {};

  return (
    <div>
      <div className="flex bg-[url('/images/woman%203.jpg')] bg-cover w-full h-screen">
        <div className="w-lg mx-4 my-auto p-8 bg-white rounded-xl xl:ml-40 md:mt-40 xl:w-170">
          <div className="font-(family-name:--font-primary) text-5xl md:text-7xl">
            <h1>Welcome</h1>
            <h1>
              to <span className="text-[#44457e]">Lensify</span>
            </h1>
          </div>
          <p className="font-(family-name:--font-secondary) text-lg">
            At Lensify, we specialize in high-quality stock lenses for optical
            professionals. Browse our curated selection of lenses by brand,
            power, and coating — ready to ship when you are.
          </p>
          <div className="bg-[var(--space-cadet)] inline-block rounded-sm mt-5">
            <button
              className="relative -top-1 left-1 font-(family-name:--font-primary) text-2xl border-2 border-[var(--lime)] border-solid rounded-sm text-white px-2 py-1 shadow-xl/30"
              onClick={handleClick}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
