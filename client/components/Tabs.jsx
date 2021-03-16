import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { storyColumns } from '../utils/Constants';

function ControlledTabs() {
  const [activeKey, setActiveKey] = useState(storyColumns[0].key);

  return (
    <Tabs id="tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      {storyColumns.map((column) => {
        const { title, key } = column;
        return <Tab eventKey={key} title={title}></Tab>;
      })}
    </Tabs>
  );
}

export default ControlledTabs;
