# Vercel-Specific Configuration

This document covers Vercel-specific features and configuration for your portfolio.

## Environment Variables

Your portfolio uses environment variables for sensitive configuration.

### Setting Environment Variables in Vercel

1. Go to your project on [vercel.com](https://vercel.com)
2. Click "Settings"
3. Navigate to "Environment Variables"
4. Add the following variable:

| Name | Value | Description |
|------|-------|-------------|
| `CONTACT_EMAIL` | `meetnarola9@gmail.com` | Email address for contact form submissions |

5. Click "Save"
6. Redeploy your application to apply changes

### Using Environment Variables Locally

Create a `.env.local` file in your project root:

```bash
CONTACT_EMAIL=meetnarola9@gmail.com
```

**Note**: `.env.local` is gitignored and won't be committed to your repository.

## Serverless Contact Form (Optional)

You can create a Vercel Edge Function to handle contact form submissions server-side.

### Step 1: Create API Route

Create `api/contact.ts` in your project root:

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Here you can integrate with email service like:
    // - SendGrid
    // - Resend
    // - Postmark
    // - Mailgun
    
    // For now, log to console (in production, send email)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example: Send to your email (you'd use an email service)
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: 'noreply@yourdomain.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return res.status(200).json({ 
      success: true,
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message' 
    });
  }
}
```

### Step 2: Update Contact Form Component

Update `src/components/ContactForm.tsx` to use the API endpoint:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Step 3: Integrate Email Service

Choose an email service provider:

#### Option A: Resend (Recommended)

```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Portfolio <onboarding@resend.dev>',
  to: process.env.CONTACT_EMAIL!,
  subject: `Portfolio Contact: ${subject}`,
  html: emailTemplate,
});
```

#### Option B: SendGrid

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: process.env.CONTACT_EMAIL!,
  from: 'your-verified-sender@yourdomain.com',
  subject: `Portfolio Contact: ${subject}`,
  html: emailTemplate,
});
```

## Vercel Analytics

Enable Vercel Analytics to track page views and performance.

### Enable in Dashboard

1. Go to your project on Vercel
2. Click "Analytics" tab
3. Enable "Web Analytics"

### Add Analytics to Code (Optional)

```bash
npm install @vercel/analytics
```

Update `src/App.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  // ... existing code

  return (
    <>
      {/* ... existing JSX */}
      <Analytics />
    </>
  );
};
```

## Vercel Speed Insights

Track Core Web Vitals and performance metrics.

```bash
npm install @vercel/speed-insights
```

Update `src/App.tsx`:

```typescript
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  return (
    <>
      {/* ... existing JSX */}
      <SpeedInsights />
    </>
  );
};
```

## Build Configuration

The `vercel.json` file is already configured with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Custom Build Settings (if needed)

In Vercel dashboard:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x (or latest LTS)

## Custom Headers (Optional)

Add security headers in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Contact Form Not Working

1. Verify environment variables are set
2. Check Vercel function logs
3. Test API endpoint directly: `/api/contact`
4. Verify CORS settings if needed

### Build Failures

1. Check Node.js version (18.x recommended)
2. Clear Vercel cache and redeploy
3. Verify all dependencies in `package.json`
4. Check build logs for specific errors

### Environment Variables Not Loading

1. Ensure variables are saved in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names match code exactly
4. Verify no typos in variable names

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions)
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

For issues specific to Vercel deployment, contact [Vercel Support](https://vercel.com/support).
