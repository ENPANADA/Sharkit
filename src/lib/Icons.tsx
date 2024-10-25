import type { IconProp } from "@type/svg";

export const IconHome = (props?: IconProp) => (
  <svg
    fill="currentColor"
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
  </svg>
);

export const IconArrowSquareUpRight = (props?: IconProp) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM87.51,168.49a12,12,0,0,1,0-17L131,108H112a12,12,0,0,1,0-24h48a12,12,0,0,1,12,12v48a12,12,0,0,1-24,0V125l-43.51,43.52a12,12,0,0,1-17,0Z"></path>
  </svg>
);

export const IconHTML = (props?: IconProp) => (
  <svg viewBox="0 0 452 520" {...props}>
    <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
    <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
    <path
      fill="#ecedee"
      d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
    />
    <path
      fill="#fff"
      d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
    />
  </svg>
);

export const IconCSS = (props?: IconProp) => (
  <svg viewBox="0 0 452 520" {...props}>
    <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
    <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
    <path
      fill="#ecedee"
      d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
    />
    <path
      fill="#fff"
      d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
    />
  </svg>
);

export const IconJS = (props?: IconProp) => (
  <svg viewBox="0 0 630 630" {...props}>
    <rect width="630" height="630" fill="#f7df1e" />
    <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
  </svg>
);

export const IconCodePenIo = (props?: IconProp) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"></path>
  </svg>
);

export const IconCodiLink = (props?: IconProp) => (
  <svg viewBox="0 0 160 145" {...props}>
    <path
      d="m70.45,71.55c-7.91,6.41 -15.41,13.41 -22.5,21c-6.32,9.86 -7.16,20.19 -2.5,31c-12.63,-12.13 -25.13,-24.46 -37.5,-37c-6.79,-12.07 -5.79,-23.4 3,-34c13.17,-13.17 26.33,-26.33 39.5,-39.5c15.13,-11 28.97,-9.5 41.5,4.5c6,10.33 6,20.67 0,31c-7,7.84 -14.17,15.5 -21.5,23z"
      fill="#1c9afb"
    />
    <path
      d="m131.45,41.55c1.54,2.42 2.54,5.08 3,8c-0.53,3.08 -1.36,6.08 -2.5,9c-4.37,4.54 -8.87,8.87 -13.5,13c-3.63,-4.13 -7.46,-8.13 -11.5,-12c-5.89,-10.06 -3.72,-17.89 6.5,-23.5c7.33,-1.98 13.33,-0.15 18,5.5z"
      fill="#205883"
    />
    <path
      d="m131.45,41.55c9.08,7.58 16.91,16.24 23.5,26c0.97,4.28 0.3,8.28 -2,12c-8.5,8.5 -17,17 -25.5,25.5c-13.14,5.6 -21.14,1.43 -24,-12.5c-0.03,-2.93 0.8,-5.6 2.5,-8c4.37,-4.2 8.54,-8.54 12.5,-13c4.63,-4.13 9.13,-8.46 13.5,-13c1.14,-2.92 1.97,-5.92 2.5,-9c-0.46,-2.92 -1.46,-5.58 -3,-8z"
      fill="#1e9afb"
    />
    <path
      d="m70.45,71.55c6.3,6.8 12.8,13.46 19.5,20c9.86,14.75 8.36,28.25 -4.5,40.5c-15.93,8.38 -29.26,5.55 -40,-8.5c-4.66,-10.81 -3.82,-21.14 2.5,-31c7.09,-7.59 14.59,-14.59 22.5,-21z"
      fill="#1e5782"
    />
  </svg>
);

export const IconArrowLeft = (props?: IconProp) => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
  </svg>
);

export const IconArrowRight = (props?: IconProp) => (
  <svg
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
  </svg>
);

export const IconArrowAltCircleRight = (props?: IconProp) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
  </svg>
);

