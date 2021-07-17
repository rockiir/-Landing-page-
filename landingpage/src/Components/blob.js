import * as React from "react";

function blob(props) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <path
        fill="#F06"
        d="M145.5 35.1c12.7 11.5 21.7 25.8 24 40.5 2.3 14.7-2.1 29.8-6.1 45.9-4 16-7.7 33.1-18.2 42.7-10.5 9.7-27.9 11.9-45.3 12-17.4.2-34.9-1.9-50.2-10-15.3-8.1-28.5-22.2-31.6-38.1-3.1-15.9 3.8-33.6 11.3-49.3C36.9 63.1 45 49.3 56.9 37.6c11.9-11.8 27.5-21.5 43.5-22.1 16-.5 32.4 8.1 45.1 19.6z"
      />
    </svg>
  );
}

const Memoblob = React.memo(blob);
export default Memoblob;
