import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div>
        <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
            <h1>Login</h1>
        </div>
            <div  style={{
                marginTop: "5%",
                width: "50%", 
                marginLeft: "25%"
                }}>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder='Enter your email'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    placeholder='Enter your password'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
    </div>
  )
}

export default Login

