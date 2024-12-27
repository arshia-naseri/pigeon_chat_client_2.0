import { useState } from "react";

const TextBox = ({ label, name, isPassword = false }) => {
  const [showPassword, setShowPassword] = useState(isPassword ? false : null);

  return (
    <>
      <main className="relative flex flex-col justify-center">
        {showPassword != null && (
          <button
            className="absolute right-0 text-base font-bold text-primaryPurpleDark"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        )}
        <input
          name={name}
          type={!isPassword || showPassword ? "text" : "password"}
          className="peer w-full border-b-2 border-b-slate-400 bg-transparent outline-none focus:border-b-primaryPurpleDark"
          placeholder=" "
          maxLength="20"
        />
        <div className="pointer-events-none absolute -top-3 left-0 w-full text-xs text-gray-500 transition-all duration-200 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs">
          {label}
        </div>
      </main>
    </>
  );
};

export default TextBox;
