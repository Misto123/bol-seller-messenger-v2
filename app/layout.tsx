import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seller Messenger [DEPRECATED]",
  description: "Bol seller outreach console - This version is deprecated",
  icons: {
    icon: '/favicon.svg',
  },
};

function DeprecationNotice() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#fef3c7',
        border: '2px solid #fbbf24',
        borderRadius: '0.5rem',
        padding: '2rem',
        maxWidth: '42rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#78350f',
          marginBottom: '1rem'
        }}>
          ⚠️ This Version is Deprecated
        </h2>
        
        <p style={{
          color: '#92400e',
          marginBottom: '1rem'
        }}>
          This version of BOL Seller Messenger is no longer maintained and has been replaced.
        </p>
        
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #fcd34d',
          borderRadius: '0.375rem',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#374151',
            marginBottom: '0.75rem',
            fontWeight: 600
          }}>
            Please use the current version:
          </p>
          <a 
            href="https://bol-seller-messenger.vercel.app"
            style={{
              color: '#2563eb',
              fontWeight: 500,
              textDecoration: 'underline'
            }}
          >
            https://bol-seller-messenger.vercel.app
          </a>
        </div>

        <div style={{
          fontSize: '0.875rem',
          color: '#92400e',
          marginBottom: '1rem'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>What's new in v2.8.2:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.75' }}>
            <li>Fixed variable replacement</li>
            <li>Real product titles</li>
            <li>Proxy/IP tracking</li>
            <li>Recurring campaigns</li>
          </ul>
        </div>

        <a
          href="https://bol-seller-messenger.vercel.app"
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            textAlign: 'center',
            fontWeight: 500,
            textDecoration: 'none'
          }}
        >
          Go to Current Version
        </a>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body>
        <DeprecationNotice />
        {children}
      </body>
    </html>
  );
}
