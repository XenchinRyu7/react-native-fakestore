import {registerUser, loginUser, setAuthToken} from '../utils/api';

const AuthService = {
  register: async userData => {
    return await registerUser(userData);
  },
  login: async (username, password) => {
    const result = await loginUser(username, password);
    if (result && result.token) {
      setAuthToken(result.token);
    }
    return result;
  },
};

export default AuthService;
