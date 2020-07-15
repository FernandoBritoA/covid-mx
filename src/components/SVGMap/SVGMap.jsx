import React, { useState, Fragment } from 'react';
import './SVGMap.css';
import Mexico from '@svg-maps/mexico';
import { RadioSVGMap } from 'react-svg-map';
import CustomSelector from '../CustomSelector/CustomSelector';
import TextUnderMouse from '../TextUnderMouse/TextUnderMouse';
import SpecificStatBlock from '../SpecificStatBlock/SpecificStatBlock';

import { connect } from 'react-redux';
import { setLocation } from '../../redux/stats/stats.actions';
import { createStructuredSelector } from 'reselect';
import { selectSpecificLocation } from '../../redux/stats/stats.selectors';

const SVGMap = ({ setLocation, specificLocation }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { confirmed, deaths, recovered, active } = specificLocation;

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
        <CustomSelector
          options={customMexico.locations}
          setLocation={setLocation}
          value={specificLocation.provinceState}
        />
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
          <SpecificStatBlock
            label='CONFIRMADOS'
            value={confirmed}
            color='#fe2121'
          />
          <SpecificStatBlock label='FALLECIDOS' value={deaths} color='grey' />
          <SpecificStatBlock
            label='RECUPERADOS'
            value={recovered}
            color='#1acb1a'
          />
          <SpecificStatBlock label='ACTIVOS' value={active} color='#274ea9' />
        </div>
      </div>

      <TextUnderMouse text={hoveredItem} />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  specificLocation: selectSpecificLocation,
});

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => dispatch(setLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SVGMap);
