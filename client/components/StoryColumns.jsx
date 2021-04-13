import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Column from './Column';
import ControlledTabs from './ControlledTabs';

const StoryColumns = () => {
  const {
    newStoryReducer: newStory,
    prioritizedReducer: prioritized,
    inProgressReducer: inProgress,
    completedReducer: completed,
    deployedReducer: deployed,
  } = useSelector((state) => state);

  const storyColumns = [newStory, prioritized, inProgress, completed, deployed];
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
