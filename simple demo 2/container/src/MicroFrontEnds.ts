import React from "react";
// import SinAtMicroFrontEnd from "sinat/sinatMicrofrontEnd";
// import SinMatMicroFrontEnd from "sinmat/sinmatMicrofrontEnd";

const SinAtMicroFrontEnd = React.lazy(() => import("sinat/sinatMicrofrontEnd"));
const SinMatMicroFrontEnd = React.lazy(()=>import("sinmat/sinmatMicrofrontEnd"))
// const MFE1 = React.lazy(
//   () => import("MFE1/MFE1")
// );

export const MicroFrontEnds = [
  {
    path: "/sinmat",
    Microfrontend: SinMatMicroFrontEnd,
    role: "admin",
  },
  {
    path: "/sinat",
    Microfrontend: SinAtMicroFrontEnd,
    role: "admin",
  },
//   {
//     path: "/mfe1",
//     Microfrontend: MFE1,
//     role: "admin",
//   },
];