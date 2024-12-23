import { useState } from "react";

function UseState() {
    // Input name
    const [name, setName] = useState(``);
    const [displayName, setDisplayName] = useState(``);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleClickButton = () => {
        setDisplayName(name);
    };

    // Button click counter
    const [count, setCount] = useState(0);

    const handleCountClick = () => {
        setCount(count + 1);
    };

    // Change random background color
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const changeBackgroundColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        setBackgroundColor(color);
        document.body.style.backgroundColor = color;
    };

    // Show Hide text
    const [showText, setShowText] = useState(false);

    const handleShowText = () => {
        setShowText(!showText);
    };

    let text = `Sample`;

    // Display position mouse
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Display Size Window Web
    const [windowSize, setWindowSize] = useState({ 
        width: window.innerWidth,
        height: window.innerHeight
    });

    window.onresize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    };

    // Login Form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
  
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'password') {
        setLoginError(false);
        alert('Login successful!');
      } else {
        setLoginError(true);
      }
    };

    // Timer
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            
            const id = window.setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const stopTimer = () => {
        if (isRunning && intervalId !== null) {
            setIsRunning(false);
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetTimer = () => {
        setSeconds(0);

        if (isRunning && intervalId !== null) {
            clearInterval(intervalId);
            setIsRunning(false);
            setIntervalId(null);
        }
    };

    return (
        <div onMouseMove={handleMouseMove}>
            <div>
                <h2>Enter Your Name</h2>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter Your Name"/>
                <button onClick={handleClickButton}>Submit</button>
                {displayName && <p>Your name is: {displayName}</p>}
            </div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={handleCountClick}>Increase counter</button>
            </div>
            <div>
                <h2>Background Color (Hex Color): {backgroundColor}</h2>
                <button onClick={changeBackgroundColor}>Change</button>
            </div>
            <div>
                <h2>Show/Hide Text</h2>
                <button onClick={handleShowText}>
                    {showText ? "Hide" : "Show"} Details
                </button>
                    {showText && <p>{text}</p>}
            </div>
            <div>
                <h2>Mouse Position: ({mousePosition.x}, {mousePosition.y})</h2>
            </div>
            <div>
                <h2>Window Size</h2>
                <p>Width: {windowSize.width}px</p>
                <p>Height: {windowSize.height}px</p>
            </div>
            <div>
                <h2>Login Form</h2>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button onClick={handleLogin}>Login</button>
                {loginError && (<p>Invalid username or password. Please try again.</p>)}
            </div>
            <div>
                <h2>Timer</h2>
                <h3>{seconds} seconds</h3>
                <div>
                    <button onClick={startTimer}>Bắt đầu </button>
                    <button onClick={stopTimer}>Dừng</button>
                    <button onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default UseState;