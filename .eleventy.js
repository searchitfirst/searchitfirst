module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'site',
      output: 'www',
    },
  };
};