export const IconSharKit = (props?: IconProp) => (
  <svg
    viewBox="0 0 416 206"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="m35.1 116.8l169.7-40.3c1 0 194.5 18.9 194.5 18.9l-7.8 15.7-130.3 53.5-88.9 9.2 62.4-50.7"></path>
    <path d="m332.3 135.4l33.8 9.6-8.2 6.7-96.6 12.9-56.5-88.1c0 0 4.6-14.5-10.8-58.5 37.3 11.4 81.5 65.4 81.5 65.4"></path>
    <path d="m204.8 76.5l-186.8 102.5 17.1-62.2-16.6-50.5 60.7 40"></path>
    <path d="m192.4 157.4l-112.5-12.4"></path>
  </svg>
);

export const Wave = (props?: IconProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="300"
    fill="currentColor"
    {...props}
  >
    <path d="M200.5 94.5V300.5H-0.5V94.5C27.0333 104.433 46.2667 108.533 75 103C93.5 99.4374 100.5 91.2554 122.1 87C148.833 81.7333 174.967 84.9 200.5 94.5Z" />
  </svg>
);

export const IconDorsalLogo = (props?: IconProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 328"
    width="513"
    height="328"
    {...props}
  >
    <path
      fill="#08001e"
      d="m390.5 292.5q-10.6-2.8-21-6.5-60.4-26-124-43-49.1-10.9-99-10.5 11.8-54.1 3.5-109-8.9-62.9-29.5-123 91.3-6.1 167 44.5 65.5 49.1 87.5 128.5 16.2 58.4 15.5 119z"
    />
    <path
      fill="#883aea"
      d="m146.5 232.5q49.9-0.4 99 10.5 63.6 17 124 43 10.4 3.7 21 6.5 59 20.7 108-17.5 6.8-5.5 13-11.5 0 1.5 0 3-40.2 75.7-125 56.5-11.6-2.3-23-5-54.5-16-108-35-55-18.9-113-24-61.7-5.6-117 22-13.8 8.7-26 19.5 0-1 0-2 24.3-32.5 62-48.5 41-16 85-17.5z"
    />
  </svg>
);

export const IconGitHub = (props?: IconProp) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const IconCopy = (props?: IconProp) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    {...props}
  >
    <rect
      width="336"
      height="336"
      x="128"
      y="128"
      fill="none"
      strokeLinejoin="round"
      strokeWidth="32"
      rx="57"
      ry="57"
    ></rect>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
    ></path>
  </svg>
);

export const IconCheck = (props?: IconProp) => (
  <svg
    fill="currentColor"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
  </svg>
);

export const IconHeartEmpty = (props?: IconProp) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"></path>
  </svg>
);

