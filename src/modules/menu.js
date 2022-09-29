function insertMenuContent() {
  const containerElem = document.querySelector('.container');

  containerElem.outerHTML = `
    <div class="container menu-content">
      <section>
        <div class="bg-image breakfast">
          <h1>Breakfast</h1>
        </div>
        <div class="food-container">
          <div class="food-item">
            <h3>Pancakes</h3>
            <div>
              Fresh berries,
              warm maple
              syrup
            </div>
          </div>
          <div class="food-item">
            <h3>Belgian Waffles</h3>
            <div>
              Fresh berries,
              toasted almond,
              whipped coconut
              cream
            </div>
          </div>
          <div class="food-item">
            <h3>Irish Benedict</h3>
            <div>
              Poached eggs, Irish bacon,
              hollandaise, toasted muffin
            </div>
          </div>
          <div class="food-item">
            <h3>Smoked Salmon & Scramble Eggs</h3>
            <div>
              Irish brown bread, caper-onion créme fraiche,
              home fries 
            </div>
          </div>
          <div class="food-item">
            <h3>Croissant Sandwich</h3>
            <div>
              Crispy turkey bacon, American cheese,
              lettuce, tomato, spicy aioli, croissant
            </div>
          </div>
          <div class="food-item">
            <h3>Steak & Eggs</h3>
            <div>
              NY strip steak, two sunny-side up eggs,
              chimichurri sauce, home fries
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="bg-image dinner">
          <h1>Dinner</h1>
        </div>
        <div class="food-container">
          <div class="food-item">
            <h3>Almond Chicken Nuggets</h3>
            <div>
              Crumbled blue cheese, chipotle mayo,
              green onion
            </div>
          </div>
          <div class="food-item">
            <h3>Farmers Market</h3>
            <div>
              Arcadian greens, grilled chicken,
              bacon, egg, tomato, red onion, avocado,
              blue cheese, red wine vinaigrette
            </div>
          </div>
          <div class="food-item">
            <h3>Gaelic burger</h3>
            <div>
              <i>Certified Angus Beef ®</i> pub burger,
              cheddar, irish bacon, caramelized onions
            </div>
          </div>
          <div class="food-item">
            <h3>The FAT Hen</h3>
            <div>
              Buttermilk crispy fried chicken,
              spicy jalapeño slaw, tomato, chipotle aioli, brioche
            </div>
          </div>
          <div class="food-item">
            <h3>McGuire’s Salmon</h3>
            <div>
              Warm 5 grain salad, roasted squash,
              chimichurri sauce
            </div>
          </div>
          <div class="food-item">
            <h3>Shepherd Pie</h3>
            <div>
              Ground beef, vegetables,
              brown gravy, mashed potato
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="bg-image drinks">
          <h1>Drinks</h1>
        </div>
        <div class="food-container">
          <div class="food-item">
            <h3>Milk Stout</h3>
            <div>
              6% ABV / 25 IBU / Longmont, CO / 16oz
            </div>
          </div>
          <div class="food-item">
            <h3>Allagash White</h3>
            <div>
              Witbier / 5.1% ABV / 13 IBU / Portland, ME / 16oz
            </div>
          </div>
          <div class="food-item">
            <h3>Magners Original Irish Cider</h3>
            <div>
              4.5% ABV / Clonmel, Co.
              Tipperary / 20oz
            </div>
          </div>
          <div class="food-item">
            <h3>Kona Big Wave</h3>
            <div>
              4.40% ABV / IBU 20 / Kailua Kona, Hawaii / 16oz
            </div>
          </div>
          <div class="food-item">
            <h3>Goose Island IPA</h3>
            <div>
              5.9% ABV / 55 IBU / Chicago, IL / 16oz
            </div>
          </div>
          <div class="food-item">
            <h3>Carlsberg Lager</h3>
            <div>
              Euro Pale Lager / 5% ABV / 8 IBU / Copenhagen /
              16oz
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export { insertMenuContent };
