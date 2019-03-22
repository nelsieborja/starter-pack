import { lazy } from 'react';

const lazyLoad = componentName =>
  lazy(() =>
    import(/* webpackChunkName: "[request]" */
    /* webpackPrefetch: true */ `../components/pages/${componentName}`)
  );

export default lazyLoad;
