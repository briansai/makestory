import { useState, findDOMNode, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { storyColumns } from '../utils/constants';
import Column from './Column';
import ControlledTabs from './ControlledTabs';

const StoryColumns = () => {
  const [selectedTab, setSelectedTab] = useState('');

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
