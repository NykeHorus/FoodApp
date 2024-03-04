import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './infrastructure/theme';
import {RestaurantsContextProvider} from './services/restaurants/restaurant.context';
import {LocationContextProvider} from './services/locations/location.context';
import {Navigation} from './infrastructure/navigation';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
