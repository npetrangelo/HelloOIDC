import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'login',
    renderMode: RenderMode.Client  // CSR only for this route
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender  // SSR for everything else
  }
];
