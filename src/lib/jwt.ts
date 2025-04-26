import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number; 
  iat?: number; 
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (!decoded.exp) return true;
    const currentTime = Math.floor(Date.now() / 1000); 
    return decoded.exp < currentTime;
  } catch (error) {
    return true; 
  }
};
