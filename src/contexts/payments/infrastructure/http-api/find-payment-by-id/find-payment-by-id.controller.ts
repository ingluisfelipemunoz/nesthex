import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { FindPaymentByIdUseCase } from '../../../application/find-payment-by-id-use-case/find-payment-by-id.use-case';
import { FindPaymentByIdHttpDto } from './find-payment-by-id.http-dto';
import { PrimitivePayment } from 'src/contexts/payments/domain/payment';
import { PaymentNotFoundException } from 'src/contexts/payments/domain/payment-not-found.exception';

@Controller('payments')
export class FindPaymentByIdController {
  constructor(
    private readonly findPaymentByIdUseCase: FindPaymentByIdUseCase,
  ) {}

  @Get(':id')
  async findPaymentById(
    @Param() params: FindPaymentByIdHttpDto,
  ): Promise<{ payment: PrimitivePayment }> {
    try {
      return await this.findPaymentByIdUseCase.execute(params);
    } catch (error) {
      if (error instanceof PaymentNotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
