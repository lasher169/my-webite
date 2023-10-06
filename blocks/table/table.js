import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  // nothing to do here
    const cols = [...block.firstElementChild.children];

    console.log('test',JSON.stringify(cols));
}
