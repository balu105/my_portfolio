declare namespace NodeJS {
  interface ProcessEnv {
    GEMINI_API_KEY: string;
    [key: string]: string | undefined;
  }
}
