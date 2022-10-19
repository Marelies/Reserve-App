import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthProvider';
import axios from '../../lib/hooks/axios';
const LOGIN_URL = '/auth';
export const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef(); // The frist what user writes
    const errRef = useRef(); 

    const [user,setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=>{
      setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({ user,pwd}), {

          headers: {'Content-Type': 'application/json' }, 
          withCredentials:true
        } );  //  The JSON.stringify() method converts a JavaScript value to a JSON string,
          // const accessToken= response?.data?.accessToken;  For Token if there will be any  
        setAuth(user, pwd)
        setUser('');
        setPwd('');
        setSuccess(true);

      }catch(err) {
          if(!err?.response){
            setErrMsg('No server response');
          } else if(err.response?.status === 400){
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401){
            setErrMsg('Unauthorized');
          } else {
            setErrMsg(' Login failed');
          }
            errRef.current.focus();
      }
      console.log(user, pwd);
     
      
    }
    return(
          
      <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br/>
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>


      ): (
        <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
     

        <form onSubmit={handleSubmit}>
       <div className="Auth-form-container">
 
        <div className="Auth-form-content">
          <h1 className="Auth-form-title2">Reserve My Office</h1>
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/><p>Remember me?</p>
            <label class="form-check-label" for="inlineCheckbox1"></label>
                </div>
        </div>
              
            
    
    </div>
      </form>
      </section>
      )}
      </>
    )
}


export default Login;