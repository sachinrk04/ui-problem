import React, { Suspense } from 'react';
import "./LazyLoading.scss";
const Banner = React.lazy(() => import("../../Components/LazyLoading/Banner"));

export default function LazyLoading() {
  return (
    <div className="lazy-loading">
      <Suspense fallback={<div className="">Loading...</div>}>
        <Banner />
      </Suspense>
    </div>
  )
}
