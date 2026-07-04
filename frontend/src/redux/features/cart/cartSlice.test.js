import test from 'node:test';
import assert from 'node:assert/strict';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] ?? null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

globalThis.localStorage = new LocalStorageMock();

const { default: cartReducer, addToCart } = await import('./cartSlice.js');

test('increments quantity when the same product is added again', () => {
  const initialState = { cartItems: [] };

  const afterFirstAdd = cartReducer(initialState, addToCart({
    _id: 'book-1',
    title: 'The Hobbit',
    newPrice: 120,
  }));

  const afterSecondAdd = cartReducer(afterFirstAdd, addToCart({
    _id: 'book-1',
    title: 'The Hobbit',
    newPrice: 120,
  }));

  assert.equal(afterSecondAdd.cartItems.length, 1);
  assert.equal(afterSecondAdd.cartItems[0].quantity, 2);
});
