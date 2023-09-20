"use client";
import AllPost from "@/components/problem-1/AllPost";
import { useWindowWidth } from "@/components/problem-3/hooks/ResizeHooks";
import { getApiData } from "@/redux/ApiCall";
import { useDispatch } from "react-redux";
// server side api call function
// const getAllPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   return res.json();
// };
export default function Home() {
  // server side api call
  // const posts = await getAllPosts();
  const dispatch = useDispatch();
  getApiData(dispatch);

  const [width] = useWindowWidth();
  console.log(width);
  return (
    <main className=" min-h-screen">
      <h1 className="py-3 font-bold">
        Problem 1: State Management and Data Fetching
      </h1>
      <p>
        Create a simple React application that fetches data from an API endpoint
        (for example, https://jsonplaceholder.typicode.com/posts). The
        application should fetch the data when it's initially rendered. The
        fetched data should be stored in a state management solution of your
        choice (e.g., Redux, Context API). Display the fetched data in a list,
        with each post's title and body being shown. Your code should be
        resilient against potential errors from the API (e.g., the API is down
        or slow to respond).
      </p>
      <AllPost />
    </main>
  );
}
