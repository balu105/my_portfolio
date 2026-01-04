// Augment the global scope to include API_KEY in ProcessEnv
// This assumes 'process' is already defined in the environment (e.g. by @types/node or other declarations)

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
    }
  }
}
