import { GoogleLogin } from '@react-oauth/google';

function GoogleSignIn() {
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
      if (response.ok) {
        console.log('Login success:', data);
        // Store the JWT token in local storage
        localStorage.setItem('token', data.token);
      } else {
        console.error('Login failed:', data.error);
      }
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