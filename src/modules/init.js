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
    <footer>
      <div>
        <div>Willis Ave | The Bronx, NY | 10454</div>  
        <div>Monday–Sunday | 9am–1am</div>
        <div>(777) 777-7777</div>
      </div>
      <div>©Foody</div>
    </footer>
    `
  );
}

export { appendInitialDOMElements };
