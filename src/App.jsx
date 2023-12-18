import './App.css'
import reactImg from './assets/norwintrading.logo.png';

function Header(){
  return(
    <header>
        <img src={reactImg} />
      </header>
  );
}

const barTitle = ['Home', 'About', 'Product', 'Calculator', 'Blog', 'Contact Us', 'Sign In'];

function Navbar(){
  return(
    <div class="flex-container">
        <div>{barTitle[0]}</div>
        <div>{barTitle[1]}</div>
        <div>{barTitle[2]}</div>  
        <div>{barTitle[3]}</div>
        <div>{barTitle[4]}</div>
        <div>{barTitle[5]}</div>  
        <div></div>
        <div>{barTitle[6]}</div>
      </div>
  );
}

function App() {
  return (
    <div>
      <Header />  
      <Navbar />
      <main>
        <h2>Time to get started</h2>
        
      </main>
      
    </div>
  )
}

export default App
