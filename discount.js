const TIER_HIGH = 10000;
const TIER_MID = 5000;

function getDiscount(user, amount) {
  if (amount >= TIER_HIGH) return amount * 0.15;
  if (amount >= TIER_MID) return amount * 0.10;
  return amount * 0.05;
}

module.exports = { getDiscount };
function brokenSyntax( {
function brokenSyntax( {
function brokenSyntax( {
