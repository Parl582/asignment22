"use client";
import React from "react";
import DynamicForm from "@/components/problem-2/DynamicForm";

const page = () => {
  return (
    <div className="p-3">
      <h1 className="py-3 font-bold">
        Problem 2: Component Architecture and Props Management
      </h1>
      <p>
        Suppose you are given the task to create a dynamic form generator
        component in React. The form configuration (fields, types, validation
        rules) should be passed as a prop in JSON format. The component should
        render different types of input elements based on the configuration
        (e.g., text input, checkbox, radio buttons). The form should have
        client-side validation based on the configuration rules. On form
        submission, it should output the form data in the console. Please follow
        best practices for component design and prop management.
      </p>

      <DynamicForm dynamic={dynamicJson} />
    </div>
  );
};

export default page;

const dynamicJson = {
  title: "Dynamic Form",

  data: [
    {
      label: "name",
      type: "text",
      required: true,
      name: "name",
      errorMsg: "Name is required",
    },
    {
      errorMsg: "Password is required",
      label: "password",
      type: "password",
      required: true,
      name: "password",
    },
    {
      errorMsg: "required field",
      label: "Male",
      type: "radio",
      required: true,
      name: "gender",
      value: "male",
    },
    {
      errorMsg: "required",
      label: "Female",
      type: "radio",
      required: true,
      name: "gender",
      value: "female",
    },
    {
      errorMsg: "required",
      label: "JavasCript",
      type: "checkbox",
      required: false,
      name: "javascript",
      value: "javascript",
    },
    {
      errorMsg: "required",
      label: "React",
      type: "checkbox",
      required: false,
      name: "react",
      value: "React JS",
    },
    {
      //
      errorMsg: "",
      label: "",
      type: "submit",
      required: false,
      name: "submit",
      value: "Submit",
    },
  ],
};
