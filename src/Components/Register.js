import Quote from './Quote';
import logo from './Assests/logo.png';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';


const Register = () => {
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
                    <h1 className="title">Register</h1>

                    <form action="" className='form'>
                        <TextField fullWidth className='inputRounded' id="username" label="Username" variant="outlined" margin="normal"
                            type="text" />
                        <TextField fullWidth className='inputRounded' id="password" label="Password" variant="outlined" margin="normal"
                            type="password"
                        />

                        <Button className="btn-register" size="large" variant="contained" style={{ borderRadius: 50, marginTop: 24, backgroundColor: "#1f28eb", textTransform: 'none', fontWeight: "600", marginBottom: "36px" }}>Register</Button>

                    </form>

                </div>

            </div>

            <Quote />

        </div>

    );
}

export default Register;