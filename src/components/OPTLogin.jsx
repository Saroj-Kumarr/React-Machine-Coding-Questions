import { useRef, useState } from "react";

const OTPLogin = ({ OTPLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(OTPLength).fill(""));
  const inputRef = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "ArrowLeft") {
      if (index > 0) inputRef.current[index - 1].focus();
    }

    if (key === "ArrowRight") {
      if (index + 1 < OTPLength) inputRef.current[index + 1].focus();
    }
    const newOtpFields = [...otpFields];

    if (key === "Backspace") {
      newOtpFields[index] = "";
      setOtpFields(newOtpFields);
      if (index > 0) inputRef.current[index - 1].focus();
      return;
    }

    if (isNaN(key)) {
      return;
    }
    if (index + 1 < OTPLength) inputRef.current[index + 1].focus();

    newOtpFields[index] = key;

    setOtpFields(newOtpFields);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100,
        gap: 20,
      }}
    >
      {otpFields.map((value, index) => {
        return (
          <input
            ref={(currentRef) => (inputRef.current[index] = currentRef)}
            key={index}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "10px",
              fontSize: 30,
              textAlign: "center",
            }}
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTPLogin;
