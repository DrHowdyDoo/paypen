import './Home.css';
import logo from './Assests/logo.png';
import quote from './Assests/ic_quote.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';


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
                        <div className="form-control">
                            <FormControlLabel control={<Checkbox defaultChecked style={{ color: "#1f28eb" }} />} label={<span style={{ fontWeight: "600", fontSize: "15px" , marginRight: "62px"}}>Remember me</span>} />
                            <span>
                                <Button variant="text" style={{ textTransform: 'none', fontWeight: "600", color: "#1f28eb", borderRadius: 50 }}>Forgot Password?</Button>
                            </span>
                        </div>

                        <Button className="btn-login" size="large" variant="contained" style={{ borderRadius: 50, marginTop: 24, backgroundColor: "#1f28eb", textTransform: 'none', fontWeight: "600" }}>Login</Button>

                        <div className="form-footer">
                            <span style={{fontWeight : "500", fontSize: "14px"}}>Don't have an account?</span>
                            <Button variant="text" style={{textTransform : 'none', fontWeight : "600", color: "#1f28eb", borderRadius: 50}}>Create an Account</Button>
                        </div>
                    </form>

                </div>

            </div>

            <div className="h-right">
                <div className="bg-cover"></div>
                <div className="title-wrapper">
                    <img src={quote} alt="quote_icon" />
                    <div className="l-top"></div>
                    <h1 className="quote">
                        Don't let <span className="sub-quote">retirement</span> <br />
                        put <span className="sub-quote">an end</span> <br />
                        to <span className="sub-quote">your</span> <br />
                        <span className="sub-quote">finances.</span>
                    </h1>
                </div>
                <div className="l-bottom"></div>
            </div>

        </div>
    );

}

export default Home;