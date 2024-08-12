const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

// Specify the output file name
const outputFileName = "paw-patrol.json";

// List of URLs to scrape
const urls = ["https://amzn.to/3SPFO59", "https://amzn.to/3T9sVDp"];

const scrapeAmazon = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const $ = cheerio.load(data);

    // Extracting product details
    const name = $("#productTitle").text().trim();

    // Extracting the product description
    const description = $("#productDescription").text().trim();

    // Extracting the feature bullets as a list
    const featureBullets = [];
    $("#feature-bullets ul li").each((i, elem) => {
      featureBullets.push($(elem).text().trim());
    });

    // Extracting the landing image URL
    const image = $("#landingImage").attr("src");

    return {
      name,
      description,
      list: featureBullets,
      image,
      link: url,
    };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return null;
  }
};

const scrapeAll = async () => {
  const results = [];

  for (const url of urls) {
    const productDetails = await scrapeAmazon(url);
    if (productDetails) {
      results.push(productDetails);
    }
  }

  // Create /data/ directory if it doesn't exist
  const outputDir = path.join(__dirname, "data");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Save JSON file with the specified output file name
  const outputFile = path.join(outputDir, outputFileName);
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`Data saved to ${outputFile}`);
};

scrapeAll();
