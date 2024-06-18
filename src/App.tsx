
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/app_starter/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  