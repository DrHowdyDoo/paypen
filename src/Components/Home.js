import './Home.css';
import logo from './Assests/logo.png';
import quote from './Assests/ic_quote.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login';

const Home = () => {

    return (
        <div className="container">

            <div className="h-left">

                <div className="header">
                    <img src={logo} alt="logo" width="32px" height="32px" />
                    <h3>PayPen</h3>
                </div>

                <div className="left-block">
                    <h1 className="welcome-msg">Welcome to <span className='p'>Pay</span>Pen</h1>
                    <h2 className="sub-msg">Pension Management System</h2>

                    <form action="" className='form'>
                        <TextField fullWidth className='inputRounded' id="username" label="Username" variant="outlined" margin="normal"
                            type="text" />
                        <TextField fullWidth className='inputRounded' id="password" label="Password" variant="outlined" margin="normal"
                            type="password"
                        />
                        <Button className="btn-login" size="large" variant="contained" style={{ borderRadius: 50, marginTop: 24, backgroundColor: "#1f28eb" }}>Login</Button>
                    </form>

                </div>

            </div>

            <div className="h-right">
                <div className="bg-cover"></div>
                <div className="title-wrapper">
                    <img src={quote} alt="quote_icon" />
                    <div className="l-top"></div>
                    <h1 className="title">
                        Do <span className="sub-quote">something,</span> <br />
                        that <span className="sub-quote">your future</span> <br />
                        self will <span className="sub-quote">thank</span> <br />
                        you <span className="sub-quote">for.</span>
                    </h1>
                </div>
                <div className="l-bottom"></div>
            </div>

        </div>
    );

}

export default Home;