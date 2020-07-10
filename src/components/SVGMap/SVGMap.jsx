import React, { useState } from 'react';
import Mexico from '@svg-maps/mexico';
import { RadioSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import TextUnderMouse from '../TextUnderMouse/TextUnderMouse';

const SVGMap = () => {
  const [location, setLocation] = useState(null);

  const customMexico = {
    ...Mexico,
    label: 'Custom map label',
    locations: Mexico.locations.map((location) => {
      return location.name === 'Mexico City'
        ? { ...location, name: 'Ciudad de Mexico' }
        : location;
    }),
  };

  return (
    <div>
      <RadioSVGMap
        map={customMexico}
        onChange={(e) => setLocation(e.attributes.name.value)}
      />
      <TextUnderMouse text={location} />
    </div>
  );
};

export default SVGMap;
