// Filenames that carry no useful description (camera and phone defaults)
const GENERIC_NAME = /^(image|img|fullsizerender|photo|dsc|pxl)?[\s_-]*\d*$/i;

export function filenameToAlt(path) {
  const name = path
    .split('/').pop()
    .replace(/\.[^.]+$/, '')                    // drop the extension
    .replace(/^watermarked-img-\d+-\d+-/i, '')  // drop the watermark tool's prefix
    .replace(/^\d+[-_]/, '');                   // drop a leading sort number like "01-"

  // Camera names ("IMG_0233") and Facebook download names ("5721..._n")
  // describe nothing, so return '' and let the caller use a fallback.
  if (GENERIC_NAME.test(name) || /^[\d_]+n?$/.test(name)) return '';

  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function buildGalleryPhotos(modules, fallbackAlt = 'Young Spirit Kennel photo') {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path, i) => ({
      src: modules[path].default,
      alt: filenameToAlt(path) || `${fallbackAlt} ${i + 1}`,
    }));
}