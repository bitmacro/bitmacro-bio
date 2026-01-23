import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { GA_MEASUREMENT_ID, CLARITY_PROJECT_ID } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://bio.bitmacro.io'),
  title: 'BitMacro | Bitcoin. Lightning. Business.',
  description: 'Ecossistema completo para investidores e builders no universo Bitcoin. Apps, educação, infraestrutura e consultoria.',
  keywords: ['Bitcoin', 'Lightning Network', 'Nostr', 'SaaS', 'Infraestrutura', 'Portugal'],
  authors: [{ name: 'Thiago Carvalho - BitMacro' }],
  icons: {
    icon: '/bitmacro.png',
    apple: '/bitmacro.png',
  },
  openGraph: {
    title: 'BitMacro | Bitcoin. Lightning. Business.',
    description: 'Ecossistema completo para investidores e builders no universo Bitcoin.',
    url: 'https://bio.bitmacro.io',
    siteName: 'BitMacro',
    images: [{ url: '/bitmacro.png', width: 512, height: 512 }],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitMacro | Bitcoin. Lightning. Business.',
    description: 'Ecossistema completo para investidores e builders no universo Bitcoin.',
    images: ['/bitmacro.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
