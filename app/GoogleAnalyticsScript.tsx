import Script from 'next/script';

export default function GoogleAnalyticsScript() {
  return (
    <>
      {/* google analytics script */}
      <Script async src='https://www.googletagmanager.com/gtag/js?id=TAG_ID' />
      <Script id='google-analytics-script'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'TAG_ID');`}
      </Script>
    </>
  );
}
