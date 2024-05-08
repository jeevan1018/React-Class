import React, { useState } from 'react';

const Practic = () => {
  const [data, setData] = useState(0);

  const handleEvent = (e) => {
    const newValue = parseInt(e.target.value);
    setData(newValue * 10);
  };

  return (
    <div>
      <h1>{data}</h1>

      <form>
        {/* Passing handleEvent function as a reference */}
        <input type="text" value={data} onChange={handleEvent} />
      </form>
    </div>
  );
};

export default Practic;
