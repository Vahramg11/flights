const Arrow = ({ d }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={20}
        height={17}
        color={"#000000"}
        fill={"none"} // Apply the passed-in props (including className)
      >
        <path
          d="M4.00012 11.9998L20.0001 11.9998"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={d}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Arrow;
