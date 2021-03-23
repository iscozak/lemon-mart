import { environment } from 'src/environments/environment'

import { AuthMode } from './auth.enum'
import { InMemoryAuthService } from './auth.inmemory.service'
import { AuthService } from './auth.service'

export function authFactory(): AuthService {
  switch (environment.authMode) {
    case AuthMode.InMemory:
      return new InMemoryAuthService()
    case AuthMode.CustomService:
      throw new Error('Not yet implemented')
  }
}
