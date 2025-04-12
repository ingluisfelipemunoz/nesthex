import { Injectable as NestJsInjectable } from '@nestjs/common';
/**
 * Used for loose copling purpose. with this abstraction we avoid to depend directly on nestjs framework
 * if we want we can change the instantiation if we are using any other framework ;)
 * @returns current framework injectable function
 */
export function Injectable() {
  return NestJsInjectable();
}
