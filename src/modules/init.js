function appendInitialDOMElements() {
  const contentElem = document.querySelector('#content');

  contentElem.insertAdjacentHTML('afterbegin', 
    `
    <nav>
      <button class="home">Home</button>
      <button class="menu">Menu</button>
      <button class="contact">Contact</button>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="bonus" target="_blank">Bonus</a>
    </nav>
    <div class="container"></div>
    `
  );
}

export { appendInitialDOMElements };
