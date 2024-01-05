import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* <CoreConcept{...CORE_CONCEPTS[0]}/>
    <CoreConcept{...CORE_CONCEPTS[1]}/> */}

        {CORE_CONCEPTS.map((concept, i) => (
          <CoreConcept key={i} {...concept} />
        ))}
      </ul>
    </section>
  );
}
