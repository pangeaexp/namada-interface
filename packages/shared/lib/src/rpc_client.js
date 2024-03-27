/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Small wrapper for fetch to make it easier to pass props
 * Called wasmFetch to avoid naming conflict
 */
async function wasmFetch(url, method, body) {
  const res = await fetch(url, {
    method,
    body,
  });
  return res;
}

module.exports = { wasmFetch };
