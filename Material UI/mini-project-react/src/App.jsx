import Button from '@mui/material/Button';
import './App.css'

// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';

// import SearchBox from './SearchBox';
// import Info from './Info';

import WeatherApp from './WeatherApp';

function App() {
  

  return (
    <>
      {/* /* <Button variant="text" size="small">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" size="small">Outlined</Button>
      <br /><br /><br /><br /><br />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} size="small">
        Send
      </Button> */ }
      {/* <SearchBox/>
      <Info/> */
      <WeatherApp/>
      }


      
    </>
      
  )
}

export default App
