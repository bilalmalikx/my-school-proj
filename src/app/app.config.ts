import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { resultReducer } from './reducers/result.reducers';



export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      resultState: resultReducer
    }),
    provideEffects(), // Provide effects with the array of effect classes
    provideStoreDevtools({
      maxAge: 30, // Number of actions to keep
      logOnly: !isDevMode(), // Log-only mode in production
      trace: true, // Optional for debugging
    }),
  ],
};
