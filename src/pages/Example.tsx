import { SetStateAction, useState } from "react";
import NameInput from "../components/NameInput";

// Hàm tạo màu ngẫu nhiên => cái này copy =)))
const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


function ExamplePage() {
  /* Input Name */
  const [name, setName] = useState<string>('');
  const [showName, setShowName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleInputClick = () => {
    setShowName(name);
  }

  /* Button Counter */
  const [counter, setCounter] = useState<number>(0);

  const hanleCounterClick = () => {
    setCounter(counter + 1);
  }

  /* Highlight button */
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
  const handleButtonChange = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor;
  }

  /* Show/hide Text */
  const [displayText, setDisplayText] = useState<boolean>(true);

  const handleDisplayText = () => {
    setDisplayText((displayText) => !displayText);
  }

  /* Event onMouseMove */
  const [mouseMove, setMouseMove] = useState({x: 0, y: 0});

  const handleMouseMove = (e: any) => {
    setMouseMove({
      // Dùng clientX/Y để xác định vị trí khi di chuột
      x: e.clientX,
      y: e.clientY
    });
  }

  /* Resize Browser */
  const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  /* Login Form */
  const [userName, setUserName] = useState<string>('');
  const [userPass, setUsePass] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsePass(e.target.value);
  }

  const handleLoginSubmit = () => {
    if (userName === '' || userPass === '') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }

  /* Time Counter */
  // const [isTime, setIsTime] = useState<number>(0);

  // const handleTimeStartCounter = () => {

  // }

  return (
    <>
    <h2>Name Input Form</h2>
    <NameInput name={name} onChange={handleInputChange} onClick={handleInputClick}/>
    { showName && <p><strong>Hello {showName}</strong></p> }
    <br/>
    <br/>
    <h2>Button Counter</h2>
    <button onClick={hanleCounterClick}>Click me!</button>
    {<p><strong>Clicked {counter}!</strong></p>}
    <br/>
    <br/>
    <h2>Highlight Page</h2>
    <button onClick={handleButtonChange}>Click me!</button>
    <br/>
    <br/>
    <h2>Show/hide Text</h2>
    <button onClick={handleDisplayText}>{ displayText ? 'Hiden' : 'Show' } Text</button>
    { displayText ? <p><strong>This is example text</strong></p> : <p></p> }
    <br/>
    <br/>
    <div style={{ height: '400px', backgroundColor: '#f0f0f0' }} onMouseMove={handleMouseMove}>
      <h2>Mouse Move</h2>
      <p>X: {mouseMove.x}</p>
      <p>Y: {mouseMove.y}</p>
    </div>
    <br/>
    <br/>
    <div style={{ height: '100vh', width: '100vw' }} onResize={handleResize}>
      <h2>Resize Browser</h2>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
    <br/>
    <br/>
    <h2>Login Form</h2>
    <div>
      <label htmlFor="username">User Name:</label>
      <input type="text" defaultValue={userName} onChange={handleUserChange} placeholder="Your Name"></input>
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" defaultValue={userPass} onChange={handlePassChange} placeholder="Password"/>
    </div>
    <button onClick={handleLoginSubmit}>Login</button>
    { isLogin === false && <p><strong>User Name or Password is not empty</strong></p> }
    { isLogin === true && <p><strong>Login successful! Helo {userName}</strong></p> }
    <br/>
    <br/>
    <h2>Time Counter</h2>
    {/* <p>{isTime}</p>
    <button onClick={handleTimeStartCounter}>Start</button>
    <button onClick={handleTimePauseCounter}>Pause</button>
    <button onClick={handleTimeResetCounter}>Reset</button> */}
    </>
  );
}

export default ExamplePage;