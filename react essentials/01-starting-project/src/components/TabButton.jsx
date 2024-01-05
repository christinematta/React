export default function TabButton({ children, isSelected, ...props }) {
  // return <button>{props.children}</button>

  return (
    <button className={isSelected ? "active" : ""} {...props}>
      {children}
    </button>
  );
}
