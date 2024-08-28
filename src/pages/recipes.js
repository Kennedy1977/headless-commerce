/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button/Button";

const recipes = [
  {
    title: "Mini Beef Wellington",
    image: "/recipe.webp",
    description:
      "These individual beef Wellingtons can either be served hot as a main course with veggies, or cold as a picnic treat.",
    preparationTime: "30 mins to 1 hour",
    cookingTime: "30 mins to 1 hour",
    serves: "Makes 6 individual beef Wellingtons",
    author: "Spencer John",
    link: "/recipe/mini-beef-wellingtons",
  },
  {
    title: "Lamb Chops with Rosemary",
    image: "/recipe.webp",
    description:
      "Delicious lamb chops seasoned with rosemary and garlic, perfect for a special dinner.",
    preparationTime: "15 mins",
    cookingTime: "20 mins",
    serves: "Serves 4",
    author: "Spencer John",
    link: "/recipe/lamb-chops-rosemary",
  },
  {
    title: "Pork Loin Roast",
    image: "/recipe.webp",
    description:
      "Juicy and succulent pork loin roast with a savory herb crust.",
    preparationTime: "10 mins",
    cookingTime: "1 hour 30 mins",
    serves: "Serves 6",
    author: "Spencer John",
    link: "/recipe/pork-loin-roast",
  },
  {
    title: "Homemade Sausages",
    image: "/recipe.webp",
    description:
      "Learn how to make your own flavorful sausages at home with this easy recipe.",
    preparationTime: "1 hour",
    cookingTime: "30 mins",
    serves: "Serves 10",
    author: "Spencer John",
    link: "/recipe/homemade-sausages",
  },
];

export default function Recipes() {
  return (
    <article className="max-w-screen-xl sm:mx-auto p-0 sm:px-12 sm:py-16 text-lg leading-relaxed">
      <div className="w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extralight mb-6 sm:mb-12 text-center">
          Recipes
        </h2>
        <p className="text-xl/relaxed font-light mb-8">
          At The Family Butcher, we believe that the secret to exceptional meals
          lies not just in premium quality meats, but also in the art of cooking
          and presentation. Our passion for excellence extends beyond providing
          the finest cuts; we are here to inspire your culinary adventures with
          delicious and easy-to-follow recipes. Whether you are planning a
          family BBQ, a cozy Sunday roast, or a festive gathering, our curated
          recipes cater to various cuts of meat and occasions, ensuring you
          create unforgettable dining experiences. Dive into our collection and
          discover new ways to cook and savor our exquisite meats.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-700 mb-4 text-[16px]">
                  {recipe.description}
                </p>
                <p className="text-gray-700 mb-2 text-[14px]">
                  <strong>Preparation time:</strong> {recipe.preparationTime}
                </p>
                <p className="text-gray-700 mb-2 text-[14px]">
                  <strong>Cooking time:</strong> {recipe.cookingTime}
                </p>
                <p className="text-gray-700 mb-2 text-[14px]">
                  <strong>Serves:</strong> {recipe.serves}
                </p>

                <p className="text-gray-600 mb-4 text-[14px]">
                  <strong>Author:</strong> {recipe.author}
                </p>
                <div className="self-end">
                  <Button
                    type="link"
                    label="View Recipe"
                    callback={recipe.link}
                    style="secondary"
                    size="small"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
