import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuNameService {
  constructor() { }
  private menuNameSource = new BehaviorSubject('breakfast');
  private arrOrder = new BehaviorSubject([]);
  currentString = this.menuNameSource.asObservable();
  currentProduct = this.arrOrder.asObservable();

  changeString(value: string) {
    this.menuNameSource.next(value);
  }
  todayDate() {
    const ndate = new Date();
    // const d = ndate.getDate() + ndate.getHours() + ndate.getMonth();
    // return d;
    return ndate;
  }
  changeProduct(obj: { product: string; price: number; image: string; quantity: number; subtotal: number; }) {
    let newArrOrder: any;
    const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
    if (findProduct === undefined) {
    newArrOrder = this.arrOrder.value.concat(obj);
    } else {
      newArrOrder = this.arrOrder.value.map((element) => {
        let newObj: {};
        if (element.product === obj.product) {
          newObj = {product: element.product, price: element.price, subtotal: element.price *
          (element.quantity + 1), quantity: element.quantity + 1};
          return newObj;
        } else {
          return element;
        }
      });
    }
    this.arrOrder.next(newArrOrder);

  }

  reduceProductOrder( obj: { product: string; price: number; quantity: number; subtotal: number; } ) {
    let newArrOrder = [];
    const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
    if (findProduct === undefined) {
    newArrOrder = this.arrOrder.value;
    } else {
      this.arrOrder.value.forEach((element) => {
        let newObj: {};
        if (element.product === obj.product) {
          if (element.quantity > 1) {
            newObj = {product: element.product, price: element.price,
                     subtotal: element.price * (element.quantity - 1), quantity: element.quantity - 1};
            newArrOrder.push(newObj);
          }
        } else {
          newArrOrder.push(element);
        }
      });
    }
    console.log(newArrOrder);
    this.arrOrder.next(newArrOrder);
  }
  deleteProductOrder(obj: { product: string; price: number; quantity: number; }) {
    let newArrOrder = [];
    const findProduct = this.arrOrder.value.filter(element => element.product !== obj.product);
    this.arrOrder.next(newArrOrder = findProduct);
    }
  resetOrder() {
    const obj = [];
    this.arrOrder.next(obj);
    }
  }

