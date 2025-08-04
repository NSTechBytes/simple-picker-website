import { useState, useEffect } from 'react';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  assets: GitHubAsset[];
}

interface UseLatestReleaseReturn {
  release: GitHubRelease | null;
  downloadUrl: string | null;
  version: string | null;
  loading: boolean;
  error: string | null;
}

export const useLatestRelease = (): UseLatestReleaseReturn => {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/NSTechBytes/simple-picker/releases/latest');
        
        if (!response.ok) {
          throw new Error('Failed to fetch latest release');
        }
        
        const data: GitHubRelease = await response.json();
        setRelease(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  const downloadUrl = release?.assets.find(asset => 
    asset.name.toLowerCase().includes('.exe')
  )?.browser_download_url || null;

  const version = release?.tag_name || null;

  return {
    release,
    downloadUrl,
    version,
    loading,
    error
  };
};