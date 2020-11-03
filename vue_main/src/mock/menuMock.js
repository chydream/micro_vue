let menu = {
  admin: [
    {
      id: 1,
      label: '首页',
      href: '/home/index',
      icon: 'fa fa-home',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    }
    // {
    //   id: 1,
    //   label: '应用1',
    //   href: '/app/index',
    //   icon: 'fa fa-home',
    //   permission: ['view', 'add', 'delete', 'edit'],
    //   show: true,
    //   children: []
    // }
  ],
  user: [
    {
      id: 1,
      label: '首页',
      href: '/home/index',
      icon: 'fa fa-home',
      permission: ['view', 'add', 'delete', 'edit'],
      show: true,
      children: []
    }
  ]
}
export default menu
