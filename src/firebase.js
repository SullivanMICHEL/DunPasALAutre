import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnzi4kCMp-PaU57v-cSfqr-uKWU_LkCx0",
  authDomain: "dun-pas-a-lautre-tracker.firebaseapp.com",
  databaseURL: "https://dun-pas-a-lautre-tracker-default-rtdb.firebaseio.com/",
  projectId: "dun-pas-a-lautre-tracker",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);