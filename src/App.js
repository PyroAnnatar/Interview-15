import React, { useState, useEffect, useRef } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    setWords(input.split(" "));
    setText("");
    setNumber(0);
  }, [input]);

  useEffect(() => {
    if (words.length === 0) return;

    const interval = setInterval(() => {
      setText((prev) => words.slice(0, number).join(" "));
      setNumber((prev) => prev + 1);
      if (number >= words.length) {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="text-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a sentence"
        className="border-[1px] border-black pl-1"
      />
      <div>{text}</div>
    </div>
  );
};

export default App;
