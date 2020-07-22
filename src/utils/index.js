import faker from 'faker';

let data = {
  recipes: [],
  kitchenwares: [],
  bakewares: [],
};

/**
 *
 * @description Make fake db.json
 * @returns {Object} data
 */
function makeRecipes() {
  let recipe;
  let kitchenware;
  let bakeware;
  for (let index = 0; index < 66; index++) {
    recipe = {};
    kitchenware = {};
    bakeware = {};
    // RECIPE
    recipe.id = faker.random.uuid();
    recipe.name = faker.commerce.productName();
    recipe.topic = faker.commerce.department().toLowerCase();
    recipe.ingredients = [
      faker.fake('{{random.number}}g {{commerce.product}}'),
      faker.fake('{{random.number}}ml {{commerce.product}}'),
      faker.fake('{{random.number}}g {{commerce.product}}'),
      faker.fake('{{random.number}}g {{commerce.product}}'),
      faker.fake('{{random.number}}ml {{commerce.product}}'),
      faker.fake('{{random.number}}g {{commerce.product}}'),
      faker.fake('{{random.number}}g {{commerce.product}}'),
    ];
    recipe.image = 'https://source.unsplash.com/random/300x300/?food';
    recipe.text = faker.lorem.paragraphs();
    data.recipes.push(recipe);
    // KITCHENWARE
    kitchenware.id = faker.random.uuid();
    kitchenware.name = faker.commerce.productName();
    kitchenware.price = faker.commerce.price();
    kitchenware.image =
      'https://source.unsplash.com/random/300x300/?kitchenware';
    kitchenware.description = faker.lorem.sentences();
    data.kitchenwares.push(kitchenware);
    // BAKEWARE
    bakeware.id = faker.random.uuid();
    bakeware.name = faker.commerce.productName();
    bakeware.price = faker.commerce.price();
    bakeware.image = 'https://source.unsplash.com/random/300x300/?bakeware';
    bakeware.description = faker.lorem.sentences();
    data.bakewares.push(bakeware);
  }
  console.log(JSON.stringify(data, null, 2));
  return data;
}

makeRecipes();
