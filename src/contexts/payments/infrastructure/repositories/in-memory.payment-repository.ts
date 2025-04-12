import { Payment, PrimitivePayment } from '../../domain/payment';
import { PaymentRepository } from '../../domain/payment.repository';

export class InMemoryPaymentRepository extends PaymentRepository {
  private payments: PrimitivePayment[] = [];
  async create(payment: Payment): Promise<void> {
    this.payments.push(payment.toValue());
    return;
  }
  async getById(id: string): Promise<Payment | null> {
    const payment = this.payments.find((x) => x.id === id);
    return payment ? new Payment(payment) : null;
  }
}
