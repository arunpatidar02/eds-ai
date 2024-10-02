# EDS with AI
Project to try AI to generate blocks for document based authoring 

**References**
- https://allabout.network/blogs/ddt/developer-guide-to-document-authoring-with-edge-delivery-services-part-9
- https://allabout.network/blogs/ddt/developer-guide-to-document-authoring-with-edge-delivery-services-part-10
- https://allabout.network/blogs/ddt/developer-guide-to-document-authoring-with-edge-delivery-services-part-11


## Environments
- Preview: https://main--eds-ai--arunpatidar02.aem.page/
- Live: https://main--eds-ai--arunpatidar02.aem.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `eds-ai` directory in your favorite IDE and start coding :)
