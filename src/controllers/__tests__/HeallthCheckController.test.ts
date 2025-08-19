import { HealthCheckController } from '../HealthCheckController';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(() => {
    controller = new HealthCheckController();
  });

  describe('getMessage', () => {
    it('should return default greeting when no name provided', async () => {
      const result = await controller.getMessage();
      
      expect(result).toEqual({
        message: 'Hello, world!'
      });
    });

    it('should return personalized greeting when name provided', async () => {
      const result = await controller.getMessage('John');
      
      expect(result).toEqual({
        message: 'Hello, John!'
      });
    });

    it('should handle empty string name', async () => {
      const result = await controller.getMessage('');
      
      expect(result).toEqual({
        message: 'Hello, world!'
      });
    });
  });
});