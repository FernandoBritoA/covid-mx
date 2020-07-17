import React, { useState, Fragment, useEffect } from 'react';
import './SVGMap.css';
import Mexico from '@svg-maps/mexico';
import { RadioSVGMap } from 'react-svg-map';
import CustomSelector from '../CustomSelector/CustomSelector';
import TextUnderMouse from '../TextUnderMouse/TextUnderMouse';
import SpecificStatBlock from '../SpecificStatBlock/SpecificStatBlock';

import { connect } from 'react-redux';
import { setLocation } from '../../redux/stats/stats.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectSpecificLocation,
  selectSpecificLocationData,
} from '../../redux/stats/stats.selectors';

const SVGMap = ({ setLocation, specificLocation, specificLocationData }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { confirmed, deaths, recovered, active } = specificLocationData;

  useEffect(() => {
    const list = document.getElementsByClassName('svg-map__location');
    for (let i = 0; i < list.length; i++) {
      list[i].style.fill = 'var(--light-grey)';
    }

    const elementToFill = document.getElementsByName(specificLocation)[0];
    elementToFill.style.fill = 'var(--hover-yellow)';
  }, [specificLocation]);

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
        };
      } else {
        return {
          ...location,
          name: name,
        };
      }
    }),
  };

  const hoverOver = (e) => {
    setHoveredItem(e.target.attributes.name.value);
    e.target.style.fill = 'var(--hover-yellow)';
  };
  const hoverOut = (e) => {
    setHoveredItem(null);
    if (e.target.attributes.name.value !== specificLocation) {
      e.target.style.fill = 'var(--light-grey)';
    }
  };

  return (
    <Fragment>
      <div className='svg-map-container'>
        <CustomSelector
          options={customMexico.locations}
          setLocation={setLocation}
          value={specificLocation}
        />
        <RadioSVGMap
          className='svg-map'
          map={customMexico}
          onChange={(e) => setLocation(e.attributes.name.value)}
          onLocationMouseOver={(e) => hoverOver(e)}
          onLocationMouseOut={(e) => hoverOut(e)}
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
  specificLocationData: selectSpecificLocationData,
});

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => dispatch(setLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SVGMap);
