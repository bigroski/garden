import React, { Component } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

export const GardenElement = (props) => {
	const type = props.type;

	
  const [image] = useImage('./assets/foods/'+type+'.png');
  // const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image draggable x={props.x} y={props.y} image={image} />;
};
