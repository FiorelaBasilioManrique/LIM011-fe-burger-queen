import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // private itemCollection: AngularFirestoreCollection
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getDataByCategory(menuName: string) {
    return this.firestore.collection(menuName).valueChanges();
  }
  // Method that goes to menu list component in case it´s needed
  // getDownloadUrl(path) {
  //   return this.storage.ref(path).getDownloadURL();
  // }
}
