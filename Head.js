import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const first = useSelector((state) => {
    console.log(state);
    return state.UpDown
  });

  return <div>{first}</div>;
}