import {validatePassword} from "../validate-password";
import {errorsValidate} from "../constants/errorsValidate";

describe('validatePassword', () => {
  it('should return {success:true, error:null} if password is valid', () => {
    const password = 'MimiPassword123!';
    expect(validatePassword(password)).toEqual({success:true, error:null});
  });
  it('should validate sa password against 8 minimum characters and return error message', () => {
    const password = 'Mi123!';
    const expectedResult = {success:true, error:errorsValidate.length}
    expect(validatePassword(password)).toEqual(expectedResult);
  });
  it('should validate sa password against mixed case', () => {
    const invalidPassword1 = 'mimipassword123!';
    const invalidPassword2 = 'MIMIPASSWORD123!';
    const expectedResult1 = {success:true, error:errorsValidate.case}
    const expectedResult2 = {success:true, error:errorsValidate.case}
    expect(validatePassword(invalidPassword1)).toEqual(expectedResult1);
    expect(validatePassword(invalidPassword2)).toEqual(expectedResult2);
  });
  it('should validate sa password against digits and characters', () => {
    const invalidPassword1 = 'mimiPass@!';
    const invalidPassword2 = '!!#mimiPass@!!';
    const expectedResult = {success:true, error:errorsValidate.number}
    expect(validatePassword(invalidPassword1)).toEqual(expectedResult);
    expect(validatePassword(invalidPassword2)).toEqual(expectedResult);
  });
  it('should validate sa password against special characters', () => {
    const invalidPassword1 = 'mimiPass1233';
    const invalidPassword2 = 'mimiPass2345';
    const expectedResult = {success:true, error:errorsValidate.special}
    expect(validatePassword(invalidPassword1)).toEqual(expectedResult);
    expect(validatePassword(invalidPassword2)).toEqual(expectedResult);
  });
  it.todo('should validate sa password against dummy password');
})
