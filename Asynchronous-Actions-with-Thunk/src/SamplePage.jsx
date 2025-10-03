import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./redux/postReducer";

function SamplePage() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default SamplePage;
