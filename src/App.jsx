import React, { useState } from "react";

const App = () => {
  const [one, setOne] = useState(["", "", "", "", "", ""]);
  const [Name, setName] = useState();

  const handleInputChange = (index, value) => {
    const updatedOne = [...one];
    updatedOne[index] = value;
    setOne(updatedOne);
  };
  const submit = () => {
    setName(one.join(""));
  };

  return (
    <div
      className="flex justify-center items-center text-white flex-col"
      style={{ height: "100vh" }}
    >
      <div>
        {one.map((digit, index) => (
          <input
            key={index}
            type="text"
            className="rounded-lg bg-white p-3 m-2 w-12 text-center tracking-widest text-black"
            maxLength={1}
            value={digit}
            onChange={(e) => {
              const newValue = e.target.value;
              handleInputChange(index, newValue);
              if (index < 5 && newValue !== "") {
                document.getElementById(`one-input-${index + 1}`).focus();
              }
            }}
            id={`one-input-${index}`}
          />
        ))}
      </div>
      <div>
        <button
          className="bg-white px-6 py-3 mt-4 text-black rounded-full"
          onClick={submit}
        >
          Submit
        </button>
      </div>
      {Name && (
        <div className="text-black bg-white mt-10 px-6 py-2 rounded-lg tracking-wider">
          {Name}
        </div>
      )}
    </div>
  );
};

export default App;
