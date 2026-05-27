import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

    provideAnalytics(() => getAnalytics())
  ]
};