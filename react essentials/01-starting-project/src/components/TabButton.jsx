export default function TabButton({children ,onSelect}){
  // return <button>{props.children}</button>


  return <button onClick={onSelect}>{children}</button>
}
