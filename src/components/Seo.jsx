const SITE_URL = 'https://youngspiritkennel.com';
const SITE_NAME = 'Young Spirit Kennel';

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph: controls how links look when shared on Facebook/texts */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </>
  );
}