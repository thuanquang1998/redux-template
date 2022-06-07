import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};
const Todo = ({ name, prioriry }: any) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={(priorityColorMapping as any)[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
};

export default Todo;
