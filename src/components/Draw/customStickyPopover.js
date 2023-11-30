import React, { useState } from 'react';
import { Popover } from 'react-bootstrap';
import { BsCCircle, BsSquare, BsStickiesFill } from 'react-icons/bs';
import { DrawingColors } from "../../utils/DrawingColor";

const CustomStickyPopover = ({ setSelectedColor }) => {

  const [selectedShape, setSelectedShape] = useState(null);

  return (
    <Popover id="popover-basic">
      <Popover.Body>
        <div style={{ display: 'grid', gap: "7.5px", gridTemplateColumns: "1fr 1fr" }}>
          {DrawingColors.map((color) => (
            <div
              key={color.color}
              onClick={() => setSelectedColor(color.color)}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
              style={{
                backgroundColor: color.color,
                boxShadow: "2px 2px #cbd5e1",
                width: '24px',
                height: '24px',
                margin: '6px',
                cursor: 'pointer',
              }}
              title={color.title}
            ></div>
          ))}
        </div>
        {/* <div style={{ display: 'flex' }}>
          <div
            onClick={() => {
              setSelectedShape('Rectangle');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'Rectangle' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsStickiesFill style={{ cursor: 'pointer' }} />
          </div>
          <div
            onClick={() => {
              setSelectedShape('circle');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'circle' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsCCircle style={{ cursor: 'pointer' }} />
          </div>
          <div
            onClick={() => {
              setSelectedShape('square');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'square' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsSquare style={{ cursor: 'pointer' }} />
          </div>
        </div> */}
      </Popover.Body>
    </Popover>
  );
};

export default CustomStickyPopover;