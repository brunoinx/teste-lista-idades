import React, { useState, useEffect } from 'react';

import AgeTextItem from './AgeTextItem';

export default function AgeList({ age }) {
  const [ageColor, setAgeColor] = useState('');

  const colors = {
    azul: '#2BB1DB',
    roxo: '#824DF2',
    laranja: '#E48A1F',
  };

  useEffect(() => {
    if (age < 20) {
      setAgeColor(colors.azul);
    } if (age >= 20 && age <= 40) {
      setAgeColor(colors.roxo);
    } if (age > 40) {
      setAgeColor(colors.laranja); 
    }
  }, [])

  return (
    <AgeTextItem color={ageColor}>{age}</AgeTextItem>
  );
}