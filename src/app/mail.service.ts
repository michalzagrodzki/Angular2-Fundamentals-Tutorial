import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: 'Message 1'},
    {id: 1, text: 'Message 2'},
    {id: 2, text: 'Message 3'}
  ]

  constructor() { }

}
