import React, { useState, Fragment } from 'react';
import './SVGMap.css';
import Mexico from '@svg-maps/mexico';
import { RadioSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import TextUnderMouse from '../TextUnderMouse/TextUnderMouse';

const SVGMap = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
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

  console.log(location);
  return (
    <Fragment>
      <div className='svg-map-container' style={{ width: 500 }}>
        <RadioSVGMap
          map={customMexico}
          onChange={(e) => setLocation(e.attributes.name.value)}
          onLocationMouseOver={(e) =>
            setHoveredItem(e.target.attributes.name.value)
          }
          onLocationMouseOut={() => setHoveredItem(null)}
        />
      </div>

      <TextUnderMouse text={hoveredItem} />
    </Fragment>
  );
};

export default SVGMap;
