import puppeteer from "puppeteer";

const glassType = "Tempered";
const glassShape = "Rectangle";
const thinkness = "1/8";
const width = "25";
const height = "30";
const tint = "Bronze";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.onedayglass.com/order-online/", {
    waitUntil: "load",
    timeout: 0,
  });
  const btnContinue = async () => {
    await page.click("#btnsubmit");
  };

  await page.waitForSelector("#Tempered");
  await page.waitForSelector("#Mirror");
  await page.waitForSelector("#Annealed");
  await page.waitForSelector("#Ceramic");

  if (glassType === "Tempered") {
    await page.click("#Tempered");
  } else if (glassType === "Mirror") {
    await page.click("#Mirror");
  } else if (glassType === "Annealed") {
    await page.click("#Annealed");
  } else if (glassType === "Ceramic") {
    await page.click("#Ceramic");
  }
  btnContinue();
  // waiting for shape selectors to load
  await page.waitForSelector("#square_rectangle");
  await page.waitForSelector("#circle");
  await page.waitForSelector("#single_slope_rectangle");
  await page.waitForSelector("#house");
  await page.waitForSelector("#arch");
  await page.waitForSelector("#arch_top");
  await page.waitForSelector("#arch_top_bottom");
  await page.waitForSelector("#arch_side");
  await page.waitForSelector("#arch_rounded");
  await page.waitForSelector("#clipped_corners");
  await page.waitForSelector("#pentagon");
  await page.waitForSelector("#hexagon");
  await page.waitForSelector("#octagon");
  await page.waitForSelector("#ellipse");
  await page.waitForSelector("#racetrackoval");
  await page.waitForSelector("#quarter_round");
  await page.waitForSelector("#quarter_round_notch");
  await page.waitForSelector("#semi_circle");
  await page.waitForSelector("#half_circle_notch");
  await page.waitForSelector("#trapazoid");
  await page.waitForSelector("#parallelogram");
  await page.waitForSelector("#right_triangle");
  await page.waitForSelector("#triangle");
  await page.waitForSelector("#quad_arch");
  await page.waitForSelector("#right_triangle");

  // selecting shape according to input
  if (glassShape === "Rectangle") {
    await page.click("#square_rectangle");
  } else if (glassShape === "Circle") {
    await page.click("#circle");
  }
  btnContinue();

  // waiting for height and width selectors to load
  await page.waitForSelector("#Width");
  await page.waitForSelector("#Height");
  await page.waitForSelector("#WidthFraction");
  await page.waitForSelector("#HeightFraction");

  // adding width value in input
  const selectWidth = await page.$("#Width");
  await selectWidth.select(width);
  //enter height value in input
  const selectHeight = await page.$("#Height");
  await selectHeight.select(height);
  //clicking cintinue
  btnContinue();

  //waiting for thinkness selector to load ThickID18
  await page.waitForSelector("#ThickID18");
  await page.waitForSelector("#ThickID532");
  await page.waitForSelector("#ThickID316");
  await page.waitForSelector("#ThickID14");
  await page.waitForSelector("#ThickID38");
  await page.waitForSelector("#ThickID12");

  // selecting radio button for thinkness according to input
  if (thinkness === "1/8") {
    await page.click("#ThickID18");
  } else if (thinkness === "5/32") {
    await page.click("#ThickID532");
  } else if (thinkness === "3/16") {
    await page.click("#ThickID316");
  } else if (thinkness === "1/4") {
    await page.click("#ThickID14");
  } else if (thinkness === "3/8") {
    await page.click("#ThickID38");
  } else if (thinkness === "1/2") {
    await page.click("#ThickID12");
  }
  // selecting the continue button
  btnContinue();

  // waiting for slectors to load for Tint page
  await page.waitForSelector("#Clear");
  await page.waitForSelector("#Solex");
  await page.waitForSelector("#Bronze");
  await page.waitForSelector("#LightGray");
  await page.waitForSelector("#DarkGray");
  await page.waitForSelector("#SatinEtch");
  await page.waitForSelector("#P-516");
  await page.waitForSelector("#Mistlite");
  await page.waitForSelector("#Low-E");
  await page.waitForSelector("#FrostedGlueChip");

  //slecting glass tint radio button
  if (tint === "clear") {
    btnContinue();
  } else if (tint === "Solex") {
    await page.click("#Solex");
  } else if (tint === "Bronze") {
    await page.click("#Bronze");
  } else if (tint === "LightGray") {
    await page.click("#LightGray");
  } else if (tint === "DarkGray") {
    await page.click("#DarkGray");
  } else if (tint === "SatinEtch") {
    await page.click("#SatinEtch");
  } else if (tint === "P-516") {
    await page.click("#P-516");
  } else if (tint === "Mistlite") {
    await page.click("#Mistlite");
  } else if (tint === "Low-E") {
    await page.click("#Low-E");
  } else if (tint === "FrostedGlueChip") {
    await page.click("#FrostedGlueChip");
  }
  btnContinue();

  //   await page.screenshot({ path: "example.png" });

  //   await browser.close();
})();
