import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderService } from '../order.service';
import { Order } from 'src/app/shared/interfaces/order';
import { PaymentService } from 'src/app/payment/payment.service';
import { ObjectHelper } from 'src/app/shared/object-helpers';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  addValueForm: FormGroup = new FormGroup({});

  constructor(private orderService: OrderService, private paymentService: PaymentService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValueForm = this.formBuilder.group({
      number: [''],
      description: ['']
    });
  }

  add(): void {
    const number = this.addValueForm.get('number').value;
    const description = this.addValueForm.get('description').value;

    const newOrder: Order = {
      number: number,
      description: description,
      status: status,
      id: ''
    };

    this.orderService.addOrder(newOrder)
      .subscribe(
        data => {
          if (data.data.data.status === 'declined') {
            data.data.data.status = 'canceled';
            this.orderService.updateOrder(data.data.data).subscribe(result => {
              this.router.navigate(['/orders']);
            });
          }
          this.router.navigate(['/orders']);
        }
      );
  }
}



