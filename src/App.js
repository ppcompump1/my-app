import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';


function App() {
  return (
    <div>
     <MyHeader />
      <div className='My-content'>
          ทดสอบ
      </div>
     <MyFooter />
    </div>
  );
}

export default App;