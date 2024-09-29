import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function GoogleSignIn() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;

    try {
      const response = await fetch('http://localhost:8080/api/users/google-signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idToken })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData.error);
        return;
      }

      const data = await response.json();
      console.log('Login success:', data);
      alert('Login success!');
      // Store the JWT token in local storage
      localStorage.setItem('token', data.token);
      // Redirect to login success page
      navigate('/loginsuccess');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login failure:', error);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
}

export default GoogleSignIn;