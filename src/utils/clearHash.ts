export const clearHash = () => {
  //window.location.hash = "";
  const href = window.location.href;
  const hashInx = href.lastIndexOf('#');
  const hash = href.slice(hashInx);
  const newHref = href.slice(0, hashInx);

  if (hash.includes("#")) window.location.href = newHref;
}