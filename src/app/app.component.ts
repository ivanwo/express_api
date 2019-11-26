import { Component } from "@angular/core";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private cartService: CartService) {}
  title = "cart-api-angular";

  cart;
  product = "fruit preserve";
  amount = 1;
  price = 0.5;

  loadCart() {
    console.log("getting cart");
    this.cartService.getCart().subscribe(data => {
      this.cart = data;
      console.log(this.cart);
    });
  }
  add() {
    this.cartService
      .add(this.product, this.price, this.amount)
      .subscribe(data => {
        this.loadCart();
      });
  }
  delete(i: number) {
    this.cartService.delete(i).subscribe(data => {
      this.loadCart();
    });
  }
  ngOnInit() {
    this.loadCart();
  }
}
