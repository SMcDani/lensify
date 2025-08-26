function LensForm() {
  return (
    <div className="px-15">
      <div className="flex flex-col">
        <label htmlFor="material">Material</label>
        <select id="material" name="material">
          <option value="plastic">Plastic</option>
          <option value="polycarbonate">Polycarbonate</option>
          <option value="1.67">1.67</option>
          <option value="1.74">1.74</option>
          <option value="trivex">Trivex</option>
          <option value="hivex">Hivex</option>
        </select>
        <label htmlFor="type">Type</label>
        <select id="type" name="type">
          <option value="both">Both Spherical/Aspherical</option>
          <option value="spherical">Spherical</option>
          <option value="aspherical">Aspherical</option>
        </select>
        <label htmlFor="coating">Coating</label>
        <select id="coating" name="coating">
          <option value="clear">Clear</option>
          <option value="antireflective">Antireflective</option>
          <option value="blue-block">Blue Blocker</option>
        </select>
        <label htmlFor="miscellaneous">Miscellaneous</label>
        <select id="miscellaneous" name="miscellaneous">
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
