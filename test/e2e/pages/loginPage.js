import {
  validateName,
  validatePassword,
  validateEmail
} from '../../../utilitiesFunctions/validators';
import puppeteer from 'puppeteer';
const getEmail = () => {
  return document.getElementById('email-input');
}
const password = () => {
  return document.getElementById('password-input');
}
module.exports = {
  getEmail,
  password
}
