# Stage Block

The Stage block is a full-width banner component that displays a background image with overlaid content, including a top headline, main headline, call-to-action (CTA) button, and bottom text.

## Usage

To use the Stage block, create a new section in your Franklin document with the following structure:

| Stage |
|-------|
| Background Image |
| Top Headline |
| Main Headline |
| CTA Text |
| Bottom Text |

## Authoring

1. In your Franklin document (Google Docs or Microsoft Word), create a new section for the Stage block.
2. Add the block name "Stage" in the first cell of a one-column table.
3. In the subsequent cells, add the following content:
   - Background Image: Insert an image that will serve as the background.
   - Top Headline: Enter the text for the small headline at the top.
   - Main Headline: Enter the text for the large, main headline.
   - CTA Text: Enter the text for the call-to-action button. To make it a link, use the format `[CTA Text](https://example.com)`.
   - Bottom Text: Enter the text to be displayed at the bottom of the stage.

## Styling

The Stage block uses CSS variables for easy customization. You can override these variables in your project's CSS to adjust the appearance:

- `--text-color`: Color of the text (default: #ffffff)
- `--top-headline-font-size`: Font size of the top headline (default: 1.2rem)
- `--headline-font-size`: Font size of the main headline (default: 3rem)
- `--cta-background-color`: Background color of the CTA button (default: #007bff)
- `--cta-text-color`: Text color of the CTA button (default: #ffffff)
- `--cta-hover-background-color`: Background color of the CTA button on hover (default: #0056b3)
- `--bottom-text-font-size`: Font size of the bottom text (default: 1rem)

Mobile-specific variables:
- `--mobile-top-headline-font-size`: Font size of the top headline on mobile (default: 1rem)
- `--mobile-headline-font-size`: Font size of the main headline on mobile (default: 2rem)
- `--mobile-bottom-text-font-size`: Font size of the bottom text on mobile (default: 0.9rem)

## Behavior

The Stage block is responsive and adjusts its layout for different screen sizes. On smaller screens, the font sizes are reduced, and the content is centered for better readability.

## Accessibility

The Stage block uses semantic HTML elements and includes proper heading hierarchy. The background image is decorative and does not convey important information, so it's implemented in a way that screen readers will ignore it.

## Dependencies

This block relies on the `createOptimizedPicture` function from the `aem.js` script to optimize the background image.

Suggestions for improvement:
- Add support for multiple CTA buttons
- Implement an option for a video background
- Allow for custom animations or transitions for content entry
