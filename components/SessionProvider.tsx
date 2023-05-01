'use client'
// ANYTHING THAT REQUIRES LOCAL STATE NEEDS TO BE A CLIENT OBJECT, SO WE WILL SAY THE SESSION PROVIDER IS A CLIENT SIDE COMPONENT

import { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'

// Create type definitions:
type Props = {
  children: React.ReactNode;
  session: Session | null;
}

// SO WE ARE BASICALLY WRAPPING THE NEXT-AUTH SESSION PROVIDER WITH OUR OWN SESSION PROVIDER, POWERING THEM UP WITH THE EXTRA FUNCTIONALITY WE NEED
export function SessionProvider({ children, session}: Props) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}