import React, { useState } from "react";
import FormInput from "./FormInput";

const DynamicForm = ({ dynamic }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setForm((prev) => ({ ...prev, [name]: value }));
      } else {
        setForm((prev) => ({ ...prev, [name]: false }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert(JSON.stringify(form));
  };
  return (
    <div className="w-full py-4 px-6 border-2 flex items-center justify-center flex-col">
      <h1 className="font-bold py-4 text-lg">{dynamic.title}</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center flex-col border rounded-md py-4 bg-white"
      >
        {dynamic.data.map((elm, index) => (
          <FormInput {...elm} key={index} handleChange={handleChange} />
        ))}
      </form>
    </div>
  );
};

export default DynamicForm;
