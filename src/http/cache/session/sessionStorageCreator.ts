import {SessionStorage} from "../data-storage.type";
import {subjectStorageService} from "./subjectStorageService";


export function createSessionStorage(): SessionStorage {
  return subjectStorageService;
}

export const sessionStorageService = createSessionStorage();

