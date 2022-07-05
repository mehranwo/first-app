import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import Login2 from './pages/auth/login2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function customInput() {
function TextInput(props) {
  return (
    <>
      {/* <input id={id} name={name} value={value} onChange={onChange} type='text' /> */}
      <input {...props} type='text' />
    </>
  )
}

function CustomContainer({ children }) {
  return (
    <div className='container1'>
      <div>
        lskdjfsldfjslkdfjslkjslkdfj
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    // <div className="App">
    //   first project
    //   {/* {customInput()} */}
    //   <TextInput id={'sdfsdf'} name={'lskjflskfj'} />

    //   <CustomContainer>
    //     <div>

    //     </div>
    //   </CustomContainer>
    // </div>


    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/login2' element={<Login2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
