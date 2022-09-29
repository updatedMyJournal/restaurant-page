function insertHomeContent() {
  const containerElem = document.querySelector('.container');

  containerElem.outerHTML = `
    <div class="container home-content">
      <header class="bg-image">
        <h1>Welcome to Foody restaurant!</h1>
        <h2>Best food ever!</h2>
      </header>
      <main>
        <p>
          Foody specializes in delicious food featuring fresh ingredients 
          and masterful preparation by the Foody culinary team. Whether 
          you’re ordering a multi-course meal or grabbing a drink and pizza 
          at the bar, Foody’s lively, casual yet upscale atmosphere makes it 
          perfect for dining with friends, family, clients and business 
          associates.
        </p>
        <p>
          See the menu <a href="">here</a>.
        </p>
      </main>
    </div>
  `;
};

export { insertHomeContent };
