function InputGroup({ total, name, setId }) {
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        onChange={(e) => setId(e.target.value)}
        id={name}
      >
        <option value="1" defaultValue>
          Choose...
        </option>

        {[...Array(total).keys()].map((x) => (
          <option key={x} value={x + 1}>{`${name} - ${x + 1}`}</option>
        ))}
      </select>
    </div>
  );
}

export default InputGroup;
