import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Column from './Column';
import ControlledTabs from './ControlledTabs';
import { storyColumns } from '../utils/constants';

const StoryColumns = () => {
  const [selectedTab, setSelectedTab] = useState(storyColumns[0].key);

  useEffect(() => {
    if (selectedTab) {
      const p = document.getElementById(selectedTab);
      document.querySelector('.row .flex-nowrap').scrollLeft = p.offsetLeft;
    }
  }, [selectedTab]);

  return (
    <Container fluid className="story-container">
      <ControlledTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Row className="row flex-nowrap">
        {storyColumns.map((column) => (
          <Column key={column.key} column={column} />
        ))}
      </Row>
    </Container>
  );
};

export default StoryColumns;
