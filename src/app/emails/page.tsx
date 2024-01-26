import React from 'react'
import StripeWelcomeEmail from '../../../react-email-starter/emails/stripe-welcome'
import VercelInviteUserEmail from '../../../react-email-starter/emails/vercel-invite-user'

const page = () => {
  return (
    <div>
        {/* <StripeWelcomeEmail/> */}
        <VercelInviteUserEmail/>
    </div>
  )
}

export default page