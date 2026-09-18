export function filenameToAlt(path) {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '');
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function buildGalleryPhotos(modules) {
  return Object.keys(modules)
    .sort()
    .map((path) => ({ src: modules[path].default, alt: filenameToAlt(path) }));
}