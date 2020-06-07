import { BrowserWindow } from 'electron';

export function getBrowserWindow(): BrowserWindow {
  return new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
  });
}
