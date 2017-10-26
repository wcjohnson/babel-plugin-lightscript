async function f() {
  try {
    return await fetchRemote();
  } catch (err) {
    return false;
  }
}