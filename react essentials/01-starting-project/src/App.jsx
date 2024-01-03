import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js";

import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function selectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => selectHandler("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => selectHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => selectHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => selectHandler("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
