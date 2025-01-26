"use client"

import { useState, useRef } from 'react'

export const InputCode = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);

      if (index > 0 && !code[index]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select();
  };

  return (
    <div className="flex">
      {code.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength={1}
          ref={(el) => { inputRefs.current[index] = el; }}
          className={`w-[55px] h-[55px] lg:w-[68px] lg:h-[68px] text-center text-2xl font-semibold rounded-md border mr-4 outline-none ${
            value ? "border-orange" : "border-grayBorder"
          }`}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => handleFocus(index)}
        />
      ))}
      
    </div>
  )
}