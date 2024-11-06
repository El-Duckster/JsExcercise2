// components/Nav/Nav.js

export default class Nav {
    constructor(menuItems) {
      this.menuItems = menuItems;
      this.hamburger = document.querySelector('.nav__hamburger');
      this.menu = document.querySelector('.nav__menu');
      this.backgroundOverlay = document.querySelector('.nav__background');
  
      this.initializeMenu();
      this.addEventListeners();
    }
  
    // Initialize menu items and close button
    initializeMenu() {
      this.renderMenuItems();
      this.closeBtn = this.createCloseButton();
    }
  
    // Render menu items dynamically
    renderMenuItems() {
      this.menuItems.forEach(item => {
        const menuList = this.createMenuItem(item);
        this.menu.appendChild(menuList);
      });
    }
  
    // Create individual menu item
    createMenuItem(item) {
      const menuList = document.createElement('li');
      menuList.classList.add('nav__menuItem');
  
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.name;
      link.classList.add('nav__menuLink');
  
      menuList.appendChild(link);
      return menuList;
    }
  
    // Create a close button for the menu
    createCloseButton() {
      const closeBtn = document.createElement('button');
      closeBtn.classList.add('nav__menu__closeBtn');
  
      ['closeSpan1', 'closeSpan2'].forEach(spanClass => {
        const span = document.createElement('span');
        span.classList.add(spanClass);
        closeBtn.appendChild(span);
      });
  
      this.menu.appendChild(closeBtn);
      closeBtn.addEventListener('click', () => this.closeMenu());
      return closeBtn;
    }
  
    // Toggle menu visibility
    toggleMenu() {
      this.menu.classList.toggle('nav__menu--active');
      this.backgroundOverlay.classList.toggle('nav__background--active');
    }
  
    // Close the menu
    closeMenu() {
      this.menu.classList.remove('nav__menu--active');
      this.backgroundOverlay.classList.remove('nav__background--active');
    }
  
    // Set up all event listeners
    addEventListeners() {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
      this.menu.addEventListener('click', e => {
        if (e.target.classList.contains('nav__menuLink')) {
          this.closeMenu();
        }
      });
      window.addEventListener('scroll', () => this.closeMenu());
    }
  }
  