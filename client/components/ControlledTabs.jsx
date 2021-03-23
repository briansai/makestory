import { Tabs, Tab } from 'react-bootstrap';
import { storyColumns } from '../utils/constants';

const ControlledTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <Tabs
      className="mt-3 controlled-tab"
      activeKey={selectedTab}
      onSelect={(k) => setSelectedTab(k)}
    >
      {storyColumns.map((column) => {
        const { title, key } = column;
        return <Tab key={key} eventKey={key} title={title} />;
      })}
    </Tabs>
  );
};

export default ControlledTabs;
