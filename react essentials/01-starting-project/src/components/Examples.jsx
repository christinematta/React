import {useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx"


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function selectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return(
    <Section title="Examples" id="examples">

          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => selectHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => selectHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => selectHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </Section>

  );
}
