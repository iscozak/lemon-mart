import { Injectable } from '@angular/core'
import { sign } from 'fake-jwt-sign' //For InMemoryAuthService only
import { Observable } from 'rxjs'

import { User } from '../user/user/user'
import { AuthService, IAuthStatus, IServerAuthResponse } from './auth.service'

@Injectable()
export class InMemoryAuthService extends AuthService {
  constructor() {
    super()
    console.warn(
      "You're using the InMemoryAuthService. Do not use this service in production."
    )
  }

  protected authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    throw new Error('Method not implemented.')
  }
  protected transformJwtToken(token: unknown): IAuthStatus {
    throw new Error('Method not implemented.')
  }
  protected getCurrentUser(): Observable<User> {
    throw new Error('Method not implemented.')
  }
}
