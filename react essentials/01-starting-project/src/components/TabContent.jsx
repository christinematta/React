export default function TabContent(props) {
  return (
    <ul>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <pre>
        <code>
          {props.code}
        </code>
      </pre>
    </ul>
  );
}
