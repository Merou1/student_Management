import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(appConfig.rootComponent, {
  providers: appConfig.providers,
}).catch(err => console.error(err));
