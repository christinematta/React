import Header from "./components/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept{...CORE_CONCEPTS[0]}/>
            <CoreConcept{...CORE_CONCEPTS[1]}/> */}

            {CORE_CONCEPTS.map((concept, i) => (
              <CoreConcept
                key={i}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
