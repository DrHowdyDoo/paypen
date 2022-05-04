import './Login.css';
import logo from './Assests/logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="container">

            <div className="h-left">

                <div className="header">
                    <img src={logo} alt="logo" width="32px" height="32px" />
                    <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                        <h3>PayPen</h3>
                    </Link>
                </div>

                <div className="left-block">
                    <h1 className="title">Login</h1>

                    <form action="" className='form'>
                        <TextField fullWidth className='inputRounded' id="username" label="Username" variant="outlined" margin="normal"
                            type="text" />
                        <TextField fullWidth className='inputRounded' id="password" label="Password" variant="outlined" margin="normal"
                            type="password"
                        />
                        <div className="form-control">
                            <FormControlLabel control={<Checkbox defaultChecked style={{ color: "#1f28eb" }} />} label={<span style={{ fontWeight: "600", fontSize: "14px" }}>Remember me</span>} />
                            <span>
                                <Button variant="text" style={{ textTransform: 'none', fontWeight: "600", color: "#1f28eb", borderRadius: 50 }}>Forgot Password?</Button>
                            </span>
                        </div>

                        <Button className="btn-login" size="large" variant="contained" style={{ borderRadius: 50, marginTop: 24, backgroundColor: "#1f28eb", textTransform: 'none', fontWeight: "600" }}>Login</Button>

                    </form>

                    <div className="form-footer">
                        <span style={{ fontWeight: "500", fontSize: "14px" }}>Don't have an account?</span>
                        <Button onClick={() => { navigate("/register") }} variant="text" style={{ textTransform: 'none', fontWeight: "600", color: "#1f28eb", borderRadius: 50 }}>Create an Account</Button>
                    </div>

                </div>

            </div>

            <Quote />

        </div>
    );

}

export default Login;