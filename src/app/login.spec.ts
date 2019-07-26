import { Login } from './login';

describe('Login', () => {// describe is used to write test suite
  it('should create an instance', () => { // it is used to write a particular test case
    // () ->lambda expression
    expect(new Login()).toBeTruthy(); 
  });

  it('should create object with user defined values', () => {
    let login : Login = new Login({'userName':'kaushal','password':'havefun'});
    expect(login.userName).toEqual('kaushal');
    expect(login.password).toEqual('havefun');
  });
});
