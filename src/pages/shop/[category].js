import { useRouter } from "next/router";

const ShopCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryDetails = {
    beef: {
      title: "Lamb Chops with Rosemary",
      content: "Delicious lamb chops with a hint of rosemary.",
    },
    lamb: {
      title: "Mini Beef Wellingtons",
      content: "Individual beef Wellingtons that can be served hot or cold.",
    },
    // Add more recipes here
  };

  const categoryData = categoryDetails[category];

  if (!categoryData) {
    return <p>Category not found.</p>;
  }

  return (
    <>
      <article className="max-w-screen-xl sm:mx-auto p-0 sm:px-12 sm:py-16 text-lg leading-relaxed">
        <div className="w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-6 sm:mb-12 text-center">
            Mini Beef Wellingtons
          </h2>
          <div className="mb-8">
            <p>
              <strong>Preparation time:</strong> 30 mins to 1 hour
            </p>
            <p>
              <strong>Cooking time:</strong> 30 mins to 1 hour
            </p>
            <p>
              <strong>Serves:</strong> Makes 6 individual beef Wellingtons
            </p>
            <p>
              <strong>Author:</strong> Spencer John
            </p>
          </div>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-4">Ingredients</h3>
            <h3 className="text-xl font-light mb-2">For the pastry</h3>
            <ul className="list-disc list-inside mb-4">
              <li>100g/3½oz salted butter, cut into cubes and frozen</li>
              <li>100g/3½oz lard, cut into cubes and frozen</li>
              <li>250g/9oz plain flour, plus extra for dusting</li>
              <li>½ tsp salt</li>
              <li>1 tbsp lemon juice</li>
            </ul>
            <h3 className="text-xl font-light mb-2">
              For the mushroom duxelle
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                Garlic-infused oil (available from most large supermarkets), for
                frying
              </li>
              <li>2 smoked garlic cloves, finely chopped</li>
              <li>1 shallot, peeled and finely chopped</li>
              <li>
                10g dried porcini mushrooms, soaked in boiling water for a few
                minutes
              </li>
              <li>125g/4½oz chestnut mushrooms, washed and sliced</li>
              <li>Small bunch fresh thyme</li>
              <li>50ml/2fl oz dry white wine</li>
              <li>1 tsp sea salt</li>
              <li>Cracked black pepper</li>
            </ul>
            <h3 className="text-xl font-light mb-2">For the beef</h3>
            <ul className="list-disc list-inside mb-4">
              <li>6x80g/3oz pieces fillet steak</li>
              <li>6 slices prosciutto ham</li>
              <li>1 free-range egg, beaten</li>
              <li>Salt and freshly ground black pepper</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-light mb-4">Method</h3>
            <h3 className="text-xl font-light mb-2">For the pastry</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>
                Mix together the butter, lard, flour, and salt in a food
                processor until it resembles breadcrumbs. Add the lemon juice
                and enough cold water to bring the mixture together into a
                dough.
              </li>
              <li>
                On a lightly floured work surface, roll out the dough into a
                large rectangle. With a short edge facing you, fold the bottom
                third up and the top third down. Rotate the dough by 90 degrees
                (a quarter turn) and repeat the rolling and folding. Wrap in
                cling film and place in the fridge for 20 minutes.
              </li>
            </ol>

            <h3 className="text-xl font-light mb-2">
              For the mushroom duxelle
            </h3>
            <ol className="list-decimal list-inside mb-4">
              <li>
                Heat a little of the garlic oil in a frying pan. Add the garlic
                and shallot and gently fry until the shallot is soft and
                translucent.
              </li>
              <li>
                Drain the porcini mushrooms and squeeze out any excess water.
                Add them to a food processor and pulse until they resemble
                breadcrumbs.
              </li>
              <li>
                Put the porcini mushrooms and chestnut mushrooms in the pan with
                the garlic and shallot. Simmer for 10 minutes, then add the
                thyme and wine. Season with the salt and pepper and, when the
                mixture is reduced to the consistency of a paste, set aside to
                cool.
              </li>
            </ol>

            <h3 className="text-xl font-light mb-2">For the beef</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>
                Heat a heavy-based frying pan over medium–high heat. When the
                pan is hot, season the steak and sear until just browned all
                over (you may need to do this in batches). Set aside to cool.
              </li>
              <li>
                When the steak is cool, wrap each piece tightly in a slice of
                ham.
              </li>
            </ol>

            <h3 className="text-xl font-light mb-2">Final steps</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>
                For the pastry, repeat the rolling and folding process one final
                time. Return to the fridge for 15 minutes.
              </li>
              <li>Preheat the oven to 200C/180C Fan/Gas 6.</li>
              <li>
                When chilled, roll out the pastry on a lightly floured work
                surface to a 30x45cm/12x18in rectangle (around 5mm thick). Using
                a sharp knife, cut the pastry into six rectangles and spread
                with the mushroom mixture. Place a piece of beef in the middle
                of each square and wrap tightly in the pastry, taking care to
                ensure the meat is completely encased. Crimp the seam of the
                pastry and tuck in the ends.
              </li>
              <li>
                Brush with the beaten egg, score the tops, and bake for about 25
                minutes, or until the pastry is crisp and golden brown. Serve
                hot or cold.
              </li>
            </ol>
          </section>
        </div>
      </article>
    </>
  );
};

export default ShopCategory;
