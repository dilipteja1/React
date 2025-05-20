import reactLogo from '../assets/react.svg'


export default function Header()  {
    return   ( 
    <header> 
      <nav>
        <img src={reactLogo} alt= "React logo" />
        <span> ReactFacts</span>
      </nav>
    </header>
    )
  }