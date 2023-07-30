export default function isAuthenticated() {
  const date = sessionStorage.getItem('expires_at');
  const refreshToken = sessionStorage.getItem('refresh_token');
  if (date && refreshToken) {
    const expiresAt = JSON.parse(date);
    if (!refreshToken || new Date().getTime() > expiresAt) {
      sessionStorage.removeItem('refresh_token');
      sessionStorage.removeItem('expires_at');
      return false;
    }
    return true;
  }
  return false;
}
