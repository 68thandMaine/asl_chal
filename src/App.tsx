import React, { useEffect, useRef } from 'react';
import './App.css';
import './tailwind.css';
import LeafletMap from './components/map/LeafletMap';
import L from 'leaflet';

function App() {
  return (
		<LeafletMap />
  );
}

export default App;
