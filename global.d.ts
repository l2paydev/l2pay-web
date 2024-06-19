declare module '*.svg?url' {
  const content: string;
  export default content;
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum: any;
}
declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': any;
  }
}
