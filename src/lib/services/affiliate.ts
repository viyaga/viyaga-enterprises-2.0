export function getReferralCode(): string | undefined {
  try {
    const stored = localStorage.getItem('affiliateInfo');
    if (!stored) return undefined;

    const affiliateInfo = JSON.parse(stored) as {
      referalCode: string;
      setAt: string;
      expiresAt: string;
    };

    // Check if expired
    if (new Date(affiliateInfo.expiresAt).getTime() < Date.now()) {
      localStorage.removeItem('affiliateInfo');
      return undefined;
    }

    return affiliateInfo.referalCode;
  } catch {
    return undefined;
  }
}
