import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap the Angular application using platformBrowserDynamic
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
