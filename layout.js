import "./globals.css";

export const metadata = {
  title: "Mon Discord Clone",
  description: "Créé avec Vercel et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
