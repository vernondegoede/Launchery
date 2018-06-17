/**
 * Get the download count for all releases of a specific NPM package
 */

export default async packageName => {
  const fetchDownloads = await fetch(
    `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
  );
  const { downloads: downloadCount } = await fetchDownloads.json();

  return downloadCount;
};
