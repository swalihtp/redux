import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function User() {
  const [userInput, setUserInput] = useState("");

  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const addUserData = (input) => {
    return {
      type: "user/input",
      payload: input,
    };
  };

  const handleSubmit = () => {
    dispatch(addUserData(userInput));
    setUserInput("");
  };

  return (
    <div>
      <p>Enter Your Name</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{userData.user}</p>
    </div>
  );
}

export default User;
