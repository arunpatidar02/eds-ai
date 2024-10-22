import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const [bgImage, topHeadline, headline, description, cta, bottomText] = block.children;

  // Content container
  const content = document.createElement('div');
  content.className = 'stage-content';

  // Background image
  const picture = bgImage.querySelector('picture');
  if (picture) {
    const optimizedPicture = createOptimizedPicture(picture.querySelector('img').src, true);
    optimizedPicture.className = 'stage-background';
    block.prepend(optimizedPicture);
  }

  // Top headline
  if (topHeadline) {
    const topHeadlineEl = document.createElement('p');
    topHeadlineEl.className = 'stage-top-headline';
    topHeadlineEl.textContent = topHeadline.textContent.trim();
    content.appendChild(topHeadlineEl);
  }

  // Main headline
  if (headline) {
    const headlineEl = headline.querySelector('h2') || document.createElement('h2');
    headlineEl.className = 'stage-headline';
    if (!headline.querySelector('h2')) {
      headlineEl.textContent = headline.textContent.trim();
    }
    content.appendChild(headlineEl);
  }

  // Description
  if (description) {
    const descriptionEl = document.createElement('p');
    descriptionEl.className = 'stage-description';
    descriptionEl.textContent = description.textContent.trim();
    content.appendChild(descriptionEl);
  }

  // CTA
  if (cta) {
    const ctaEl = cta.querySelector('a');
    if (ctaEl) {
      ctaEl.className = 'stage-cta';
      content.appendChild(ctaEl);
    }
  }

  // Bottom text
  if (bottomText) {
    const bottomTextEl = document.createElement('p');
    bottomTextEl.className = 'stage-bottom-text';
    bottomTextEl.textContent = bottomText.textContent.trim();
    content.appendChild(bottomTextEl);
  }

  block.appendChild(content);

  // Remove original divs
  Array.from(block.children).forEach((child) => {
    if (child !== content && !child.classList.contains('stage-background')) {
      child.remove();
    }
  });

  // Add badge class if present
  if (block.classList.contains('badge')) {
    content.classList.add('badge');
  }
}
