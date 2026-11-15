import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  // Files copied to the site as-is.
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/*.pdf");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Turns every <img> into a <picture> with small, compressed AVIF/WebP/JPEG versions.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: [180, 240, 360, 480],
    urlPath: "/img/",
    sharpJpegOptions: { quality: 80, progressive: true },
    sharpWebpOptions: { quality: 80 },
    sharpAvifOptions: { quality: 60 },
  });

  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  // Versioned asset URLs (/css/style.css?v=abc123) so browsers never pair a
  // fresh page with a stale cached stylesheet after a deploy.
  eleventyConfig.addFilter("versioned", (url) => {
    const hash = createHash("md5").update(readFileSync(`src${url}`)).digest("hex").slice(0, 10);
    return `${url}?v=${hash}`;
  });
}

export const config = {
  dir: { input: "src" },
};
