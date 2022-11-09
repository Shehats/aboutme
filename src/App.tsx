import React, { Fragment } from 'react';
import Blog from './blog/Blog';
import { getConfigs } from './data/config';
import { setPageData } from './effect/setters';
import { Config } from './models';

function App() {
  const [config, setConfig] = React.useState({} as Config);
  const [configLoaded, setConfigLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageData(
      getConfigs, setConfig,
      'https://raw.githubusercontent.com/Shehats/blogs',
      'main', 'blogs_meta.json').then(() => setConfigLoaded(true));

  }, []);
  return (
    <Fragment>
      { (configLoaded) ? <Blog config={config} configLoaded={configLoaded}/> : <div/> }
    </Fragment>
  );
}

export default App;
