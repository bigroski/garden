import React, { Component } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

export const StructureElement = (props) => {
	const type = props.type;
  const [image] = useImage('./assets/structures/'+type+'.png');
  // const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image draggable x={900} y={50} width={300} height={300} image={image} />;
};
