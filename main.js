import Nav from './components/Nav.js';

const menuItems = [
  { name: 'Play online', href: '#onLine' },
  { name: 'Play on-site', href: '#onSite' },
  { name: 'The story', href: '#story' },
  { name: 'Contact us', href: '#contact' },
];

// Initialize the navigation menu
new Nav(menuItems);