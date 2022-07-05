import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchGreeting,
  selectGreeting,
} from './greetingSlice';

export function Greeting() {
  const greeting = useSelector(selectGreeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <p>{greeting}</p>
  );
}
