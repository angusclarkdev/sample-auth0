import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

// api/[auth0]/route.js
async function afterCallback(req, session) {
  return {
    ...session,
  };
}

export const GET = handleAuth({
  callback: handleCallback({ afterCallback }),
});
