import { describe, it, expect } from 'vitest';

import { createAxios } from '../src/axiosInstance';

describe('createAxios', () => {
  it('should throw an error if baseURL is not provided', () => {
    expect(() => createAxios('')).toThrow('baseURL is required');
  });

  it('should create an axios instance with the provided baseURL', () => {
    const baseURL = 'https://api.example.com';
    const instance = createAxios(baseURL);

    expect(instance.defaults.baseURL).toBe(baseURL);

    expect(typeof instance.get).toBe('function');
    expect(typeof instance.post).toBe('function');
    expect(typeof instance.put).toBe('function');
    expect(typeof instance.delete).toBe('function');
  });
});
