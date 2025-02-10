import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = "";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()";

    if (chars.length === 0) return;

    let newPassword = Array.from(
      { length: 12 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    setPassword(newPassword);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <input
        className="border p-2 w-64 text-center"
        value={password}
        readOnly
      />
      <div className="flex gap-2">
        <label>
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />{" "}
          Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />{" "}
          Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />{" "}
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />{" "}
          Symbols
        </label>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
}
