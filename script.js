import puppeteer from "puppeteer";

const glassType = "Mirror";
const glassShape = "Rectangle";
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.onedayglass.com/order-online/");

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
  await page.click("#btnsubmit");

  await page.waitForSelector("#square_rectangle");
  await page.waitForSelector("#circle");
  if (glassShape === "Rectangle") {
    await page.click("#square_rectangle");
  } else if (glassShape === "Circle") {
    await page.click("#circle");
  }
  await page.click("#btnsubmit");

  await page.waitForSelector("#Width");
  await page.waitForSelector("#Height");
  await page.waitForSelector("#WidthFraction");
  await page.waitForSelector("#HeightFraction");

  const selectWidth = await page.$("#Width");
  await selectWidth.select("14");

  const selectHeight = await page.$("#Height");
  await selectHeight.select("20");

  //   await page.screenshot({ path: "example.png" });

  //   await browser.close();
})();
