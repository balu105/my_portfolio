// This file ensures TypeScript recognizes the process.env.API_KEY variable
// which is replaced by Vite during the build.

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
    }
  }
}