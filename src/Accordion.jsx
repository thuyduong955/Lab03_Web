import { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <h2>Accordion</h2>
      <Panel
        title="Panel 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        This is the content of Panel 1
      </Panel>
      <Panel
        title="Panel 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        This is the content of Panel 2
      </Panel>
    </div>
  );
}

export default Accordion;
