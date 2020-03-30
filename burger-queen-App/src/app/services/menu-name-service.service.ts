import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuNameService {
  constructor() { }
  private menuNameSource = new BehaviorSubject('breakfast');
  currentString = this.menuNameSource.asObservable();
  // return array of object with customer order
  private arrOrder = new BehaviorSubject([]);
  currentProduct = this.arrOrder.asObservable();

  private arrOrdertoReduceProduct = new BehaviorSubject([]);
  currentProductsToreduceFrom = this.arrOrder.asObservable();

  changeString(value: string) {
    this.menuNameSource.next(value);
  }
  todayDate() {
    const ndate = new Date();
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
  }
