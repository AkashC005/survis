/** * Name as used as title for the main page * @type {string} */
var title = 'Generative and Synthetic Neuroimaging for Alzheimer\'s Disease Classification';

/** * Relative path to the data directory * @type {string} */
var dataDir = 'data/';

/** * Relative path to the js directory * @type {string} */
var jsDir = 'js/';

/** * Relative path to the styles directory * @type {string} */
var stylesDir = 'styles/';

/** * Options for displaying tag clouds. */
var tagCloudOptions = [
  { field: 'keywords', title: 'Keywords', minTagFrequency: 1 },
  { field: 'author', title: 'Authors', minTagFrequency: 1 },
  { field: 'series', title: 'Series', minTagFrequency: 1 }
];

/** * If BibTeX entries (and tags) should be editable * @type {boolean} */
var editable = false;

/** * Subtitle describing the paper collection */
var paper = {
  html: 'Coursework 3 literature collection: 10 papers on generative and synthetic neuroimaging for Alzheimer\'s disease classification',
  id: 'Alam2025GenerativeAD'
};

/** * Extra pages in the footer */
var extraPages = { 'about': 'about.html' };

/** * Custom style path */
var customStyle = '';

/** * Citation display settings */
var citations = null;