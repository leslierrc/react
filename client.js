// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('welcome', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  const otraImg= new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )
  otraImg.setAngle(-0.7,0)

  r360.renderToSurface(
    r360.createRoot('otraimg', { /* initial props */ 
      id: 'id'
  }),
    otraImg
  );

  const ChangeBackgroundButton= new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )
  ChangeBackgroundButton.setAngle(-0.5,0)

  r360.renderToSurface(
    r360.createRoot('ChangeBackgroundbutton', { /* initial props */ 
      id: 'id2'
  }),
  ChangeBackgroundButton
  );
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('calle 19 (10).jpg'));
}


window.React360 = {init};
