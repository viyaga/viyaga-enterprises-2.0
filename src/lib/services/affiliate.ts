export function getLocalStorageReferralCode(): string | undefined {
  try {
    const stored = localStorage.getItem('affiliate_info');
    if (!stored) return undefined;

    const affiliateInfo = JSON.parse(stored) as {
      referalCode: string;
      setAt: string;
      expiresAt: string;
    };

    // Check if expired
    if (new Date(affiliateInfo.expiresAt).getTime() < Date.now()) {
      localStorage.removeItem('affiliate_info');
      return undefined;
    }

    return affiliateInfo.referalCode;
  } catch {
    return undefined;
  }
}
