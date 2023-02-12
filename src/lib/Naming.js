/**
 *  Handle proper file naming after downlaods
 */

function makeFileName(brandName, productName) {
  var formatBrand = brandName
    .slice()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace("\n", "");
  var formatProd = productName
    .replaceAll(" ", "-")
    .slice()
    .toLowerCase()
    .replace("\n", "");
  return formatBrand + "_" + formatProd;
}

function getFeatFileName(brandName, productName) {
  return makeFileName(brandName, productName) + "_featured";
}

function getFeatAltTags(brandName, productName) {
  const results = [];
  results.push(brandName + " " + productName + " Bottle");
  results.push(brandName + " " + productName + " Featured");
  return results;
}

function getLabelFileName(brandName, productName) {
  return makeFileName(brandName, productName) + "_label";
}

function getLabelAltTags(brandName, productName) {
  const results = [];
  results.push(brandName + " " + productName + " Supplement Facts");
  results.push(brandName + " " + productName + " Label");
  return results;
}

function getAllNamesArray(brandName, productName) {
  const results = [];
  results.push(getFeatFileName(brandName, productName));
  results.push(getLabelFileName(brandName, productName));
  const featAlts = getFeatAltTags(brandName, productName);
  const labelAlts = getLabelAltTags(brandName, productName);
  results.push(featAlts[0]);
  results.push(featAlts[1]);
  results.push(labelAlts[0]);
  results.push(labelAlts[1]);
  return results;
}

const n = {
  getAllNamesArray
};

export default n;
