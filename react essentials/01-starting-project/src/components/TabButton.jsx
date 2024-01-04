export default function TabButton({children ,onSelect,isSelected}){
  // return <button>{props.children}</button>


  return <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
}
