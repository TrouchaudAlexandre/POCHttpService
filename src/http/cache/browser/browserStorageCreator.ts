import {BrowserStorage} from "../data-storage.type";
import {localStorageService} from "./localStorageService";

export function createBrowserStorage(): BrowserStorage {
  return localStorageService;
}

export const browserStorageService = createBrowserStorage();
