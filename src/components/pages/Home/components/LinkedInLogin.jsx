import { useLinkedIn } from 'react-linkedin-login-oauth2';
const LinkedInLogin = () => {
  // const [code, setCode] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const { linkedInLogin } = useLinkedIn({
    // redirectUri: 'http://localhost:3000/linkedin',
    redirectUri: 'https://ideax.in',

    clientId: '86exe2qff6nxy9',
    scope: 'r_liteprofile',
    onSuccess: (code) => {
      // setCode(code);
      // setErrorMessage('');
      // setIsLoading(false);
      console.log('Authorization Code:', code);
    },
    onError: (error) => {
      // setCode('');
      // setErrorMessage(error.errorMessage || 'LinkedIn login failed');
      // setIsLoading(false);
      console.error('LinkedIn Login Error:', error);
    },
  });
  const handleLogin = () => {
    // setIsLoading(true);
    linkedInLogin();
  };
  return (
    <div className="cursor-pointer" onClick={handleLogin}>
      <img
        className="cursor-pointer"
        src="/linkedin.png"
        alt="Sign in with LinkedIn"
        style={{ maxWidth: '180px', cursor: 'pointer', position: 'unset', marginTop: '15px' }}
      />
      {/* {isLoading && <div>Logging in...</div>}
      {code && <div>Authorization Code: {code}</div>}
      {errorMessage && <div>Error: {errorMessage}</div>} */}
    </div>
  );
};
export default LinkedInLogin;
// AQWAg3LVrcuHodhYKVeyuQRd5rOzKMyhjji05StWmiq9vF6EIB5ea31-mR-oZH1uN9AeaqZuzHFLIHmcA9Opt6re9KIskWNT__olbQfv18IqLdyk_qXIhyODcI1DqVleoqZEAeMAZfN_4WoseXDCTyJpu-Q2VsFcGuMLTZHgGA9Pkp4zPv5LFF-n5biqj8fII8sv6xzw4fdSMU-k-puKlSOTaHplmzrMYioRCZEPGmAChROIjyVJT_j03EXmuSYVK10t6EayWwGdzYhxXKL0zAtBRXiwHGeCIwQc4nCOEZiftpr8z3h9Bzi19pdNsX32l3KUZePEvldS7iKhVgLls0b-UNig8A
// AQWSprcPgvLgXKiTEB_ylrdNJXkAxravEueoPmgvZejU7So1WavtuBNHzdZYdJQAyMGKl6hCbLS1VixVezpNjUYV2PldLgJd-_qA1nN2eJsQQb0DQ0jlO0-bujbpM8gG_X76VQdcCFWXHmithNSHmYG6NZ2T4VOw6lOhMB9RepTlIkB2HXkANC9E7UFylzWgOhNh28fuKgusnEX_iInI4_79jcz7GvGnYhMawv-QjJxmdu8cVJxi3mDHb3Se-bBhWtN-tMrtfFbGcgzy10ryIRQ117qJXP2_3DhfEQc08DpFfLG_eVGMsz04Ib6LddJrt17RluGqNqJNEN9TdAwKvjazTtYJhg