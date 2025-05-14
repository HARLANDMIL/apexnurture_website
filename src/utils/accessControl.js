export const enforceAccessControl = () => {
  const allowedReferrers = [
    'https://www.apexnurture.com',
    'https://www.apexnurture.com/lead-to-client',
    'https://www.apexnurture.com/recruitment-automation',
    'https://www.apexnurture.com/business-ops'
  ];

  if (!allowedReferrers.some(referrer => document.referrer.includes(referrer))) {
    window.location.href = 'https://www.apexnurture.com';
  }
};
