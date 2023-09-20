import React from "react";
import { useSelector } from "react-redux";
const AllPost = () => {
  const data = useSelector((state) => state.post);
  if (data.pending) {
    return (
      <h1 className="w-full text-center py-6 text-indigo-600/70 font-bold">
        {" "}
        Loading...{" "}
      </h1>
    );
  }
  if (data.error) {
    return (
      <h2 className="text-red-400 font-bold w-full text-center py-6">
        {" "}
        Something went wrong{" "}
      </h2>
    );
  }
  return (
    <div className="p-4 space-y-2">
      {data?.value?.map((elm) => (
        <div className="p-3 ring-1 w-full" key={elm.id}>
          <h1 className="font-bold py-4 text-lg"> {elm.title} </h1>
          <p className="text-sx">{elm.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPost;
