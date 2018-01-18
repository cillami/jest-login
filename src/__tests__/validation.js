import { validateEmail, validatePassword, validateLogin } from '../utils/validation';

it('passes on valid email', () => {
    const inputEmail = "cilla@cilla.se";
    const testEmail = validateEmail(inputEmail);
    expect(testEmail).toBeTruthy();
});

it('fails on invalid email', () => {
    const inputEmail = "cilla";
    const testEmail = validateEmail(inputEmail);
    expect(testEmail).toBeFalsy();
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    const inputPassword = "Cillami1";
    const testPassword = validatePassword(inputPassword);
    expect(testPassword).toBeTruthy();
});

it('invalid password: missing digit', () => {
    const inputPassword = "Cillamin";
    const testPassword = validatePassword(inputPassword);
    expect(testPassword).toBeFalsy();
});

it('invalid password: missing 1 uppercase', () => {
    const inputPassword = "cillami1";
    const testPassword = validatePassword(inputPassword);
    expect(testPassword).toBeFalsy();
});

it('invalid email and password',() => {
    const inputEmail = "cilla.se";
    const inputPassword = "cillamiaaaa";
    const testThem = validateLogin(inputEmail, inputPassword);
    expect(testThem).toBeFalsy();
});

it('valid email and password',() => {
    const inputEmail = "cilla@cilla.se";
    const inputPassword = "Cillami1";
    const testThem = validateLogin(inputEmail, inputPassword);
    expect(testThem).toBeTruthy();
});

