
export default function NoNavbarLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <title>Login</title>
        </head>
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  