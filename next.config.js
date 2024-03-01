/** @type {import('next').NextConfig} */
const redirectToHelp = [
  'reporting-manager.html',
  'forms.html',
  'reports.html',
  'vasa.html',
  'leave-management.html',
  'dashboards.html',
  'tasks.html',
  'index.html',
  'preferences.html',
  'orders.html',
  'shifts-rosters.html'
];

const redirectToRoot = [
  'chat',
  'integrates',
  'empdashboard',
  'Steps-1',
  'crm/pricing.html',
  'crm',
  'preferences.html',
];

const nextConfig = {
  swcMinify: true,
  redirects: async () => {
    const redirects = [];

    redirectToHelp.forEach((page) => {
      redirects.push({
        source: `/help/${page}`,
        destination: '/help',
        permanent: true,
      });
    });

    redirectToRoot.forEach((page) => {
      redirects.push({
        source: `/${page}`,
        destination: '/',
        permanent: true,
      });
    });

    redirects.push(
      { source: '/attendance.html', destination: '/attendance', permanent: true },
      { source: '/resources', destination: '/help', permanent: true },
      { source: '/resources/attendencemanagement.pdf', destination: '/attendance', permanent: true },
      { source: '/resources/taskmanagement.pdf', destination: '/taskmanagement', permanent: true },
      { source: '/taskmanagement.pdf', destination: '/taskmanagement', permanent: true },
      { source: '/allfeatures', destination: '/all-feature', permanent: true },
      { source: '/compliance-ratings.html', destination: '/help', permanent: true },
      { source: '/distance-travelled.html', destination: '/help', permanent: true },
      { source: '/privacypolicy', destination: '/privacy-policy', permanent: true },
    );

    return redirects;
  },
};

module.exports = nextConfig;

