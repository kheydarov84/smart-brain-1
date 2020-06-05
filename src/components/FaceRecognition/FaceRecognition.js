import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div>
          {
            boxes.map(face => {
              return (
                <div 
                  key={face.topRow}
                  className='bounding-box' 
                  style={{
                    top: face.topRow, 
                    right: face.rightCol, 
                    bottom: face.bottomRow, 
                    left: face.leftCol
                  }}
                />
              )
            })         
          }
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;