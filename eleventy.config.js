import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  // Files copied to the site as-is.
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/*.pdf");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/css");

  // Turns every <img> into a <picture> with small, compressed AVIF/WebP/JPEG versions.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: [180, 240, 360, 480],
    urlPath: "/img/",
    outputDir: "_site/img/",
    sharpJpegOptions: { quality: 80, progressive: true },
    sharpWebpOptions: { quality: 80 },
    sharpAvifOptions: { quality: 60 },
  });

  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());
}

export const config = {
  dir: { input: "src" },
};
