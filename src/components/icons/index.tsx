import { component$ } from "@builder.io/qwik";

export const HomeIcon = component$(() => {
  return (
    <svg viewBox="0 0 1024 1024" class="inline-block">
      <path
        fill="currentColor"
        d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3h-96.1z"
      ></path>
    </svg>
  );
});

export const MovieIcon = component$(() => {
  return (
    <svg viewBox="0 0 20 20" width="24" height="24">
      <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M.707 6.08a1 1 0 0 1 .763-1.192L16.123 1.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.191L2.54 9.774a1 1 0 0 1-1.19-.763L.707 6.08Zm2.168.548l.213.977l12.7-2.78l-.214-.977l-12.7 2.78Z"></path>
        <path d="M9.935 7.698L7.339 5.195l1.389-1.44l2.595 2.503l-1.388 1.44Zm-3.908.855L3.432 6.05L4.82 4.61l2.595 2.504l-1.388 1.44Zm7.815-1.711L11.247 4.34l1.388-1.44l2.595 2.504l-1.388 1.44Zm-4.01 5.713l2-3l-1.664-1.11l-2 3l1.664 1.11Zm4 0l2-3l-1.664-1.11l-2 3l1.664 1.11Zm-8 0l2-3l-1.664-1.11l-2 3l1.664 1.11Z"></path>
        <path d="M1.5 9a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9Zm2 1v7h13v-7h-13Z"></path>
        <path d="M18 13H2v-2h16v2Z"></path>
      </g>
    </svg>
  );
});

export const ShowIcon = component$(() => {
  return (
    <svg viewBox="0 0 20 20" width="24" height="24">
      <g fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M2 8v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm3 8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5Z"
          clip-rule="evenodd"
        ></path>
        <path d="M11.28 5.625a1 1 0 0 1-1.56-1.25l2-2.5a1 1 0 0 1 1.56 1.25l-2 2.5Z"></path>
        <path d="M8.72 5.625a1 1 0 0 0 1.56-1.25l-2-2.5a1 1 0 0 0-1.56 1.25l2 2.5Z"></path>
      </g>
    </svg>
  );
});

export const SearchIcon = component$(() => {
  return (
    <svg viewBox="0 0 1024 1024" width="24" height="24">
      <path
        fill="currentColor"
        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
      ></path>
    </svg>
  );
});

export const QwikLogo = () => (
  <svg
    width="53"
    height="35"
    viewBox="0 0 53 53"
    fill="none"
    class="inline-block"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* <path
      d="M81.9545 46.5859H75.5513V35.4045C73.4363 36.8579 71.0496 37.5749 68.4884 37.5749C65.0151 37.5749 62.4344 36.6253 60.8239 34.6487C59.2134 32.6915 58.3984 29.2034 58.3984 24.2231C58.3984 19.1266 59.3492 15.5997 61.2702 13.5456C63.23 11.4721 66.3734 10.4644 70.7004 10.4644C74.7946 10.4644 78.5201 11.0264 81.9545 12.131V46.5859ZM75.5513 16.278C74.096 15.8323 72.4661 15.6191 70.7004 15.6191C68.5272 15.6191 66.9749 16.1811 66.1017 17.3244C65.2479 18.4871 64.7823 20.6962 64.7823 23.9712C64.7823 27.0524 65.1897 29.1065 66.0435 30.2304C66.8973 31.335 68.3719 31.897 70.5452 31.897C73.3781 31.897 75.5513 30.7343 75.5513 29.2809V16.278Z"
      fill="white"
    />
    <path
      d="M91.133 11.1426C93.4033 17.4406 95.3242 23.7386 96.993 30.0948C99.205 23.5836 101.087 17.2856 102.542 11.1426H108.15C110.265 17.4406 112.031 23.7386 113.447 30.0948C115.97 23.196 117.949 16.8787 119.404 11.1426H125.71C123.033 20.173 120.064 28.777 116.785 36.8966H109.256C108.402 32.3039 107.044 26.7617 105.22 20.1536C104.056 25.2889 102.445 30.8893 100.33 36.8966H92.8018C90.2793 27.5174 87.5434 18.9522 84.6328 11.1426H91.133Z"
      fill="white"
    />
    <path
      d="M132.832 7.55758C129.999 7.55758 129.203 6.85996 129.203 3.97257C129.203 1.39523 130.018 0.794495 132.832 0.794495C135.665 0.794495 136.46 1.39523 136.46 3.97257C136.46 6.85996 135.665 7.55758 132.832 7.55758ZM129.649 11.1426H136.053V36.8966H129.649V11.1426Z"
      fill="white"
    />
    <path
      d="M166.303 11.1426C161.763 17.5956 158.581 21.5295 156.815 22.9441C158.27 23.8937 162.17 28.8933 167.002 36.916H159.628C153.613 27.7887 150.742 23.8549 149.325 23.2542V36.916H142.922V0H149.325V23.2348C150.78 22.169 153.963 18.1382 158.872 11.1426H166.303Z"
      fill="white"
    /> */}
    <path
      d="M40.973 52.5351L32.0861 43.6985L31.9503 43.7179V43.621L13.0511 24.9595L17.708 20.4637L14.9721 4.76715L1.99103 20.8513C-0.220992 23.0798 -0.628467 26.7036 0.962635 29.3778L9.07337 42.8265C10.3152 44.9 12.566 46.1402 14.9915 46.1208L19.0081 46.082L40.973 52.5351Z"
      fill="#18B6F6"
    />
    <path
      d="M45.8232 20.5411L44.038 17.2468L43.1066 15.5609L42.738 14.902L42.6992 14.9408L37.8094 6.47238C36.587 4.34075 34.2974 3.02301 31.8137 3.04239L27.5255 3.15865L14.7384 3.19741C12.313 3.21679 10.101 4.49577 8.87853 6.56927L1.09766 21.9945L15.0101 4.72831L33.2496 24.7656L30.0091 28.0406L31.9495 43.7178L31.9689 43.679V43.7178H31.9301L31.9689 43.7565L33.4824 45.2293L40.8364 52.4187C41.1469 52.7094 41.6514 52.3606 41.4379 51.9924L36.8975 43.0589L44.8142 28.4282L45.0664 28.1375C45.1634 28.0212 45.2604 27.905 45.3381 27.7887C46.8904 25.6764 47.1038 22.8472 45.8232 20.5411Z"
      fill="#AC7EF4"
    />
    <path
      d="M33.3076 24.6882L15.0099 4.74774L17.61 20.3668L12.9531 24.882L31.9105 43.6985L30.203 28.0794L33.3076 24.6882Z"
      fill="white"
    />
  </svg>
);