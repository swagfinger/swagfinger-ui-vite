import { useState, useEffect } from 'react';

let idCounter = 0;

export function useUID(identifier = 'uid') {
  const [id, setId] = useState(idCounter.toString());

  useEffect(() => {
    setId(`${identifier}-${idCounter++}`);
  }, [identifier]);

  return id;
}