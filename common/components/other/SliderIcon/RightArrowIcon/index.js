import React from "react";

const RightArrowIcon = ({ className, style, onClick }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      <svg
        width="80"
        height="81"
        viewBox="0 0 80 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40.3492C0 18.2579 17.9086 0.349243 40 0.349243V0.349243C62.0914 0.349243 80 18.2579 80 40.3492V40.3492C80 62.4406 62.0914 80.3492 40 80.3492V80.3492C17.9086 80.3492 0 62.4406 0 40.3492V40.3492Z"
          fill="white"
        />
        <path
          d="M30.9667 53.2826L43.9 40.3493L30.9667 27.416C29.6667 26.116 29.6667 24.016 30.9667 22.716C32.2667 21.416 34.3667 21.416 35.6667 22.716L50.9667 38.016C52.2667 39.316 52.2667 41.416 50.9667 42.716L35.6667 58.016C34.3667 59.316 32.2667 59.316 30.9667 58.016C29.7 56.716 29.6667 54.5826 30.9667 53.2826Z"
          fill="#A000A2"
        />
      </svg>
    </button>
  );
};

export default RightArrowIcon;
