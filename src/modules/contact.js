function insertContactContent() {
  const containerElem = document.querySelector('.container');

  containerElem.outerHTML = `
    <div class="container contact-content">
      <header class="bg-image">
        <h1>Contact us</h1>
      </header>
      <section>
        <div>
          <h2>Contact info</h2>
          <div>
            <h3>Location</h3>
            <div>
              <div>Willis Ave,</div>  
              <div>The Bronx, NY</div>
              <div>10454</div>
            </div>
          </div>
          <div>
            <h3>Hours</h3>
            <div>
              <div>Monday–Sunday</div>
              <div>9am–1am</div>
            </div>
          </div>
          <div>
            <h3>Phone</h3>
            <div>(777) 777-7777</div>
          </div>
        </div>
        <div class="map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.311802433691!2d-73.92154608688232!3d40.811099082681366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5c37a97c9ed%3A0x840534fd6aa4971!2sWillis%20Ave%2C%20The%20Bronx%2C%20NY%2010454%2C%20USA!5e0!3m2!1sen!2sua!4v1664474491463!5m2!1sen!2sua" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  `;
}

export { insertContactContent };
