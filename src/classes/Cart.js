export class Cart {
  #products
  constructor() {

    this.#products = []
  }
}

export class CartProduct {
  constructor({ id, quantity }
  ) {
    this.id = id
    this.quantity = quantity ?? 1
  }
}