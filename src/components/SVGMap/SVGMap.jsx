import React, { useState, Fragment } from 'react';
import './SVGMap.css';
import Mexico from '@svg-maps/mexico';
import { RadioSVGMap } from 'react-svg-map';
import CustomSelector from '../CustomSelector/CustomSelector';
import TextUnderMouse from '../TextUnderMouse/TextUnderMouse';
import SpecificStatBlock from '../SpecificStatBlock/SpecificStatBlock';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectConfirmedByProvince } from '../../redux/stats/stats.selectors';

const SVGMap = ({ locationsArr }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [location, setLocation] = useState(null);

  /*const idsObj = {};
  locationsArr.forEach((location) => {
    idsObj[location.provinceState] = location.uid;
  });*/

  const customMexico = {
    ...Mexico,
    label: 'Custom map label',
    locations: Mexico.locations.map((location) => {
      const name = location.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      if (name === 'Mexico City') {
        return {
          ...location,
          name: 'Ciudad de Mexico',
          //id: idsObj['Ciudad de Mexico'],
        };
      } else {
        return {
          ...location,
          name: name,
          //id: idsObj[name],
        };
      }
    }),
  };

  return (
    <Fragment>
      <div className='svg-map-container'>
        <CustomSelector options={locationsArr} />
        <RadioSVGMap
          className='svg-map'
          map={customMexico}
          onChange={(e) => setLocation(e.attributes.name.value)}
          onLocationMouseOver={(e) =>
            setHoveredItem(e.target.attributes.name.value)
          }
          onLocationMouseOut={() => setHoveredItem(null)}
        />

        <div className='specific-stats-container'>
          {[1, 2, 3, 4].map((i) => (
            <SpecificStatBlock key={i} />
          ))}
        </div>
      </div>

      <TextUnderMouse text={hoveredItem} />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  locationsArr: selectConfirmedByProvince,
});

export default connect(mapStateToProps)(SVGMap);
