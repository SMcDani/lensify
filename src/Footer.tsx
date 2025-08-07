function Footer() {
  return (
    <div className="flex flex-wrap justify-between bg-[var(--space-cadet)] text-white h-auto p-10 md:py-10">
      <div className="flex flex-col md:flex-row">
        <p className="font-(family-name:--font-primary) text-4xl text-black bg-white border-3 border-[var(--lime)] m-auto p-2 md:mx-15">
          <span className="text-[#44457e]">L</span>F
        </p>
        <div className="flex flex-wrap md:flex-col">
          <p className="order-1">
            1234 W. North St.
            <br />
            Kentucky, California 56789
          </p>
          <p className="mt-6 order-3">1-800-555-1234</p>
          <p className="mt-4 order-2">
            Monday-Thursday: 8am - 5pm <br />
            Friday: 8am - 4pm
          </p>
        </div>
      </div>
      <a href="#" className="text-[#7ea2bd] flex flex-col justify-end">
        Privacy Policy
      </a>
    </div>
  );
}

export default Footer;
