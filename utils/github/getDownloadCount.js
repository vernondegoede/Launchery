/**
 * Get the download count for all releases of a specific Github repo
 */

export default async repoName => {
  if (!repoName.includes("/")) {
    throw new Error(
      "Expected a repository name like :owner/:repo. Are you missing the :owner name?",
    );
  }

  const fetchReleases = await fetch(
    `https://api.github.com/repos/${repoName}/releases`,
  );
  const releases = await fetchReleases.json();
  const downloadCount = releases.reduce((total, { assets }) => {
    const totalAssetDownloads = assets.reduce(
      (totalPerRelease, { download_count: downloadCount }) =>
        totalPerRelease + downloadCount,
      0,
    );

    return total + totalAssetDownloads;
  }, 0);

  return downloadCount;
};
