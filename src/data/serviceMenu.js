
export const permissions = [
  'CIRRENT_ADMIN',
  'CIRRENT_ADMIN_PHANTOM',
  'NETWORK_OPERATOR',
  'USER_ADMIN',
  'USER_OPERATION',
  'USER_LIMITED',
  'USER_ADMIN_OPERATION',
  'USER',
  'USER_CLOUD_ID',
];

export default {
  homeRoute: '/example',
  moduleTitle: 'Example Service',
  items: [
    {
      link: '/example/home',
      permit: permissions,
      title: 'Home',
      items: [
        {
          link: '/example/dashboard',
          permit: permissions,
          title: 'Dashboard',
        }
      ],
    },
    {
      link: '/example/page-1',
      permit: permissions,
      title: 'Page 1',
    }
  ]
}