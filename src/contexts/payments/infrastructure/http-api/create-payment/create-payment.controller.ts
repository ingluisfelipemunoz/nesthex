import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreatePaymentUseCase } from 'src/contexts/payments/application/create-payment-use-case/create-payment-use-case';
import { CreatePaymentHttpDto } from './create-payment.http-dto';
import { PrimitivePayment } from 'src/contexts/payments/domain/payment';
@Controller('payments')
export class CreatePaymentController {
  constructor(private createPaymentUseCase: CreatePaymentUseCase) {}

  @Post()
  async createPayment(
    @Body(ValidationPipe) createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<{ payment: PrimitivePayment }> {
    return await this.createPaymentUseCase.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    });
  }
}
