import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp } from 'firebase/app';
import {
  initializeApp as initializeApp_alias,
  provideFirebaseApp,
} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-1bc81',
        appId: '1:558992947716:web:ea273e641617c41bb9d351',
        storageBucket: 'simple-crm-1bc81.appspot.com',
        apiKey: 'AIzaSyAYWAEukjm5XFKjpsBprmiH5dVT8k2PeDY',
        authDomain: 'simple-crm-1bc81.firebaseapp.com',
        messagingSenderId: '558992947716',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
