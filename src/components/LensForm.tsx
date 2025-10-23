import { useState, useEffect } from "react";

function LensForm() {
  //build the query using useState - will be used to search for lenses in db
  const [query, setQuery] = useState({
    material: "",
    type: "",
    coating: "",
    miscellaneous: "",
  });

  //used to store the items that will be displayed
  const [list, setList] = useState();

  useEffect(() => {
    //turn the query into a string
    const fullQuery = new URLSearchParams(query).toString();

    //make a call to the api using query
    fetch(`http://localhost:3000/products?${fullQuery}`)
      .then((res) => res.json()) //get the response object as usable JSON
      .then((data) => setList(data));
  }, [query]);

  //take in the updated menu selection and update it in query
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="px-15">
      <div className="flex flex-col">
        <label htmlFor="material">Material</label>
        <select
          id="material"
          name="material"
          className="mb-3 bg-[#cfe6ff] rounded-lg"
          onChange={handleChange}
        >
          <option value="plastic">Plastic</option>
          <option value="polycarbonate">Polycarbonate</option>
          <option value="1.67">1.67</option>
          <option value="1.74">1.74</option>
          <option value="trivex">Trivex</option>
          <option value="hivex">Hivex</option>
        </select>
        <label htmlFor="type">Type</label>
        <select
          id="type"
          name="type"
          className="mb-3 bg-[#cfe6ff] rounded-lg"
          onChange={handleChange}
        >
          <option value="both">Both Spherical/Aspherical</option>
          <option value="spherical">Spherical</option>
          <option value="aspherical">Aspherical</option>
        </select>
        <label htmlFor="coating">Coating</label>
        <select
          id="coating"
          name="coating"
          className="mb-3 bg-[#cfe6ff] rounded-lg"
          onChange={handleChange}
        >
          <option value="clear">Clear</option>
          <option value="antireflective">Antireflective</option>
          <option value="blue-block">Blue Blocker</option>
        </select>
        <label htmlFor="miscellaneous">Miscellaneous</label>
        <select
          id="miscellaneous"
          name="miscellaneous"
          className="mb-3 bg-[#cfe6ff] rounded-lg"
          onChange={handleChange}
        >
          <option value="none">None</option>
          <option value="tr-grey">Transitions Grey</option>
          <option value="tr-brown">Transitions Brown</option>
          <option value="tr-xtractive">Transition XtrActive Grey</option>
        </select>
      </div>
    </div>
  );
}

export default LensForm;
