/** The only user agent that Gmail is not blocking from webview */
export function getUseragent(): string {
  if (process.platform === 'darwin') {
    return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 Edge/80.0.361.62';
  }
  if (process.platform === 'linux') {
    return 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1';
  }
  if (process.platform === 'win32') {
    return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36';
  }
  return 'Electron';
}
