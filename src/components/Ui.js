const selectItems = [
  {
    id: "Standard",
    value: "Standard",
  },
  {
    id: "Premium",
    value: "Premium",
  },
];
const Ui = () => {
  return (
    <div className="p-2">
      <div className="border border-black">
        <label htmlFor="selectElement">Ticket Type: </label>
        <select id="selectElement">
          {selectItems.map((each) => (
            <option id={each.id} key={each.id}>
              {each.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Ui;
