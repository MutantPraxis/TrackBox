import Navigation from './components/Navigation';

function App() {

  return (
    <>

      <Navigation onNavigate={(route) => console.log(`Navigating to ${route}`)} />

      <div className="tb3-content">

        <h1>
          to do...
        </h1>

        <ul>
          <li>add a sticky footer for the transport control</li>
          <li>add swappable component mock ups</li>
          <li>add backend API</li>
          <li>add mp3 upload feature</li>
        </ul>

      </div>


    </>
  )
}

export default App
