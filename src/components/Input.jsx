import React, { useState } from "react";

const Input = () => {
	const [input, setInput] = useState("");
	const addToDo = () => {
    setInput("hi")
  };
	return (
		<>
			<div>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
				/>
				<button onClick={addToDo}>Add</button>
				<button>Remove</button>
			</div>
		</>
	);
};

export default Input;
