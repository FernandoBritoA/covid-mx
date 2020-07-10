import React, { useEffect } from 'react';

const TextUnderMouse = ({ text }) => {
  useEffect(() => {
    var x = null;
    var y = null;

    document.addEventListener('mousemove', onMouseUpdate);

    function onMouseUpdate(e) {
      x = e.pageX;
      y = e.pageY;
      console.log(x, y);
    }

    function getMouseX() {
      return x;
    }

    function getMouseY() {
      return y;
    }
    return () => {
      document.removeEventListener('mousemove', onMouseUpdate);
    };
  }, []);

  return <div>{text}</div>;
};

export default TextUnderMouse;