export const IconMexicoFlag = (props?: IconProp) => (
  <svg
    viewBox="0 0 36 36"
    height="1em"
    width="1em"
    {...props}
  >
    <path fill="#006847" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h7V5H4z"></path>
    <path
      fill="#CE1126"
      d="M32 5h-7v26h7a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
    ></path>
    <path fill="#EEE" d="M11 5h14v26H11z"></path>
    <path fill="#A6D388" d="M23 18a5 5 0 1 1-10 0h-1a6 6 0 0 0 12 0h-1z"></path>
    <path
      d="M13.543 20.269a.498.498 0 0 0-.673-.218a.5.5 0 0 0-.219.673c.09.177.189.35.296.516v.001l.004.006v.001l.008.011v.001l.003.006l.001.002l.004.005v.001l.003.005v.002l.003.005l.001.002l.003.005l.001.002l.003.004l.002.003l.002.003l.001.003l.003.005l.001.001l.002.003l.003.006l.001.002l.003.005l.001.002l.007.01v.001l.005.007v.001c.052.077.105.151.161.226a.497.497 0 0 0 .697.101a.499.499 0 0 0 .103-.699a5.96 5.96 0 0 1-.43-.71zm-.497-1.582a5.282 5.282 0 0 1-.046-.833a.5.5 0 0 0-.485-.514l-.036.001a.5.5 0 0 0-.478.485a8.061 8.061 0 0 0-.001.311v.09l.001.005v.028l.001.003l-.001.002v.003l.001.002v.029l.001.003v.011l.001.019l.001.009v.011c.009.16.025.319.046.477a.5.5 0 0 0 .562.425a.503.503 0 0 0 .433-.567zm5.294 4.3l-.006.001l-.124.008a5.087 5.087 0 0 1-.71-.021a.5.5 0 0 0-.1.995l.125.011l.004.001l.002-.001l.003.001h.002l.006.001h.006l.003.001h.001l.006-.001l.003.001h.005l.006.001l.005.001h.013l.006.001h.013c.152.01.305.015.459.012h.039l.007-.001l.006.001h.015l.005-.001h.019l.006-.001h.001l.005.001l.001-.001l.006.001h.001l.005-.001h.008l.006-.001h.006l.001.001l.006-.001h.007l.005-.001h.02l.005-.001h.004l.004-.001l.004.001h.005l.004-.001h.005c.042-.001.085-.005.127-.007a.494.494 0 0 0 .453-.526a.493.493 0 0 0-.514-.473zm-2.439-.448a5.07 5.07 0 0 1-.724-.411a.495.495 0 0 0-.303-.087a.5.5 0 0 0-.263.911l.001.001l.006.003l.006.006l.006.004l.006.005c.266.181.548.34.842.476a.498.498 0 0 0 .663-.243a.498.498 0 0 0-.24-.665zm5.03-.398a.498.498 0 0 0-.248.08a5.142 5.142 0 0 1-.734.387a.498.498 0 0 0 .213.96a.528.528 0 0 0 .173-.038l.134-.06h.002l.006-.004l.002-.001l.004-.002h.004l.004-.002l.002-.002l.006-.001l.002-.002l.003-.002l.005-.002l.003-.001l.005-.002l.002-.001l.005-.002l.002-.001c.003-.002.003-.003.005-.003l.002-.001l.006-.003h.002l.006-.003l.006-.003l.002-.001l.005-.003l.002-.001l.006-.003l.001-.001l.007-.001l.007-.004l.002-.001l.004-.003h.002l.006-.004l.008-.002l.006-.004h.001l.007-.004l.001-.001l.014-.006l.007-.003l.014-.008l.008-.003l.006-.003h.001l.014-.008v-.001l.006-.002h.001l.022-.012l.007-.002l.014-.008l.007-.004h.001c.001-.001.003-.002.007-.002c.002-.003.004-.004.006-.005l.008-.004l.006-.003v-.001l.014-.006h.001l.007-.004l.001-.001l.005-.003h.001l.007-.004l.006-.003h.002l.006-.004v-.001l.007-.003l.001-.001l.006-.003v-.001l.006-.002l.002-.001l.004-.003l.003-.001l.005-.003l.002-.001l.005-.003l.002-.001l.006-.002c-.001-.001 0-.001.001-.001l.006-.003l.002-.001l.004-.003l.002-.001l.006-.003l.002-.001c0-.002.002-.002.004-.003l.003-.001l.004-.002l.003-.002l.004-.002l.003-.002l.003-.002l.003-.003l.005-.001l.004-.001l.002-.002l.004-.002l.004-.003l.002-.001l.004-.002l.004-.003l.003-.002c.002.001.003 0 .005-.001l.002-.002l.004-.002l.003-.002l.003-.002l.004-.002l.004-.003l.002-.001c.002-.001.006-.001.008-.003c-.002-.001-.002-.001 0-.001l.004-.002l.007-.005l.002-.001l.007-.003v-.001l.012-.006l.008-.005a.095.095 0 0 1 .02-.011h.001c.063-.038.128-.077.19-.117a.5.5 0 0 0 .152-.69a.554.554 0 0 0-.457-.225zm2.571-4.618l-.024.001a.5.5 0 0 0-.479.498c0 .277-.025.557-.072.829a.5.5 0 0 0 .987.168v-.005l.001-.002l.001-.002l-.001-.002l.001-.002v-.002l.001-.002v-.003l.001-.002v-.009c.002-.001.002-.003.002-.004v-.006a6.23 6.23 0 0 0 .052-.391l-.001-.001l.001-.003v-.001l.001-.004v-.011l.002-.003v-.001l-.001-.003v-.002l.001-.003v-.004l.002-.001l-.002-.003v-.004c.002-.001.002-.002.002-.003v-.019l.002-.003v-.001a6.22 6.22 0 0 0 .021-.495a.5.5 0 0 0-.498-.499zm-.443 2.696a.5.5 0 0 0-.68.196a4.853 4.853 0 0 1-.463.692a.5.5 0 0 0 .783.622c.116-.146.227-.299.33-.455c.002-.007.007-.014.011-.02l.001-.001l.004-.006v-.001l.004-.007c.002-.002.004-.004.004-.006l.001.001l.004-.006v-.001a.01.01 0 0 0 .003-.007l.002-.001l.004-.006v-.001c.002-.001.002-.003.003-.005l.001-.001l.004-.006l.001-.002l.002-.005l.003-.002l.002-.005h.002l.002-.006l.001-.002l.004-.004l.001-.002c.001-.002.001-.004.003-.005l.001-.003l.004-.003c0-.001 0-.002.002-.003v-.004l.003-.002l.003-.005l.001-.002l.003-.006l.002-.002l.002-.004l.002-.003c0-.001 0-.002.002-.003c0-.001 0-.002.002-.003l.003-.005l.001-.003l.002-.003l.002-.003c.002-.001.002-.002.002-.003c.002-.001.002-.002.002-.004l.002-.003l.003-.004l.003-.004v-.003l.002-.003l.003-.004l.003-.003v-.003l.004-.005v-.003c.002-.001.003-.002.003-.004l.002-.002l.002-.003l.003-.005l.002-.003v-.002l.004-.005c0-.001 0-.002.002-.003l.001-.003l.003-.004l.002-.004l.002-.003c.001-.001 0-.003.002-.004c0-.001 0-.002.002-.002l.002-.005l.002-.002l.002-.006l.002-.001l.002-.004l.002-.002l.002-.005l.002-.002l.002-.006c.002-.001 0-.002 0-.002l.004-.005l.001-.002l.004-.005v-.001l.003-.006l.002-.002l.002-.006v-.001l.005-.005l.003-.006v-.001l.004-.007l.002-.001l.025-.047a.498.498 0 0 0-.199-.672z"
      fill="#5C913B"
    ></path>
    <ellipse fill="#55ACEE" cx="18" cy="21" rx="3" ry="1"></ellipse>
    <ellipse fill="#FFCC4D" cx="18.5" cy="21" rx="1.5" ry="1"></ellipse>
    <path
      fill="#5C913B"
      d="M19.117 21.274a.503.503 0 0 1-.44-.739c.16-.294.328-.561.502-.795a10 10 0 0 1-.43.009c-.276 0-.528-.225-.528-.501s.195-.5.472-.5l.082.001c.296 0 .6-.018.872-.043a.49.49 0 0 1 .41.156c.014-.011.028-.022.043-.031c.1-.066.193-.119.28-.161a.49.49 0 0 1 .211-.094l.036-.007c.188-.061.32-.069.373-.069a.498.498 0 0 1 .477.647c-.082.266-.265.326-.586.39a1.2 1.2 0 0 0-.238.128a.507.507 0 0 1-.599-.034a.499.499 0 0 1-.002.614c-.17.217-.337.475-.496.768a.498.498 0 0 1-.439.261zm-1.42-1.589a.497.497 0 0 1-.066-.004a6.98 6.98 0 0 1-1.056-.221a.5.5 0 0 1-.337-.622l.006-.02l-.012.023a.5.5 0 0 1-.681.192a4.126 4.126 0 0 1-.907-.681a.5.5 0 0 1 .707-.707c.197.197.428.37.688.515a.5.5 0 0 1 .229.597a.5.5 0 0 1 .59-.256c.276.082.579.145.9.188a.5.5 0 0 1-.061.996zm-2.452-2.339c-.426 0-.977-.165-1.311-.559c-.512-.604-.813-1.379-.767-1.973c.012-.159-.143-.287-.295-.327c-.087-.023-.24-.037-.312.118a.25.25 0 0 1-.454-.21c.156-.339.506-.49.892-.392c.358.093.701.415.667.85c-.036.462.226 1.109.65 1.61c.223.264.611.371.875.381c.215.011.324-.038.347-.059c-.056-.133-.797-.523-1.113-.689c-.269-.141-.349-.335-.369-.472c-.067-.455.4-.916.852-1.36c.159-.157.31-.305.392-.414c.093-.123.078-.205.06-.256c-.069-.187-.368-.372-.728-.452c-.333-.074-.558-.235-.668-.479c-.145-.321-.068-.741.234-1.285a.25.25 0 1 1 .437.243c-.285.512-.257.744-.215.837c.042.092.149.157.32.195c.423.094.932.345 1.088.767c.089.241.044.501-.128.73c-.104.139-.268.3-.441.471c-.258.254-.739.727-.708.931c.006.042.061.079.107.102c.751.394 1.25.679 1.352 1.028a.456.456 0 0 1-.042.359c-.097.169-.299.273-.585.299c-.043.004-.09.006-.137.006z"
    ></path>
    <ellipse fill="#FFCC4D" cx="19.5" cy="18" rx=".5" ry="1"></ellipse>
    <path
      fill="#FFCC4D"
      d="M17.292 17.188c0 .288-.345.521-.771.521c-.425 0-.771-.233-.771-.521s.345-.521.771-.521c.425 0 .771.233.771.521zm-1.187-4.627c.05.212-.227.46-.619.553c-.392.093-.75-.004-.801-.216c-.05-.213.227-.461.618-.554c.393-.092.752.004.802.217z"
    ></path>
    <path
      fill="#C1694F"
      d="M22.533 17.955c.09.07.243-.729.22-.978c0-.017-.029-.546.083-.924c.069-.128.073-1.083-.033-1.334c.084-.007.185-.034.197-.136c-.388.143-.479-.817-.852-1.369c-.362-.553-.811-.875-1.28-1.211a.979.979 0 0 1 .162-.27c-.575.288-1.471-.755-2.795-.677c-.297.029-.438.047-.514.229c-.247.02-.498.076-.498.401c0 .078.071.22.229.221c.216.063.392.014.539.316l.039.312s-.193-.247-.299-.286l.065-.133c-.1-.058-.277-.011-.277-.011s-.385-.18-.694-.132l-.06-.25c-.054.154-.175.146-.192.291c-.034-.104-.079-.233-.111-.337c-.109.148-.077.308-.116.462c-.042.036-.128.037-.15-.062c-.011-.122-.026-.133-.026-.278c-.078.137-.172.204-.203.439l-.083-.26c.003.307-.261.49-.511.707c-.071.13.011.131.017.198l.132.066l.237-.017c.039.049.007.053.11.084c.276.077.62-.254.89.267c-.124.104-.249.347-.209.393c.05 0-.1.07.102.006c-.21.204-.352.473-.352.489c-.024.058.084-.008.062.097l.05-.006c-.479.518-.016 1.075-.067 1.374c.08.129.09-.003.19-.016c.084.368.326.591.474.882l-.312.003c.007.138.132.269.231.39l-.209.066a1.128 1.128 0 0 0-.352.274c-.069.168.333.208.527.238l-.007.203c.303.029.653-.061.653-.078l.076-.059l.171.094c.057 0 .146-.228.105-.403c.11.131.214.342.324.474l.103-.014c.094.149.223.297.317.446l.105.04c.061-.021.113-.028.146-.148l.048.084l.166-.114l.116-.023l.087.142c.051-.019.101-.13.104-.248c.052.103.066.095.104.122l.077-.162l.415.388l.314.018c.112.076.419.124.471.001c.252.108.549-.014.534-.134c.232.092.589.03.589.015c.043-.005.153-.113.049-.194c-.767-.534-1.904-1.418-2.343-1.631c0-.158-.119-.727-.247-.883l.104-.174c.299.279.407.252.566.296c.17.135.229.34.399.527l.152.028a2.583 2.583 0 0 0-.554-.873c.164.082.436.301.618.46c.12.201.155.361.265.613c.08.051.162.238.151.083c-.019-.291-.224-.752-.224-.785c.326.258.322.66.421.905c.083.124.125.29.161.251l-.096-.756l-.056-.277c.241.139.327.669.44 1.305c0 .101.041.212.035.277c.052.064.111.241.11.136c0 0 0-1.034-.071-1.271c-.018-.127.03-.333.03-.333c.088.429.182.894.271 1.322v.315l.132.133c.025-.26.055-.518.081-.776l-.099-.925v-.264c-.002-.093.085-.076.14.03c.013.227.013.404.022.63c.039.258.066.447.085.776c.011.266.023.904.079.893z"
    ></path>
  </svg>
);
