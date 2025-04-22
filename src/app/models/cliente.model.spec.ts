import { Cliente } from './cliente.model';

describe('Cliente', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Cliente()).toBeTruthy();
  });
});
