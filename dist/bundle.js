(()=>{"use strict";function n(){document.querySelector(".container").outerHTML='\n    <div class="container home-content">\n      <header class="bg-image">\n        <h1>Welcome to Foody restaurant!</h1>\n        <h2>Best food ever!</h2>\n      </header>\n      <main>\n        <p>\n          Foody specializes in delicious food featuring fresh ingredients \n          and masterful preparation by the Foody culinary team. Whether \n          you’re ordering a multi-course meal or grabbing a drink and pizza \n          at the bar, Foody’s lively, casual yet upscale atmosphere makes it \n          perfect for dining with friends, family, clients and business \n          associates.\n        </p>\n        <p>\n          See the menu <a href="" onclick="event.preventDefault();document.querySelector(\'nav .menu\').click()">here</a>.\n        </p>\n      </main>\n    </div>\n  '}document.querySelector("#content").insertAdjacentHTML("afterbegin",'\n    <nav>\n      <button class="home">Home</button>\n      <button class="menu">Menu</button>\n      <button class="contact">Contact</button>\n      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="bonus" target="_blank">Bonus</a>\n    </nav>\n    <div class="container"></div>\n    '),n();const e=document.querySelector("nav");function i(n){e.querySelectorAll("button").forEach((n=>n.classList.remove("selected"))),n.classList.add("selected")}i(document.querySelector("nav .home")),e.onclick=e=>{const a=e.target.closest("button");if(a&&!a.classList.contains("selected")){switch(i(a),Object.values(a.classList).at(0)){case"home":n();break;case"menu":document.querySelector(".container").outerHTML='\n    <div class="container menu-content">\n      <section>\n        <div class="bg-image breakfast">\n          <h1>Breakfast</h1>\n        </div>\n        <div class="food-container">\n          <div class="food-item">\n            <h3>Pancakes</h3>\n            <div>\n              Fresh berries,\n              warm maple\n              syrup\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Belgian Waffles</h3>\n            <div>\n              Fresh berries,\n              toasted almond,\n              whipped coconut\n              cream\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Irish Benedict</h3>\n            <div>\n              Poached eggs, Irish bacon,\n              hollandaise, toasted muffin\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Smoked Salmon & Scramble Eggs</h3>\n            <div>\n              Irish brown bread, caper-onion créme fraiche,\n              home fries \n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Croissant Sandwich</h3>\n            <div>\n              Crispy turkey bacon, American cheese,\n              lettuce, tomato, spicy aioli, croissant\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Steak & Eggs</h3>\n            <div>\n              NY strip steak, two sunny-side up eggs,\n              chimichurri sauce, home fries\n            </div>\n          </div>\n        </div>\n      </section>\n      <section>\n        <div class="bg-image dinner">\n          <h1>Dinner</h1>\n        </div>\n        <div class="food-container">\n          <div class="food-item">\n            <h3>Almond Chicken Nuggets</h3>\n            <div>\n              Crumbled blue cheese, chipotle mayo,\n              green onion\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Farmers Market</h3>\n            <div>\n              Arcadian greens, grilled chicken,\n              bacon, egg, tomato, red onion, avocado,\n              blue cheese, red wine vinaigrette\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Gaelic burger</h3>\n            <div>\n              <i>Certified Angus Beef ®</i> pub burger,\n              cheddar, irish bacon, caramelized onions\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>The FAT Hen</h3>\n            <div>\n              Buttermilk crispy fried chicken,\n              spicy jalapeño slaw, tomato, chipotle aioli, brioche\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>McGuire’s Salmon</h3>\n            <div>\n              Warm 5 grain salad, roasted squash,\n              chimichurri sauce\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Shepherd Pie</h3>\n            <div>\n              Ground beef, vegetables,\n              brown gravy, mashed potato\n            </div>\n          </div>\n        </div>\n      </section>\n      <section>\n        <div class="bg-image drinks">\n          <h1>Drinks</h1>\n        </div>\n        <div class="food-container">\n          <div class="food-item">\n            <h3>Milk Stout</h3>\n            <div>\n              6% ABV / 25 IBU / Longmont, CO / 16oz\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Allagash White</h3>\n            <div>\n              Witbier / 5.1% ABV / 13 IBU / Portland, ME / 16oz\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Magners Original Irish Cider</h3>\n            <div>\n              4.5% ABV / Clonmel, Co.\n              Tipperary / 20oz\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Kona Big Wave</h3>\n            <div>\n              4.40% ABV / IBU 20 / Kailua Kona, Hawaii / 16oz\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Goose Island IPA</h3>\n            <div>\n              5.9% ABV / 55 IBU / Chicago, IL / 16oz\n            </div>\n          </div>\n          <div class="food-item">\n            <h3>Carlsberg Lager</h3>\n            <div>\n              Euro Pale Lager / 5% ABV / 8 IBU / Copenhagen /\n              16oz\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  ';break;case"contact":document.querySelector(".container").outerHTML='\n    <div class="container contact-content">\n      <header class="bg-image">\n        <h1>Contact us</h1>\n      </header>\n      <section>\n        <div class="information-container">\n          <h2>Contact info</h2>\n          <div class="item">\n            <h3>Location</h3>\n            <div>\n              <div>Willis Ave,</div>  \n              <div>The Bronx, NY</div>\n              <div>10454</div>\n            </div>\n          </div>\n          <div class="item">\n            <h3>Hours</h3>\n            <div>\n              <div>Monday–Sunday</div>\n              <div>9am–1am</div>\n            </div>\n          </div>\n          <div class="item">\n            <h3>Phone</h3>\n            <div>(777) 777-7777</div>\n          </div>\n        </div>\n        <div class="map-wrapper">\n          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.311802433691!2d-73.92154608688232!3d40.811099082681366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5c37a97c9ed%3A0x840534fd6aa4971!2sWillis%20Ave%2C%20The%20Bronx%2C%20NY%2010454%2C%20USA!5e0!3m2!1sen!2sua!4v1664474491463!5m2!1sen!2sua" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n        </div>\n      </section>\n    </div>\n  '}scrollTo(0,0)}}})();