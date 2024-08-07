const CopyIcon = () => {
  return (
    <svg
      viewBox="0 -3 30 30"
      style={{
        display: "inline-block",
        color: "rgba(255, 255, 255, 0.87)",
        fill: "rgba(255, 255, 255, 0.87)",
        height: "18px",
        width: "18px",
        userSelect: "none",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        verticalAlign: "middle",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
    </svg>
  );
};

export default CopyIcon;
