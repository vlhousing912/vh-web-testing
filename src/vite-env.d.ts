/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
  readonly VITE_GA_ID: string;
  readonly VITE_GTM_ID: string;
  readonly VITE_META_PIXEL_ID: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
