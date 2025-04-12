import { Payment, PrimitivePayment } from '../../domain/payment';
import { PaymentRepository } from '../../domain/payment.repository';
import { CreatePaymentDto } from './create-payment.dto';

export class CreatePaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: CreatePaymentDto): Promise<{ payment: PrimitivePayment }> {
    const payment = Payment.create(dto);
    await this.paymentRepository.create(payment);
    return {
      payment: payment.toValue(),
    };
  }
}
