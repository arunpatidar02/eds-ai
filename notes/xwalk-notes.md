# WYSIWYG Content Authoring for Edge Delivery Services | Adobe Experience Manager

CREATED FOR:
With Edge Delivery Services, authoring is easy, fast, and flexible. You have two options to author content for Edge Delivery Services:
When using Edge Delivery Services with AEM as a Cloud Service, the most fundamental fact to understand is that the content you author is persisted in AEM as a Cloud Service.



The AEM Sites environment is used for content management such as creating new pages, Experience Fragments, Content Fragments, etc.
The Universal Editor is used to author the content managed in AEM.
Content that you author with the Universal Editor and persist to AEM is published to Edge Delivery Services.
Edge Delivery Services ensure a 100% Lighthouse score.
Blocks are fundamental components of a page delivered by Edge Delivery Services. Authors can choose from default blocks provided as standard by Adobe or from blocks customized for your project by your developers.
The Universal Editor provides a modern and intuitive GUI for authoring your content by adding and arranging blocks.


Details of the blocks can then be configured in the Properties panel.

For details on how to author using the Universal Editor, please see the document Authoring Content with the Universal Editor.
Please see the Developer Getting Started Guide for WYSIWYG Authoring with Edge Delivery Services to learn how to start your own project to author with AEM and Edge Delivery Services.
WYSIWYG authoring is a powerful and intuitive tools for content authors. However, there are many different authoring use cases, which is why AEM offers additional authoring solutions.
Please see the document Choosing an Authoring Method to learn more about the authoring solutions AEM offers including document-based authoring and headless.

---

# Using Spreadsheets to Manage Tabular Data | Adobe Experience Manager

CREATED FOR:
Learn how to use spreadsheets to manage tabular data for various values such as metadata and redirects for your AEM with Edge Delivery Services site.
For any AEM with Edge Delivery Services site, there is a need to maintain lists of tabular data such as for key-value mappings. These can be lists of many different values such as metadata and redirects. Edge Deliver Services allows you to maintain such tabular lists using an intuitive tool: the spreadsheet. AEM translates these spreadsheets into JSON files that can easily be consumed by your website or web application.
Common use cases include:
In addition, you can create your spreadsheets of any structure to store mappings for your own purposes.
This document uses the example of redirects to illustrate how to create such spreadsheets. See the previously-linked topics in the Edge Delivery Services documentation for details of each use case.
In order to create mappings using spreadsheets in your AEM with Edge Delivery Services project, you need to have created your site using the latest site template.
Please see the document Developer Getting Started Guide for WYSIWYG authoring with Edge Delivery Services for more information.
In this example, you will create a spreadsheet to manage redirects for your AEM with Edge Delivery Services site. The same steps apply to other spreadsheet types that you wish to create.
Sign in to your AEM as a Cloud Service authoring instance, go to the Sites console, and navigate to the root of the site which requires a spreadsheet. Tap or click Create -> Page.


The Properties tab of the wizard presents the default values for the redirects spreadsheet. Tap or click Create.
Title - Leave this value as-is.
Columns - The minimum columns needed for redirects are prepopulated.

In the Success dialog, tap or click Open.








A new tab opens with the spreadsheet loaded into an editor with the predefined source and destination columns. To define your redirects, tap or click the empty row of the source column. Changes are saved automatically as you edit the spreadsheet.








In addition to editing spreadsheets in the AEM Page Editor, you can also import data from a CSV file.
When editing your spreadsheet in AEM, tap or click the Upload button at the top-left of the screen.
In the drop-down, select how you would like to import your data.
In the dialog that opens, select your CSV file and then tap or click Open.
A dialog opens as the import is processed. Once complete, the data in the CSV file is added to or replaces the content of the spreadsheet. If any errors are encountered such as a mismatch of columns, they are reported so you can correct your CSV file.
Depending on your selection of mode, you can also create, replace, or append to spreadsheets using a CSV and a cURL command similar to the following.
The call returns an HTML page with information about the job ID.
You can use the Jobs console to view the status of the job or use the ID returned to query it.
In order for AEM to be able to publish the data in your spreadsheet, you additionally need to update the paths.json file of your project.
Open the root of your project in GitHub.
Tap or click the paths.json file to open its details and then the Edit icon.








Add a line to map your new spreadsheet to a redirects.json resource.
Click Commit changes… to save the changes to main.
When you are finished defining your redirects and you updated the path mapping, return to the Sites console.
Tap or click to select the redirects spreadsheet that you created in the console and then tap or click Quick Publish in the actions bar to publish the spreadsheet.








In the Quick Publish dialog, tap or click Publish.








A banner confirms the publication.








The redirects spreadsheet is now published and publicly-accessible.
Now that you know how to create a redirects spreadsheet, you can create any other standard spreadsheet type:
Simply follow the same steps in the sections Create Spreadsheet and Update paths.json and choose the appropriate template and update the paths.json file appropriately.
For Configuration, Headers and Metadata make sure to add a mapping to publish them to their default locations:
Additionally, you can create your own spreadsheet with arbitrary columns for your own use.
Follow the same steps in the section Create Spreadsheet.
When selecting the template, choose Spreadsheet.
In the Properties tab of the wizard, you can add your own columns.








Create the spreadsheet and publish as per the instructions for the redirects spreadsheet.
Add a mapping to the paths.json file as per the instructions for the redirects spreadsheet.

---

# Managing Taxonomy Data | Adobe Experience Manager

CREATED FOR:
Learn how to manage taxonomy data for using tags with your AEM with Edge Delivery Services sites.
Tagging is an important feature that helps you organize and manage your pages. The Tagging Console in AEM allows you to create a rich taxonomy of tags to organize your pages.
These tags are useful not only for you and your authors in organizing your content, but can also be for your readers as well. Tags and their taxonomy can be used in components on the page to help your readers navigate your content.
The Universal Editor works only with the IDs of your tags. By creating a taxonomy page for your content, you expose the descriptions of these tags in all languages to the Universal Editor so it can use that information when rendering content.
A taxonomy is created like any other page in AEM.
Navigate to the Sites console.
Select the location where you wish to create your taxonomy.
Tap or click Create -> Page.








On the Template tab of the Create Page wizard, select the Taxonomy template and tap or click Next.








On the Properties tab of the Create Page wizard, provide a meaningful Title for the page and in the Tags field, use the tag picker to select the tag(s) or namespace(s) you wish to include in your taxonomy.








Tap or click Create.
The taxonomy page is created. In the Success dialog, you can tap or click Done dialog to dismiss the message or Open to edit the page in the Page Editor.
Take note of the resulting page name of the taxonomy page for use in the following steps.
You start editing a taxonomy page like any other page in AEM.
Navigate to the Sites console.
Select the taxonomy you wish to edit.
Tap or click Edit in the action bar.
The Page Editor opens, showing the taxonomy.








Tap or click the Page Information icon in the toolbar and select Open Properties.








In the Page Properties window, you can update the name of the page and use the tag selector to update the tag(s) and namespace(s) included in your taxonomy.








Tap or click Save & Close.
The page displayed in the Page Editor is read-only because the content of the taxonomy is generated automatically from the selected tag(s) and namespace(s). They act as a kind of filter for automatically generating the content of the taxonomy. Therefore there is no reason to directly edit the page in the editor.
AEM automatically updates the content of the taxonomy page when you update the underlying tag(s) and namespace(s). However you must republish the taxonomy after any change to make those changes available to your users.
Like when managing and publishing tabular data for your Edge Delivery Services site, you need to update your paths.json file of your project to allow publication of your taxonomy data.
Open the root of your project in GitHub.
Tap or click the paths.json file to open its details and then the Edit icon.








Add a line to map your new taxonomy page to a .json resource.
Click Commit changes… to save the changes to main.
This process only needs to be done once per taxonomy page. Once done, you can publish your taxonomy.
A taxonomy is not available to the Universal Editor or your users until it is published.
Taxonomy pages are published like any other page by using the Quick Publish or Manage Publication icons in the toolbar.
You must republish your taxonomy page every time you:
If you create a new taxonomy page you must first add a mapping to it to the paths.json file in your project.
Once your taxonomy is published, its information can be leveraged by the Universal Editor and made visible to your users.
You can access the taxonomy as JSON data at the following address.
https://<branch>--<repository>--<owner>.hlx.page/<taxonomy-json-name>.json
Use the <taxonomy-json-name> that you defined when mapping your taxonomy to the paths.json file in your project. The taxonomy data is returned as JSON data like in the following example.
This JSON data will automatically update as you update the taxonomy and republish it. Your app can programmatically access this information for your users.
If you maintain tags in multiple languages, you can access those languages by passing in the ISO2 language code as the value of a sheet= parameter.

---

# Blocks for WYSIWYG and Document-Based Authoring | Adobe Experience Manager

CREATED FOR:
Learn how you can create blocks that can be used for both WYSIWYG authoring and document-based authoring.
On certain projects, you may want to support both WYSIWYG authoring using the Universal Editor as well as document-based authoring. To minimize development time and ensure the same site experience, you can create one set of blocks to support both use cases.
To do this, you must use the same content modeling approach for both your WYSIWYG authoring setup as well as your document-based authoring setup.
In WYSIWYG authoring in AEM, you declare a model and provide naming conventions. Data is then rendered in table-like block structures using Edge Delivery in the same way as if the table would have been created manually using document-based authoring.
To achieve this, certain assumptions are made such as for a simple block like a teaser that all properties and groups of properties are rendered in 1…n rows with a single column each. For blocks that have 1…n items (such as carousel and cards) the items are appended after these rows with one row each and a column for each property/group of properties.
If you follow the same approach for document-based authoring you can reuse your WYSIWYG blocks.

---

# Publishing Pages with DAM Assets Using Edge Delivery Services | Adobe Experience Manager

CREATED FOR:
Learn what settings are required to ensure your DAM assets for your pages are published seamlessly to Edge Delivery Services.
When editing content for the Universal Editor, you of course can select assets from the DAM. When you publish your content to Edge Delivery Services, the related DAM content is published as well.
To ensure this seamless behavior, AEM and Edge Delivery Services must have proper access to the DAM in order to publish. This includes:
When publishing pages from AEM to Edge Delivery Services, a technical account is used. This account, with a name in the format <hash>@techacct.adobe.com, is created automatically as a user in AEM by Cloud Manager whenever you first publish a page created with the Universal Editor.








This technical account must have access rights to all DAM folders in order to publish their content. You can either:
Generally assuring that your technical account has access to your assets in DAM is sufficient for publishing your assets along with your pages to Edge Delivery Services.
Additional configuration is needed in two additional cases, however:
To support both these use cases, a configuration must be assigned to the DAM folder.

---

# Developer Getting Started Guide for WYSIWYG Authoring with Edge Delivery Services | Adobe Experience Manager

CREATED FOR:
This guide will get you up-and-running with a new Adobe Experience Manager site using Edge Delivery Services and the Universal Editor for WYSIWYG content authoring.
Before beginning this guide, you should already be familiar with the basics of and have access to Edge Delivery Services including:
Edge Delivery Services is based around the concept of blocks. AEM comes with a comprehensive library of predefined blocks, which can be extended to meet your project needs. Code for Edge Delivery Services projects is managed in GitHub.
Blocks are the most fundamental part of a page delivered by Edge Delivery Services. A block encapsulates styling and code that drives a logical component of a content page.
AEM provides standard blocks as part of the product within the project boilerplate. Such blocks include heading, text, images, links, lists, etc.
Edge Delivery leverages GitHub so you can manage and deploy code directly from your GitHub repository.
Your authors can create content using either Document-based Authoring or content in AEM with the Universal Editor. Developers can customize the functionality of your site by using CSS and JavaScript in GitHub regardless of how the authors create their content.
Websites are automatically created for each of your branches from content preview to production. Every resource that you put into your GitHub repository is available on your website without a build process.
Once you have fulfilled the prerequisites and have made the choice to use the Universal Editor, you can get started on your own project.
First you will need to create a new project on GitHub, based on the Adobe template.
Navigate to https://github.com/adobe-rnd/aem-boilerplate-xwalk and Click on Use this template and select Create a new repository.








By default, the repository will be assigned to you. Change this as necessary as well as provide a repository name and description and click Create repository.








In a new tab in the same browser, navigate to https://github.com/apps/aem-code-sync and click Configure.








Click Configure for the org where you created your new repository in the previous step.








On the AEM Code Sync GitHub page under Repository access, select Only select repositories, select the repository that you created in the previous step, and then click Save.








Once AEM Code Sync is installed, you receive a confirmation screen. Return to the browser tab of your new repository.








Click the fstab.yaml file to open it and then the Edit this file icon to edit it.








Edit the fstab.yaml file to update the mount point of your project. Replace the default Google Docs URL with the URL of your AEM as a Cloud Service authoring instance and then click Commit changes….








Add a commit message as desired and then click Commit changes, committing them directly to the main branch.








Return to the root of your repository and click on paths.json and then the Edit this file icon.








The default mapping will use the name of the repository. Update the default mapping as required for your project with /content/<site-name>/:/ and click Commit changes….








Add a commit message as desired and then click Commit changes, committing them directly to the main branch.








Now that you have a GitHub project, you must create a new AEM site that the project can use.
Download the latest WYSIWYG authoring with Edge Delivery Services site template from GitHub at https://github.com/adobe-rnd/aem-boilerplate-xwalk/releases.
Sign in to your AEM as a Cloud Service authoring instance and navigate to the Sites console and tap or click Create -> Site from template.








On the Select a site template tab of the create site wizard, click the Import button to import a new template.








Upload the WYSIWYG authoring with Edge Delivery Services site template that you downloaded from GitHub.
Once the template is imported, it appears in the wizard. Tap or click to select it and then tap or click Next.








Provide the following fields and tap or click Create.








AEM confirms the site creation with a dialog. Tap or click OK to dismiss.








On the sites console, navigate to the index.html of the newly-created site and tap or click Edit in the toolbar.








The Universal Editor opens in a new tab. You may need to tap or click Sign in with Adobe to authenticate to edit your page.








You can now edit your site using the Universal Editor. See the Universal Editor documentation for more information.
Once you are finished editing your new site using the Universal Editor, you can publish your content.
On the sites console, select all of the pages you created for your new site and tap or click Quick publish in the toolbar.








Tap or click Publish in the confirmation dialog to start the process.








Open a new tab in the same browser and navigate to the URL of your new site.
See your content published.








Now that you have a working WYSIWYG authoring with Edge Delivery Services project, you can begin creating and styling your own blocks.
Please see the guide Creating Blocks Instrumented for use with the Universal Editor for more information.

---

# Path Mapping for Edge Delivery Services | Adobe Experience Manager

CREATED FOR:
Learn how to map page paths used on the AEM authoring instance to public page paths used on the website and control which content is published to Edge Delivery Services.
To be able to author WYSIWYG content using AEM and publish it to Edge Delivery Services, you must set up your project’s path mapping. This mapping has two purposes.
The path mapping must be configured for each project individually and according to the project’s content and URL structure. It is used by AEM during content publishing and while editing content in the Universal Editor.
The format of the path mapping configuration contains two sections (mappings and includes) similar to the following example.
The mappings configuration holds an array of internal paths (on the AEM authoring instance) and external URL paths (on the public website).
The format is <internal paths>:<external path>. It typically consists of a minimum of two entries.
In this example, all pages stored under /content/aem-boilerplate/... will be publicly accessible on the Edge Delivery Services site directly under https://main--my-site--org.aem.live/.....
The includes configuration controls which content paths are actually replicated to Edge Delivery Services. It can hold any array of paths as well and typically contains the sites top level root page.
Assets used on Edge Delivery Services pages are typically published alongside the webpage. They will be exported from the AEM authoring instance to Edge Delivery Services automatically.
Your path mappings can be configured in one of two ways depending on the setup of your project.
If the project is configured for aem.live and uses the configuration service for centralized configurations, the paths mapping for each site is configured via this configuration service.
If the project does not use the configuration service, the paths mapping is configured via a paths.json file in you projects GitHub repository.
In both cases, once you configure your path mappings, you can check the configuration via the publicly-accessible configuration URL https://<branch>--<site>--<org>.aem.page/config.json.

---

# Creating Blocks Instrumented for use with the Universal Editor | Adobe Experience Manager

CREATED FOR:
Learn how to create blocks instrumented for use with the Universal Editor in WYSIWYG authoring with Edge Delivery Services projects.
This guide provides step-by-step instructions for how to create blocks instrumented for the Universal Editor in WYSIWYG authoring with Edge Delivery Services projects. It covers adding components, loading component definitions in the Universal Editor, publishing pages, implementing block decoration and styles, bringing the changes to production, and verifying them. Upon completing this guide, you can create and deploy a new block for your own project.
This guide necessarily requires existing knowledge of WYSIWYG authoring with Edge Delivery Services projects as well as the Universal Editor. Before beginning this guide, you should already have access to Edge Delivery Services and be familiar with its basics including:
This guide builds on the work done in the Developer Getting Started Guide for WYSIWYG authoring with Edge Delivery Services guide.
In this guide, you will build a block to render a memorable quote on your page.
To simplify this example, all changes are made to the main branch of the project repository. Of course for your actual project, you should follow development best practices by developing on a different branch and reviewing all changes via pull request before merging to main.
Adobe recommends that you develop blocks in a three-phased approach:
The following quote block example follows this approach.
1. Clone the GitHub project locally that you created in the Developer Getting Started Guide for WYSIWYG authoring with Edge Delivery Services guide and open it in an editor of your choice.








2. Edit the component-definition.json file at the root of the project and add the following definition for your new quote block and save the file.
```
{
  "title": "Quote",
  "id": "quote",
  "plugins": {
    "xwalk": {
      "page": {
        "resourceType": "core/franklin/components/block/v1/block",
        "template": {
          "name": "Quote",
          "model": "quote",
          "quote": "<p>Think, McFly! Think!</p>",
          "author": "Biff Tannen"
        }
      }
    }
  }
}
```
3. Edit the component-models.json file at the root of the project and add the following model definition for your new quote block and save the file.
```
{
  "id": "quote",
  "fields": [
     {
       "component": "richtext",
       "name": "quote",
       "value": "",
       "label": "Quote",
       "valueType": "string"
     },
     {
       "component": "text",
       "valueType": "string",
       "name": "author",
       "label": "Author",
       "value": ""
     }
   ]
}

```
4. Edit the component-filters.json file at the root of the project and add the quote block to the filter definition to allow the block to be added to any section and save the file.
```
{
  "id": "section",
  "components": [
    "text",
    "image",
    "button",
    "title",
    "hero",
    "cards",
    "columns",
    "quote"
   ]
}

```

5. Using git, commit these changes to your main branch.
Now that your basic quote block is defined and committed to the sample project, you can add a quote block to an existing page.
In a browser, sign into AEM as a Cloud Service. Using the Sites console, navigate to the site that you created in the Developer Getting Started Guide for WYSIWYG authoring with Edge Delivery Services guide and select a page.








Tap or click Edit in the toolbar of the console and the Universal Editor opens.
In the Universal Editor, select a section. In the properties panel, tap or click the Add icon and then select your new Quote block from the menu.








The page is reloaded and the quote block is added to the bottom of the selected section with the default content specified in the component-definitions.json file.








Once you are satisfied with the content of your quote, you can publish the page by tapping or clicking the Publish button in the toolbar of the Universal Editor.
Verify that the content was published by navigating to the published page. The link will be similar to https://<branch>--<repo>--<owner>.aem.page








Now that you have a working quote block you can apply styling to it.
1. Return to the editor for your project.
2. Create a quote folder under the blocks folder.








3. In the new quote folder, add a quote.js file to implement block decoration by adding the following JavaScript and save the file.
4. In the quote folder, add a quote.css file to define the styling for the block by adding the following CSS code and save the file.
5. Using git, commit these changes to your main branch.
6. Return to your browser tab of the Universal Editor where you were editing the page of your project and reload the page to view your styled block.
7. See the now styled quote block on the page.








8. Verify that the changes were pushed to production by navigating to the published page. The link will be similar to https://<branch>--<repo>--<owner>.aem.page



## Block Options
If you need a block to look or behave slightly differently based on certain circumstances, but not different enough to become a new block in itself, you can let authors choose from block options.

By adding a classes property to the block, the property rendered in the table header for simple blocks, or as value list for items in a container block.

```
{
  "id": "simpleMarquee",
  "fields": [
    {
      "component": "text",
      "valueType": "string",
      "name": "marqueeText",
      "value": "",
      "label": "Marquee text",
      "description": "The text you want shown in your marquee"
    },
    {
      "component": "select",
      "name": "classes",
      "value": "",
      "label": "Background Color",
      "description": "The marquee background color",
      "valueType": "string",
      "options": [
        {
          "name": "Red",
          "value": "bg-red"
        },
        {
          "name": "Green",
          "value": "bg-green"
        },
        {
          "name": "Blue",
          "value": "bg-blue"
        }
      ]
    }
  ]
}

```



Congratulations! You now have a fully working and styled quote block. You can use this example as a basis for designing your own project-specific blocks.
If you need a block to look or behave slightly differently based on certain circumstances, but not different enough to become a new block in itself, you can let authors choose from block options.
By adding a classes property to the block, the property rendered in the table header for simple blocks, or as value list for items in a container block.
This guide had you commit directly to the main branch for simplicity’s sake. For experimentation in a sample repository, this is usually not an issue. For actual project work, you should follow development best practices by developing on a different branch and reviewing all changes via pull request before merging to main.
When you are not developing on the main branch, you can append ?ref=<branch> in the Universal Editor location bar to load the page from your branch. <branch> is the branch name as it would be used for your project’s preview or live URLs, e.g. https://<branch>--<repo>--<owner>.aem.page.
You can use the blocks you create for WYSIWYG authoring using the Universal Editor for document-based authoring if you adhere to the same content model.
Please see the document Blocks for WYSIWYG and Document-Based Authoring for more information.
Now that you know how to create blocks, it is essential to understand how to model content in a semantic way to achieve a lean developer experience.
Please see the document Content Modeling for WYSIWYG authoring with Edge Delivery Services Projects to learn how content modeling works for WYSIWYG authoring with Edge Delivery Services projects.

---

# Content Modeling for WYSIWYG Authoring with Edge Delivery Services Projects | Adobe Experience Manager

CREATED FOR:
Learn how content modeling works for WYSIWYG Authoring with Edge Delivery Services projects and how to model your own content.
Projects using WYSIWYG Authoring with Edge Delivery Services inherit the majority of the mechanics of any other Edge Delivery Services project, independent of the content source or authoring method.
Before you begin modeling content for your project, make sure you first read the following documentation.
It is essential to understand those concepts in order to come up with a compelling content model that works in a content source-agnostic way. This document provides details about the mechanics implemented specifically for WYSIWYG authoring.
Default content is content an author intuitively would put on a page without adding any additional semantics. This includes text, headings, links, and images. Such content is self-explanatory in its function and purpose.
In AEM, this content is implemented as components with very simple, pre-defined models, which include everything that can serialized in Markdown and HTML.
The model of these components is part of the Boilerplate for WYSIWYG authoring with Edge Delivery Services.
Blocks are used to create richer content with specific styles and functionality. In contrast to default content, blocks do require additional semantics.
Blocks are essentially pieces of content decorated by JavaScript and styled with a stylesheet.
When using WYSIWYG authoring with Edge Delivery Services, the content of blocks must be modelled explicitly in order to provide the author the interface to create content. Essentially you need to create a model so the authoring UI knows what options to present to the author based on the block.
The component-models.json file defines the model of blocks. The fields defined in the component model are persisted as properties in AEM and rendered as cells in the table that makes up a block.
Note that not every block must have a model. Some blocks are simply containers for a list of children, where each child has its own model.
It is also necessary to define which blocks exist and can be added to a page using the Universal Editor. The component-definitions.json file lists the components as they are made available by the Universal Editor.
It is possible to use one model for many blocks. For example, some blocks may share a model that defines a text and image.
For each block, the developer:
All this information is stored in AEM when a block is added to a page. If either the resource type or block name are missing, the block will not render on the page.
The properties of blocks are defined in the component models and persisted as such in AEM. Properties are rendered as cells in the block’s table-like structure.
In the simplest form, a block renders each property in a single row/column in the order the properties are defined in the model.
In the following example, the image is defined first in the model and the text second. They are thus rendered with the image first and text second.
You may notice that some types of values allow inferring semantics in the markup, and properties are combined into in single cells. This behavior is described in the section Type Inference.
In many cases, it it recommended to decorate the rendered semantic markup, add CSS class names, add new nodes or move them around in the DOM, and apply styles.
In other cases however, the block is read as a key-value pair-like configuration.
An example of this is the section metadata. In this use case, the block can be configured to render as key-value pair table. Please see the section Sections and Section Metadata for more information.
Both of the previous structures have a single dimension: the list of properties. Container blocks allow adding children (usually of the same type or model) and hence are two-dimensional. These blocks still support their own properties rendered as rows with a single column first. But they also allow adding children, for which each item is rendered as row and each property as column within that row.
In the following example, a block accepts a list of linked icons as children, where each linked icon has an image and a link. Notice the filter ID set in the data of the block in order to reference the filter configuration.
With the mechanics of block structure explained, it is possible to create a content model that maps content persisted in AEM one-to-one to the delivery tier.
Early in every project, a content model must be carefully considered for every block. It must be agnostic to the content source and authoring experience in order to allow authors to switch or combine them while reusing block implementations and styles. More details and general guidance can be found in David’s Model (take 2). More specifically, the block collection contains a extensive set of content models for specific use cases of common user interface patterns.
For WYSIWYG authoring with Edge Delivery Services, this raises the question how to serve a compelling semantic content model when the information is authored with forms composed of multiple fields instead of editing semantic markup in-context like rich text.
To solve this problem, there are three methods that facilitate creating a compelling content model:
For some values we can infer the semantic meaning from the values itself. Such values include:
Everything else will be rendered as plain text.
Field collapse is the mechanism to combine multiple field values into a single semantic element based on a naming convention using the suffixes Title, Type, MimeType, Alt, and Text (all case sensitive). Any property ending with any of those suffixes will not be considered a value, but rather as an attribute of another property.
No linkType, or linkType=default
linkType=primary
linkType=secondary
While field collapse is about combining multiple properties into a single semantic element, element grouping is about concatenating multiple semantic elements into a single cell. This is particularly helpful for use cases where the author should be restricted in the type and number of elements that they can create.
For example, a teaser component may allow the author to only create a subtitle, title, and a single paragraph description combined with a maximum of two call-to-action buttons. Grouping these elements together yields a semantic markup that can be styled without further action.
Element grouping uses a naming convention, where the group name is separated from each property in the group by an underscore. Field collapse of the properties in a group works as previously described.
The same way a developer can define and model multiple blocks, they can define different sections.
The content model of Edge Delivery Services deliberately allows only a single level of nesting, which is any default content or block contained by a section. This means in order to have more complex visual components that can contain other components, they have to be modelled as sections and combined together using auto-blocking client side. Typical examples of this are tabs and collapsible sections like accordions.
A section can be defined in the same way as a block, but with the resource type of core/franklin/components/section/v1/section. Sections can have a name and a filter ID, which are used by the Universal Editor only, as well as a model ID, which is used to render the section metadata. The model is in this way the model of the section metadata block, which will automatically be appended to a section as key-value block if it is not empty.
The model ID and filter ID of the default section is section. It can be used to alter the behavior of the default section. The following example adds some styles and and a background image to the section metadata model.
The following example defines a tab section, which can be used to create a tabs block by combining consecutive sections with a tab title data attribute into a tabs block during auto-blocking.
Documents can have a page metadata block, which is used to define which <meta> elements are rendered in the <head> of a page. The page properties of pages in AEM as a Cloud Service map to those that are available out-of-the-box for Edge Delivery Services, like title, description, keywords, etc.
Before further exploring how to define your own metadata, please review the following documents to understand the concept of page metadata first.
It is also possible to define additional page metadata in two ways.
It is possible to define metadata on a per path or per path pattern basis in a table-like way in AEM as a Cloud Service. There is an authoring UI for table-like data available that is similar to Excel or Google Sheets.
For further details, please see the document Using Spreadsheets to Manage Tabular Data for more information.
Many of the default page properties available in AEM are mapped to the respective page metadata in a document. That includes for example title, description, robots, canonical url or keywords. Some AEM-specific properties are available as well:
It is also possible to define a component model for custom page metadata, which will be made available to the author in the Universal Editor.
To do so, create a component model with the ID page-metadata.
Now that you know how to model content, you can create blocks for your own Edge Delivery Services with WYSIWYG authoring project.
See the document Creating Blocks Instrumented for use with the Universal Editor to learn how to create blocks instrumented for use with the Universal Editor in WYSIWYG authoring with Edge Delivery Services projects.
If you are already familiar with creating blocks, please see the document Developer Getting Started Guide for WYSIWYG authoring with Edge Delivery Services to get you up-and-running with a new Adobe Experience Manager site using Edge Delivery Services and the Universal Editor for content authoring.

---

# Model Definitions, Fields, and Component Types | Adobe Experience Manager

CREATED FOR:
Learn about fields and the component types that the Universal Editor can edit in the properties panel with examples. Understand how you can instrument your own app by creating a model definition and linking to the component.
When adapting your own apps for use with the Universal Editor, you must instrument the components and define what fields and component types they can manipulate in the properties panel of the editor. You do this by creating a model and linking to that from the component.
This document provides an overview of a model definition and of fields and the component types available to you along with example configurations.
In order to configure a component via the properties panel in the Universal Editor, a model definition has to exist and be linked to the component.
The model definition is a JSON structure, starting with an array of models.
See the Fields section of this document for more information about how to define your fields array.
To use the model definition with a component, the data-aue-model attribute can be used.
Once a model is created, it can be referenced as an external file.
Alternatively you can also define the model inline.
A field object has the following type definition.
The following are the component types that are possible to use for rendering fields.
An AEM tag component type enables an AEM tag picker, which can be used to attach tags to the component.
An AEM content component type enables an AEM content picker, which can be used to select any AEM resource. Unlike the reference component, which can only select assets, the AEM content component can reference any AEM content. It offers an additional validation type.
A boolean component type stores a simple true/false value rendered as a toggle. It offers an additional validation type.
Similar to a boolean, a checkbox group component type allows for the selection of multiple true/false items, rendered as multiple checkboxes.
A container component type allows the grouping of components. It offers an additional configuration.
The Content Fragment picker can be used to select a Content Fragment and its variations (if required). It offers an additional configuration and validation.
A date time component type allows the specification of a date, time, or combination thereof. It offers additional configurations.
It also offers an additional validation type.
The Experience Fragment picker can be used to select an Experience Fragment and its variations (if required). It offers an additional configuration and validation.
A multiselect component type presents multiple items for selection in a drop-down including the ability to group the selectable elements.
A number component type allows for the input of a number. It offers additional validation types.
A radio group component type allows for a mutually-exclusive selection from multiple options rendered as a group similar to a checkbox group.
An reference component type enables an AEM asset picker, which can be used to select any AEM asset to reference. Unlike the AEM content component, which can select any AEM resource, the reference component can only reference assets. It offers an additional validation type.
A reference component type allows for a reference to another data object from the current object.
Rich text allows for multi-line, rich text input. It offers additional validation types.
A select component type allows for selection of a single option from a list of predefined options in a drop-down menu.
A tab component type allows you to group other input fields together on multiple tabs to improve layout organization for the authors.
A tab definition can be thought of as a separator in the array of fields. Everything that comes after a tab will be placed on that tab until a new tab is encountered, whereafter the following items will be placed on the new tab.
If you wish to have items that appear above all tabs, they must be defined before any tabs.
Text allows for a single line of text input. It includes additional validation types.

---

# Customizing and Extending the Universal Editor | Adobe Experience Manager

CREATED FOR:
Learn about the different extension points and other features that allow you to customize the authoring experience of the Universal Editor to support the needs of your content authors.
The Universal Editor allows for two types of adaptation for your project’s needs.
Both types are detailed in the following sections.
The Universal Editor offers several built-in options to customize its functionality.
Certain authoring workflows require content to be reviewed before it is published. In such situations, the option to publish should not be available to any authors.
The Publish button can therefore be suppressed entirely in an app by adding the following metadata.
When using the Universal Editor, you can restrict the allowed components per container component. To do this, you must introduce an additional script tag, which points to the filter definition.
A filter definition might look like the following, which would restrict a container to only allow adding text and images.
Then you can reference the filter definition from your container component by adding the property data-aue-filter, passing the ID of the filter you defined previously.
Setting the components attribute in a filter definition to null allows all components, as if there were no filter.
Although a component or components may generally be available to your authors, there may be certain situations where it does not make sense. In such cases, you can hide components in the properties panel by adding a condition attribute to the fields of the component model.
Conditions can be defined using JsonLogic schema. If the condition is true, then the field will be displayed. If the condition is false, then the field will be hidden.
You can specify a custom preview URL via a urn:adobe:aue:config:preview meta configuration, which will open when clicking the Open page button in the editor’s top-right toolbar.
This is particularly useful for applications with specific preview requirements, such as those using Edge Delivery Services with WYSIWYG authoring.
To do so, simply include the desired preview URL in a meta tag of the instrumented app like the following example.
As an Adobe Experience Cloud service, the Universal Editor’s UI can be extended using the App Builder and Experience Manager.
UI extensions are JavaScript applications built with Adobe App Builder that can be embedded in UI applications that run under Adobe Experience Cloud unified shell, such as the Universal Editor. You can add your own buttons and actions to the header menu and properties panel as well as create your own events for the Universal Editor.
If you would like to explore these possibilities, please see the following resources:
Using Extension Manager in AEM Sites, you can enable or disable your extensions on a per-instance basis, access Adobe’s first-party extensions including those for the Universal Editor, and much more.

---

# Documents Based Authoring and AEM Authoring with Edge Delivery Services



 *** New Page *** 

https://www.aem.live/developer/tutorial

Getting Started – Developer Tutorial
This tutorial will get you up-and-running with a new Adobe Experience Manager (AEM) project. In ten to twenty minutes, you will have created your own site and be able to create, preview, and publish your own content, styling, and add new blocks.
Prerequisites:
You have a GitHub account, and understand Git basics.
You have a AEM Sandbox.
You understand the basics of HTML, CSS, and JavaScript.
You have Node/npm installed for local development.
This tutorial uses macOS, Chrome, and Visual Studio Code as the development environment and the screenshots and instructions reflect that setup. You can use a different operating system, browser, and code editor, but the UI you see and steps you must take may vary accordingly.
Get started with the boilerplate repository template
The fastest and easiest way to get started following AEM best practices is to create your repository using the Boilerplate GitHub repository as a template.https://github.com/adobe-rnd/aem-boilerplate-xwalk
Click the Use this template button and select Create a new repository, and select the user org that owns the repository
We recommend that the repository is set to public.
The only remaining step in GitHub is to install the AEM Code Sync GitHub App on your repository by visiting this link: https://github.com/apps/aem-code-sync/installations/new
In the Repository access settings of the AEM Code Sync App, make sure you select Only select Repositories (not All Repositories). Then select your newly created repository, and click Save.
Note: If you are using Github Enterprise with IP filtering, you can add the following IP to the allow list: 3.227.118.73
Congratulations! You have a new website running on https://<branch>--<repo>--<owner>.aem.page/ In the example above that’s https://main--mysite--aemtutorial.aem.page/
Link your own content source using AEM
In your fork of the Boilerplate GitHub repository, the site points to an existing content source in AEM. See this folder for some example content.
A good way to start authoring your own content is to copy index, nav and footer from the sample content and familiarize yourself with the content structure. nav and footer are not changed frequently in a project and have a special structure. Most of the files in a project look more similar to index.
You have your content, you need to connect that content to your GitHub repo. You do this by changing the reference in fstab.yaml in your GitHub repo to the folder you just shared.Copy/paste the folder URL from your AEM to fstab.yaml.
Be aware that after you make that change, you will see 404 not found errors as your content has not been previewed yet. Please refer to the next section to see how to start authoring and previewing your content. If you copied over index, nav and footer all three of those are separate page with their own preview and publish cycles, so make sure you preview (and publish) all of them if needed.
Commit your changes and you have hooked up your own content source to your website.
Preview and publish your content
After completing the last step, your new content source is not empty, but no content has been promoted to the preview or live stages, which means your website serves 404s.To preview content, an author has to install the Sidekick Chrome extension. Find the Chrome extension in the Chrome Web Store.
After adding the extension to Chrome, don’t forget to pin it, this will make it easier to find it.
To set up the Chrome extension, go to your previously shared AEM folder and click the extension icon in the browser toolbar and select Add this project.
As soon as the extension is installed and your project is added, you are ready to preview and publish your content from your AEM.Select all three docs and activate the AEM Sidekick by clicking on your pinned extension. A new toolbar will appear. Clicking the preview or publish buttons will trigger the corresponding operation.
Open the index doc and make some changes. Activate the Sidekick by clicking on your pinned extension and then click the Preview button which will trigger the preview operation and open a new tab with the preview rendition of the content.
Start developing styling and functionality
To get started with development, it is easiest to install the AEM Command Line Interface (CLI) and clone your repo locally through using the following.
From there change into your project folder and start your local development environment using the following.
This opens http://localhost:3000/ and you are ready to make changes.A good place to start is in the blocks folder which is where most of the styling and code lives for a project. Simply make a change in a .css or .js and you should see the changes in your browser immediately.
Once you are are ready to push your changes, simply use Git to add, commit, and push and your code to your preview (https://<branch>--<repo>--<owner>.aem.page/) and production (https://<branch>--<repo>--<owner>.aem.live/) sites.
That’s it, you made it! Congrats, your first site is up and running. If you need help in the tutorial, please join our Discord channel or get in touch with us.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/home

What is Adobe Experience Manager?
Create a website,
seriously fast.
Adobe Experience Manager now integrates the tech you already own, know, and love. Your content, your tech, your audience taken to the next level.
Use the technology you already have
No time for slow sites
Faster sites, better business
You don’t have the time for slow sites – and neither do your visitors.
Business OwnersSlow sites are not just a bad experience, they are also bad business. Why spend to acquire traffic only to lose the engagement on the site? Improved performance improves business outcomes like conversions, time on site, and order values.
VisitorsPerformance is the number one factor limiting user experience of sites on the web. Performance outranks all other factors including design and content. Slow sites means users bounce, leave, and never return.
SEOSlow sites mean most of your audience won’t even see your site. With site performance becoming the most important factor for search engine rankings, this means lost traffic that you need to buy back in ads.
DevelopersMany developers are stuck getting their sites to acceptable performance standards, and great performance seems out of reach. Adobe Experience Manager takes a performance-first approach to delivery, making lighthouse score 100 a reality.
Publish Faster
A CMS that gets out of the way gets your content on the way
Business OwnersBy using the tools your authors already know, you don’t just cut down on time for training and onboarding, you also manage your content in one place. When dealing with structured content, Adobe Experience Manager plays nice with Excel and AEM Page.
AuthorsAEM takes the unstructured content that you already have, in Word or AEM Page, and turns it into active web experiences. You can use the tools you already know, and all it takes to publish is the press of a button.
DesignersThe content-first approach of AEM turns rigid content modeling chores on its head: the CMS adapts to the content authors create, instead of forcing authors to think in components, structure, and rules of a CMS.
Content OperationsBuilt with the needs of real-world mission-critical sites, AEM cracks the nuts of managing metadata at scale, delivering internationalized and localized content, optimizing for search engines, social sharing, testing, and experimentation.
Develop Faster
Everything modern web development needs, and not a single bit more
Business OwnersWith its lightweight approach to web development, Adobe Experience Manager allows you to go live in weeks, onboard new developers in days, and iterate on changes in minutes. Unlimited preview sites give you confidence that changes will be what you need.
OperationsAEM is one less thing to be on call for. Incredible availability due to fully redundant architecture, endless scalability as a full software as a service and easy integrations with your existing CDN make go-live anxiety a thing of the past.
DevelopersAEM uses all the things modern web developers love: GitHub, local development with auto-reload, performance, simplicity – and none of the complications: no transpilation, no bundlers, no configurations, no overhead.
Quality EngineersAutomated assurance of performance, accessibility, SEO, and best practices thanks to built-in quality checks. Continuous assurance of real-world site performance and functionality through real user monitoring.
Benefits
Made to meet your every CMS need and more
Unmatched Speed
The full Adobe Experience Manager stack is optimized for one thing: make your content shine, and make it fast. Delivering at speed is not enough, so we also make it fast to author, publish, and develop.
Content At Scale
From simple sites to ten thousands of pages, AEM handles content at scale, across markets, languages, and countries. And even the biggest sites publish instantly with pushed cache purges.
Uncertainty Eliminated
There’s no place for guesswork in authoring high-performing sites. Each preview generated by AEM offers 100% fidelity, and a unique, easily shareable URL for your reviewers.
Widen the Talent Pool
Using what you already know, is the core of the AEM approach. This means your team can do more with less, requires less training and creates fewer support tickets.
Low Code Productivity
Building great sites does not require complicated frameworks, tooling, or processes. AEM uses plain HTML, modern CSS, and vanilla JavaScript to create exceptional experiences without the usual overhead.
Composability is Here
Headless or headful, your content can go farther with AEM’s composable architecture. Deliver the right content in the right format, and add the right decorations to make it an experience that stands out in any channel.
Content First
No matter if structured or unstructured, AEM puts your content first, delivers it optimally and provides your developers with everything they need to make it shine.
Peak Performance
Every great experience starts and ends with performance. Adobe continuously monitors the performance of your AEM site and lets you know when there are ways to improve. All you have to do is approve the pull request.
Go live with trusted digital leaders
Customer Stories
Making an impact with our customers from the start
“Adobe made it easy for us to launch with a Lighthouse Score of 100, something nearly unheard of for professional sites. We did not have to compromise on functionality, even video-heavy sites perform superbly. And when the experience degrades, Adobe fixes issues proactively before we even notice”
Scott Gutterman
PGA TOUR Senior Vice President, Digital Operations
100Google Lighthouse
50xPeak Traffic Ratio
12+Sites launched in Q1
“Adobe Experience Manager has been a game-changer for our website. The easy-to-use platform has allowed us to provide our customers with in-depth product information and support resources in eight different languages, which has helped us to maintain our global reach.”
Geoff Angell
Digital Strategy Manager, Graco
100Google Lighthouse
8Language Markets
10Custom Blocks
“With AEM we were able to spin up a critical site in a few weeks and get our new division’s story to market effectively. Creating a new marketing site for our enterprise division that allowed us to meet our key stakeholders’ performance and authoring requirements has never been easier. ”
Corey Hankey
Managing Partner, Thinkingbox
100Google Lighthouse
20+Custom Blocks
4+Case Studies
How it works
Creating a site with AEM is easy as
01
Create content inMicrosoft Word orAEM Page.
Create a new page in AEM
02
Share your folderwith Adobe.
After you create a page, head back to your folder and share it with Adobe Experience Manager.
03
See your sitein action.
After you have added some content, shared with Adobe, built a repo, and tied your repo to your content, you can see your site in action.
See the real value of Adobe Experience Manager

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs

Documentation
Helpful guides for your journey with Adobe Experience Manager
Build
Publish
Launch
Build
Developer Tutorial
This tutorial will get you up-and-running with a new project.
Developer Tutorial
This tutorial will get you up-and-running with a new project.
Anatomy of a Project
Discover how a typical project should look from a code standpoint.
Anatomy of a Project
Discover how a typical project should look from a code standpoint.
Block Collection
A collection of blocks considered a part of the product and are recommended as blueprints for blocks in your project.
Block Collection
A collection of blocks considered a part of the product and are recommended as blueprints for blocks in your project.
Spreadsheets
Microsoft Excel workbooks and AEM Page are translated into JSON files that can easily be consumed by your website or web application.
Spreadsheets
Microsoft Excel workbooks and AEM Page are translated into JSON files that can easily be consumed by your website or web application.
Indexing
How to keep an index of all the published pages in a particular section of your website.
Indexing
How to keep an index of all the published pages in a particular section of your website.
Keeping it 100
The quality of the experience of consumers of your website is crucial to achieving the business goals of your website and the satisfaction of your visitors.
Keeping it 100
The quality of the experience of consumers of your website is crucial to achieving the business goals of your website and the satisfaction of your visitors.
Markup - Sections
The markup and DOM are constructed in a way that allows flexible manipulation and styling.
Markup - Sections
The markup and DOM are constructed in a way that allows flexible manipulation and styling.
Favicon
Adding a favicon to your site gives it a professional look in your visitor’s browsers.
Favicon
Adding a favicon to your site gives it a professional look in your visitor’s browsers.
Custom Headers
Learn how to apply custom HTTP response headers to resources, for example to allow CORS.
Custom Headers
Learn how to apply custom HTTP response headers to resources, for example to allow CORS.
Development Collaboration and Good Practices
Become a better developer and team mate with these tips from successful AEM project leads.
Development Collaboration and Good Practices
Become a better developer and team mate with these tips from successful AEM project leads.
Publish
Authoring
If you use Microsoft Word or AEM Page, then you already know how to create content.
Authoring
If you use Microsoft Word or AEM Page, then you already know how to create content.
Bulk Metadata
In some cases, it is useful to apply metadata en masse to a website.
Bulk Metadata
In some cases, it is useful to apply metadata en masse to a website.
Slack Bot
We are available to you on Slack, and our Slack Bot can perform useful tasks.
Slack Bot
We are available to you on Slack, and our Slack Bot can perform useful tasks.
Placeholders
Placeholders can be managed as a spreadsheet that is either in the root folder of the project or in the locales root folder in the case of a multilingual site.
Placeholders
Placeholders can be managed as a spreadsheet that is either in the root folder of the project or in the locales root folder in the case of a multilingual site.
Sitemap
Automatically generate sitemap files to be referenced from your robots.txt. This helps with SEO and the discovery of new content.
Sitemap
Automatically generate sitemap files to be referenced from your robots.txt. This helps with SEO and the discovery of new content.
Launch
Go Live Checklist
The go-live checklist is a summary of best practices to consider when launching a website.
Go Live Checklist
The go-live checklist is a summary of best practices to consider when launching a website.
Push Invalidation
Automatically purge content on your production CDN, whenever an author publishes content changes.
Push Invalidation
Automatically purge content on your production CDN, whenever an author publishes content changes.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
Bring your own DNS
A custom domain without having to set up a content delivery network.
Bring your own DNS
A custom domain without having to set up a content delivery network.
Redirects
You can intuitively manage redirects as a spreadsheet called redirects (or redirects.xlsx) in the root of your project folder.
Redirects
You can intuitively manage redirects as a spreadsheet called redirects (or redirects.xlsx) in the root of your project folder.
Resources
Sidekick
Install the AEM Sidekick to author and publish with Adobe Experience Manager.
Sidekick
Install the AEM Sidekick to author and publish with Adobe Experience Manager.
FAQ
Answers to your other questions in one place.
FAQ
Answers to your other questions in one place.
Admin API
Reference documentation for the Admin API.
Admin API
Reference documentation for the Admin API.
AEM Status
Check if Adobe Experience Manager sites are available right now and confirm service level availability.
AEM Status
Check if Adobe Experience Manager sites are available right now and confirm service level availability.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/

Documentation
Helpful guides for your journey with Adobe Experience Manager
Build
Publish
Launch
Build
Developer Tutorial
This tutorial will get you up-and-running with a new project.
Developer Tutorial
This tutorial will get you up-and-running with a new project.
Anatomy of a Project
Discover how a typical project should look from a code standpoint.
Anatomy of a Project
Discover how a typical project should look from a code standpoint.
Block Collection
A collection of blocks considered a part of the product and are recommended as blueprints for blocks in your project.
Block Collection
A collection of blocks considered a part of the product and are recommended as blueprints for blocks in your project.
Spreadsheets
Microsoft Excel workbooks and AEM Page are translated into JSON files that can easily be consumed by your website or web application.
Spreadsheets
Microsoft Excel workbooks and AEM Page are translated into JSON files that can easily be consumed by your website or web application.
Indexing
How to keep an index of all the published pages in a particular section of your website.
Indexing
How to keep an index of all the published pages in a particular section of your website.
Keeping it 100
The quality of the experience of consumers of your website is crucial to achieving the business goals of your website and the satisfaction of your visitors.
Keeping it 100
The quality of the experience of consumers of your website is crucial to achieving the business goals of your website and the satisfaction of your visitors.
Markup - Sections
The markup and DOM are constructed in a way that allows flexible manipulation and styling.
Markup - Sections
The markup and DOM are constructed in a way that allows flexible manipulation and styling.
Favicon
Adding a favicon to your site gives it a professional look in your visitor’s browsers.
Favicon
Adding a favicon to your site gives it a professional look in your visitor’s browsers.
Custom Headers
Learn how to apply custom HTTP response headers to resources, for example to allow CORS.
Custom Headers
Learn how to apply custom HTTP response headers to resources, for example to allow CORS.
Development Collaboration and Good Practices
Become a better developer and team mate with these tips from successful AEM project leads.
Development Collaboration and Good Practices
Become a better developer and team mate with these tips from successful AEM project leads.
Publish
Authoring
If you use Microsoft Word or AEM Page, then you already know how to create content.
Authoring
If you use Microsoft Word or AEM Page, then you already know how to create content.
Bulk Metadata
In some cases, it is useful to apply metadata en masse to a website.
Bulk Metadata
In some cases, it is useful to apply metadata en masse to a website.
Slack Bot
We are available to you on Slack, and our Slack Bot can perform useful tasks.
Slack Bot
We are available to you on Slack, and our Slack Bot can perform useful tasks.
Placeholders
Placeholders can be managed as a spreadsheet that is either in the root folder of the project or in the locales root folder in the case of a multilingual site.
Placeholders
Placeholders can be managed as a spreadsheet that is either in the root folder of the project or in the locales root folder in the case of a multilingual site.
Sitemap
Automatically generate sitemap files to be referenced from your robots.txt. This helps with SEO and the discovery of new content.
Sitemap
Automatically generate sitemap files to be referenced from your robots.txt. This helps with SEO and the discovery of new content.
Launch
Go Live Checklist
The go-live checklist is a summary of best practices to consider when launching a website.
Go Live Checklist
The go-live checklist is a summary of best practices to consider when launching a website.
Push Invalidation
Automatically purge content on your production CDN, whenever an author publishes content changes.
Push Invalidation
Automatically purge content on your production CDN, whenever an author publishes content changes.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
Bring your own DNS
A custom domain without having to set up a content delivery network.
Bring your own DNS
A custom domain without having to set up a content delivery network.
Redirects
You can intuitively manage redirects as a spreadsheet called redirects (or redirects.xlsx) in the root of your project folder.
Redirects
You can intuitively manage redirects as a spreadsheet called redirects (or redirects.xlsx) in the root of your project folder.
Resources
Sidekick
Install the AEM Sidekick to author and publish with Adobe Experience Manager.
Sidekick
Install the AEM Sidekick to author and publish with Adobe Experience Manager.
FAQ
Answers to your other questions in one place.
FAQ
Answers to your other questions in one place.
Admin API
Reference documentation for the Admin API.
Admin API
Reference documentation for the Admin API.
AEM Status
Check if Adobe Experience Manager sites are available right now and confirm service level availability.
AEM Status
Check if Adobe Experience Manager sites are available right now and confirm service level availability.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/sidekick

Using the AEM Sidekick
​​The AEM sidekick provides content authors with a toolbar offering context-aware options so that they can edit, preview, and publish their content directly from the pages of your website.
This document explains how to use the sidekick.
Installation
Please see the document Installing the AEM Sidekick for how to install and configure the sidekick.
Using the Sidekick
The sidekick can be invoked in the following contexts:
Within project environments
Within online editors (depending on your project setup) to edit your content
AEM Page/Sheets
Microsoft Word/Excel
AEM Page/Sheets
Microsoft Word/Excel
To use the sidekick extension, navigate to a URL associated with your project. This can be one of the following:
A  or Google document (desktop only)
A Preview URL (the domain name ending in .hlx.page)
A Live URL (the domain name ending in .hlx.live)
A production URL (the domain name being your project’s public host name). Note: This requires adding the project to your configuration
The sidekick extension can be toggled by clicking the Adobe Experience Cloud icon next to the address bar.
Adding Projects
Adding projects to your sidekick configuration is optional for most use cases. The sidekick is able to auto-detect if a URL is associated with your project. If you want the sidekick to also recognize custom domains, such as your project’s production domain, you’ll need to persist the project in your sidekick configuration by clicking the + button on the right hand side..
Environment Switcher
The environment switcher on a sidekick in AEM Page.
When using document-based authoring to create content, content moves from the editor through different environments. The environment switcher allows you to easily jump around between them.
Preview
This option takes you to the preview environment, which reflects the latest changes of the page rendered from the source document. You can also send preview URLs to stakeholders so they can review your content before it gets published. Note that this option is only enabled if the content you are looking at has been previewed before.
The preview URL follows the pattern https://branch--repo--org.hlx.page/path.
branch, repo and org identify the location of your project’s underlying code in GitHub
/path corresponds to the location of the content in AEM or OneDrive, starting from the root folder.
A / at the end of a path refers to the index document in a folder.
Live
This option is only available if there is not yet a production environment. It shows the published content and serves as a stand-in (and the origin) for your project’s production environment. Note that this option is only enabled if the content you are looking at has been published before.
The live URL looks almost identical to the preview URL, the only difference being in the 1st level domain: https://main--repo--org.hlx.live/path
Production
This option takes you to the production environment, which is your project’s public-facing website. Note that this option may not be available during the development stage of your project or because the content has not been published yet.
This environment can be a 3rd-party or “bring your own” CDN. Depending on the project setup, new content may only appear after a delay.
If your public-facing domain name is yourproject.com, the production URL would be https://yourproject.com/path
Actions
There are a number of actions that you can take on your content by conveniently using the sidekick toolbar. Actions that have not been executed since the content was last changed are badged with an orange indicator.
Preview
\ The preview action on a sidekick in AEM Page.
Preview is the predominant action in the editor. It (re)generates the preview page based on the current document and opens it in a separate tab.
Edit
The Edit action is available in all three environments. It opens the online editor of the current page’s source document in a separate window.
The sidekick in a preview environment.
At a minimum read access to the document in AEM or OneDrive is required to use this action.
Reload
The Reload action is available in the preview environment only. It can be used to force a content refresh, for example if you have editor and preview open side by side while working on the content. The action is identical to the Preview action in the editor.
Publish
The Publish action is available in all three environments and makes the current preview version of the page available in the live and production environments.
The sidekick in a live environment.
Visitors to your public-facing website will not be able to see changes until they are published.
Bulk Actions
Open the sidekick in AEM or  and select one or more files to bulk preview and publish files and conveniently copy their URLs. You can also use this feature to preview and publish media like SVG or PDF files.
Adobe continues to extend the support for file formats that can be published directly from your content source ( or AEM) based on popular use and security considerations. Currently the supported formats include: PDF, SVG, JPG, PNG.
Formats that are under consideration for being added include: XML, MP4 as well as raw DOCX, XLSX, PPTX without transformation.
Limitation: in , larger selections (more than 60) may not be fully exposed to the sidekick and may therefore need to be split into smaller badges.
For a page without a source document (i.e. it was renamed or moved), the sidekick will show the following two actions when invoked in the preview environment.
Note: If you are signed in to the sidekick, you can skip deleting the underlying source document and simply hold down the Alt (Windows) or Option (Mac) key to bring up the Delete and Unpublish actions.
The sidekick on a preview page without a source document.
Delete
The Delete action will permanently delete the page from all environments, implicitly unpublishing it.
Unpublish
This Unpublish action will unpublish the page, but still keep it in the preview environment for reference.
See the document Authoring and Publishing Content for more information about deleting content.
Caution: The Delete and Unpublish actions cannot be undone! Double-check the URL and page content to make sure it is really OK to delete and/or unpublish a page. The source document may have been moved accidentally and may not need to be deleted.
Sharing the Sidekick
You can share the sidekick configuration for your project by clicking the share symbol at the top right. This will copy a share URL to your clipboard and allow you to paste it in a DM or email to a colleague. The share URL will enable the recipient to effortlessly install the sidekick for your project.
See the document Installing the AEM Sidekick for more information.
Customizing the Sidekick
If you are a developer, you can customize the sidekick for your project.
3rd Party Libraries

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/anatomy-of-a-franklin-project

The Anatomy of a Project
This document describes what a typical project should look like from a code standpoint. Before reading this document, please familiarize yourself with the document Getting Started - Developer Tutorial.
Git and GitHub
One of our defining philosophies is that it is easiest to allow users to work with the tools that they are familiar with. The overwhelming majority of developers manage their code in systems based on Git, so it only makes sense to allow developers to work with Git to manage and deploy their code.
We are using a buildless approach that runs directly from your GitHub repo. After installing the AEM GitHub bot on your repo, websites are automatically created for each of your branches for content preview on https://<branch>--<repo>--<owner>.hlx.page/ and the production site on https://<branch>--<repo>--<owner>.hlx.live/ for published content.
Every resource that you put into your GitHub repo is available on your website, so a file in your GitHub repo on the main branch in /scripts/scripts.js will be available on https://main--<repo>--<owner>.hlx.page/scripts/scripts.jsThis should be very intuitive. There are few “special” files that Adobe Experience Manager uses to connect the content into your website.
We strongly recommend that repos are kept public on GitHub, to foster the community. For a public facing website there really is no need to keep the code hidden, as it is being served to the browsers of your website.
Important notes:
The combination <branch>--<repo>--<owner> must not exceed 63 characters (including the hyphens/dashes). This is a subdomain name constraint.
branch, repo and owner cannot contain --.
Configuration Files
There are some files in your GitHub repo that have a special meaning to AEM and are processed in a special fashion. These files are in the root directory of your repo.
The Content Connection: fstab.yaml
As you may have seen in the getting started guide the fstab.yaml file serves as the connection to your AEM or  folders that contain your content. This file is used as an indicator for how the code in your GitHub repo gets combined with the content in your content source.
Beyond providing the connection to the content, the fstab.yaml also provides a folder mapping facility that allows you map extensionless “routes” to a given piece of content or static HTML.
The Entry Point: head.html
The head.html file is the most important extension point to influence the markup of the content. The easiest way to think of it is that this file is injected on the server side as part of the <head> HTML tag and is combined with the metadata coming from the content.
The head.html should remain largely unchanged from the boilerplate and there are only very few legitimate reasons in a regular project to make changes. Those include remapping your project to a different base URL for the purposes of exposing your project in a different folder than the root folder of your domain on your CDN or to support legacy browsers which usually require scripts that are not loaded as modules.
Adding marketing technology like Adobe Web SDK, Google Tag Manager or other 3rd party scripts to your head.html file is strongly advised against due to performance impacts. Adding inline scripts or styles to head.html is also not advisable for performance and code management reasons, see the section Scripts and Styles below for more information about handling scripts and styles.
Please see the following examples.
https://github.com/adobe/helix-project-boilerplate/blob/main/head.html
https://github.com/adobe/express-website/blob/main/head.html
https://github.com/adobe/business-website/blob/main/head.html
Not Found: 404.html
To create a custom 404 response, place a 404.html file into the root of your github repository. This will be served on any URL that doesn’t map to an existing resource in either content or code, and replaces the body of the out of the box minimalist 404 response.
The 404 can mimic the markup of an existing page including your code for the site, with navigation footers etc., or it can have a completely different appearance.
Please see the following examples.
https://github.com/hlxsites/bamboohr-website/blob/main/404.html See in Action
https://github.com/adobe/design-website/blob/main/404.html See in Action
https://github.com/adobe/blog/blob/main/404.html See in Action
Don’t Serve: .hlxignore
There are some files in your repo that should not be served from your website, either because you would like to keep them private or they are not relevant to the delivery of the website (e.g. tests, build tools, build artifacts, etc.) and don’t need to be observed by the AEM bot. You can add those to a .hlxignore file in the same format as the well-known .gitignore file.
Please see the following example.
https://github.com/adobe/helix-website/blob/main/.hlxignore
Tame the Bots: robots.txt
A robots.txt file is generally a regular file that is served as you would expect on your production website on your own domain. To protect your preview and origin site from being indexed, your .page and .live sites will serve a robots.txt file that disallows all robots instead of the robots.txt file from your repo.
Please see the following examples.
https://github.com/adobe/blog/blob/main/robots.txt
https://github.com/adobe/pages/blob/main/robots.txt
https://github.com/adobe/helix-website/blob/main/robots.txt
Query and Indexing: helix-query.yaml
There is a flexible indexing facility that lets you keep track of all of your content pages conveniently as a spreadsheet. This facility is often used to show lists or feeds of pages as well as to filter and sort content on a website. Please see the document Indexing for more information.
Please see the following examples.
https://github.com/adobe/express-website/blob/main/helix-query.yaml
https://github.com/adobe/design-website/blob/main/helix-query.yaml
https://github.com/adobe/blog/blob/main/helix-query.yaml
Automate Your Sitemap: helix-sitemap.yaml
Complex sitemaps can automatically be created for you whenever authors publish new content, including flexible hreflang mappings where needed. This functionality is usually based on the indexing facility.See this GitHub issue for sitemap configuration options.
Please see the following examples.
https://github.com/adobe/pages/blob/main/helix-sitemap.yaml
https://github.com/adobe/fedpub/blob/main/helix-sitemap.yaml
https://github.com/adobe/express-website/blob/main/helix-sitemap.yaml
Commonly Used File and Folder Structure
Beyond the files treats as special or configuration files, there is a commonly-used structure that is expressed in the Boilerplate repo.
The common folders below are usually in the root directory of a project repo, but in cases where only a portion of a website is handled by AEM, they are often moved to a subfolder to reflect the mapping of the route of the origin in a CDN.
This means that in a case where for example only /en/blog/ is initially mapped to AEM from the CDN, all the folder structures below (eg. /scripts, /styles, /blocks etc.) are moved into a the /en/blog/ folder in GitHub to keep the CDN mapping as simple as possible.
With a simple adjustment of the reference to scripts.js and styles.css in head.html (see above) it is possible to indicate that all the necessary files are loaded from the respective code base directory. To avoid url rewriting the folder structure is also created the content source (eg.  or AEM) by having a directory structure of /en/blog/.In many cases as the AEM footprint grows on a site there is a point in time when the code gets moved back to the root folder and the head.html references are adjusted accordingly.
Scripts and Styles
By convention in a AEM project, the head.html references styles.css, scripts.js, and lib-aem.js located in /scripts and /styles, as the entry points for the project code.
scripts.js is where your global custom javascript code lives and is where the block loading code is triggered. styles.css hosts the global styling information for your site, and minimally contains the global layout information that is needed to display the Largest Contentful Paint (LCP).As all three files are loaded before the page can be displayed, it is important that they are kept relatively small and executed efficiently.Beyond styles.css, a lazy-styles.css file is commonly used, which is loaded after the LCP event, and therefore can contain slower/more CSS information. This could be a good place for fonts or global CSS that is below the fold.
In addition to scripts.js, there is the commonly-used delayed.js. This is a catch-all for libraries that need to be loaded on a page but should be kept from interfering with the delivery of the page. This is a good place for code that is outside of the control of your project and usually includes the martech stack and other libraries.
Please see the document Keeping it 100, Web Performance for more information about optimizing your site performance.
Blocks
Most of the project-specific CSS and JavaScript code lives in blocks. 
The block name is used as both the folder name of a block as well as the filename for the .css and .js files that are loaded by the block loader when a block is used on a page.
The block name is also used as the CSS class name on the block to allow for intuitive styling. The javascript is loaded as a module (ESM) and exports a default function that is executed as part of the block loading.
A simple example is the Columns Block. It adds additional classes in JavaScript based on how many columns are in the respective instance created by the author. This allows it to be able to use flexible styling of content that is in two columns vs. three columns.
Icons
Most projects have SVG files that are usually added to the /icons folder, and can be referenced with a :<iconname>: notation by authors. By default, icons are inlined into the DOM so they can be styled with CSS, without having to create SVG symbols.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection

Block Collection
This is a collection of blocks considered a part of the AEM product and are recommended as blueprints for blocks in your project.
These blocks come from real production AEM projects. To be a part of this collection, a block needs to have a high use across a number of projects and provide enough abstract functionality and be general enough so it can be reused without having to change the underlying content model.
As the needs and designs of websites change, the block collection will change as well. Additions will be made to reflect emerging needs of projects, but blocks that are not used frequently enough will also be removed (deprecated).
There are few technical principles for the blocks in the collection:
Intuitive: Content structure that’s intuitive and easy to author
Useable: No dependencies, compatible with boilerplate
Responsive: Works across all breakpoints
Context Aware: Inherits CSS context such text and background colors
Localizable: No hard-coded content
Fast: No negative performance impact
SEO and A11y: SEO friendly and accessible
All of the blocks can be considered as a basis for your own block development. It is very likely that you will change all the .css and .js code to meet your own project needs. The primary value of these blocks is the content structure they provide.Considering that the code of your block will be fully adapted to your project, there is no intent for the blocks in the collection to be backwards compatible to their respective older versions or to make them upgradable.
Boilerplate
The most commonly used blocks (as well as default content types) are curated in the AEM Boilerplate and are a part of every AEM project. For a block to become a part of boilerplate it has to be used by the vast majority of all AEM projects.
The code base for all the blocks in AEM Boilerplate is open-source and can be found on GitHub adobe/aem-boilerplate
Blocks in AEM Boilerplate can be discovered using the sidekick library below, use the copy button to copy the corresponding content structure into your clipboard and paste into a document to see the content structure.
Headings
Default Content
Different levels of headings provide the semantic backbone of your document
Text
Default Content
Body text or copy with rich semantic formatting options
Images
Default Content
Pictures bring your content alive
Lists
Default Content
Ordered and unordered lists wherever they are needed
Links
Default Content
Reference other websites or your own content
Buttons
Default Content
Call-to-action buttons and more
Code
Default Content
Highlight preformatted code snippets in your content
Sections
Default Content
Group content on your page into sections
Icons
Default Content
Make your content more interesting with icons
Hero
Block
Hero treatment at the top of a page
Columns
Block
Flexible way to handle multi-column layouts in a responsive way
Cards
Block
List of cards with or without images and links
Header
Block
Flexible header and navigation example
Footer
Block
Simple extensible footer block
Metadata
Add metadata to your page where needed
Section Metadata
Highlight or structure all the content in a section
Block Collection
The block collection contains blocks that are commonly-used, but are not so common to be considered boilerplate. As a rule-of-thumb, to be included in the block collection a block must be used on more than half of all AEM projects.
The block collection can be the entry path into boilerplate code. Likewise if a block in the boilerplate is no longer used as much, it can be moved to this collection.
The code base for all the blocks in AEM Block Collection is open-source and can be found on GitHub adobe/aem-block-collection
Blocks in AEM Block Collection can be discovered using the sidekick library below, use the copy button to copy the corresponding content structure into your clipboard and paste into a document to see the content structure.
Embed
Block
A simple way to embed social media content into AEM pages
Fragment
Block
Share pieces of content across multiple pages
Table
Block
A way to organize tabular data into rows and columns
Video
Block
Display and playback videos directly from AEM
Accordion
Block
A stack of descriptive labels that can be toggled to display related full content
Breadcrumbs
Block Add-on
A list of page titles and relevant links showing the location of the current page in the navigational hierarchy
Carousel
Block
A dynamic display tool that smoothly transitions through a series of images with optional text content
Modal
Autoblock
A popup that appears over other site content
Quote
Block
A display of a quotation or a highlight of specific passage (or “pull quotes”) within a document
Search
Block
Allows users to find site content by entering a search term
Tabs
Block
Segment information into multiple labeled (or “tabbed”) panels
Form
Block (Deprecated)
A set of input controls grouped together that enables users to submit information
The block collection is continually evolving based on the feedback from the AEM community. If you think that there is a block that should be included in the block collection please speak to your AEM contact. Current candidates for inclusion in the block collection include:
Consent Banner
If you have immediate need of a block that is not yet part of the collection, it is relatively easy to find AEM projects on GitHub that have example implementations for all of the above candidates.
Block Party
The Block Party is a place for the AEM developer community to showcase what they have built on AEM sites. It also allows others to avoid reinventing the wheel and reuse these blocks / code snippets / integrations built by the community and tweak the code as necessary to fit their own projects. See Block Party for everything it has to offer.
Note: While we love and support our AEM developer community, Adobe is not responsible for maintaining or updating the code that is showcased in Block Party. Please use the code at your own discretion.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/spreadsheets

Spreadsheets and JSON
In addition to translating AEM Page into markdown and HTML markup, AEM also translates spreadsheets (Microsoft Excel workbooks and AEM Page) into JSON files that can easily be consumed by your website or web application.
This enables many uses for content that is table-oriented or structured.
Sheets and Sheet structure
The simplest example of a sheet consists of a table that uses the first row as column names and the subsequent rows as data. An example might look something like this.
After a preview and publish via the sidekick, AEM translates this table to a JSON representation which is served to requests to the corresponding .json resource. The above example gets translated to:
AEM allows you to manage workbooks with multiple sheets.
If there is only one sheet, AEM will by default use that sheet as the source of the information.
If there are multiple sheets, AEM will only deliver sheets that are prefixed with helix- which lets you keep additional information and possibly formulas in the same spreadsheet that are not delivered to the web.
If there is a sheet named helix-default, it is delivered if there are no additional query parameters supplied.
See the following section for details on how to query a specific sheet.
Query Parameters
Offset and Limit
Spreadsheets and JSON files can get very large. In such cases, AEM supports the use of limit and offset query parameters to indicate which rows of the spreadsheet are delivered.
As AEM always compresses the JSON, payloads are generally relatively small. Therefore by default AEM limits the number of rows it returns to 1000 if the limit query parameter is not specified. This is sufficient for many simple cases.
Sheet
The sheet query parameter allows an application to specify one or multiple specific sheets in the spreadsheet or workbook. As an example ?sheet=jobs will return the sheet named helix-jobs and ?sheet=jobs&sheet=articles will return the data for the sheets named helix-jobs and helix-articles.
Special Sheet Names
In certain use cases, AEM also writes to spreadsheets, where it expects specific sheet names.
The forms service only writes to a sheet named incoming, which is never delivered as a JSON.
The index service only writes to a sheet named raw_index, which may be delivered to JSON in a simple single sheet setup.
See the links above for more information on those services.
Arrays
Native arrays are not supported as cell values, so they are delivered as strings.
"tags": "[\"Adobe Life\",\"Responsibility\",\"Diversity & Inclusion\"]"
You can turn them back into arrays in JavaScript using JSON.parse().

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/indexing

Indexing
Adobe Experience Manager offers a way to keep an index of all the published pages in a particular section of your website. This is commonly used to build lists, feeds, and enable search and filtering use cases for your pages or content fragments.
AEM keeps this index in a spreadsheet and offers access to it using JSON. Please see the document Spreadsheets and JSON for more information.
We will introduce the concept of creating a query index by previewing an Excel workbook or Google spreadsheet first. Note, that if you already have a custom query definition in a file called helix-query.yaml in your GitHub repository, it is no longer possible to create indexes that way. Every new index will have to be manually added to that helix-query.yaml.
Setting Up an Initial Query Index
In this section we’ll create a query index in the root folder that will index all pages in your backend.
After setting up your fstab.yaml with a mountpoint that points into your  site or AEM, go to the root folder.
Depending on your backend, create either a workbook named query-index.xlsx for  or a spreadsheet named query-index for AEM.
In that spreadsheet or workbook, create a sheet named raw_index.
Setting Up Properties to be Added to the Index
In your query-index document, add a header line and in the first column add path as the header name.
In the following columns of the header line, add all other properties you need extracted from the rendered HTML page.
In the following example in AEM, the extracted fields are title, image, description, and lastModified.
Pages are indexed when they are published. To remove pages from index, they have to be unpublished.
For simple scenarios without custom index definition, pages that have robots metadata property set to noindex will automatically be omitted from indexing by AEM. (There are a few special scenarios here, for more details see the section Special Scenarios for Robots).
The following table summarizes the properties that are available and from where in the HTML page they’re extracted.
Returns the content of the meta tag named article:tag in the head element as an array.
See the document Spreadsheets and JSON for more information on array-handling.
For every other header added, the indexer will try to find a meta tag with a corresponding name.
Activate Your Index
To activate your index, preview the spreadsheet using the sidekick. This will create an index configuration.
Checking Your Index
The Admin Service has an API endpoint where you can check the index representation of your page. Given your GitHub owner, repository, branch and owner, and a resource path to a page, its endpoint is:
https://admin.hlx.page/index/<owner>/<repo>/<branch>/<path>
You should get a JSON response where the data node contains the index representation of the page.
Debugging Your Index Configuration
The AEM CLI has a feature where it will print the index record whenever you change your query configuration, which assists in finding the correct CSS selectors:
$ aem up --print-index
Please see the AEM CLI GitHub documentation for more information and watch this video to learn more about this feature.
Setting Up More Index Configurations
You can define your own custom index configurations by creating your own helix-query.yaml. This allows you to have more than one index configuration in the same helix-query.yaml, where parts of your sites are indexed into different Excel workbooks or Google spreadsheets. See the document Indexing reference for more information.
Special Scenarios for Robots
There are a few nuances on how pages get indexed by AEM in conjunction with indexing setup for your site. Let’s look at them:
In the following 2 situations, setting robots to noindex on the page metadata would not prevent it from being indexed by AEM:
You have added a robots column in query-index.xlsx
You have a helix-query.yaml in your Github repository i.e. you have defined a custom index definition.
Recommendations
If you do not have a custom index definition, it is recommended to not add a robots column to your index sheet unless you have a requirement for doing so.Adding robots column to your index sheet would cause a page to be indexed by AEM even though it may have robots metadata set to noindex.
If you do have a custom index definition, pages would get indexed by AEM irrespective of setting robots to noindex on the page metadata. If you want to prevent this from happening, you can use spreadsheet filters to omit pages from index that have robots metadata set to noindex. For more details, see the section titled "Enforcing noindex configuration with custom index definitions" below.
Enforcing “noindex” configuration with custom index definitions
If you have defined your own custom index definitions in helix-query.yaml, setting the robots property to noindex is not effective in preventing the pages from getting indexed. In order to enforce noindex configuration is such situations, do the following:
Create a sheet named “helix-default” in your query-index.xlsx . After this, your query-index.xlsx spreadsheet should have 2 sheets “raw_index” and “helix-default”. The “raw_index” sheet is there to have all the raw indexed data.
Modify your custom helix-query.yaml (it must be in your project’s Github repository) and add the robots property so that it gets indexed.
Now set up your “helix-default” sheet in the query-index.xlsx spreadsheet to get automatically filled up using Excel formula which ensures that all the rows in raw_index which have robots property set as noindex, do not get copied over to the helix-default sheet. This can be done by using an Excel formula like this =FILTER(Table1,NOT(Table1[robots]="noindex"))
Now your helix-default sheet has only the rows from raw_index that do not have robots property set to noindex.
Ensure that you publish the pages that you want to get indexed.
Now if you fetch the index as usual like: https://<branch>--<repo>-<org>.hlx.page/query-index.json, you’d only get data from helix-default sheet i.e. entries that are not explicitly prevented from getting indexed through the robot property set as noindex.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/keeping-it-100

Web Performance, Keeping your Lighthouse Score 100.
The quality of the experience of websites is crucial to achieving the business goals of your website and the satisfaction of your visitors.
Adobe Experience Manager (AEM) is optimized to deliver excellent experiences and optimal web performance. With the Real Use Monitoring (RUM) operations data collection, information is continuously collected from field use and offers a way to iterate on real use performance measurements without having to wait for the CRuX data to show effects of code and deployment changes. It is common for field data collected in RUM to deviate from the lab results, as the network, geo-location and processing power for real devices are much more diverse than the simulated conditions in a lab.
The Google PageSpeed Insight Service is proven to be a great lab measurement tool. It can be used to avoid the slow deterioration of the performance and experience score of your website.
If you start your project with the Boilerplate as in the Developer Tutorial, you will get a very stable Lighthouse score on PageSpeed Insight for both Mobile and Desktop at 100. On every component of the lighthouse score there is some buffer for the project code to consume and still be within the boundaries of a perfect 100 lighthouse score.
Testing Your Pull Requests
It turns out that it is hard to improve your Lighthouse score once it is low, but it is not hard to keep it at 100 if you continuously test.
When you open a pull request (PR) on a project, the test URLs in the description of your project are used to run the PageSpeed Insights Service against. The AEM GitHub bot will automatically fail your PR if the score is below 100 with a little bit of buffer to account for some volatility of the results.
The results are for the mobile lighthouse score, as they tend to be harder to achieve than desktop.
Why Google PageSpeed Insights?
Many teams and individuals use their own configurations for measuring Lighthouse scores. Different teams have developed their own test harnesses and use their own test tools with configurations that have been set up as part of their continuous monitoring and performance reporting practices.
The performance of a website impacts its rankings in search results, which is reflected by the Core Web Vitals in the crUX report. Google has a great handle on the relevant average combinations of device information (e.g. screen size) as well as network performance of those devices. But in the end, SEO is the ultimate arbiter of what good vs. bad web performance is. As the specific configuration is a moving target, performance practices should be aligned with the current average devices and network characteristics globally.
So instead of using a project specific configuration for Lighthouse testing, we use the continuously-updated configurations seen as part of the mobile and desktop strategies referenced in the latest versions of the Google PageSpeed Insights API.
While there may be additional insight that some developers feel they can collect from other ways of measuring Lighthouse scores, to be able to have a meaningful and comparable performance conversation across projects, there needs to be a way to measure performance universally. The default PageSpeed Insight Service is the most authoritative, most widely accepted lab test when it comes to measuring your performance.However it is important to remember that the recommendations that you get from PageSpeed Insights do not necessarily lead to better results, especially the closer you get to a lighthouse score of 100.Core Web Vitals (CWV) collected by the built-in RUM data collection play an important role in validating results. For minor changes, however, the variance of the results and the lack of sufficient data points (traffic) over a short period of time makes it impractical to get statistically relevant results in most cases.
Three-Phase Loading (E-L-D)
Dissecting the payload that's on a web page into three phases makes it relatively straight-forward to achieve a clean lighthouse score and therefore set a baseline for a great customer experience.
The three phase loading approach divides the payload and execution of the page into three phases
Phase E (Eager): This contains everything that's needed to get to the largest contentful paint (LCP).
Phase L (Lazy): This contains everything that is controlled by the project and largely served from the same origin.
Phase D (Delayed): This contains everything else such as third-party tags or assets that are not material to experience.
Phase E: Eager
In the eager phase, everything that's needed to be loaded for the true LCP to be displayed is loaded. In a project, this usually consists of the markup, the CSS styles and JavaScript files.
In many cases the LCP element is contained in a block (often created by auto blocking), where the block .js and and .css also have to be loaded.
The block loader unhides sections progressively, which means that all the blocks of the first section have to be loaded for the LCP to become visible. For this reason, it might make sense to have a smaller section containing as little as needed at the top of a page.
It is a good rule of thumb to keep the aggregate payload before the LCP is displayed below 100kb, which usually results in an LCP event quicker than 1560ms (LCP scoring at 100 in PSI). Especially on mobile the network tends to be bandwidth constrained, so changing the loading sequence before LCP has minimal to no impact.
Loading from or connecting to a second origin before the LCP occurred is strongly discouraged as establishing a second connection (TLS, DNS, etc.) adds a significant delay to the LCP.
Phase L: Lazy
In the lazy phase, the portion of the payload is loaded that doesn't affect total blocking time (TBT) and ultimately first input delay (FID).
This includes things like loading blocks (JavaScript and CSS) as well as loading all the remaining images according to their loading="lazy" attribute and other JavaScript libraries that are not blocking. The lazy phase is generally everything that happens in the various blocks you are going to create to cover the project needs.
In this phase it would still be advisable that the bulk of the payload come from the same origin and is controlled by the first party, so that changes can be made if needed to avoid negative impact on TBT, TTI and FID.
Phase D: Delayed
In the delayed phase, the parts of the payload are loaded that don't have an immediate impact to the experience and/or are not controlled by the project and come from third parties. Think of marketing tooling, consent management, extended analytics, chat/interaction modules etc. which are often deployed through tag management solutions.
It is important to understand that for the impact on the overall customer experience to be minimized, the start of this phase needs to be significantly delayed. The delayed phase should be at least three seconds after the LCP event to leave enough time for the rest of the experience to get settled.
The delayed phase is usually handled in delayed.js which serves as an initial catch-all for scripts that cause TBT. Ideally, the TBT problems are removed from the scripts in question either by loading them outside of the main thread (in a web worker) or by just removing the actual blocking time from the code. Once the problems are fixed, those libraries can easily be added to the lazy phase and be loaded earlier.
Ideally there is no blocking time in your scripts, which is sometimes hard to achieve as commonly used technology like tag managers or build tooling create large JavaScript files that are blocking as the browser is parsing them. From a performance perspective it is advisable to remove those techniques, make sure your individual scripts are not blocking and load them individually as separate smaller files.
Header and Footer
The header and specifically the footer of the page are not in the critical path to the LCP, which is why they are loaded asynchronously in their respective blocks. Generally, resources that do not share the same life cycle (meaning that they are updated with authoring changes at different times) should be kept in separate documents to make the caching chain between the origins and the browser simpler and more effective. Keeping those resources separate increases cache hit ratios and reduces cache invalidation and cache management complexity.
Fonts
Since web fonts are often a strain on bandwidth and loaded from a different origin via a font service like https://fonts.adobe.com or https://fonts.google.com, it is largely impossible to load fonts before the LCP, which is why they are usually added to the lazy-styles.css and are loaded after the LCP is displayed.
LCP Blocks
There are situations where the actual LCP element is not included in the markup that is transmitted to the client. This happens when there is an indirection or lookup (for example a service that’s called, a fragment that’s loaded or a lookup that needs to happen in a .json) for the LCP element.In those situations, it is important that the page loading waits with guessing the LCP candidate (currently the first image on the page) until the first block has made the necessary changes to the DOM.To identify which blocks to wait for before blocking for the LCP load, you can add the blocks that contain the LCP element to the LCP_BLOCKS array in scripts.js.
Bonus: Speed is Green
Building websites that are fast, small, and quick to render is not just a good idea to deliver exceptional experiences that convert better, it is also a good way to reduce carbon emissions.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/markup-sections-blocks

Markup, Sections, Blocks, and Auto Blocking
To design websites and create functionality, developers use the markup and DOM that is rendered dynamically from the content. The markup and DOM are constructed in a way that allows flexible manipulation and styling. At the same time it provides out-of-the-box functionality so the developer does not have to worry about some of the aspects of modern websites.
Structure of a Document
The single most important aspect when structuring a document is to make it simple and intuitive for authors who will contribute the content.
This means that it is strongly recommended to involve authors very early in the process. In many cases it is good practice to just let authors put the content that needs to go on to a page into a Google Doc or Word document without having any notion of blocks and section, and then try to make small structural changes and introduce sections and blocks only where necessary.
A document follows the following structure in the abstract.
A page as authored in Word or a Google Doc document uses the well-understood semantic model like headings, body text, lists, images, links, etc. that is shared between HTML, markdown, and Google Doc / Word. We call this default content. In an ideal situation one would leave as much of the content authored as default content as possible, since this is the natural way for authors to treat documents.In addition to default content, we have a concept of page sections, separated by horizontal rules or --- to group certain elements of a page together. There may be both semantic and design reasons to group content together. A simple case could be that a section of a page has a different background color.In addition to that there is concept of blocks which are authored as a table with a heading as the first row that identifies the type of block. This concept is the easiest approach to componentize your code.
Sections can contain multiple blocks. Blocks should never be nested as it makes things very hard to use for authors.
DOM vs. Markup
AEM produces a clean and easily readable semantic markup from the content that’s provided to it. You can easily access it using the view source feature and have a look at the markup of the page you are currently reading.
The JavaScript library used in scripts.js takes the markup and enhances it into a DOM that is then used for most development tasks, specifically to build blocks. To create a DOM that’s easy to work with for custom project code, it is best to view it as a two-step process.
In the first step, we create the markup with sections, blocks, and default content that will look similar to this.
In the second step, the above mark-up is augmented into the following example DOM, which then can be used for styling and adding functionality. The differences between the markup that’s delivered from the server and the augmented DOM that is used for most of the development tasks is highlighted below.
It primarily consists of introducing a wrapper <div> for blocks and default content and dynamically adding additional helpful CSS classes and data attributes that are used by the AEM block loader.
Sections
Sections are a way to group default content and blocks by the author. Most of the time section breaks are introduced based on visual differences between sections such as a different background color for a part of a page.
From a development perspective, there is usually not much interaction with sections beyond CSS styling.Sections can contain a special block called Section Metadata, which results in data attributes to a section. The names of the data attributes can be chosen by the authors, and the only well-known section metadata property is Style which will be turned into additional CSS classes added to the containing section element.
Blocks and default content are always wrapped in a section, even if the author doesn’t specifically introduce section breaks.
Default Content
There is a broad range of semantics that are shared between Word documents, AEM Page, markdown, and HTML. For example there are headings of different levels (eg. <h1> - <h6>), images, links, lists (<ul>, <ol>), emphasis (<em>, <strong>) etc.
We take advantage of the intuitive understanding that authors have of how to use these semantics in the tools that they are familiar with (eg. Word/AEM Page) and maps those to markdown and then renders them in the HTML markup.
All mappings should be relatively straightforward and intuitive for the developer. One area where we go a little bit further than the simplest possible translation is in handling images. Instead of a simple <img> tag, a full <picture> tag is rendered with a number of different resolutions needed for display on desktop and mobile devices as well as different formats for modern browsers that support webp and older browsers which do not.
Blocks
Most of the project-specific CSS and JavaScript lives in blocks. Authors create blocks in their documents and developers write the corresponding code that styles the blocks with CSS and/or decorates the DOM to take the markup of a block and transform it to the structure that’s needed or convenient for desired styling and functionality.
The block name is used as both the folder name of a block as well as the filename for the CSS and JavaScript files that are loaded by the block loader when a block is used on a page. The block name is also used as the CSS class name on the block to allow for intuitive styling.
The JavaScript is loaded as a Module (ESM) and exports a default function that is executed as part of the block loading.
All block level CSS should be scoped to the block to make sure that there are no side-effects for other parts of your project, which means that all selectors in a block should be prefixed with the corresponding block class. In certain cases it makes sense to use the block’s wrapper or containing section for the selector as well.
There is a balance of DOM manipulation in JavaScript and complexity of the CSS selectors. Complex brittle CSS selectors are not recommended and at the same time adding classes to every element makes your code more complex and disregards the semantics of elements.
One of the most important tenets of a project is to keep things simple and intuitive for authors. Complicated blocks make it hard to author content, so it is important that developers absorb the complexity of translating an intuitive authoring experience into the DOM that is needed for layout or application logic. It is often tempting to delegate complexity to the author. Instead, developers should make sure that blocks do not become unwieldy to create for authors. An author should always be able to simply copy/paste a block and intuitively understand what it is about.
A simple example is the Columns Block. It adds additional classes in JavaScript based on how many columns are in the respective instance created by the author. This allows it to be able to use flexible styling of content that is in two columns vs. three columns.
Blocks can be very simple or contain full application components or widgets and provide a way for the developer to componentize their codebase into small chunks of code that can be managed easily and can be loaded on to the web pages as needed.
A block’s content is rendered into the markup as nested <div> tags for the rows and columns that the author entered. In the simplest case, a block has only a single cell.
Authors can add blocks to their pages in an ad-hoc manner by simply adding a table with the block name in the first row or table heading. Some blocks are also loaded automatically. header and footer blocks that need to be present on every page of a site are a good example of that.
Block Options
If you need a block to look or behave slightly differently based on certain circumstances, but not different enough to become a new block in itself, you can let authors add block options to blocks in parentheses. These options add modified classes to the block. For example Columns (wide) in a table header will generate the following markup.
<div class=”columns wide”>
Block options can also contain multiple words. For example Columns (super wide) will be concatenated using hyphens.
<div class=”columns super-wide”>
If block options are comma-separated, such as Columns (dark, wide), they will be added as separate classes.
<div class=”columns dark wide”>
Auto Blocking
In an ideal scenario the majority of content is authored outside of blocks, as introducing tables into a document makes it harder to read and edit. Conversely blocks provide a great mechanism for developers to keep their code organized.
A frequently-used mechanism to get the best of both worlds is called auto blocking. Auto blocking turns default content and metadata into blocks without the author having to physically create them. Auto blocking happens very early in the page decoration process before blocks are loaded and is a practice that programmatically creates the DOM structure of a block as it would come as markup from the server.
Auto blocking is often used in combination with metadata, particularly the template property. If pages have a common template, meaning that they share a certain page design or functionality, that’s usually a good opportunity for auto blocking.
A good example is an article header of a blog post. It might contain information about the author, the title of the blog post, a hero image, as well as the publication date. Instead of having the author put together a block that contains all that information, an auto block (e.g. article-header block) would be programmatically added to the page based on the <h1>, the first image, the blog author, and publication date metadata.
This allows the content author to keep the information in its natural place, the document structure outside of a block. At the same time, the developer can keep all the layout and styling information in a block.
Another very common use case is to wrap blocks around links in a document. A good example is an author linking to a YouTube video by simply including a link, while the developer would like to keep all the code for the video inline embed in an embed block.
This mechanism can also be used as a flexible way to include both external applications and internal references to video, content fragments, modals, forms, and other application elements.
The code for your projects auto blocking lives in buildAutoBlocks() in your scripts.js.
Please see the following examples of auto blocking.
Adobe Blog
AEM Boilerplate

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/favicon

Favicon
Adding a favicon to your site gives it a professional look in your visitor’s browsers:
Adding a favicon
Add a file called favicon.ico to the root folder in your GitHub repository. We recommend using the .ico format for best support across all major browsers. That’s all – your site now has a favicon!

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/custom-headers

Custom HTTP Response Headers
In some cases, it is useful to apply custom HTTP response headers to resources, for example to allow CORS. If you want to specify headers, create either an Excel Workbook or a AEM Page Workbook in the /.helix folder of your website in  or AEM called headers.xlsx in  or headers in AEM.
The workbook should have only one sheet and can define response headers using the url/key/value format as shown below.
The URL column is a glob pattern matching the pages that should have the header should be applied to. A wildcard * can be used as a prefix or suffix, allowing for flexible matches on the URL pathname. Typical examples include /docs/** or **/docs/**.
After you update the sheet, you need to preview it. Note that the headers are applied to the preview and live versions of the page. You might need to purge the live or production cache for the change to take effect. See the Admin API documentation for more information.
If the headers apply to resources in codebus (coming from a sync GitHub repository, as opposed to content) then the changes won’t take effect until the codebus is synced again, either by updating the targeted code in GitHub or by manually updating via the Admin API.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/dev-collab-and-good-practices

Development Collaboration and Good Practices
Working with a large number of development teams across many projects and organizations we found that it is useful to collect some of our insights. Some of those are related to AEM, but the majority are related to general purpose frontend development or are just general guidelines on how to collaborate in a team of developers.
You may read some of those items and think that it is generally understood as common sense amongst developers. We agree, and that’s a great sign that you are ready to work in a collaborative way on AEM projects together with other developers.
At this point this is just a collection of lessons learned from our engagements on a growing set of projects.
GitHub
Create Pull Requests
If you work on a project with multiple developers it is rarely a good idea to push directly to main. When your project is in production code changes that are merged or pushed to main often means that they are released to production. Protecting your main branch is a good mechanism to ensure that people don’t push to main by accident, which is especially advisable with a site that is in production. Keep the scope of your Pull Request to what’s in the title / description of the PR.
Pull Request etiquette
If you open a pull request, make sure that you include a URL to a page (or a number of links to pages) on your branch, where the reviewer can see your code in action. If you are updating code of an existing block, make sure to include the link that features the block you are updating as the reviewer may not know where this block is in use to test its functionality.
AEM Github Bot
The AEM Github Bot and standard Boilerplate project setup will check linting of your CSS/JS and PageSpeed Insights for Web Performance, Accessibility, SEO and Best Practices. Do not submit a Pull Request for Review that has linting errors or doesn’t have a Lighthouse Score from Page Speed Insights of 100.
Reviews
It is good practice to have your code reviewed by the maintainer or main developer of the project you are working on. For the reviewer to see a realistic PageSpeedInsight performance score, include links to the cached .live environment.If you are a maintainer or lead developer on a project that is not in production and you are adding code or are changing your own code, it sometimes is unnecessary overhead to have your PRs reviewed by peers and it is often ok to merge your own PRs without a peer review.
Merging Pull Requests
Merge your own pull requests only. If the person who opened the Pull Request has the ability to merge their own Pull Request, the author of the code is the ideal person to merge. There are situations where the author specifically states that this can and should be merged by someone else, and in those cases a maintainer (main developer) of the project should feel free to merge a Pull Request.Even if a Pull Request is approved, you should always check with the author of the Pull Request if they are ready to merge.For work still in progress, opening A Draft Pull Request also helps prevent accidental merging.
Shared branches
It is good practice to consider branches for individual Pull Requests as initially a private location of the developer that created the branch. Do not just push into other developers’ branches without having been invited to do so. There are situations where people are collaborating on Pull Requests but it should be an explicit agreement.
(Scaled) Trunk-based Development
AEM works great in a scaled trunk-based development with built-in devops and CI/CD. Meaning you merge a large number of small pull requests into main (production) but the Quality Assurance / Review efforts can be tailored to the impact of a small change. Nobody wants to review and test large pull requests, and long-lived branches with lots of changes tend to be difficult (and dangerous) to merge.
Linting
Don’t change the linting configurations (eslint airbnb-base and stylelint) unless you have a really good reason. Personal preference is not a good reason. Changing linting makes it very hard to move developers from project to project. Arguing if something is a good reason to change the linting configuration is usually a lot more effort than just categorically saying no.
CSS
CSS Selector Block Isolation
AEM blocks most often operate as components collaboratively in the same DOM / CSSOM. This means that you should write your CSS selectors in a block .css in a way that isolates your CSS from impacting layout of elements outside your block. The easiest way to do this is by making sure that every CSS selector in the .css of a block only applies to the block.
Cascade in CSS
Use your CSS classnames wisely. Some CSS classes and variables are used across different blocks, and others are not expected to be used outside your block. Prefixing classes and variables that are private to your block with the block name is good practice. Conversely if there are CSS classes and CSS context that should be inherited (often those can be authored) those classes and variables should not be prefixed.
CSS indentation and property order
Outside of a CSS refactoring PR, don’t change sequencing on properties or the indentation across the CSS files you touch in a functional PR. Every developer has different preferences on sort order of properties or indentation. Make sure the diff that you see in your PR is isolated to the changes you actually want reviewed before submitting it.
CSS Selectors Complexity
Don’t let your CSS Selectors become complex and unreadable. Often it is better to decorate additional CSS classes / Elements onto your DOM and write readable CSS instead. Complex CSS selectors also often are harder to maintain and more brittle than the equivalents in JS.
CSS naming
Naming your classes simple and intuitive is helpful for other developers. Avoid namespacing unless it is necessary within the scope of a project. There is often no need to specify the type or the origin (eg. the name of your design system) of a CSS variable that is to be used across the entire project.
Leverage ARIA Attributes for styling
In many situations you will add ARIA Attributes for accessibility. Since those have well defined semantics like expanded or hidden that are understood by all developers, in most cases there is really no need to come up with additional classes in your vocabulary that have unknown semantics.
Mobile First
Generally Web projects should be developed “Mobile First”. This means that your CSS without media query should render a mobile site. Add media queries to extend the layout for tablet and desktop.
Breakpoints
Generally use 600px, 900px and 1200px as your breakpoints, all min-width. Don’t mix min-width and max-width. Only use different breakpoints in exceptional cases where you have good understanding why that’s needed.
Less, Sass, PostCSS, Tailwind and friends.
If you are working in the context of a bigger organization, make sure that you don’t introduce a dependency to any CSS preprocessor or Framework of your personal preference without getting the buy-in from the entire team and organization. As there are a lot of differing personal preferences in this area, it makes code hard to maintain if every project or every block inside a project uses different technologies.The simplest solution is to rely on the growing CSS featureset which is supported by the browsers.
Modern CSS features
Make sure the features you are using are well supported by evergreen browsers. Depending on the features more or less pervasive support may be acceptable.
JavaScript
Frameworks
On most web sites, frameworks are overkill for simple layout problems outside of application-like functionality. Frameworks often introduce web performance issues (Lighthouse and Core Web Vitals), particularly if they are in the pathway of the LCP or introduce TBT, while trying to address trivial problems. Keep simple things simple.If you are using Javascript Frameworks make sure that you don’t introduce a dependency to any JS Framework or library of your personal preference without getting the buy-in from the entire team and organization. As there are a lot of personal preferences, it makes code hard to maintain if every project or every block inside a project uses different technologies.The simplest solution is to rely on the growing featureset supported by browsers.
Build tool chain
Differing build tool chains from project to project make it hard for new developers to be onboarded and often introduce additional complexity. Make sure that you don’t introduce a dependency of your personal preference without getting the buy-in from the entire team and organization.The simplest solution is to keep the entire project build-less.
Modern JavaScript features
Make sure the features you are using are well supported by evergreen browsers. Depending on the features more or less pervasive support may be acceptable. While AEM can be used with any browser, lib-franklin.js has a dependency on browsers that support dynamic import(). Any feature that is supported by the set of browsers that support dynamic import() should be considered safe. Technically of course older browsers (eg. IE) can be supported by AEM projects, but those require heavy customization.
Not all features have the same consequences if a browser doesn’t support them, some may be cosmetic and others may stop the site from working. A common example is “optional chaining”. If a browser doesn’t support “optional chaining”, a single usage can have fatal consequences for the entire page.
Loading 3rd party libraries
Don’t add 3rd party libraries to your <head> via head.html as they will be in the critical path of loading content above the fold and will often be loaded when they are not needed. Add the dependencies where needed via loadScript() to the specific block that has the corresponding requirement.In case of larger 3rd party libraries, you may even want to consider using an IntersectionObserver to make sure you only load them when the block depending on it is actually being scrolled into view.
AEM Library (aem.js)
The AEM library (usually hosted in aem.js in a project) is currently not minified and obfuscated to make debugging easier. We discourage making changes to it on a project basis and instead recommend project specific extensions to be kept outside of the library. We welcome Pull Requests via github, if you would like to propose changes / bug fixes that are universally applicable.
<head>
The <head> that is delivered from the server as part of the HTML markup should remain minimal and free of marketing technology like Adobe Web SDK, Google Tag Manager or other 3rd party scripts due to performance impacts. Adding inline scripts or styles to <head> is also not advisable for performance and code management reasons.
Content in  / AEM
Start your development with Content
Before writing a line of code, create your (sample) content in a Word or Google Doc (or spreadsheet). Make sure that it feels good for authoring and share it with people on your team that have experience supporting authors. It requires support experience to understand what content structures are easy for authors to understand and recreate. Once you have settled on a content structure that contains all elements you need for your block, and have it reviewed you can get started developing your CSS and JS code.
Use /drafts
The content lifecycle is very different from the code life cycle. If you are proposing changes to an existing content structure in your code or come up with a new block, don’t just make those changes on the page you are working on. Copy the page into your /drafts/<yourname>/ folder and make changes there.Once your code changes are merged to main , you can have authors copy or merge your content with the content outside of your /drafts/ folder.
Backwards compatibility of new features
Especially in production environments it is important to keep your anticipated changes to the content structure backwards compatible with existing content. Ideally code that is being merged should not have an impact on the website or require refactoring the content. Only when new content is put in place through a preview and publish cycle, the new functionality becomes available. This of course doesn’t apply to things like design changes across the existing content or functional bug fixes.
Use Content for “static” resources
Generally, it is not a good idea to commit binaries into your GitHub repo. Even text-based static resources for example HTML files or SVGs should only be put into GitHub in exceptional cases. A good reason to add an SVG to your git repo is if it is referenced from code. Don’t commit anything that is related to the content authoring process, or could be a part of an authoring process. There are some exceptions (usually related to legacy and non-browser clients) that require a certain set of fixed resources that cannot be produced and manipulated dynamically by AEM, but in general if you find a large set of static resources (eg. images, etc.) or an HTML file in a PR it is most likely not a good practice.
Use Content for Strings / Literals
Strings that are displayed to end-users and could possibly be translated or changed at some point should always be authorable and sourced from content (eg. placeholders, or other spreadsheets or documents). If you have a literal string that is displayed as text to the visitor of your website in your javascript or css code it is good practice to replace it with a reference to content (eg. placeholders).

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/authoring

Authoring and Publishing Content
Authoring Content
You already know the most important part.
If you use Microsoft Word or AEM Page, then you already know how to create content.
Your documents in Word or AEM Page become your pages on your website. Your headings in your documents will become headings on your website. Bold, italic, underlining, lists, images, etc. will all appear on your website.
Images and Videos
To add an image to your document, drag the image into the page. Word and AEM Page automatically add it as normal. Your image will be resized to fit the browser window of your visitor. Any resizing you do in Word or AEM Page will have no effect.
It is a good idea to set an alternative text for all images you add to the document, as this increases accessibility and helps search engines find your content.
To do this, use the built-in features of both Word and AEM Page. See the documentation of either product for more details.
Microsoft Word: Add alternative text to a shape, picture, chart, SmartArt graphic, or other object
AEM Page: Make your document or presentation more accessible
Word and AEM Page do not allow you to just drag and drop videos, but you can add videos via  or AEM and add the resulting URL as a link to a suitable block in your document.
Links
Links are an important part of every website and you can add them both in Word and AEM Page. If you are creating a link within your website, enter the URL as is, even if the page you are linking to is not public yet (e.g. a preview or live URL).
Links pointing to other pages on the same site will automatically be adjusted to be relative to your site.
You can link to headings or sections within a page by appending an anchor value to the URL. Heading elements have automatic lower-cased IDs where spaces are replaced with dashes. For example, if a page /about-us has a heading “Our History”, the URL linking to it would be https://<your_host>/about-us#our-history.
Sections
On some websites you have sections or blades that change background color or otherwise indicate breaks in the content. Creating a section break in both Microsoft Word and AEM Page can be done using --- (three hyphens) on a single line. In AEM Page you can also create sections by inserting a Horizontal Line element into the page (select “Insert → Horizontal Line” from the menu).
Metadata & SEO
Metadata is information about your page that is invisible to visitors, but important to search engines and social media sites that want to find your content or embed it.
To add metadata to your page, at the end of the document, create a table like the following. Creating a table works almost the same in Word and AEM Page. See the documentation of either product for more details.
Microsoft Word: from the menu, click “Insert → Table” and select the number of columns and rows you want
AEM Page: from the menu, click “Insert → Table” and choose how many rows and columns you want to add
Structure your table like this:
The first row of the table should just contain the word “Metadata”. This tells the system that there is custom metadata for your document.
Then create one row for each metadata property. The left column contains the name of the metadata property, the right column the value. In most cases, values are plain text, but as you can see from the “image” row, sometimes other content can be used, too.
You’ve just created a metadata block. You can also create metadata for many pages at once. See the document Bulk Metadata for more information.
Special metadata properties
The metadata block has a few special properties that can serve multiple purposes.
image - this will be shown as og:image, og:image, secure_url, and twitter:imageDefault: If not specified, AEM will use the first image found on the page. If the page does not contain an image, the default value will be /default-meta-image.png (you can add this file via  or GitHub).
title - will be used as og:title as well twitter:title and <title>Default: If not specified, AEM will use the first heading 1 (h1) found on the page.
canonical - will be used as <link rel=”canonical”>
description - will be used as description, og:description, twitter:descriptionDefault: If not specified, AEM will use the first paragraph (p) found on the page which contains at least 10 words.
json-ld - renders a JSON schema inside a <script type=”application/ld+json”> element. Please consider other methods like JavaScript or head.html to add schema to your page, in many cases metadata is not the right approach.
Omitting metadata values
If you want to omit a metadata, you can leave its value cell empty.
Blocks
Blocks are a way to work with more structured content and add special functionality to your site. Which blocks are available to your site depends on what your development team has implemented and differs from site to site. The only block that is common to all sites is the metadata block described previously.
Regardless of site, the structure of a block is always the same: it is a table with a merged first row that serves as the block name (header row). The header row may have specific formatting like a background color to increase their discoverability and differentiation in a document.
Blocks usually contain content, configuration, or references to other pieces of content, be it from other documents, spreadsheets, or both.
As you can see from this example, you are free to put any kind of content into the cells of a block, and it is up to the block to either render the content or ignore it. If the site you are working on uses blocks extensively, then you will probably have a reference list of blocks you can use.
Blocks can have variants in parenthesis. For example, a Columns block can have a (highlight)option which passes a layout hint to the block display logic.
See the document The Block Collection to learn more about out-of-the-box blocks.
Structured Data in Spreadsheets
You can put content into spreadsheets and then the spreadsheet is automatically turned into an API that your developers can use. This allows you to use spreadsheets like a headless CMS for use in data tables, navigation, or feature comparisons, for example.
See the document Spreadsheets and JSON for more information.
Preview and Publish Content
Once a document is created in AEM or , you can preview the corresponding web page and eventually publish the content to your production website.
The preview function is used to share pages with stakeholders before they are published and available to the general public on your website.
In order to preview, publish, or delete content, use the Sidekick that can be installed as a browser extension.
Ideally you receive a pre-configured link for your project from a fellow author, via the “Share Your Sidekick” function of the sidekick. This ensures that your sidekick is configured properly to edit and publish your project. See the Sidekick documentation for more information.
Preview
In Word or AEM Page, open the Sidekick, then click the “Preview” button. This will open a new browser window (check for the popup warning) that has the preview version of your site.
Although you can copy and share the URL of this preview, it is not meant for production. It does not have your domain name on it and is invisible to search engines. If the content is ready for publication, you can publish. If you need to make changes, open the Sidekick on the preview page and click “Edit” to go back to Word or AEM Page.
Publish
Publishing makes your content visible to everyone on the internet. To publish something, open the sidekick on a preview page (or follow the instructions above to open the preview again), then click “Publish”. After a few seconds, a new browser window will open, with your page on your public website.
Once your content has been published, it is visible to everyone on the internet, and search engines will be able to find it.
Delete
Generally, deleting published content and therefore removing publicly accessible resources from the web can be problematic because of inbound links from search, social, bookmarks and other referring sites. If a page is deleted that was once published, it is recommended to use redirects to make sure that incoming traffic for the deleted page is sent to the next best place. See the document Redirects for more information.
If you want to remove published content or just delete it from your site as part of a clean-up, doing so is a two-step process.
First, delete the source document from  or AEM.
Alternatively you can rename the page or move it to a different folder, for example your drafts folder.
Alternatively you can rename the page or move it to a different folder, for example your drafts folder.
Then open the page you want to delete on the preview site and open the sidekick. There will be two options: Delete and Unpublish.
Unpublish removes it from the public production website, but keeps the preview.
Delete removes the preview, too.
Unpublish removes it from the public production website, but keeps the preview.
Delete removes the preview, too.
Deleting or unpublishing something is permanent and cannot be easily undone. If you want to undo a deletion, you have to restore the original document in  or AEM and then publish it again.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/bulk-metadata

Bulk Metadata
By default, metadata is managed at the page level. See Authoring and Publishing Content for more information.
In some cases, it is useful to apply metadata en masse to a website. Common use cases include:
A certain section of a website should look and feel different from the rest of the website (such as a different template or a different theme).
Default metadata such an og:image should be applied to portions of the website.
If a certain portion of the website should not be indexed by robots, the metadata can be used to set the robots meta tag to noindex for a portion of the site.
If you want to create metadata for many pages at once, create either an Excel workbook or a AEM Page workbook in the root folder of your website in  or AEM.
Name the file metadata for AEM.
Name the file metadata.xlsx for .
The workbook should have only one worksheet and at least two columns as in the following image.
The column titled URL has the URL pattern of the pages that should get a particular metadata entry.
The wildcard * (the asterisk) can be used as a prefix or suffix, allowing for flexible matches on the URL pathname. Typical examples include /docs/** or **/docs/**.
Note: The metadata sheet is evaluated from top to bottom, site wide meta data set to ** must be before more specific entries.
For each metadata property, create a column in the worksheet and name it using the property you want to assign. Typical examples include template, theme, or robots.
Page-level metadata added via a metadata block takes precedence over bulk metadata. See the documents Authoring and Publishing Content and Metadata (block) for more information.
To explicitly remove metadata a "" can be used as a value. This will remove the element or set the corresponding attribute to "" for a particular path.
Example:
The example above will remove the <link rel="canonical"> from all pages by default, unless there is a specific override for example from a page metadata block.
Note: You need to preview / publish the metadata sheet in order to see changes reflected on your page.
Tip: Excel can be slow to update inside . If you do not see your changes reflected in preview or publish, hard refresh (click into URL bar and refresh) the Excel document in your browser and preview should work as expected.
Folder mapped Metadata
If the site has foldermapping configured, the metadata files within that folder will apply to all pages for that mapping. For example, if /templates is folder mapped to
/templates/default all metadata in /templates/default/metadata.xlsx will be applied after the global metadata to the pages below /templates.
Additional Metadata
When having metadata that is managed by several teams it is not practical to keep them all in the same metadata files. Multi metadata support is possible by configuring the all the metadata files that need to be taken into account in the /.helix/config.xlsx file:
The order of the entries in the list dictates the order of how the data is applied. The final order of the metadata is as follows:
If there is metadata configured in the /.helix/config.xlsx:
Page level metadata block wins over
Folder-mapped metadata sheet wins over
Metadata sheet(s) in configured order over
Blueprint metadata
if there is no configured order:
Page level metadata block wins over
Folder-mapped metadata sheet wins over
Global Metadata sheet (/metadata.xlsx)
Blueprint metadata
Note that individual metadata properties are overwritten but never deleted. For example, if the /metadata.json defines a property title, the same property in /metadata-2nd.json will overwrite the value, but only if it is not empty.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/placeholders

Placeholders
In most websites, there are strings or variables that will be used throughout the site. Especially in sites that need to support multiple languages, it is not a good idea to hard code such values. Instead placeholders can be used and managed centrally.
Placeholders can be managed as a spreadsheet that is either in the root folder of the project or in the locales root folder in the case of a multilingual site.
Name the file placeholders for AEM Page.
Name the file placeholders.xlsx for .
The spreadsheet has to contain at least two columns titled Key and Text.
The Key column is an identifier that is transformed automatically to be easily accessible via code.
The Text is the literal text (or string) for a placeholder with a given key.
After making changes to your placeholder spreadsheet, you can preview your changes via the sidekick and have your stakeholders check that the new placeholders are working on your .page preview website before publishing the placeholder changes to your production website. See the Sidekick documentation for more information about switching between environments.
Are you a developer and curious to learn how to use placeholders in your code? Look here.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/sitemap

Sitemaps
Create automatically generated sitemap files to be referenced from your robots.txt. This helps with SEO and the discovery of new content. AEM can generate three types of sitemaps: without any configuration, based solely on a query index or based on a manual sitemap configuration.
Creating a Sitemap without any configuration
If you don’t do anything you will see your sitemap in sitemap.xml and have a sitemap index in sitemap.json. It will contain a list of all your published documents.
If you started with another type of sitemap and would like to switch to this type, you’ll have to delete the helix-sitemap.yaml configuration file - either manually defined in GitHub or automatically generated - and reindex your site.
Domain name used in external URLs
To customize the domain used in creating external URLs, add a property named host or cdn.prod.host in your project configuration (named .helix/config when using AEM as backend or .helix/config.xlsx on ) and preview that file to activate it.
Generating a Sitemap configuration based on an index
Please see the document Indexing to learn more about indexing. In order to generate a sitemap configuration based on an index, please ensure that you have already set up an initial query index as explained there. This will generate a sitemap at the location:
https://<branch>--<repo>--<owner>.hlx.page/sitemap.xml
And a sitemap configuration at the following location:
https://<branch>--<repo>--<owner>.hlx.page/helix-sitemap.yaml
It is recommended that you create a sitemap-index.xml file that references all your sitemaps and keep that as part of your project code in your github repo. This way it is easy to add new sitemaps as the project expands.
Manual setup of your Sitemap configuration
If you need more customization than your generated sitemap configuration file provides, you can copy its contents and paste it into a file named helix-sitemap.yaml in the root folder of your project.
Note: When using a manually configured index and sitemap (e.g. your code repo includes a helix-query.yaml and helix-sitemap.yaml file) your index definition must include the robots property to ensure the sitemap excludes pages with robots: noindex metadata. When using auto-generated index definitions, simply follow the recommendations in the indexing documentation so those pages are excluded from the index.
The following sections contain the supported types of sitemaps.
Simple Sitemap
The following is a simple helix-sitemap.yaml. It assumes a single index containing all the pages that need to appear in the sitemap.
If you want last modification dates to be included in the URLs of your sitemap, add a lastmod property including a format to your configuration.
Multiple Sitemaps
It is common to have sitemaps per section of the sites and/or per country or language. AEM supports sitemaps including the corresponding hreflang references. In the following example we assume that there is a one to one mapping between the indexes and the sitemaps XML files.
If there are two pages in the english and french section that share a common suffix, they will be related, so e.g. if you have a page /welcome in the english section and a page /fr/welcome in the french section, the resulting entry in the /sitemap-en.xml will look like this:
A similar entry will be available in /sitemap-fr.xml.
Specifying the primary language manually
There might be situations where you have alternate versions of a page, but you’re unable to use a common suffix to identify them, possibly because you’re porting a legacy website that should not have its paths changed. In that situation, you can specify a primary-language-url for the alternate location, in the metadata of the document.
Let’s assume our primary language is english, we have a page /welcome in the english section and /fr/bienvenu in the french section, and the latter is an alternate version of the former.
First, we add that information to the document at /fr/bienvenu in its metadata:
This can also be added to a global metadata sheet, as shown in Bulk Metadata.
Then, we add an indexed property primary-language-url to the french index:
Finally, we re-publish the french page, and rebuild the sitemap.
Specifying the default language
Another common requirement is to specify the default language for a sitemap with multiple languages. This can be achieved by adding a property default in the sitemap:
In the resulting sitemap, all entries from the english subtree will have an extra alternate entry with hreflang x-default.
Specifying multiple hreflangs for one subtree
Sometimes, it is required to map multiple hreflangs to only one language subtree, e.g. consider we want the following to appear in the resulting sitemap:
Every page in our sitemap source should appear exactly once, but have multiple alternate hreflangs associated with it. In order to achieve this, you should specify an array of languages in the hreflang property:
Multiple Indexes Aggregated Into One Sitemap
There are cases where it is easier to have a single larger sitemap than fragmented small sitemaps, especially as there is a limit of sitemaps that can be submitted to search engines per site.
The following example shows how to aggregate a number of separate indexes into a single sitemap.
Using the same destination it is possible to combine multiple small sitemaps into one larger sitemap.
Including other sitemaps as input
In a mixed scenario, where not all languages in a sitemap are managed in AEM, you can include sitemaps from other language trees by specifying an XML path as source, as in:
In this example, we use an external french sitemap to calculate all sitemap locations. AEM will determine alternates for english sitemap URLs by deconstructing the french counterparts in external sitemap using the alternate definition.
Adding an extension to all locations in the sitemap
In a scenario, where you want all your locations to have an extension, e.g. .html, and you’re unable to generate a helix-sitemap sheet in your query index to derive a formula, you can add an extension to all languages or an individual language using an extension property:

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/setup-customer-

How to use  (application)
NOTE: for projects using Adobe’s  please continue here.
If you use  as your content source, AEM uses a registered Microsoft Azure application to access your content. This application has delegated permissions defined that allow the service to access  on behalf of a user. This user needs to be registered to the project that is using .
Alternatively, the services can also authenticate as an application and use application permissions to access the sites. This needs additional setup by a  site administrator that can grant the permissions for the application.
The preferred setup is to use application permissions, as this narrows down the access the service has to a specific  site and does not require to share any secrets of a technical user. Also, it reduces the problems around password rotation.
The following describes how to set up application permissions for your project. If you want to set up a technical user, please continue here.
Setting up  involves the following steps:
Create or identify a  site that will serve as site for the document based authoring
Create a folder within  that will be the website root.
Configure the fstab.yaml with the respective folder
Access the Registration Portal
Register the Application
Apply the sites.selected permission to the  site
1. Create or identify a  site
Talk to your IT department to either identify or create a  site that will be used for document based authoring. One site can “host” multiple websites (projects). This site will later receive the respective permissions so that the publishing services can access it.
2. Create the website root folder
Navigate to your desired location in the  site created or identified above and create a root folder that will be your website root. It is best to not use a  list root directly, so that you have a shared space for your authors to put collateral documents, for example a drafts folder, or how-to-author documentations.
An example file structure might look like this, using the website folder as the root:
3. Configure the fstab.yaml
The next step is to configure the mountpoint in the fstab.yaml to point to the website root. It usually has the form of
But this might vary depending on how you create the  site and lists. In order to obtain the url, the simplest way is to copy-past the first part from the browser address, eg:
And then add the rest manually (Note, that copying the sharelink via the UI adds unnecessary information and it is better to use a canonical representation of the url). Once you composed the url, you can test it by entering it again in the browser. You should end up in the folder view of your website root.
After that, update the fstab.yaml accordingly.
For example:
To finalize the configuration, commit the fstab.yaml back to the main branch.
4. Access the Registration Portal
Overview
In order for the AEM service to access the authored content it needs a couple of information and setup. The AEM service (a cloud function) accesses the MS Graph API on behalf of an application (or configured user). In order to do so, it needs to authenticate first in the context of an Application. This is important because the scopes given to the application define what permission the service has on the MS Graph API. For example, it should be allowed to read and write documents, but not to alter access control.
An application is represented as an “Enterprise Application” in the respective Active Directory of a tenant. The permissions given to that enterprise application ultimately define what the service can access in that tenant’s resources. Certain permissions need to be approved by an Active Directory administrator before a user can use the application. This so-called “admin consent” is a mechanism to verify and control which permissions apps can have. This is to prevent dubious apps from tricking users into trusting an app that is not official. Having the extra admin consent step allows IT security to control which apps the employees can use.
1. Sign-in in the Registration Portal
View Enterprise Applications in Azure Portal
Assuming that so far no Franklin Enterprise Applications are present in Azure (Microsoft Entra Id)
Access Franklin Registration Portal
Go to https://admin.hlx.page/register, enter the github url of the project
Sign-in as non admin user
Sign in as a user that does not have admin permissions will show an error that it needs approval, i.e. the application needs admin consent.
Problem: Enterprise Application is not registered if a user never logs in.
Sign-in as admin user
One solution is to sign in as a user that does have admin permissions:
(note, at this point the Enterprise Application is still not registered in azure)
Franklin Registration Service visible in UI
If the admin logs in (without checking the checkbox and granting consent for everyone), the Enterprise application is present.
Create application using MSGraph or Powershell
Alternatively, you can create the Enterprise application via MSGraph or Powershell.
In order to make it visible in the azure UI you also need to add the WindowsAzureActiveDirectoryIntegratedApp tag. This can be done directly when creating the application.Using graph explorer:
Using powershell:
After that you still need to give admin consent, if you want a non admin user to login.
Also see:
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/create-service-principal-cross-tenant
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-configure?pivots=ms-graph
Review permissions
Note that the Franklin Registration Service (e34c45c4-0919-43e1-9436-448ad8e81552) application is only needed during registration to verify that the user has read access to the . It has the following delegated permissions:
OpenidAllows users to sign in to the app with their work or school accounts and allows the app to see basic user profile information.
ProfileAllows the app to see your users' basic profile (e.g., name, picture, user name, email address)
Files.ReadWrite.AllAllows the app to read, create, update and delete all files the signed-in user can access.
User logged in Registration portal
After completing this initial step, the user is logged in the registration portal
Adding the Franklin Service with application permissions
Add Enterprise Application
When logged in the registration portal, the content source that is used by the project needs to be connected to an oauth grant for the Franklin Service application. This is needed, so that the system can access the documents in  and convert them to an internal format (markdown) and store it in Adobe’s storage (S3/R2) for fast delivery.
Using application sites.selected permissions is more secure as it limits the scope to a single  site. In order to connect, click on the Connect Application button.
If you never registered an application or a user before, you probably see the following error:
Same as above, the Enterprise application for the Franklin Service (83ab2922-5f11-4e4d-96f3-d1e0ff152856) is not present in Azure yet,In order to add it, use the graph explorer or powershell to add it:
Using graph explorer:
Using powershell:
Also see:
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/create-service-principal-cross-tenant
Add Application Roles
Now the enterprise application Franklin Service is visible in azure. But it doesn’t have any Sites.Selected application permissions.
Problem: Using the admin consent UI would grant all application and delegated permissions, which we don’t want.
An easy way is to consent to all permissions and then remove the delegated ones again.
Add Application Roles using Powershell or Graph Explorer
Alternatively, adding the app roles can be done with the following steps:
Find the service principal of the enterprise application (principalId). This is the one you created above.
Find the service principal of the Microsoft Graph API (resourceId)
Find the Id for the Sites.Selected Application Role (appRoleId)
Assign the Application Role to the Managed Identity (The Enterprise Application)
Using powershell this can be done with:
Using graph explorer it involves more steps:
Find the principal of the enterprise application for Franklin Service :
This will be our principalId
Find the service principal of the Microsoft Graph API
This is the resourceId. (the resource that defines the application role)
Find the id of the application role.GET https://graph.microsoft.com/v1.0/servicePrincipals/${resourceId}/appRoles
Substitute the resourceId with the service principal of the Microsoft Graph API as obtained from the previous step.
This Id is the appRoleId
Assign the Application Role to the Managed Identity. The request has the format:
Validate Permissions
Eventually you should see the granted application permission in the UI.
Back in the registration portal, the should have changed to:
(note, at the time of writing, this message is not very accurate, it should read:The resource specified in the fstab.yaml does either not exist, or you do not have permission to access it. Please make sure that the url is correct, the enterprise application: "Franklin Service (83ab2922-5f11-4e4d-96f3-d1e0ff152856)" is granted to access the configured  site via the “Sites.Selected” permissions.
Add permissions to  Site
In order to add the permissions to the  site, we need to find its SiteId.
This can be done using again the graph explorer:
Example:
Using the Id we can set the permissions:
Note: If you get an “Access Denied” error while executing the above request , you need to have “Site Admin” permissions in order to run the above step. Also you may need to give additional “consent” from the Graph Explorer’s “Modify Permissions” panel for additional “Sites” scopes.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/go-live-checklist

Go-Live Checklist
The go-live checklist is a summary of best practices to consider when launching a website. These steps are generally good practices but have some aspects specific to Adobe Experience Manager.
Steps Before Go-Live
Content and Design QA
Make sure that your content and design conforms to the specifications and that you are happy with the website you see on your projects .hlx.live domain. This may include checks for specific accessibility and SEO requirements of your project.
Performance Validation
Every AEM project should produce a lighthouse score of 100 for mobile and desktop from Google Pagespeed insights on its respective .hlx.live site.
See the document Keeping it 100, Web Performance for more information.
Analytics Validation
Make sure that all your analytics setup and the rest of your martech stack is firing as expected and visitor data is visible in your reporting dashboards.In any relaunch of a website the analytics instrumentation will change based on loading sequence and performance.
It is important to expect that the baseline of any metric captured by analytics will change. Contact the corresponding analysts to make sure that the adjustment of the baseline is understood and expected.
Metrics that may change their baselines as reported by analytics may include pageviews, conversion rates, bounce rates, time on page, etc. Depending on the change in loading patterns the baseline of the metrics may go up and down.Bottom of the funnel metrics like checkout, transactions or form submission that are captured by operational systems are not affected and are expected to stay flat past a lift-and-shift launch.
RUM instrumentation
To be able to see performance impact quickly and reliably and to compare before / after launch metrics we recommend instrumenting your website before launch with Real Use Monitoring (RUM), ideally as early as possible. Adding RUM to your existing site is trivial and can give you important operational insights even before launch.
Legacy Redirects
In most migrations there are legacy URLs that are retired. Make sure those are reflected in your redirects spreadsheet (redirects.xlsx in  or redirects in google), found in your project content folder. Check Google Search Console for the most impactful backlinks (in terms of SEO) to create redirects for.
See the document Redirects for more information.
Sitemap & Robots
For most websites with a significant number of pages, a sitemap is desirable. AEM automatically generates sitemaps from the query index. For multilingual sites, adding hreflang to the sitemap ensures that the website correctly targets the appropriate geographic and language audience, which is essential for SEO and prevents issues like duplicate content across different language versions (aka SEO cannibalisation) and improves the search engine's ability to serve the right version of the content to the right users.
If you have a sitemap that’s generated for your site make sure it is discoverable from your robots.txt. ​​Note that robots.txt is (technically) case sensitive, and a good example is:
Note: hlx.page and hlx.live are kept hidden from crawlers intentionally, to avoid duplicate content.
See the documents Indexing and Sitemaps for more information.
Canonical URLs
Make sure canonical URLs return 2xx HTML response status code (not 3xx or 4xx) and that they are correctly implemented, which is crucial for preventing duplicate content issues across the site. Proper canonicalization helps search engines understand which versions of similar pages to index and display in search results, directly impacting SEO performance.
See the following external documentation for more information: Consolidate duplicate urls
Favicon
Adding a favicon to your site gives it a professional look in your visitor’s browsers.
See the document Favicon for more information.
Authentication for Authors
By default, authors don’t need to be logged in to use AEM Sidekick. If you decide you want to control who can preview and publish documents this can be configured.
See the document Configuring Authentication for Authors for more information.
 Access
If your content is in , follow this guide to configure dedicated access which you control.
CDN Configuration
One of the last steps in a go-live is usually to update your CDN configuration (e.g. Cloudflare, Fastly, Akamai, Cloudfront) to point to your hlx.live endpoint.
Ideally the CDN configuration is tested in a staging environment to make sure that everything works as expected, which includes redirects from www to APEX and vice-versa.
Please see the following CDN setup documentation for more information.
Cloudflare Worker Setup Guide
Akamai Setup Guide
Cloudfront Setup Guide
Fastly Setup Guide
Push Invalidation Setup
Make sure push invalidation is properly set up according to the document Configuring Push Invalidation for BYO Production CDN. Test the setup by publishing a small change and verifying that the change is visible on the production domain.
Update Production Host
After setting up your production CDN, add the host property to the sidekick configuration in /tools/sidekick/config.json in your github repo, to allow your authors to navigate directly from the production domain to edit directly from the sidekick.
See the document Sidekick Configuration for more information.
Post Go-Live Validation
Performance Validation
Validate that the performance is still at a lighthouse score of 100 via pagespeed insights on the production environment. Introducing a CDN layer can have adverse performance effects that are usually visible on the protocol layer. Typical culprits are running HTTP/1.1 or ineffective origin caching as well as bot detection or other libraries injected by the CDN configuration.
Google Search Console
If you have an active Google Search Console with your sitemap uploaded, it may be valuable to get a coverage report and make sure that indexing works as expected. The Google Search Console should be monitored for the weeks after a go-live to track the indexing status of new and updated pages, ensuring they are properly recognized by Google. It's crucial to check for total clicks, total impressions, backlinks changes and crawl errors, as these can significantly impact the site's SEO performance and authority.
404 Report
After a website has been migrated there is usually a set of 404 Not Founds, which should be monitored after the go-live and redirected to popular page URLs. This information can be pulled from your site analytics and the respective Slack bot report. Monitoring this for the weeks after a go-live is recommended.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/setup-byo-cdn-push-invalidation

Configuring push invalidation for BYO production CDN
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Setting up push invalidation requires 2 steps:
Configuration
Opt-In Request Header
Configuration
Push invalidation is currently supported for CDNs of the following vendors:
Fastly
Akamai
Cloudflare
CloudFront
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
The following sections describe the vendor specific properties required to set up push invalidation.
Fastly
Configuration properties:
Create a Fastly API Token
go to Personal API Tokens,
click on "Create Token",
enter a name (e.g. "Production Site Purge Token"),
select "A specific service" and your production service from the drop-down list,
check the "Purge select content (purge_select) — Purge by URL or surrogate key" check box,
select "Never expire",
click on "Create Token",
copy the generated token value shown in the pop-up window.
You can validate the credentials with this tool.
Akamai
Configuration properties
Push invalidation uses the Akamai Fast Purge API, specifically Delete by URL and Delete by cache tag.
The Fast Purge API credentials consist of
They can be generated by following the instructions at Create an API client with custom permissions.
Identity & Access Management
Create API client
Required group/role permissions:
You can validate the credentials with this tool.
Cloudflare
Configuration properties
values: free, pro, business, enterprise
default: free
only enterprise plan supports purge-by-tag
Create an API Token
go to API Tokens
click on "Create Token",
go to "Create Custom Token" at the bottom and click on "Get started"
enter a token name (e.g. "Production Site Purge Token"),
Permissions: "Zone", "Cache Purge", "Purge"
Zone Resources: "Include", "Specific zone", "<your production zone>"
click on "Continue to summary"
click on "Create Token",
copy the generated token value.
Note that only sites on the enterprise plan will be surgically purged by url and cache key. A Purge All will be performed instead on non-enterprise sites every time an author publishes a content change.You can validate the credentials with this tool.
CloudFront
NB: CloudFront does NOT support purging by cache tag/key. Purge by cache tag/key always triggers a purge all.
Configuration properties
Create the AWS credentials
In the AWS Console, open the IAM dashboard:
Select Users -> Add users:
Enter a user name and check “Access key - Programmatic access”:
On the “Set permissions” pane, click on “Create group”:
Enter a group name and select the CloudFrontFullAccess policy:
Create the user:
Finally, copy the Access key ID and Secret access key values:
You can validate the credentials with this tool.
Opt-In Request Header
The production CDN needs to send the following opt-in header to the origin in order to enable long cache TTLs:
X-Push-Invalidation: enabled

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/byo-cdn-cloudflare-worker-setup

Cloudflare Setup
The following screenshots illustrate how to configure Cloudflare to deliver content. Essential settings are marked with a red circle.
This setup can be completely done in the browser by using the Cloudflare Dashboard only. If you are already familiar with Cloudflare Workers, Wrangler & GitHub and not afraid of entering commands in a terminal window you might want to follow the instructions for Cloudflare with wrangler instead.
Create a Cloudflare site
If you already have a Cloudflare site and DNS set up you can skip forward to the Setup push invalidation section.
Enter the domain:
Select a plan:
Note that surgical push invalidations are only supported on the Enterprise plan. On all other plans the entire cache of the site will be purged every time an author publishes a content change.For this walk-through we’ll use the Free plan.
Setup push invalidation
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
values: free, pro, business, enterprise
default: free
only enterprise plan supports purge-by-tag
To create an API Token,
go to API Tokens
click on "Create Token",
go to "Create Custom Token" at the bottom and click on "Get started"
enter a token name (e.g. "Production Site Purge Token"),
Permissions: "Zone", "Cache Purge", "Purge"
Zone Resources: "Include", "Specific zone", "<your production zone>"
click on "Continue to summary"
click on "Create Token",
copy the generated token value.
Note that only sites on the enterprise plan will be surgically purged by url and cache key. A Purge All will be performed instead on non-enterprise sites every time an author publishes a content change.
You can validate the credentials with this tool.
DNS Setup
For a new site, we’ll start with a simple DNS setup.
Create a new CNAME record. If your zone is mysite.com and you want to serve traffic on www.mysite.com, then the name should be www
If you want to serve traffic on example.com (without a www) then the name should be @
And if you want to serve traffic on all subdomains, then the name should be *
As we are using workers to serve the content, the value of the Content field does not matter. It’s easiest to use your ref--repo--owner.aem.live host name here. This is a hostname, not a URL, so leave out the leading https://
Make sure the CNAME record is Proxied:
SSL/TLS Setup
Select SSL/TLS from the left pane and Edge Certificates in the dropdown list. On the right side, scroll down to Always Use HTTPS and enable the setting:
Configure Caching
Navigate to Caching → Configuration and adjust following settings:
Caching Level: Standard
Browser Cache TTL: Respect Existing Headers
Create Cache Rules
Next browse to Caching → Cache Rules and create a new cache rule
Note: Enable Origin Cache Control option is only available for enterprise accounts. Free, Pro, and Business customers have this option enabled by default and cannot disable it.
Following settings should apply:
When incoming requests match: hostname contains mydomain.com
Then: Eligible for cache
Under Browser TTL, click "add setting", then apply "Respect Origin TTL"
Create Worker
Return to the Cloudflare Dashboard homepage, then navigate the sidebar: Workers & Pages → Overview. Click "create" to create a new worker.
On the next screen, click "create worker", because that's what you want to achieve.
Enter a name for the worker (e.g. aem-worker) and click on “Deploy”:
On the next screen, click "Edit code"
Edit worker code
Copy the content of this file.
In the left pane, replace the existing content with the copied content.
Click on “Deploy”
Confirm with "Save and Deploy"
Return to your worker (by clicking the back arrow in the top right corner), then click on Settings → Variables and “Add variable”:Add a variable ORIGIN_HOSTNAME and set the value to the hostname of your origin (e.g. main--mysite--aemsites.aem.live):
If you have enabled push invalidation, add a second environment variable PUSH_INVALIDATION = enabled.
Apply the changes by clicking "Deploy".
Next, click on Triggers an select “Add route”:
Enter your domain route (e.g. www.mydomain.com/*), select your zone and confirm with “Add route”:
Depending on the setup chosen in DNS Setup, you would select routes www.mydomain.com/* or mydomain.com/*
Warning: if you select *.mydomain.com/* as Cloudflare suggests in the field default, your site will be available under multiple subdomains. This will invite attackers trying to open webmail.mydomain.com and similar sites, and lead to duplicate content, potentially depressing your search engine rankings.After completing all steps you should be all set.
Optional: Authenticate Origin Requests
When using token-based Site Authentication, add the following to enable authenticated requests from Cloudflare to AEM.
Return to Workers → <your worker> → Settings → Variables
Create a new environment variable ORIGIN_AUTHENTICATION
Paste the site token value from token-based Site Authentication (it starts with hlx_)
Confirm by clicking "Deploy"
Expanding the AEM footprint on your website
In case you start with having only a portion of the website being routed to your .live origin and have routed a specific folder (eg. /blog/*) you can subsequently add more routes whenever you are ready to expose new sections of the site by simply adding more routes and repeat the last “add route” steps as needed, without changing your worker configuration.
Watch out for duplicate content
Search engines often penalize sites for duplicate content, so it's important to make sure your content is not available on the web elsewhere. Cloudflare, unfortunately, has a default setting that will expose your site on additional network ports. In paid Cloudflare plans you can block traffic on these additional ports. This is a recommended setting for production sites.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/byo-cdn-akamai-setup

Akamai Setup
The following screenshots illustrate how to use the Akamai Property Manager to configure a property to deliver content from AEM using your Akamai CDN setup. Essential settings are marked with a red circle.
Essential Property settings
Origin Server
Configuration properties:
Add Behavior: Remove Vary Header
Configuration properties:
Add Behavior: Modify Outgoing Request Header
We will need a number of outgoing request headers, please see the table below. Keep the "avoid duplicate headers" setting enabled for all.
Configuration properties:
Add/Modify Behavior: Caching
Configuration properties:
Add Behavior: HTTP/2
(Optional, but recommended)
Add Rule: Modify Outgoing Response Header
In the list of rules in the sidebar, click the button "+ Rules"
Select "Blank Rule Template", set a name such as "Conditionally strip headers" and click "Insert Rule".
To set the criteria for the rule to be applied click "+ Match"
Then select:
If
Path
Does not match one of
*.plain.html
Click "+ Behavior" and "Standard property behavior" to set the behavior if a match is found
Then select "Modify Outgoing Response Header"
With following values:
Action: Remove
Select Header Name: Other
Custom Header Name: X-Robots-Tag
These are all essential property settings for delivering content.
Optional: Authenticate Origin Requests
When using token-based Site Authentication, add the following under "Add Behavior: Outgoing Request Headers"
Configuration properties:
This setting will ensure that Akamai authenticates requests from your CDN to the AEM Origin, which validates the token received in the Authorization header.
Caveats
Do not enable Akamai mPulse Real Usage Monitoring. While the performance impact on most sites is negligible, for sites built for consistent high performance, enabling it will prevent reaching a Lighthouse Score of 100. In AEM, you have a Real Use Monitoring service built-in, so that dual instrumentation will be unnecessary and is strongly discouraged.
Also, do not enable Akamai Bot Manager or similar Web Application Firewall offerings, as they markedly interfere with rendering performance and user experience. Your site on AEM is protected against bot attacks on the backend, so that this performance cost comes with negligible benefit.
Setup push invalidation
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
AEM push invalidation uses the Akamai Fast Purge API, specifically Delete by URL and Delete by cache tag.
The Fast Purge API credentials consist of
They can be generated by following the instructions at Create an API client with custom permissions.
Go to Identity & Access Management:
Create API client:
Required group/role permissions:
You can validate the credentials with this tool.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/byo-cdn-fastly-setup

Fastly Setup
The following screenshots illustrate how to configure Fastly to deliver content. Essential settings are marked with a red circle.
Setup push invalidation for Fastly
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
To create a Fastly API Token,
go to Personal API Tokens,
click on "Create Token",
enter a name (e.g. "Production Site Purge Token"),
select "A specific service" and your production service from the drop-down list,
check the "Purge select content (purge_select) — Purge by URL or surrogate key" check box,
select "Never expire",
click on "Create Token",
copy the generated token value shown in the pop-up window.
You can validate the credentials with this tool.
Create a Fastly service
Go to the Fastly Management UI and select Create Service, CDN.
Add Domain
Add your production domain (e.g. www.mydomain.com):
Configure Origin
Add your origin (e.g. main--mysite--hlxsites.aem.live) and keep the default settings for:
Override default host
Default compression
Force TLS & HSTS
In the new configuration, click "Edit configuration" in the top right corner and "clone version 1 to edit".
In the sidebar, select "Hosts" underneath "Origins" and click the pencil icon to change host settings.
Scroll down and change Shielding to Ashburn Metro (IAD) (non-mandatory but recommended setting):
Don't forget to "update".
Create VCL Snippets
Create a VCL snippet for the recv subroutine with the following VCL code:
Create additional VCL snippets for the miss and pass subroutines with the following VCL code:
Note: The X-Push-Invalidation: enabled request header enables the push invalidation including long cache TTLs.
Create a deliver snippet with the following VCL code:
Finally create a deliver snippet with the following VCL code:
After completing all steps and activating the service version you should be all set:
Optional: Authenticate Origin Requests
If you have enabled token-based Site Authentication, navigate in the sidebar to Content → Headers, then "create a header" with following settings:
Name: Origin Authentication
Type: Request/Set
Destination: http.Authorization
Source: "token <your-token-here>" (don't forget the quotes, and replace <your-token-here> with the site token retrieved in token-based Site Authentication – the token starts with hlx_)
Ignore if set: no
Priority: 10
Note
Your Fastly setup should not use Fastly’s Next Generation Web Application Firewall for requests that are going against aem.live or any other Edge Delivery Services origin. Enabling WAF with Edge Delivery Services can lead to erroneous content being delivered.
Edge Delivery Services needs no Web Application Firewall, as it is running on hardened, shared, and ultra-scalable infrastructure. Requests that a WAF would typically intercept are terminated in our CDNs.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/redirects

Redirects
Every website has the need for redirects. For example if you relocate or delete content, you want your users to still be able to find it or the next best thing. See the document Authoring and Publishing Content for more information on deleting content.
You can intuitively manage redirects as a spreadsheet called redirects (or redirects.xlsx) in the root of your project folder.
The spreadsheet has to contain at least two columns titled Source and Destination.
The Source is relative to the domain of your website, so it only contains the relative path.
The Destination can be either a fully qualified URL if you are redirecting to a different website, or it can be a relative path if you are redirecting within your own website.
After making changes to your redirects spreadsheet, you can preview your changes via the sidekick and have your stakeholders check that the redirects are working on your .page preview website before publishing the redirect changes to your production website. See the Sidekick documentation for more information about switching between environments.Redirects take precedence over existing content, which means that if you have an existing page with a given URL, defining a redirect for that same URL will serve the redirect for that page and “hide” the existing page. Conversely if a redirect that has been set up on an existing page is removed, the existing page will be served again, unless the page was unpublished.
Remember that if your redirect workbook has multiple pages (worksheets), then the redirects will only work on the sheet that is called helix-default. This allows you to manage more complex redirects through spreadsheet formulas. The spreadsheets and JSON documentation page has all the details.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/auditlog

Audit log
Admin and indexing operations are recorded in an audit log that can be queried via an Admin endpoint.
Only users who have the role admin.role.author can read the audit logs, see Project Configuration for more information.
Admin operations
The audit log stores information about the following successful Admin operations:
The following information about those operations is stored:
Indexing operations
The audit log stores information about the outcome of background indexing operations, namely:
Examples
Here are some examples of how common operations triggered via Sidekick will be reflected in the audit log:

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/sidekick-extension

Installing the AEM Sidekick
​​The AEM sidekick provides content authors with a toolbar offering context-aware options so that they can edit, preview, and publish their content directly from the pages of your website.
This document explains how to install and configure the sidekick.
Installation Options
The sidekick is available as a browser extension in Chrome-based browsers and Safari and can be installed in a number of ways.
Use the sidekick configurator.
Manually install the sidekick as you would any other extension
If you already have the sidekick installed and need help using it, please see the document Using the AEM Sidekick Extension.
Using the Sidekick Configurator
The configurator detects your browser and guides you through the installation process.
In Safari or a Chrome-based browser, navigate to the link https://www.aem.live/tools/sidekick/
Provide the URL to the GitHub repository of your project and optionally a name for the project and click Go.
The sidekick supports multiple projects and providing a descriptive name helps managing the configurations.
The sidekick supports multiple projects and providing a descriptive name helps managing the configurations.
In the new section Install the Sidekick extension and add this project that appears, click the Install Sidekick Extension for Chrome or Install Sidekick Extension for Safari.
The page will then open the App Store or Chrome Web Store as appropriate where you can install the extension as appropriate to your OS.
Return to the page of the configurator and click Add project.
The configurator adds the project to the extension. You are now ready to use the extension!
If you have any issues installing the extension, please review the instructions in the section Manually Installing the Sidekick.
Manually Installing the Sidekick
Chrome
Navigate to the sidekick extension in the Chrome Web Store.
Click the Add to Chrome button.
Click Add extension to confirm the installation.
Click the new Adobe Experience Cloud icon next to Chrome’s address bar and click the Pin icon to keep it visible.
Safari
Navigate to the sidekick extension in the App Store.
Click the Install button.
Enable the extension.
Desktop Safari
Open Safari.
Go to Settings.
Click Extensions.
Check the box next to the sidekick extension.
Mobile Safari
Open Settings
Tap Safari
Then tap Extensions.
Toggle the sidekick extension.
Desktop Safari
Open Safari.
Go to Settings.
Click Extensions.
Check the box next to the sidekick extension.
Open Safari.
Go to Settings.
Click Extensions.
Check the box next to the sidekick extension.
Mobile Safari
Open Settings
Tap Safari
Then tap Extensions.
Toggle the sidekick extension.
Open Settings
Tap Safari
Then tap Extensions.
Toggle the sidekick extension.
Make sure the extension is allowed access to all websites.
If your project requires you to sign in to use the sidekick extension, you need to enable 3rd-party cookies: Safari > Settings > Privacy > uncheck “Prevent cross-site tracking”
Adding Your Project
There are multiple ways to add projects to the sidekick extension:
1. Sidekick Configurator
See the section Using the Sidekick Configurator.
2. Sharing URL
Navigate to a sharing URL starting with https://www.hlx.live/tools/sidekick/?...
Click the blue Add Project button.
Alternatively, you can click the Adobe Experience Cloud icon next to your browser’s address bar and select Add Project from the context menu.
Alternatively, you can click the Adobe Experience Cloud icon next to your browser’s address bar and select Add Project from the context menu.
A dialog will be shown for confirmation. Click OK to continue.
A colleague on the project can provide you with a sharing URL. See the document Using the AEM Sidekick Extension for details.
3. Project URL (Desktop Only)
Navigate to a project URL with a host name like this: https://main–repo–owner.hlx.page/
Click the Adobe Experience Cloud icon next to your browser’s address bar and select Add Project from the context menu.
A dialog will be shown for confirmation. Click OK to continue.
4. GitHub Repository URL (Desktop Only)
Navigate to a GitHub repository starting with https://github.com/...
Click the Adobe Experience Cloud icon next to your browser’s address bar and select Add Project from the context menu.
A dialog will be shown for confirmation. Click OK to continue.
5. Options Page
The options page lists all project configurations and allows you to add, edit or delete them.
Go to the options page:
Chrome: Right-click the Adobe Experience Cloud icon next to the address bar and select Options from the context menu.
Safari (desktop): Right-click the Adobe Experience Cloud icon next to the address bar and select Manage Extension… In the extensions dialog, click Preferences.
Safari (mobile): Open Settings and tap Safari > Extensions > AEM Sidekick > Extension settings.
Chrome: Right-click the Adobe Experience Cloud icon next to the address bar and select Options from the context menu.
Safari (desktop): Right-click the Adobe Experience Cloud icon next to the address bar and select Manage Extension… In the extensions dialog, click Preferences.
Safari (mobile): Open Settings and tap Safari > Extensions > AEM Sidekick > Extension settings.
Add a project configuration using one of the two following methods:
Add via sharing URL: the project configuration will be retrieved from the parameters contained in the share URL.
Add manually: enter the GitHub repository URL and other optional parameters for your project.
Add via sharing URL: the project configuration will be retrieved from the parameters contained in the share URL.
Add manually: enter the GitHub repository URL and other optional parameters for your project.
Understanding Project Configurations
Project Name : Specify your project name here. This would give a name to the project configuration, making it easy to identify in the sidekick. This is an optional configuration.
Repository URL : Specify the Github repository of your project here. For e.g. https://github.com/hlxsites/wknd.
Bonus Tip : You can specify your repository branch here to have your project code picked from this repository branch when you open it up in your browser. For e.g. https://github.com/hlxsites/wknd/tree/mybranch
Bonus Tip : You can specify your repository branch here to have your project code picked from this repository branch when you open it up in your browser. For e.g. https://github.com/hlxsites/wknd/tree/mybranch
Content URL : Specify the url of the project’s root folder in  / AEM root.
Production Hostname : Specify the production URL (the domain name being your project’s public host name). This would ensure that the sidekick is available in the browser when you open the site on the production domain. This is an optional setting.
Advanced Configuration
Develop Sidekick Customizations locally
Test project configuration locally : Use this advanced setting for testing any local customizations in the sidekick. Read more about Sidekick Customizations here.
Local Development URL : Specify the url of your locally running server. Default value is http://localhost:3000
Local Development URL : Specify the url of your locally running server. Default value is http://localhost:3000
Add custom Authorization
For sites that are protected with authentication on .page and .live, you can add an Authorization token that will be added to the HTTP Authorization: header.
This can be used to test the API keys used in your CDN, and make sure that they have access to the origin. This option is likely to only be used by administrative staff for setup and debugging purposes.
Use the Sidekick Extension
Please see the document Using the AEM Sidekick to learn how to use the sidekick.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/tools/sidekick/

AEM Sidekick
Sidekick Configurator
Go
Install the Sidekick and add this project
Clicking the button below will open a separate window with instructions on how to install the Sidekick Extension. Once you have it installed, return to this page and add this project via the Add project button. Learn more.
Install Sidekick for Chrome
Install Sidekick for Safari
If you experience any trouble installing the Sidekick Extension, please let us know in the AEM Community on Discord or your dedicated Slack channel with Adobe.
Your Sidekick is not configured for this project yet
Add project
Once added, you will be able to use the Sidekick with any web page or source document associated with this project.
Your Sidekick is configured for this project
Click the logo in your toolbar to show or hide it while browsing your project. If you don’t see it, click the puzzle piece to reveal all installed extensions and pin AEM Sidekick to your toolbar.
If you want to remove this project from your Sidekick again, click the button below:
Remove project
You can always add it back by returning to this page.
Do you need help using the Sidekick?

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/faq

Frequently Asked Questions

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/sidekick-library

What is the Sidekick Library?
The Sidekick Library is an extension for the AEM Sidekick that enables developers to create UI-driven tooling for content authors. It includes a built-in blocks plugin that can display a list of all blocks to authors in an intuitive manner, removing the need for authors to remember or search for every variation of a block. Developers can also write their own plugins for the sidekick library.
How to use the Sidekick Library?
The steps below detail how to setup the sidekick library and configure the blocks plugin.
Library Sheet Setup
The sidekick library is populated with your plugins and plugin content using a sheet.
1. Start by creating a directory in  or AEM where you want to store the content for the library. We recommend storing the content in /tools/sidekick (or any other name) in the root of the mountpoint. The next steps will assume the directory is called /tools/sidekick.
2. Next, create a workbook (an Excel file) in the /tools/sidekick directory called library (or any other name). Each sheet in the workbook represents a plugin that will be loaded by the Sidekick Library. The name of the sheet determines the name of the plugin that will be loaded. Any data contained in the sheet will be passed to the plugin when loaded. The plugin sheet name must be prepended with helix-. For example, if you want to load a plugin called tags, you would create a sheet named helix-tags.
3. For this tutorial we will create a sheet for our blocks plugin. Create a sheet (or rename the default sheet) and call it `helix-blocks` and leave it empty for now.
Blocks Plugin
The Sidekick library comes with a blocks plugin.
Blocks Plugin Setup
To generate content for the blocks plugin, you need to prepare a separate Word document for each block you want to include.
1. Create a directory inside the /tools/sidekick directory where you will store all the block variations. For example, you could create a directory called blocks inside /tools/sidekick.2. For this example, let's assume we want to define all the variations of a block called columns. First create a Word document called columns inside the blocks directory and provide examples of all the variations of the columns block. After each variation of the block add in a section delimiter.3. Preview and publish the columns document.4. Open the library workbook created in the last section, inside the helix-blocks sheet, create two columns named name and path.6. Next we need to add a row for our columns block. Add the name of the block in the first column and the url to the document that defines the block variations in the second column. For instance, if you want to add the columns block, you could create a row with the name Columns and the path /tools/sidekick/blocks/columns. In order for the library to work across environments (page, live, prod) you should not use an absolute url for the path column.7. Preview and publish the library workbook.
> Since the example blocks are being published you should use bulk metadata to exclude the content inside of /tools/** from being indexed.
Example library.xlsx
Library Metadata
The blocks plugins supports a special type of block called library metadata which provides a way for developers to tell the blocks plugin some information about the block or how it should be rendered.
Supported library metadata options
Default Library metadata vs Library metadata
There are two types of library metadata. Library metadata that lives within a section containing the block, or default library metadata that applies to the document as a whole and lives in a section on it's own (a block called library metadata as the only child in a section).
Let's take an example of a hero block that has 5 variants. Suppose you want to add the same description for each variation of the block, rather than duplicating the library metadata with the description into each section containing the variations. You could instead use default library metadata to apply the same description to every variation of the block. If you decide that one variation actually needs a slightly different description you could add library metadata to the section containing the variation and it would override the default library metadata description when it's rendered within the blocks plugin.
Authoring block names and descriptions using Library Metadata
By default the block name (with variation) will be used to render the item in the blocks plugin. For example, if the name of the block is columns (center, background) then that name will be used as the label when it’s rendered in the blocks plugin. This can be customized by creating a library metadata section within the same section as the block. Library metadata can also be used to author a description of the block as well as adding searchTags to include an alias for the block when using the search feature.
Example block with custom name and description
Content
Display
Autoblocks and Default Content
The blocks plugin is capable of rendering default content and autoblocks. In order to achieve this, it is necessary to place your default content or autoblock within a dedicated section, which should include a library metadata table defining a name property, as previously described. If no name is specified in the library metadata, the item will be labeled as "Unnamed Item."
Blocks composed of content in subsequent sections
There are situations where developers may want a block to consist of content from subsequent sections. This pattern is discouraged for reasons stated here, but if you choose to use it the blocks plugin can render these items using the include next sections property in library metadata.
Templates
Templates are a way to group an entire document into a single element in the sidekick library. To mark a document as a template set type to template in default library metadata.
> Important, the library metadata needs to be in it's own section and be the only child to be considered default library metadata.
Supporting metadata is also desirable for templates. To add a metadata table to the template you can use a Page metadata block.
When the template is copied a metadata with the values will be added along with the content to the clipboard.
Sidekick plugin setup
Since the sidekick library is hosted on the same origin as the content, a static HTML page needs to be created to load and configure the content.
1. Create a file called library.html in tools/sidekick/;
2. Paste the following code in library.html.
In the code above we load the sidekick library from aem.live and then create a custom sidekick-library element and add it to the page. The sidekick-library element accepts a config object that is required to configure the sidekick library.
Supported configuration parameters
The blocks plugin supports the following configuration properties that can be set using the plugins object.
Blocks plugin configuration parameters
Examples
Encoding images
Custom viewports (short form)
Custom viewports
Custom table header colors
You can customize the table header background and foreground color when pasting a block, section metadata or metadata that was copied from the blocks plugin.
Default styles can be set in library.html using css variables.
These values can be overridden using library metadata.
> Depending on the system color scheme selected for the users computer (dark mode), Word may alter the chosen colors in an attempt to improve accessibility.
Custom plugin setup
The example below defines a tags plugin in the config. The keys of the plugins object must match the name of the plugin, any other properties defined in the plugin object will be available to the plugin via the context argument of the decorate method.
Extended Libraries
In some cases merging two block libraries may be desirable. When an extended library is defined the sidekick library application will merge the base library and the extended library together into a single library list for authors.
The example below defines a base library and an extended library (on another origin) that will be merged into the base library.
> The Access-Control-Allow-Origin headers will need to be set on the library.json and blocks of the extended library in order for them to load in the sidekick library. See Custom HTTP Response Headers for more info.
> Due to same-origin policies enforced by browsers on iframes a preview of an extended block cannot be loaded at this time.
Sidekick config.json setup
Next, in order for the sidekick library to appear in the sidekick a config file needs to be created at tools/sidekick/config.json. This config file needs to be created in the code bus and should be checked into github.
The url property in the plugin configuration indicates the location from which the sidekick should load the plugin. This should point to the library.html file we previously created.
> The sidekick config must be checked into the main branch in order to for the plugin to appear in the sidekick.
> If the tools/sidekick/config.json file does not exist in your github repository, it must be created. For more information on sidekick plugin configuration options, see the docs.
Considerations when building blocks for the library
The sidekick library renders blocks by first fetching the plain.html rendition of the the block and then strips it of any other blocks in the content (for example if there are multiple variations of a block in the response). It then requests the same page (without .plain.html) and replaces the main element with the stripped block and loads the entire document into an iframe using the srcdoc attribute.
Use of window.location
Since the block is loaded in an iframe using the srcdoc attribute, the instance of the window.location object used by your sites code will not contain the typical values you would expect to see.
Example window.location object when running in the library
For this reason, if your block requires use of the window.location object we recommend adding the following functions to your scripts.js file and importing them into your function for use.
Use of createOptimizedPicture in lib-aem
The createOptimizedPicture function in lib-aem also uses window.location.href. If you are using this function we recommend moving it into scripts.js and modify it to use the getHref() function above.
Checking for the presence of the sidekick library
Sometimes you may want to know if the page or the block is running in the sidekick library. To do this there are a couple of options.
1. Check if window.location.href === 'about:srcdoc'
2. The main element and the block element will contain the sidekick-library class
Building a Plugin
Developing a plugin is similar to constructing a block in AEM. Once a user tries to load the plugin, the sidekick library will trigger the decorate() method on your plugin. This method receives the container to render the plugin in and any data that is included in the plugins sheet.
> The decorate() function must be exported from the plugin.
Plugin default export & search
The default export from a plugin allows authors to customize the plugin name displayed in the header upon loading, as well as activate the search functionality within the sidekick library.
When the searchEnabled property is true, the library header will display a search icon upon loading the plugin. If the user initiates a search by entering a query, the decorate() function of the plugin will be triggered again, this time with the search string passed in the query parameter of the decorate() function.
Plugin web components
Plugin authors can utilize a select set of web components from Spectrum when building a custom plugin.
The following components from Spectrum are available
The following icons from Spectrum are also available
Plugin Events
Plugin authors can dispatch events from their plugin to the parent sidekick library in order to display a loader or to show a toast message.
Toast Messages
Show and Hide Loader
Example plugin
Tags Plugin
Plugin API Example

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/tools/mp4-doctor/

Optimize your MP4s for display on the Web.
AEM allows videos uploaded as background / ambient videos directly from your content source, however there are limits for assets uploaded directly from your content source to avoid using this route as a video hosting service. For long form videos use AEM Assets or a video hosting platform as a source.
There are a number of tools available to recompress and shorten videos to be compatible with the limits mentioned above, Adobe Express, Adobe Premiere Pro, Handbrake and many other options online, or drag and drop your .mp4 below to have it recompressed in the video processing tool hosted by Cazzaran.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/tools/svg-doctor/

Optimize your SVGs
Add a Title and Description to your SVG and make it ready to be styled in CSS.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/cdn-guide

Picking the right CDN
A Content Delivery Network makes sure that your visitors get your site served as fast as possible when entering your domain name. Adobe Experience Manager integrates with many popular CDN choices, but if you are unsure which one to pick, answer the questions below
Questionnaire
Cloudflare (Enterprise)
AEM customers use Cloudflare Enterprise and benefit from fast and fine-granular purging, powerful extensibility with Cloudflare Workers, support for multiple backends, and zero-trust security support. It's also an all-around good CDN.
Learn how to set up Cloudflare for Adobe Experience Manager
Cloudflare (Free)
Cloudflare's free option is a great choice for smaller sites, as the free tier comes with included traffic and support for Cloudflare Workers. It does not support key-based purging, which means for some updates Adobe Experience Manager has to purge the entire site, making Cloudflare free unsuitable for large sites with frequent content updates.
Learn how to set up Cloudflare for Adobe Experience Manager
Cloudfront
Cloudfront is the CDN that is included in your Amazon Web Services contract. It is a passable CDN that is supported by Adobe Experience Manager, but many important features are missing such as support for fine-granular content purges. This makes Cloudfront unsuitable for sites with lots of content and a high frequency of updates
If this does not discourage you, here is how to set up Cloudfront for Adobe Experience Manager
Fastly (self-managed)
If you are already a Fastly customer, then you know why Adobe Experience Manager integrates with it out of the box: a rock-solid and blazingly fast CDN with fine-grained push invalidation that you can configure using Fastly's VCL language.
Learn how to set up Fastly for Adobe Experience Manager
Fastly (AEM Cloud Service)
Adobe Experience Manager as a Cloud Service bundles the Fastly CDN, which means it's likely included in your contract. Advanced configuration options require using configuration pipelines in Cloud Manager, so you combine the best of YAML with VCL.
Learn how to set up Fastly for Adobe Experience Manager
Fastly (Adobe Commerce)
As an Adobe Commerce customer, you have access to the Fastly CDN. It's a great choice of CDN, rock-solid, blazingly fast, and, thanks to VCL, extremely configurable with plenty of public documentation.
Learn how to set up Fastly for Adobe Experience Manager
Akamai
Akamai is the market-leading CDN and if you are a customer, there is no reason not to use it with Adobe Experience Manager. Akamai supports push invalidation at reasonable speed and can combine sites with multiple backends, which helps when migrating a legacy site to fast edge delivery.
Set up Akamai for Adobe Experience Manager in 13 easy steps.
BYO DNS
Sometimes you don't need a CDN at all. Adobe allows you to use the BYO DNS service, which provides caching and push invalidation, has secure certificates, but does not provide any configuration options. All you need to do is point your DNS records to Adobe and tell us which site you want to serve under your domain.
Bring your own DNS (without a custom CDN) to Adobe Experience Manager

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/byo-cdn-setup

BYO CDN Setup
Customers may use their own CDN to deliver AEM content under their own domain (aka BYO Production CDN). While customers are generally free to configure their CDN according to their own needs there are some settings mandated/recommended by Adobe Experience Manager:
Origin urlhttps://main--<yoursite>--<yourorg>.hlx.live
Headers sent to origin
X-Forwarded-Host: <production domain>
X-Push-Invalidation: enabled(optional, see Configuring Push Invalidation)
X-Forwarded-Host: <production domain>
X-Push-Invalidation: enabled(optional, see Configuring Push Invalidation)
Origin cache controlI.e. Cache TTL on the production CDN is controlled via origin cache control response headers. This should be enabled (if available).
Compression (gzip)Should be enabled
Query parameters
Must be forwarded to origin
Must be included in cache key
Must be forwarded to origin
Must be included in cache key
Age response headerThe Age response header must be either suppressed or overridden (Age: 0)
Vendor-specific setup instructions
If you already have a CDN, follow the instructions below. If you are not sure which CDN to pick, follow our guide to CDN selection.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
Bring your own DNS
A custom domain without having to set up a content delivery network.
Bring your own DNS
A custom domain without having to set up a content delivery network.
IMPORTANT: The production CDN setup should be validated and tested in a stage environment prior to going public.
Note: In case you have not yet completed the upgrade from hlx.live to aem.live, you can find links to the hlx.live-specific versions of the CDN documentation here.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/byo-cdn-cloudfront-setup

Amazon Web Services (AWS) CloudFront Setup
The following screenshots illustrate how to configure AWS CloudFront to deliver content from an AEM origin. Essential settings are marked with a red circle.
Setup push invalidation for AWS Cloudfront
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
NB: CloudFront does NOT support purging by cache tag/key. Purge by cache tag/key always triggers a purge all.Configuration properties:
To create the AWS credentials:
In the AWS Console, open the IAM dashboard:
Select Policies -> Create policy:
Select “CloudFront” as Service, “CreateInvalidation” as Action, then click on “Add ARN”:
Enter you Distribution Id and click on “Add”:
Proceed to “Next: Tags” and then “Next: Review”.Enter a name for the new policy, e.g. “Invalidate<Your Distribution Id>”, and click on “Create policy”:
In the IAM dashboard, select Users -> Add users:
Enter a user name (e.g. “Invalidator”) and click on Next:
On the “Set permissions” pane, select “Attach policies directly” and select the newly created policy (“Invalidate<Your Distribution Id>” in our example):
Proceed to the next step, click on “Create user” end then “View user”:
Select the “Security credentials” tab and click on “Create access key”:
Select “Third-party service”, click the checkbox and proceed to “Next”:
Finally, copy the Access key ID and Secret access key values:
You can validate the credentials with this tool.
Create a CloudFront distribution
Configure the origin
Use main--sitename--orgname.aem.live as the Origin domain.
Add following custom headers:
X-Forwarded-Host: your domain name
X-BYO-CDN-Type: cloudfront
If you have successfully configured push invalidation for your project you should also add the following custom header:
X-Push-Invalidation: enabled
Cache behavior
Keep the default settings here.
Cache key and origin requests
Click "create cache policy"
Create cache policy
Set the Default TTL to 300 seconds.
Under "cache key settings", keep the defaults:
Headers: none
Query Strings: none
Cookies: none
Compression support: gzip, brotli
Close the browser tab and return to the previous screen. On this screen, click "create origin request policy".
Create origin request policy
Keep the default settings:
Headers: none
Query Strings: none
Cookies: none
Then click create and close the tab to return to the previous screen.
Apply Cache policy and origin request policy
After returning to the distribution properties, click the reload buttons next to the Cache policy and origin request policy dropdowns, so that the two newly-created policies show up. Next, select the new policies for both Cache policy and origin request policy.
Create distribution
Select whether you want to enable a Web Application Firewall (WAF). Your AEM origin requires no WAF and use of a WAF is neither required nor recommended for AEM origins.
Scroll to the end of the page and click "create distribution". We need to return to the configuration later, so remember the ID of your distribution.
Create Function to remove Age and X-Robots-Tag headers
In the Cloudfront sidebar, select "Functions" and click "Create function".
Enter a name for the function (e.g. stripHeaders), an optional description and click on “Create Function”:
Replace the code of the function with the following snippet and click on “Save changes”:
Select the "Publish" tab and click on “Publish function”:
Finally, associate the function with your distribution by scrolling down to "Associated distributions" and click "Add association".
In the following dialog, select:
Distribution: the ID of your new distribution
Event type: viewer response
Cache behavior: default
Finally, click "add association"
That’s all (more or less). Please test the distribution in a stage environment.
Optional: Authenticate Origin Requests
If you have enabled token-based Site Authentication, go back to Cloudfront → Distributions → <your distribution> → Origins → <your AEM origin> → Edit
Under "Add custom header", select "add header" and create a header Authorization with value token <your-auth-token>. Replace <your-auth-token> with the token value created through token-based Site Authentication (it starts with hlx_) as the header value.
This will ensure that all requests from the AWS Cloudfront CDN to your AEM origin use the correct authorization.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/authentication-setup-site

Configuring Site Authentication
AEM Live supports token-based authentication. Site authentication is usually applied to both the preview and publish sites, but can also be configured to only protect either site individually.
Warning
Enabling Site Authentication for the publish sites (*.aem.live) will enforce authentication for all your site visitors (intranet). It will also prevent automatic PSI (Page Speed Insights) checks from running on your pull requests in GitHub. For use cases where your BYO CDN should use no (or different) authentication from your .live origin, you will need to configure preview only authentication or bypass authentication with an API_KEY.
If you use authentication, your BYO (production) CDN must not use (disable) caching, otherwise authentication is gradually circumvented.
Limitations
Only authentication is supported. Authorization is not supported.
Authentication can only be enabled or disabled for the entire site
It is not possible to create a custom error page for denied access
Enable Authentication for the Preview and Publish Sites
1. Enable the Configuration Service
All of the following instructions use the Configuration Service for your site, so follow the linked instructions to enable and authenticate, then perform the following API requests.
2. Create a token to access your protected site
POST an empty body to http://admin.hlx.page/config/{org}/sites/{site}/tokens.json the response will be a JSON object containing an id and value field. Remember both, you'll need them for the next steps:
Note that you now have two tokens:
The auth token for the admin API. This one is highly sensitive
The site token, which can be shared with users and systems than need to access your site
3. Enable the token to access your site
POST to http://admin.hlx.page/config/{org}/sites/{site}/access/site.json so that accessing your site on aem.page and aem.live requires the token value you've retrieved in the previous step.
The response contains all token IDs that are currently valid. Each POST request resets the list of tokens, so if you want old tokens to remain valid, make sure to perform a GET request to the same URL before, so your list of tokens remains complete.
The example above sets the site property which controls access to both aem.page and aem.live. This is the most restrictive approach. If you want to limit access to both aem.page and aem.live, POST to site.json. If you want to limit access to aem.page only, post to preview.json. In the unlikely case that you want to limit access to aem.live only, and keep aem.page open, post to live.json.
If you have set tokens for live and either preview or live, then preview and live will override the site-wide settings.
4. Verify that access has been limited
When you open your site in your browser, you will see an HTTP 401 status code, indicating that no access is possible without authentication. Next, try to access the site and provide the token value:
In this request we use the site token value in the Authorization header.
5. Make your CDN pass the right Authorization header
With this change, nobody can access your site without the correct authorization header. This includes your CDN, and therefore every visitor to your site. To enable access again, you need to add the Authorization header to each origin request your CDN makes.
The CDN setup instructions explain how to enable the authorization header for each supported Content Delivery Network.
Browser Access to the Protected Sites
Accessing protected sites directly from a browser requires users to have an appropriate role defined in the project configuration and to sign in using the AEM Sidekick Extension.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/config-service-setup

Setting up the configuration service
The Configuration Service is used to aggregate and deliver configuration for various consumers in the AEM architecture including: Client, Delivery, HTML Pipeline, and Admin Service.
Configurations stored in the client scope can be consumed from your site or the AEM Sidekick and control functionality and behavior for visitors and authors. All other configurations are internal to the AEM infrastructure and cannot be accessed directly.
The configuration is managed using REST calls to the Admin service (admin.hlx.page). See AEM Admin API for details of the API.
For existing AEM projects (coming from hlx.live) projects, the configuration service aggregates a valid configuration based on the various sources (fstab.yaml, .helix/config.xlsx, etc). This ensures backward compatibility, but means that some features are not available in this document mode (the traditional, distributed configuration).
One of the new features that the configuration service can support is independent code and content definitions per site. A site is a combination of an org name and a site name. This is similar to the GitHub owner and repo tuple, but has no longer a relation to the GitHub project.
For example, a site named website of the org acme could have a code repository adobe/helix-website. The preview URL follows the same scheme, but using site and org instead. In this example: https://main--website--acme.aem.page. (also notice the new 2nd level domain name, aem).
With this new mechanism, it is now possible to have multiple sites that use different content, but use the same code repository. This feature is also known as “repoless”.
Prerequisites
There are some rules and constraints when creating new setups that use the configuration service
Any aem.live organization needs also to exist as github.com org and at least one repository needs to be synced to the Code Bus using AEM Code Sync. This ensures that the organization namespace is properly claimed by an entity that can also claim an org on github.com.
For projects that want to use multiple sites with the same code repository (repoless), there must be one canonical site for which the organization/site matches the github owner/repo. This is required for proper code-config association and CDN push invalidation.
Configuration Example
In this example we will create two new sites, website and products of the acme org, which will both share the same github repository: acme/website. The content is managed in , at a fictitious https://acme..com/sites/aem/Shared%20Documents/website and .../products.
We assume that the acme org is already set up and a user was defined that can manage the site configurations.
1. Create new configuration for the first site
Make sure that you are properly authenticated, then using the Admin API, we create the first site:
The new site is now available at https://main--website--acme.aem.page. Most likely only the 404.html is shown, as no content has been previewed yet.
2. Create new configuration for the second site
Using the Admin API, we create the second site:
The new site is now available at https://main--products--acme.aem.page. Most likely only the 404.html is shown, as no content has been previewed.
Updating a site's configuration
You can update the site configuration either as a whole document, or only certain sub-structures. For example, to give user bob configuration-admin rights:
Other examples
Update Code Location
Update Production CDN
Update Headers
Update Folders
Use this for updating the folder mappings.
Update Public Custom Configuration
The public configuration can also be accessed via the site host https://main--website--acme.aem.page/config.json.
Remove unused configuration files
Once you have enabled the configuration service, the configuration settings there supplant the settings you have in configuration files in your GitHub repository and your content source, so it is best to remove them:
First remove the files from github:
fstab.yaml
robots.txt
tools/sidekick/config.json
helix-query.yaml
helix-sitemap.yaml
And after those are removed, check if the hlx.page preview page returns a 404. This means that the internal configuration of the repository based config is cleaned up. Then you can also unpreview and delete the configuration in /.helix folder in your content:
.helix/config.xlsx
.helix/headers.xlsx

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/repoless

One codebase, many sites
If you have many similar sites that mostly look and behave the same, but have different content, you may want to share code across multiple sites. In the past, the best way to do this was to create multiple GitHub repositories, keep them somehow in sync, and run each site off a dedicated GitHub repository.
AEM supports running multiple sites from the same codebase without having to take care of code replication. This ability is also known as "repoless", because all but your first site don't need a GitHub repository of their own.
Follow this document to learn how to create and manage multiple sites off the same codebase. Make sure you have followed the developer tutorial, as it provides the basics of creating a site on AEM.
How this works
Repoless sites are enabled by the Configuration Service in Adobe Experience Manager, which introduces a couple of concepts such as Organization, Profile, Repository, Site, and Content Source. The following diagram shows how the pieces fit together.
Organization
Each site in Adobe Experience Manager belongs to an organization. This organization has the same name as an org on github.com, so that there is no naming conflict. An organization can have multiple sites, profiles, and users.
Profile
Profiles are a way to group and re-use important configurations such as headers, indexes, additional metadata, and so on. A profile can be used by multiple sites within an organization, so that there is consistency among them.
GitHub Repository
For each codebase in Adobe Experience Manager, there is one GitHub repository. By creating a first site that uses this repository through AEM Code Sync, this code will be made available to Adobe Experience Manager and can then be used by multiple sites. When updates are pushed to the GitHub repository, they apply to all sites that use this codebase.
Site
A site combines content, code, and configuration to create a new web experience. Configuration can be attached directly to the site, or it can be referenced from a profile. While a profile can be used by multiple sites, each site can have only one profile. When there is a conflict between the configuration settings in a site and in a profile, the site configuration wins.
Which content source and which codebase to use for a site are configuration settings, too. This enables the re-use of code and repoless sites.
Content Source
The content that makes up a site is pulled from a content source when authors preview or publish content. Typical sources include  and AEM, or the bring-your-own-markup adapter.
Create your first base site
The first step to creating a bunch of sites is to create a first site. This site can be used to serve content, but the most important job is to ensure that code is synchronized from your GitHub repository to all sites that use this codebase.
Pre-requisites
Github Repository : https://github.com/{org}/{site}
Content Repository (AEM / ) : https://{org}..com/sites/aem/Shared%20Documents/{site}
Create organization
Using the Admin API, we need to create the organization
Confirm the organization is created and you have administrator privileges.
Note : Please contact Adobe to obtain administrative privileges to create the organization config
Create site within organization
Using the Admin API, we create the first site
The new site is now available at https://main--{site}--{org}.aem.page. Most likely only the 404.html is shown, as no content has been previewed yet.
Create a repoless site
Pre-requisites
Base site configured with code and content repository using the Admin API (see previous section)
Content Repository (AEM / ) for new repoless site : https://{org}..com/sites/aem/Shared%20Documents/{site2}
Create your first repoless site
Using the Admin API, we create new configuration for the first repoless site
The new site is now available at https://main--{site2}--{org}.aem.page. Most likely only the 404.html is shown, as no content has been previewed.
Now we have created multiple sites sharing the same code base but different content repositories.
Additionally, you can use the Admin API to set other available advanced options to use within configuration management.
What’s not needed once you go repoless
When you start with Adobe Experience Manager, many settings are kept either with your content in the content source, or in the GitHub repository next to your code. With the Configuration Service there is now a central place for these kinds of settings.
Below gives you a comparison between how different areas are configured when we use the document mode (the traditional, distributed configuration) vs. using the Configuration Service API.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/

What is Adobe Experience Manager?
Create a website,
seriously fast.
Adobe Experience Manager now integrates the tech you already own, know, and love. Your content, your tech, your audience taken to the next level.
Use the technology you already have
No time for slow sites
Faster sites, better business
You don’t have the time for slow sites – and neither do your visitors.
Business OwnersSlow sites are not just a bad experience, they are also bad business. Why spend to acquire traffic only to lose the engagement on the site? Improved performance improves business outcomes like conversions, time on site, and order values.
VisitorsPerformance is the number one factor limiting user experience of sites on the web. Performance outranks all other factors including design and content. Slow sites means users bounce, leave, and never return.
SEOSlow sites mean most of your audience won’t even see your site. With site performance becoming the most important factor for search engine rankings, this means lost traffic that you need to buy back in ads.
DevelopersMany developers are stuck getting their sites to acceptable performance standards, and great performance seems out of reach. Adobe Experience Manager takes a performance-first approach to delivery, making lighthouse score 100 a reality.
Publish Faster
A CMS that gets out of the way gets your content on the way
Business OwnersBy using the tools your authors already know, you don’t just cut down on time for training and onboarding, you also manage your content in one place. When dealing with structured content, Adobe Experience Manager plays nice with Excel and AEM Page.
AuthorsAEM takes the unstructured content that you already have, in Word or AEM Page, and turns it into active web experiences. You can use the tools you already know, and all it takes to publish is the press of a button.
DesignersThe content-first approach of AEM turns rigid content modeling chores on its head: the CMS adapts to the content authors create, instead of forcing authors to think in components, structure, and rules of a CMS.
Content OperationsBuilt with the needs of real-world mission-critical sites, AEM cracks the nuts of managing metadata at scale, delivering internationalized and localized content, optimizing for search engines, social sharing, testing, and experimentation.
Develop Faster
Everything modern web development needs, and not a single bit more
Business OwnersWith its lightweight approach to web development, Adobe Experience Manager allows you to go live in weeks, onboard new developers in days, and iterate on changes in minutes. Unlimited preview sites give you confidence that changes will be what you need.
OperationsAEM is one less thing to be on call for. Incredible availability due to fully redundant architecture, endless scalability as a full software as a service and easy integrations with your existing CDN make go-live anxiety a thing of the past.
DevelopersAEM uses all the things modern web developers love: GitHub, local development with auto-reload, performance, simplicity – and none of the complications: no transpilation, no bundlers, no configurations, no overhead.
Quality EngineersAutomated assurance of performance, accessibility, SEO, and best practices thanks to built-in quality checks. Continuous assurance of real-world site performance and functionality through real user monitoring.
Benefits
Made to meet your every CMS need and more
Unmatched Speed
The full Adobe Experience Manager stack is optimized for one thing: make your content shine, and make it fast. Delivering at speed is not enough, so we also make it fast to author, publish, and develop.
Content At Scale
From simple sites to ten thousands of pages, AEM handles content at scale, across markets, languages, and countries. And even the biggest sites publish instantly with pushed cache purges.
Uncertainty Eliminated
There’s no place for guesswork in authoring high-performing sites. Each preview generated by AEM offers 100% fidelity, and a unique, easily shareable URL for your reviewers.
Widen the Talent Pool
Using what you already know, is the core of the AEM approach. This means your team can do more with less, requires less training and creates fewer support tickets.
Low Code Productivity
Building great sites does not require complicated frameworks, tooling, or processes. AEM uses plain HTML, modern CSS, and vanilla JavaScript to create exceptional experiences without the usual overhead.
Composability is Here
Headless or headful, your content can go farther with AEM’s composable architecture. Deliver the right content in the right format, and add the right decorations to make it an experience that stands out in any channel.
Content First
No matter if structured or unstructured, AEM puts your content first, delivers it optimally and provides your developers with everything they need to make it shine.
Peak Performance
Every great experience starts and ends with performance. Adobe continuously monitors the performance of your AEM site and lets you know when there are ways to improve. All you have to do is approve the pull request.
Go live with trusted digital leaders
Customer Stories
Making an impact with our customers from the start
“Adobe made it easy for us to launch with a Lighthouse Score of 100, something nearly unheard of for professional sites. We did not have to compromise on functionality, even video-heavy sites perform superbly. And when the experience degrades, Adobe fixes issues proactively before we even notice”
Scott Gutterman
PGA TOUR Senior Vice President, Digital Operations
100Google Lighthouse
50xPeak Traffic Ratio
12+Sites launched in Q1
“Adobe Experience Manager has been a game-changer for our website. The easy-to-use platform has allowed us to provide our customers with in-depth product information and support resources in eight different languages, which has helped us to maintain our global reach.”
Geoff Angell
Digital Strategy Manager, Graco
100Google Lighthouse
8Language Markets
10Custom Blocks
“With AEM we were able to spin up a critical site in a few weeks and get our new division’s story to market effectively. Creating a new marketing site for our enterprise division that allowed us to meet our key stakeholders’ performance and authoring requirements has never been easier. ”
Corey Hankey
Managing Partner, Thinkingbox
100Google Lighthouse
20+Custom Blocks
4+Case Studies
How it works
Creating a site with AEM is easy as
01
Create content inMicrosoft Word orAEM Page.
Create a new folder in AEM or . Then add a new document and put some content in it.
02
Share your folderwith Adobe.
After you create a page, head back to your folder and share it with Adobe Experience Manager.
03
See your sitein action.
After you have added some content, shared with Adobe, built a repo, and tied your repo to your content, you can see your site in action.
See the real value of Adobe Experience Manager

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/business/reachout

Got Questions? Let's Connect!
Dive Into Our Resources: Explore our comprehensive documentation, engaging tutorials, and user-friendly videos to kickstart your journey.
We're Here to Help: Do you prefer virtual interaction on our AEM Discord Community? Join in or sign-up if you are not already part of it. Your questions and insights pave the way to better solutions.
Want to Connect? Ask any questions and we’ll be happy to help. Please reach out to us!

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/folder-mapping

Folder Mapping
It’s not uncommon for websites to serve multiple URLs from a single document, displaying dynamic content for large portions of the page without authors having to create each page individually.
Some scenarios where this is useful:
Commerce websites generating product pages from a product information API
Blogs with dynamic listing pages of posts for categories or tags
For a single-page application, mapping requests to a code-bus resource
AEM handles these cases via a folder mapping in the fstab.yaml file:
Additional Considerations
There are some additional rules applied to bulk metadata for folder mapped pages, see Folder-mapped metadata in the bulk metadata documentation for details.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/authentication-setup-authoring

Configuring Authentication for Authors
Enable Authentication for Authors
By default, authors don’t need to be logged in in order to use Franklin via Sidekick. In order to enable authentication, it is sufficient to add relevant access-statements to your site configuration. Upon encountering said access-statements, the Sidekick will enforce authentication with the respective provider: Microsoft for  based projects, and Google for AEM based projects.
Step 1: Create Configuration
If not present already, create your site configuration file:
In your site’s root folder create a folder named .helix
Go to the folder named .helix
Create a new spreadsheet with name:
On : config.xlsx
On AEM: config
On : config.xlsx
On AEM: config
Name the first column header key
Name the second column header value
Step 2: Add Access Allow To Configuration
Open your site configuration file, located in your site root folder: .helix/config.xslx (on ) or .helix/config (on AEM).
Add admin.role.author and or admin.role.publish key/value pairs as rows to your configuration sheet for each individual user or wildcard-domain you’d like to give access to the site for.
Example for an individual user: admin.role.publish = some.user@example.comExample for a wildcard domain: admin.role.author = *@example.com
The following example would grant author access all users within the “example.com” domain and publish rights to a the single user “some.user@example.com”:
Ensure that the users are able to authenticate themselves using their login credentials as follows:
If using AEM, they must be able to authenticate with their credentials using Google authentication.
If using , they must be able to authenticate with their credentials using Microsoft authentication.
Step 3: Activate Your Configuration
If you haven’t done so already, install the Sidekick Extension.
With the site configuration sheet still open, click the Sidekick’s “Preview Button”:
This will copy your site configuration to both the preview and live stages of Franklin, since configuration values are treated global.
Step 4: Login via Sidekick
The next time the Sidekick opens on a document, it will show a Sign In option:
Once you click it, it will open a new browser tab, redirecting to your respective provider:
The first time, it will ask for consent that the Franklin Admin service can access your  or google data. In case you are not admin on the account, you see a the following message:
In this case, ask an Active Directory admin of your organization to login via Sidekick or directly via the admin link: https://admin.hlx.page/auth/microsoft
They should see the following:
The admin can either grant consent directly by checking the ‘Consent on behalf of your organisation’ when they log in, or later via the Azure Portal.
Step 5: Granting Admin Consent via Azure Portal
In order to grant admin consent, open the azure portal and go to:Home -> Active Directory -> Enterprise Application s
Search for the Franklin Admin:
It should have the application id shown above.
Select the Permissions tab (below security):
And click on Grant admin consent for {your organisation}.
After clicking Accept you can refresh the Permissions blade a few times, until the consented permissions show up:
Now, the non admin user should be able to login:
Using the Admin Service (admin.hlx.page)
When authentication is enabled for admin.hlx.page using the API endpoint with tools like curl will require to use a proper auth token. For one time ad-hoc use by developers it is very convenient to just copy/paste the x-auth-token header from your browser's network tab from an authenticated request sent by sidekick to admin.hlx.page and pass it into the curl via the -H option. eg:
curl -v -H "x-auth-token: id_token=..." "https://admin.hlx.page/status/[org]/[repo]/main/?editUrl=auto"
Define user roles without enforcing authentication
By default, as soon as the role mapping is defined via an admin.role.* entry, authentication is enforced on that project. It might be desirable to allow unauthenticated access but still be able to define a user mapping, for example give a user the admin role.
The requireAuth property can be used for this with the following values:
auto is the default and enforces authentication as soon as a role mapping is defined.
true will always enforce authentication
false will not enforce authentication
Example:
Give the user bob@example.com the admin role but don’t enforce authentication:
Default Roles
If no role mapping is configured, the admin uses default roles to determine the permissions of the request. The default role can be specified using the admin.defaultRole property.
By default there are no default roles, unless requireAuth is auto, in this case the default role is basic_publish (see below). Example:
Use publish as default role:
Evaluation
The effective roles of a request are evaluated as follows:
If a request isn’t authenticated and requireAuth is true, a 401 status code is returned.
If a request isn’t authenticated and requiredAuth is auto and role mapping is defined, a 401 status code is returned.
If a request isn’t authenticated the defaultRole is used.
If a request is authenticated and no role mapping is defined, or if requireAuth is false, the defaultRole is used.
If a request is authenticated and role mapping is defined and requireAuth is not false, the roles that match the user are used.
If no mapping matches, the user will have no role; effectively always returning a 403 status code.
If several mapping matches, the user will have a combined set of roles
If no mapping matches, the user will have no role; effectively always returning a 403 status code.
If several mapping matches, the user will have a combined set of roles
Admin Permissions
Admin Roles
<all permissions>
cache:write
code:read
code:write
code:delete
index:read
index:write
preview:read
preview:write
preview:delete
edit:read
live:read
cron:read
cron:write
snapshot:read
job:read
<basic_author>
live:write
live:delete
<basic_author>
edit:list
job:list
log:read
preview:list
preview:delete-forced
snapshot:delete
snapshot:write
job:write
<author>
live:write
Live:delete
live:delete-forced
live:list
<author>
code:write
code:delete
code:delete-forced
config:read-redacted
<publish>
config:read
config:write

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/sidekick-customization

Customizing the Sidekick
You can customize the sidekick for your project. You can add a /tools/sidekick/config.json configuration file to your project's GitHub repository:
For all available configuration options, see the Sidekick API documentation or the config schema. Here are some basics to get started:
Plugins
id and title are mandatory. title will show up on the plugin button. You can provide localized titles in a titleI18n object
How to specify the plugin action depends on the intent:
To simply open a URL in a new window, you can use the url property. You can optionally have it open in a palette by setting isPalette to true./tools/sidekick/config.json:
This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
Learn more about bidirectional Unicode characters
Show hidden characters
{
"plugins": [
{
"id": "foo",
"title": "Foo",
"url": "/tools/sidekick/foo.html"
},
]
}
view raw
config-plugin-url.json
hosted with ❤ by GitHub
Executing code must be done in the context of your page (not supported in the edit and admin environment). You can use the event property to specify the name of an event to be fired when the plugin button gets clicked. You can then react to it in your application code as in the following example:/tools/sidekick/config.json:https://gist.github.com/rofe/e5f215be84acc51ffe87002408d4e107 /scripts/scripts.js:https://gist.github.com/rofe/4d38d9ec8253cc2f4bec3dad757c33fc
To simply open a URL in a new window, you can use the url property. You can optionally have it open in a palette by setting isPalette to true./tools/sidekick/config.json:
This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
Learn more about bidirectional Unicode characters
Show hidden characters
{
"plugins": [
{
"id": "foo",
"title": "Foo",
"url": "/tools/sidekick/foo.html"
},
]
}
view raw
config-plugin-url.json
hosted with ❤ by GitHub
Executing code must be done in the context of your page (not supported in the edit and admin environment). You can use the event property to specify the name of an event to be fired when the plugin button gets clicked. You can then react to it in your application code as in the following example:/tools/sidekick/config.json:https://gist.github.com/rofe/e5f215be84acc51ffe87002408d4e107 /scripts/scripts.js:https://gist.github.com/rofe/4d38d9ec8253cc2f4bec3dad757c33fc
The environments array specifies where the plugin should appear (dev, edit, admin, preview, live, or prod). You can also define exclude_paths and include_paths arrays to narrow down the plugin’s appearance based on the path.
isContainer turns a plugin into a dropdown. You can then add other plugins to it by specifying its ID in the containerId property.
override can be set to true to extend an existing plugin.
Special Views
path and viewer are mandatory. Optionally, you can specify a title that will be shown at the top, and you can provide localized titles in a titleI18n object:https://gist.github.com/rofe/9170d068a7b3ab727a8745774e430aca
Add an HTML file as configured in path to your project’s GitHub repository:https://gist.github.com/rofe/0de48b1696c7334f6fdbd9f63993aad2
Add an optional CSS file in the same directory, and a JS file with your logic:https://gist.github.com/rofe/8357f72407683cf4bd27c5d364b71af7
Open a project URL that matches the configured path and click the sidekick to see your viewer in action.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/%7B%7B%20revealButtonHref%20%7D%7D

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/byo-dns

Custom domains without a custom CDN
The most common way of going live with a AEM site is to use a custom Content Delivery Network (CDN). Our documentation provides instructions for the most common CDN providers and through your Slack support channel, the AEM team provides assistance.
If you do not have a CDN, we can provide you with assistance in setting up a custom domain without a CDN.
Prerequisites and limitations
You must own the domain under which you want to serve your site
You need to be able to make Domain Name System (DNS) changes to the domain name
Adobe will provide you with a TLS certificate, and you do not have a choice in certificate authority to use
You will be able to establish a redirect from https://example.com to https://www.example.com but all other redirects must happen through the redirects spreadsheet
HTTPS is required and IPv6 is not supported
Before you go live
Reach out to the Adobe team in your dedicated Slack channel and tell them which domain (e.g. www.example.com) you want to use and which site (e.g. https://main–example–hlxsites.hlx.live) should be the content source.
The Adobe team will verify the request and tell you when you are ready for the next step. This will usually take a few hours and might take up to one business day.
Setup push invalidation
Push invalidation automatically purges content on the managed CDN whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
After making changes to the config sheet, preview it with the sidekick to activate the changes.
Authorize the creation of the domain validation (DV) Certificate through ACME Challenge
This ensures that the domain validation certificate is available before any traffic is directed to the CDN.
Create a CNAME as below (aka ACME DNS challenge ) to authorize the creation of the DV Certificate
_acme-challenge.<your-domain-name> CNAME <challenge-value>
For e.g.
_acme-challenge.example.com CNAME random-value.example-acme-server.com
The “challenge value” would be provided to you by the AEM team.
Once the above is done, execute dig command as below
$ dig _acme-challenge.example.com
And ensure that it responds with
_acme-challenge.example.com. 19454 IN CNAME random-value.example-acme-server.com.
If you got the response as above, you can skip the “Special Note“ below.
Note: Once the DV Certificate challenge has been created, customers have 7 days to create the validation CNAME. If not done within 7 days, then the Adobe team needs to retry the certificate issue process after the validation CNAME is created.
Special Note for DNS providers that require a trailing period (.)
Some but not all DNS providers require that a period (.) is added to the end of a target DNS to indicate that it is not local to the DNS Zone where the CNAME is being added.
dig and nslookup also add a . to the end of a domain reported to show it is fully qualified and not in the context of the zone being queried.
For instance, if we say we need a CNAME like the one below, we are using Full FQDNS (as you would see in a http url)
_acme-challenge.example.com CNAME random-value.example-acme-server.com
We expect it to be added so that
$dig _acme-challenge.example.com
responds with
_acme-challenge.example.com. 19454 IN CNAME random-value.example-acme-server.com.
And not…
_acme-challenge.example.com. 19454 IN CNAME random-value.example-acme-server.com.example.com.
(here the record was added to the DNS provider with no trailing period (.) after example-acme-server.com and hence the DNS provider assumed the target was local to the zone, i.e. example.com.... which makes no sense for an ACME DNS challenge)
To handle such situations, where your DNS provider requires you to add a trailing period (.), create a CNAME record as below:
_acme-challenge.example.com. CNAME random-value.example-acme-server.com.
Observe the trailing period (.) in the example above.
Retry the dig command as follows
$dig _acme-challenge.example.com
And ensure that now it responds as expected with
_acme-challenge.example.com. 19454 IN CNAME random-value.example-acme-server.com.
Optionally lowering TTL of existing DNS records in preparation of going live for faster roll-out
If your existing DNS records for the domain which is set to go live, have a long TTL (like 12 hours or more), then for faster roll-out of the site once it is live, you may want to set it to a lower TTL (like 1 hour or maybe even as low as 60 seconds). This ensures that after going live, the traffic starts getting routed to the new site faster instead of waiting for the original TTL to expire. Do remember to restore the TTL back to the original value while updating the DNS records for going live.
As you go live
Make or request following DNS change:
For www.example.com set the CNAME DNS record to hlxcdn.adobeaemcloud.com
Use a high time to live (TTL) of 3600 seconds (one hour) or more. This will increase the reliability of site delivery in case of a DNS outage. If you lowered the TTL value for faster roll-out in preparation of going live, restore it to its original longer value.
If you want to establish an automatic redirect from from https://example.com to https://www.example.com the following additional steps are required
For example.com set the A record to these four IP addresses: 151.101.2.117, 151.101.66.117, 151.101.130.117, and 151.101.194.117
If your DNS provider cannot support multiple IP addresses in an A record (e.g. GoDaddy), use any of the listed IP addresses. This will be a bit less reliable, but won’t matter
Use the same high TTL as described above
Depending on your existing DNS setup including the TTL specified in the DNS records, these changes can take a few minutes to several hours to complete. If you have existing traffic on the site, make sure all redirects are in place or keep your existing site functional till the traffic has completely been redirected to the new site, which is essentially waiting out for the duration of the TTL in the DNS records to expire.
The certificates are issued automatically after you have successfully set up the ACME challenge as explained in the “Authorize the creation of the DV Certificate through ACME Challenge” section above.
Please note that if you are hosting both APEX and the `www` domains they both need to have the DNS configured for the certificate to be generated.
If you are looking for a timed launch, it is a good idea to create a temporary holding home page that will be replaced with the correct content at the desired launch time. As publishing in AEM is fast and predictable, this will give you more control over the visibility of your content than relying on DNS.
After you go live
The AEM team will verify your setup and let you know if any problems arise.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/upgrade

Upgrading to aem.live from hlx.live
If you are familiar with *.hlx.live for published content and *.hlx.page for previews, please note that we are introducing *.aem.live and *.aem.page as new domains for your sites.
With this change, we are also introducing several improvements while making sure everything works just as before. The most important benefit is that preview URLs will load faster on aem.page thanks to caching.
In this guide, we will walk you through the changes you'll need to make to upgrade to aem.live. Many of these steps are only required if you use specific features, so you may not need to complete all steps. Rest assured, the process is straightforward, and we are here to help you every step of the way.
Try your site on aem.live
Go to your site on hlx.live and replace hlx.live in the URL with aem.live. For instance, if you used to see your site on https://main--helix-website--adobe.hlx.live/ then your new URL would be https://main--helix-website--adobe.aem.live/. No more hlx.live, instead it's aem.live now.
Try previews on aem.page
If your site works on aem.live, then previews will also work on aem.page. For instance, if you used to see your site on https://main--helix-website--adobe.hlx.page/ then your new URL would be https://main--helix-website--adobe.aem.page/.
Tell Sidekick to use aem.live and aem.page
Even though both hlx.page and aem.page work for previews now, Sidekick will always default to hlx.page.
Let's change this. In your  or AEM folder, locate the .helix/config spreadsheet and add following values:
cdn.live.host: main--{ repo }--{ owner }.aem.live
cdn.preview.host: main--{ repo }--{ owner }.aem.page
Preview the spreadsheet using Sidekick to activate the new configuration.After activating the configuration, please make sure the Sidekick preview action is opening urls with .aem.page.
Point your CDN to aem.live
In your CDN setup, change the origin URL or host name from hlx.live to aem.live and activate the change. If you experience any issues, then revert the origin URL or host name back to hlx.live and contact Adobe for assistance.
We recommend to make the change in lower environment such as stage before performing it in production environment
That's it, you made it! Your site is now on aem.live. For 95% of all sites, this is all you have to do. Keep reading for the remaining 5% of special cases.
If you need help during the upgrade or ran into issues, please join our Discord channel or get in touch with us to discuss further.
Advanced Upgrade Scenarios
If you are using BYO DNS without BYO CDN
If you use custom domains without a custom CDN, please contact Adobe to perform the origin change to aem.live.
If you are using hlx.page or hlx.live urls in your code
Check your GitHub repository for any references to hlx.page or hlx.live. If you find them, double-check the functionality, as the changed hostname may introduce CORS or other cross-origin issues. Update the references to aem.page or aem.live.
Code references to hlx.page and hlx.live in the sampleRUM() function, lib-franklin.js or aem.js do not need to be changed.
If you are using hlx.page or hlx.live in your content
Check your content repository for any instances where you might have references for hlx.page or hlx.live in any content areas, including spreadsheets, for project-specific functionality.
Update link references around project documentation areas that may include, but not limited to, Block Library, Runbooks, Authoring Guides, and Pull Request Templates.
We don't need to update in-content or absolute links/hrefs pointing to hlx.page or hlx.live in the Word documents, as they will be auto-transformed to aem.page and aem.live.
If you use the deprecated forms endpoint to receive form posts in Excel or AEM Page
The forms service on hlx.live has been deprecated and will not be supported on aem.live. Please contact Adobe to discuss possible alternatives for this service.
If you have configured external services to use hlx.page or hlx.live
Many services like Google reCaptcha, Google Maps, Cloudflare Turnstile, etc. use the site domain or referrer domain to validate API tokens. If you have configured these services to allow your site on hlx.page or hlx.live, make sure to also allow aem.page and aem.live
If you want to update aem.js, too
Upgrading to aem.live does not require code changes. Some teams use the opportunity to also update to the latest version of aem.js. It's best to treat this as a separate upgrade and (like all code changes) test it on a separate branch.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/forms

Forms
Understanding the available forms blocks
Document-based Authoring (Microsoft Excel, AEM Page)
Document-based Authoring (Microsoft Excel, AEM Page)
AEM Authoring (Adaptive Forms Editor, Universal Editor)
WYSIWYG editing experience for easy form creation and visualization
(Deprecated) Submission to Microsoft Excel and AEM Page
Submission to Microsoft Excel and AEM Page
Submit data to databases, content management systems (CMSs), External APIs
Pre-processing and post-processing data for data cleaning, data combining, data transformation, and data reduction.
Email Notification on form submission
Form Data Model for defining data structure and interactions with various data sources
Configure forms to produce submit data in predefined and structured format.

Basic HTML input types
All basic HTML5 input types
File Upload
Terms & Condition
Accordion
Form Container
Wizard
Forms Portal components to list all the forms on an AEM Sites page
Ability to create custom form components for specific needs
Google reCAPTCHA
hCaptcha
Cloudflare Turnstile
Integration with Adobe Sign for electronic signatures
Integration with Adobe Workfront Fusion to trigger Adobe Workfront Fusion scenarios upon form
Integration with Adobe Analytics to capture user interaction data
Integration with AEM Workflow
Integration with various data sources for pre-populating forms and submitting data.
Show/hide fields
Compute value
Enable or disable an object
Set a value for an object
Clear the value of an object
Set focus on a specific object
Submit or reset the form entirely or a particular object
Validate the form or an object
Advanced rules editor for creating complex logic
Server-side extensibility for custom functionalities
Document of record functionality to create archives of submitted data
For advanced users, there's also support of custom functions for more granular control.
For more details about Adaptive Forms Block, check out AEM Forms Edge Delivery Services documentation. An example of a basic form block can be found here.
(Deprecated) Preparing a Sheet for Data Ingestion
AEM offers a forms service that ingests submitted data into a Microsoft Excel or Google Sheet document.
Having data submitted through forms on your website flow directly into spreadsheets makes it easily accessible to business users. Such data can also interact with more complex automated workflows as both AEM Page as well as Microsoft Excel and  offer access to a vibrant ecosystem and robust APIs.
Create an Excel workbook or Google sheet anywhere under your project directory. This document uses a sheet in OneDrive called email-form.xlsx in the root of an AEM project.
Make sure the AEM user (for example helix@adobe.com) that is configured for your project has edit permission on the sheet.
Open the workbook created and rename the default sheet to incoming.
Note: AEM will not send any data to this workbook if the incoming sheet does not exist.
Preview the sheet in the sidekick. 
Note: Even if a sheet has been previewed previously it must be previewed again after creating the incoming sheet for the first time.
Set up the sheet with the headers that match the data being ingested. You can either do this manually or by sending a POST request to the form route in the AEM Admin service. The admin service will look at the data in the POST body and create the necessary headers/tables and sheets required to ingest data and get the most from the forms service.For details on the format of the POST request to set up your sheet, see the Admin API documentation as well as the following example:Request:
POST /form/{owner}/{repo}/{ref}/en/email-form.json HTTP/1.1
{"data":{"firstName":"test"}}
Response:
HTTP/1.1 200 OK
{"rowCount":2,"columns":["firstName"]}
You can use a tool like curl or Postman to make this POST request. For example:
curl -s -i -X POST 'https://admin.hlx.page/form/{owner}/{repo}/{ref}/en/email-form.json' \
--header 'Content-Type: application/json' \
--data '{"data":{"firstName":"test"}}'
Through the above POST request, we are providing sample data i.e. the form fields and sample values which will be used by the Admin service for setting up the form.The Admin service is recommended to set up your sheet, but if you would like to create the headers manually, please see the document Manual Forms Sheet Setup.
After sending the POST request to the admin service you will see the following changes to your workbook.
A sheet named helix-default is created. The data in this sheet is what will be returned when a GET request is made to the sheet. This is a great place to use spreadsheet formulas to summarize the data from the incoming sheet for consumption elsewhere.Note: The helix-default sheet should never contain any personally identifiable information or other data you are not ok with being publicly accessible.
A sheet named slack was created. Here you can set up automatic notifications to a Slack channel anytime data is ingested to your spreadsheet. Currently AEM only supports notifications to the AEM Engineering slack org as well as the Adobe Enterprise Support org.
To setup Slack notifications enter the teamId of the Slack workspace and the channel name or ID. You can also ask the slack-bot (with the debug command) for the teamId and the channel ID. Using the channel ID instead of the name is preferable, as it survives channel renames.Note: Older forms didn’t have the teamId column. The teamId was included in the channel column, separated by a # or /.
Enter any title you want and under fields enter the names of the fields you want to see in the Slack notification. Each heading should be separated by a comma (eg. name, email).
A sheet named helix-default is created. The data in this sheet is what will be returned when a GET request is made to the sheet. This is a great place to use spreadsheet formulas to summarize the data from the incoming sheet for consumption elsewhere.Note: The helix-default sheet should never contain any personally identifiable information or other data you are not ok with being publicly accessible.
A sheet named slack was created. Here you can set up automatic notifications to a Slack channel anytime data is ingested to your spreadsheet. Currently AEM only supports notifications to the AEM Engineering slack org as well as the Adobe Enterprise Support org.
To setup Slack notifications enter the teamId of the Slack workspace and the channel name or ID. You can also ask the slack-bot (with the debug command) for the teamId and the channel ID. Using the channel ID instead of the name is preferable, as it survives channel renames.Note: Older forms didn’t have the teamId column. The teamId was included in the channel column, separated by a # or /.
Enter any title you want and under fields enter the names of the fields you want to see in the Slack notification. Each heading should be separated by a comma (eg. name, email).
To setup Slack notifications enter the teamId of the Slack workspace and the channel name or ID. You can also ask the slack-bot (with the debug command) for the teamId and the channel ID. Using the channel ID instead of the name is preferable, as it survives channel renames.Note: Older forms didn’t have the teamId column. The teamId was included in the channel column, separated by a # or /.
Enter any title you want and under fields enter the names of the fields you want to see in the Slack notification. Each heading should be separated by a comma (eg. name, email).
(Deprecated) Sending Data to Your Sheet
The sheet is now ready for data ingestion and you can send POST requests directly to the sheet on hlx.page, hlx.live or your production domain.
Note: The URL should not include the .json extension. The sheet must be published for POST operations to work on .live or on the production domain.
There are a few different ways you can format the form data in the POST body.
As an array of name/value pairshttps://gist.github.com/dylandepass/9ba6b83700dfce1fa90a47bde62c2e9
As an object with key/value pairshttps://gist.github.com/dylandepass/2b5f694723dfdb3d304fcafc613d6595
As x-www-form-urlencoded body (content-type header must be set to application/x-www-form-urlencoded)https://gist.github.com/dylandepass/b72b2e30313bc80beb02e12b1d7201ff
That’s it! The forms service runs every minute so you will quickly see your data ingested into the sheet.
Author-Created Forms
In many cases it is desirable to have authors create forms and decide what form fields should be presented to the visitor of your website. It is common to use the helix-default sheet of the same spreadsheet that is used for the submission of the form as the place to let the author define their forms.
Usually, there is a forms block that takes a reference to the spreadsheet and renders the form and handles the user flow through submission.
A simple example of such a basic form block can be found here. You can also use the Adaptive Forms Block to develop forms.
See the following example of what the spreadsheet for the form definition could look like.
The supported form fields are extensible and the form should be viewed as an example that gives you a starting point.
As an example a fully-functional form was added to this page, using the previously-listed code base by simply adding the following block in the Google Doc:
Feel free to try it out and see the form data flow into the incoming sheet. It may take a minute to get from the form service to the spreadsheet.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/anatomy-of-a-helix-project

The Anatomy of a Project
This document describes what a typical project should look like from a code standpoint. Before reading this document, please familiarize yourself with the document Getting Started - Developer Tutorial.
Git and GitHub
One of our defining philosophies is that it is easiest to allow users to work with the tools that they are familiar with. The overwhelming majority of developers manage their code in systems based on Git, so it only makes sense to allow developers to work with Git to manage and deploy their code.
We are using a buildless approach that runs directly from your GitHub repo. After installing the AEM GitHub bot on your repo, websites are automatically created for each of your branches for content preview on https://<branch>--<repo>--<owner>.hlx.page/ and the production site on https://<branch>--<repo>--<owner>.hlx.live/ for published content.
Every resource that you put into your GitHub repo is available on your website, so a file in your GitHub repo on the main branch in /scripts/scripts.js will be available on https://main--<repo>--<owner>.hlx.page/scripts/scripts.jsThis should be very intuitive. There are few “special” files that Adobe Experience Manager uses to connect the content into your website.
We strongly recommend that repos are kept public on GitHub, to foster the community. For a public facing website there really is no need to keep the code hidden, as it is being served to the browsers of your website.
Important notes:
The combination <branch>--<repo>--<owner> must not exceed 63 characters (including the hyphens/dashes). This is a subdomain name constraint.
branch, repo and owner cannot contain --.
Configuration Files
There are some files in your GitHub repo that have a special meaning to AEM and are processed in a special fashion. These files are in the root directory of your repo.
The Content Connection: fstab.yaml
As you may have seen in the getting started guide the fstab.yaml file serves as the connection to your AEM or  folders that contain your content. This file is used as an indicator for how the code in your GitHub repo gets combined with the content in your content source.
Beyond providing the connection to the content, the fstab.yaml also provides a folder mapping facility that allows you map extensionless “routes” to a given piece of content or static HTML.
The Entry Point: head.html
The head.html file is the most important extension point to influence the markup of the content. The easiest way to think of it is that this file is injected on the server side as part of the <head> HTML tag and is combined with the metadata coming from the content.
The head.html should remain largely unchanged from the boilerplate and there are only very few legitimate reasons in a regular project to make changes. Those include remapping your project to a different base URL for the purposes of exposing your project in a different folder than the root folder of your domain on your CDN or to support legacy browsers which usually require scripts that are not loaded as modules.
Adding marketing technology like Adobe Web SDK, Google Tag Manager or other 3rd party scripts to your head.html file is strongly advised against due to performance impacts. Adding inline scripts or styles to head.html is also not advisable for performance and code management reasons, see the section Scripts and Styles below for more information about handling scripts and styles.
Please see the following examples.
https://github.com/adobe/helix-project-boilerplate/blob/main/head.html
https://github.com/adobe/express-website/blob/main/head.html
https://github.com/adobe/business-website/blob/main/head.html
Not Found: 404.html
To create a custom 404 response, place a 404.html file into the root of your github repository. This will be served on any URL that doesn’t map to an existing resource in either content or code, and replaces the body of the out of the box minimalist 404 response.
The 404 can mimic the markup of an existing page including your code for the site, with navigation footers etc., or it can have a completely different appearance.
Please see the following examples.
https://github.com/hlxsites/bamboohr-website/blob/main/404.html See in Action
https://github.com/adobe/design-website/blob/main/404.html See in Action
https://github.com/adobe/blog/blob/main/404.html See in Action
Don’t Serve: .hlxignore
There are some files in your repo that should not be served from your website, either because you would like to keep them private or they are not relevant to the delivery of the website (e.g. tests, build tools, build artifacts, etc.) and don’t need to be observed by the AEM bot. You can add those to a .hlxignore file in the same format as the well-known .gitignore file.
Please see the following example.
https://github.com/adobe/helix-website/blob/main/.hlxignore
Tame the Bots: robots.txt
A robots.txt file is generally a regular file that is served as you would expect on your production website on your own domain. To protect your preview and origin site from being indexed, your .page and .live sites will serve a robots.txt file that disallows all robots instead of the robots.txt file from your repo.
Please see the following examples.
https://github.com/adobe/blog/blob/main/robots.txt
https://github.com/adobe/pages/blob/main/robots.txt
https://github.com/adobe/helix-website/blob/main/robots.txt
Query and Indexing: helix-query.yaml
There is a flexible indexing facility that lets you keep track of all of your content pages conveniently as a spreadsheet. This facility is often used to show lists or feeds of pages as well as to filter and sort content on a website. Please see the document Indexing for more information.
Please see the following examples.
https://github.com/adobe/express-website/blob/main/helix-query.yaml
https://github.com/adobe/design-website/blob/main/helix-query.yaml
https://github.com/adobe/blog/blob/main/helix-query.yaml
Automate Your Sitemap: helix-sitemap.yaml
Complex sitemaps can automatically be created for you whenever authors publish new content, including flexible hreflang mappings where needed. This functionality is usually based on the indexing facility.See this GitHub issue for sitemap configuration options.
Please see the following examples.
https://github.com/adobe/pages/blob/main/helix-sitemap.yaml
https://github.com/adobe/fedpub/blob/main/helix-sitemap.yaml
https://github.com/adobe/express-website/blob/main/helix-sitemap.yaml
Commonly Used File and Folder Structure
Beyond the files treats as special or configuration files, there is a commonly-used structure that is expressed in the Boilerplate repo.
The common folders below are usually in the root directory of a project repo, but in cases where only a portion of a website is handled by AEM, they are often moved to a subfolder to reflect the mapping of the route of the origin in a CDN.
This means that in a case where for example only /en/blog/ is initially mapped to AEM from the CDN, all the folder structures below (eg. /scripts, /styles, /blocks etc.) are moved into a the /en/blog/ folder in GitHub to keep the CDN mapping as simple as possible.
With a simple adjustment of the reference to scripts.js and styles.css in head.html (see above) it is possible to indicate that all the necessary files are loaded from the respective code base directory. To avoid url rewriting the folder structure is also created the content source (eg.  or AEM) by having a directory structure of /en/blog/.In many cases as the AEM footprint grows on a site there is a point in time when the code gets moved back to the root folder and the head.html references are adjusted accordingly.
Scripts and Styles
By convention in a AEM project, the head.html references styles.css, scripts.js, and lib-aem.js located in /scripts and /styles, as the entry points for the project code.
scripts.js is where your global custom javascript code lives and is where the block loading code is triggered. styles.css hosts the global styling information for your site, and minimally contains the global layout information that is needed to display the Largest Contentful Paint (LCP).As all three files are loaded before the page can be displayed, it is important that they are kept relatively small and executed efficiently.Beyond styles.css, a lazy-styles.css file is commonly used, which is loaded after the LCP event, and therefore can contain slower/more CSS information. This could be a good place for fonts or global CSS that is below the fold.
In addition to scripts.js, there is the commonly-used delayed.js. This is a catch-all for libraries that need to be loaded on a page but should be kept from interfering with the delivery of the page. This is a good place for code that is outside of the control of your project and usually includes the martech stack and other libraries.
Please see the document Keeping it 100, Web Performance for more information about optimizing your site performance.
Blocks
Most of the project-specific CSS and JavaScript code lives in blocks. Authors create blocks in their documents. Developers then write the corresponding code that styles the blocks with CSS and/or decorates the DOM to take the markup of a block and transform it to the structure that’s needed or convenient for desired styling and functionality.
The block name is used as both the folder name of a block as well as the filename for the .css and .js files that are loaded by the block loader when a block is used on a page.
The block name is also used as the CSS class name on the block to allow for intuitive styling. The javascript is loaded as a module (ESM) and exports a default function that is executed as part of the block loading.
A simple example is the Columns Block. It adds additional classes in JavaScript based on how many columns are in the respective instance created by the author. This allows it to be able to use flexible styling of content that is in two columns vs. three columns.
Icons
Most projects have SVG files that are usually added to the /icons folder, and can be referenced with a :<iconname>: notation by authors. By default, icons are inlined into the DOM so they can be styled with CSS, without having to create SVG symbols.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/previous/byo-cdn-setup

BYO CDN Setup for hlx.live
NOTE: The instructions linked on this page apply to the previous version of Edge Delivery Services and are provided for customers who have not upgraded to aem.live yet. The current version of this document is provided here.
Customers may use their own CDN to deliver AEM content under their own domain (aka BYO Production CDN). While customers are generally free to configure their CDN according to their own needs there are some settings mandated/recommended by Adobe Experience Manager:
Origin urlhttps://main--<yoursite>--<yourorg>.hlx.live
Headers sent to origin
X-Forwarded-Host: <production domain>
X-Push-Invalidation: enabled(optional, see Configuring Push Invalidation)
X-Forwarded-Host: <production domain>
X-Push-Invalidation: enabled(optional, see Configuring Push Invalidation)
Origin cache controlI.e. Cache TTL on the production CDN is controlled via origin cache control response headers. This should be enabled (if available).
Compression (gzip)Should be enabled
Query parameters
Must be forwarded to origin
Must be included in cache key
Must be forwarded to origin
Must be included in cache key
Age response headerThe Age response header must be either suppressed or overridden (Age: 0)
Vendor-specific setup instructions
If you already have a CDN, follow the instructions below. If you are not sure which CDN to pick, follow our guide to CDN selection.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Cloudflare Worker Setup
Learn how to configure Cloudflare to deliver content.
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Akamai Setup
Discover how to use the Akamai Property Manager to configure a property to deliver content
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
Fastly Setup
This guide illustrates how to configure Fastly to deliver content.
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
CloudFront Setup
Set up Amazon Web Services Cloudfront to deliver your AEM site with push invalidation
Bring your own DNS
A custom domain without having to set up a content delivery network.
Bring your own DNS
A custom domain without having to set up a content delivery network.
IMPORTANT: The production CDN setup should be validated and tested in a stage environment prior to going public.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/previous/byo-cdn-cloudflare-worker-setup

Cloudflare Setup (worker) for hlx.live
NOTE: The instructions linked on this page apply to the previous version of Edge Delivery Services and are provided for customers who have not upgraded to aem.live yet. The current version of this document is provided here.
The following screenshots illustrate how to configure Cloudflare to deliver content. Essential settings are marked with a red circle.
This setup can be completely done in the browser by using the Cloudflare Dashboard only. If you are already familiar with Cloudflare Workers, Wrangler & GitHub and not afraid of entering commands in a terminal window you might want to follow the instructions here instead.
Create a Cloudflare site
If you already have a cloudflare site and DNS setup you can skip forward to the Setup push invalidation section.
Enter the domain:
Select a plan:
Note that surgical push invalidations are only supported on the Enterprise plan. On all other plans the entire cache of the site will be purged every time an author publishes a content change.For this walk-through we’ll use the Free plan.
Setup push invalidation
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
values: free, pro, business, enterprise
default: free
only enterprise plan supports purge-by-tag
To create an API Token,
go to API Tokens
click on "Create Token",
go to "Create Custom Token" at the bottom and click on "Get started"
enter a token name (e.g. "Production Site Purge Token"),
Permissions: "Zone", "Cache Purge", "Purge"
Zone Resources: "Include", "Specific zone", "<your production zone>"
click on "Continue to summary"
click on "Create Token",
copy the generated token value.
Note that only sites on the enterprise plan will be surgically purged by url and cache key. A Purge All will be performed instead on non-enterprise sites every time an author publishes a content change.
You can validate the credentials with this tool.
DNS Setup
For a new site, we’ll start with a simple DNS setup.
Create a new CNAME record. If your zone is example.com and you want to serve traffic on www.example.com, then the name should be www
If you want to serve traffic on example.com (without a www) then the name should be @
And if you want to serve traffic on all subdomains, then the name should be * as in the screenshot below
As we are using workers to serve the content, the value of the Content field does not matter. It’s easiest to use your ref--repo--owner.hlx.live host name here. This is a hostname, not a URL, so leave out the leading https://
Make sure the CNAME record is Proxied:
SSL/TLS Setup
Select SSL/TLS from the left pane and Edge Certificates in the dropdown list:
On the right side, scroll down to Always Use HTTPS and enable it:
Configure Caching
Create Cache Rules
Note: Enable Origin Cache Control option is only available for enterprise accounts. Free, Pro, and Business customers have this option enabled by default and cannot disable it.
Create Worker
Choose Workers in the left pane and click on “Manage Workers”:
Click on “Create a Service”:
Enter a name for the worker (e.g. “helix-worker”) and click on “Create Service”:
Click on “Quick edit”:
Edit worker code
If you have successfully configured push invalidation copy the content of this file, otherwise copy the content of this file.
In the left pane, replace the existing content with the copied content.
Click on “Save and Deploy”:
Click on Settings and “Add variable”:
Add a variable ORIGIN_HOSTNAME and set the value to the hostname of your origin (e.g. main--mysite--hlxsites.hlx.live):
Click on Triggers an select “Add route”:
Enter your domain route (e.g. www.mydomain.com/*), select your zone and click on “Add route”:
Depending on the setup chosen in DNS Setup, you would select routes www.mydomain.com/*, mydomain.com/*, or *.mydomain.com/*After completing all steps you should be all set.
Expanding the AEM footprint on your website
In case you start with having only a portion of the website being routed to your .live origin and have routed a specific folder (eg. /blog/*) you can subsequently add more routes whenever you are ready to expose new sections of the site by simply adding more routes and repeat the last “add route” steps as needed, without changing your worker configuration.
Watch out for duplicate content
Search engines often penalize sites for duplicate content, so it's important to make sure your content is not available on the web elsewhere. Cloudflare, unfortunately, has a default setting that will expose your site on additional network ports. In paid Cloudflare plans you can block traffic on these additional ports. This is a recommended setting for production sites.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/previous/byo-cdn-akamai-setup

Akamai Setup for hlx.live
NOTE: The instructions linked on this page apply to the previous version of Edge Delivery Services and are provided for customers who have not upgraded to aem.live yet. The current version of this document is provided here.
The following screenshots illustrate how to use the Akamai Property Manager to configure a property to deliver content from AEM using your Akamai CDN setup. Essential settings are marked with a red circle.
Essential Property settings
Origin Server
Configuration properties:
Add Behavior: Remove Vary Header
Configuration properties:
Add Behavior: Modify Outgoing Request Header
Configuration properties:
Add more outgoing request headers:
Configuration properties:
Configuration properties:
Add/Modify Behavior: Caching
Configuration properties:
Add Behavior: HTTP/2
(Optional, but recommended)
Add Rule: Modify Outgoing Response Header
Create a new rule
Set the criteria for the rule to be applied
Set the behavior if a match is found
These are all essential property settings for delivering content.
Caveats
Do not enable Akamai mPulse Real Usage Monitoring. While the performance impact on most sites is negligible, for sites built for consistent high performance, enabling it will prevent reaching a Lighthouse Score of 100. In AEM, you have a Real User Monitoring service built-in, so that dual instrumentation will be unnecessary and is strongly discouraged.
Also, do not enable Akamai Bot Manager or similar Web Application Firewall offerings, as they markedly interfere with rendering performance and user experience. Your site on AEM is protected against bot attacks on the backend, so that this performance cost comes with negligible benefit.
Setup push invalidation
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
AEM push invalidation uses the Akamai Fast Purge API, specifically Delete by URL and Delete by cache tag.
The Fast Purge API credentials consist of
They can be generated by following the instructions at Create an API client with custom permissions.
Go to Identity & Access Management:
Create API client:
Required group/role permissions:
You can validate the credentials with this tool.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/rum

Real Use Monitoring (RUM)
Adobe Experience Manager uses Real Use Monitoring (RUM) to instrument operations data to understand checkpoints on how a site functions and performs on Adobe Experience Manager-powered sites. RUM data can be used to diagnose performance issues, and to measure the effectiveness of experiments. RUM preserves the privacy of visitors through sampling (only a small portion of all page views will be monitored) and judicious exclusion of all personally identifiable information (PII).
RUM and Privacy
Real Use Monitoring in Adobe Experience Manager is designed to preserve visitor privacy and minimize data collection. As a visitor, this means that no personal information will be collected by the site you are visiting or made available to Adobe. As a site operator, this means no opt-in is required to enable this feature.AEM RUM does not use any client-side state or ID, such as cookies or localStorage, sessionStorage or similar, to collect usage metrics. There is no “fingerprinting” of devices or individuals via their IP address, User Agent string, or any other data for the purpose of capturing sampled data.
It is not permitted to add any personal data into the RUM data collection.
RUM data is sampled
Traditional web analytics solutions try to collect every single visitor. Adobe Experience Manager’s Real Use Monitoring only captures information from a small fraction of activities tied to page views, with no concept of identifying a visitor or a user or even a browser session. Under normal circumstances the sampling rate is one out of one hundred page views , although site operators can decide to increase or decrease this number.
As the decision if data will be collected is made on a page view by page view basis, it cannot be used to track interactions across multiple pages. RUM has no concept of visits, visitors, or sessions, only checkpoints during a page view. This is by design.
What data is being collected
RUM is designed to prevent the collection of personally identifiable information. The full set of information that can be collected by Adobe Experience Manager’s Real Use Monitoring is:
The host name of the site being visited, such as www.aem.live
The host name of the server responsible for the data collection such as rum.hlx.live
The user agent (technical name of the browser) that is used to display the page such as Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1. This string is then simplified to desktop, desktop:windows, desktop:mac, desktop:linux, mobile, mobile:android, mobile:ios, mobile:ipados, or bot so that only the device class is stored.
The time of the data collection such as 2021-06-26 06:00:02.596000 UTC (in order to preserve privacy, we round all minutes to the previous hour, so that only seconds and milliseconds are tracked)
The URL of the page being visited, such as https://www.aem.live/docs/rum if the URL contains URL parameters, these parameters will not be collected or stored
The Referrer URL (the URL of the page that linked to the current page) such as https://www.aem.live/docs
A randomly generated ID of the page view such as 2Ac6
The weight or inverse of the sampling rate such as 100 (this means only one in one hundred page views will be recorded)
The checkpoint, or name of a particular event in the sequence of loading the page or interacting with it as a visitor such as viewmedia (this particular checkpoint is fired when an image becomes at least 25% visible in the browser)
The source, or identifier of the DOM element that the received the interaction event with for the checkpoint mentioned above such as .images
The target, or link to an external page or resource that received and interaction with for the checkpoint mentioned above such as https://blog.adobe.com/jp/publish/2022/06/29/media_162fb947c7219d0537cce36adf22315d64fb86e94.png
The Core Web Vitals (CWV) performance metrics Largest Contentful Paint (LCP), First Input Delay (FID), Interaction to Next Paint (INP) and Cumulative Layout Shift (CLS) that describe the visitor’s quality of experience.
The foundational performance metric Time to First Byte (TTFB) that describes the visitors's quality of experience
No other data is being collected.
What data is being stored in the visitor's browser
For sites that use the built-in experimentation feature, the name of the experiment and variants that the visitor has seen are also stored in the browser's session storage.
How RUM data is being used
Adobe uses RUM data for following purposes:
To identify and fix performance bottlenecks on customer sites
To estimate the number of page views to customer sites
To understand how Adobe Experience Manager interacts with other scripts (such as analytics, targeting, or external libraries) on the same page to increase compatibility
Data Overview
The data collected and stored is designed to prevent:
Identification of individual visitors or devices
Fingerprinting
Tracking of visits or sessions
Enrichment or combination with personal identifiable information from other sources
Other than Adobe, following third parties are involved in the collection of RUM data:
Fastly, Inc
Cloudflare, Inc
Coralogix LTD
Google LLC
Amazon.com, Inc
RUM for Developers
We have additional in-depth information for developers that want to use Adobe’s RUM data to optimize their own sites, including instructions on how to add RUM instrumentation to your site, even if it's not running on AEM.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/rum

Developing Real Use Monitoring in AEM
Adobe Experience Manager uses Real Use Monitoring (RUM) to diagnose usage and performance of web sites running on Adobe Experience Manager. As a developer, you can use the RUM APIs to observe additional events about how your site is used.
This document describes the key concepts of Real Use Monitoring, details the client-side APIs that you can use to send additional data to the RUM collection service and alludes to the fact that the data can be queried.
How to add RUM Instrumentation to your Site
If your website is not built.using AEM Edge Delivery Services, it is recommended to set up Real Use Monitoring in standalone mode. To set up , simply add the following script to your pages.
<script defer type="text/javascript" src="https://rum.hlx.page/.rum/@adobe/helix-rum-js@^2/dist/rum-standalone.js"></script>
For better performance, it is recommended loading the script after the Largest Contentful Paint (LCP) event
Key Concepts
Every data point collected by RUM is made up of following key parts:
id – a unique identifier, generated by the RUM library that identifies the current page view
checkpoint – a named event in the sequence of loading the page, and interacting with the page
source – identifies the DOM element that caused a particular interaction (optional)
target – identifies an external resource or link that is the subject of an interaction (optional)
Checkpoints
As a developer, you can define your own checkpoints. By convention, checkpoint names are lowercase letters, without any special characters. The most common checkpoints used in Adobe Experience Manager projects are:
top – the page loading sequence has begun and first JavaScript code is being executed by the page. This event fires even before blocks are decorated or content is visible
load – corresponds to the Window: load event in JavaScript and is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.
cwv – indicates that either the page is ready to collect Core Web Vitals (CWV) readings or that either the LCP, CLS, or FID CWV reading has been recorded. As these readings are asynchronous, multiple of these checkpoints can be passed during one page view
lazy – the page is ready for lazy loading of non-essential resources as part of the Lazy stage of the ELD cycle.
lcp – the Largest Contentful Paint (LCP) has been made by the browser, this is usually the most prominent image on the page
viewblock – a block has scrolled into view and there is a chance that the content of that block is seen. The class name of the block will be shared in the source property.
viewmedia – an image or video has scrolled into view and there is a chance that the content of that block is seen. The URL of the image or video is shared in the target property.
click – a click event has been triggered, not just on links or buttons. If the element clicked is a link, then the link target is recorded in the target property. The source property contains information about which element of the DOM was clicked.
experiment – an experiment (challenger or control) has been presented, which can be an A/B test or targeted content.
error – a JavaScript error has occurred on the page and has not been handled by the application code. This usually indicates a bug.
404 – a 404, page not found page has been served. This checkpoint can indicate missing content or broken links
unsupported – the page has been opened by a browser that does not support the more advanced RUM collection features. This checkpoint is fired by less than a tenth of a percent of all page views. There is also the related noscript checkpoint for browsers that do not have JavaScript enabled, which is even less common.
search – a site search on the page is performed, typically using a search input field
formsubmit – a form is submitted on the page. The form action is recorded in the target property, while the source property keeps information of which form of the page was submitted.
leave – corresponds to the Window: pagehide event or to Document: visibilitychange event (whichever happens first) if the new document.visibilityState is hidden. This checkpoint is triggered when the page is not visible anymore, e.g. when the browser is closed, or when switched to a different tab in the browser.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/previous/byo-cdn-fastly-setup

Fastly Setup for hlx.live
NOTE: The instructions linked on this page apply to the previous version of Edge Delivery Services and are provided for customers who have not upgraded to aem.live yet. The current version of this document is provided here.
The following screenshots illustrate how to configure Fastly to deliver content. Essential settings are marked with a red circle.
Setup push invalidation for Fastly
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
Configuration properties:
To create a Fastly API Token,
go to Personal API Tokens,
click on "Create Token",
enter a name (e.g. "Production Site Purge Token"),
select "A specific service" and your production service from the drop-down list,
check the "Purge select content (purge_select) — Purge by URL or surrogate key" check box,
select "Never expire",
click on "Create Token",
copy the generated token value shown in the pop-up window.
You can validate the credentials with this tool.
Create a Fastly service
Go to the Fastly Management UI and select Create Service:
Add Domain
Add your production domain (e.g. www.mydomain.com):
Configure Origin
Add your origin (e.g. main--mysite--hlxsites.hlx.live):
Click on the pencil to edit the new origin:
Scroll down and change Shielding to Ashburn Metro (IAD) (non-mandatory but recommended setting) and Override host to the hostname of your origin (same as Address above, e.g. main--mysite--hlxsites.hlx.live) (mandatory setting):
Enable Gzip
Create VCL Snippets
Create a VCL snippet for the recv subroutine with the following VCL code:
Create VCL snippets for the miss and pass subroutines with the following VCL code:
NB: The X-Push-Invalidation: enabled request header enables the push invalidation incl. long cache TTLs.
miss snippet:
pass snippet:
Create a deliver snippet with the following VCL code:
Finally create a deliver snippet with the following VCL code:
After completing all steps and activating the service version you should be all set:
Note
Your Fastly setup should not use Fastly’s Next Generation Web Application Firewall for requests that are going against hlx.live or any other Edge Delivery Services origin. Enabling WAF with Edge Delivery Services can lead to erroneous content being delivered.
Edge Delivery Services needs no Web Application Firewall, as it is running on hardened, shared, and ultra-scalable infrastructure. Requests that a WAF would typically intercept are terminated in our CDNs.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/previous/byo-cdn-cloudfront-setup

Amazon Web Services (AWS) CloudFront Setup for hlx.live
NOTE: The instructions linked on this page apply to the previous version of Edge Delivery Services and are provided for customers who have not upgraded to aem.live yet. The current version of this document is provided here.
The following screenshots illustrate how to configure AWS CloudFront to deliver content from an AEM origin. Essential settings are marked with a red circle.
Setup push invalidation for AWS Cloudfront
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
NB: CloudFront does NOT support purging by cache tag/key. Purge by cache tag/key always triggers a purge all.Configuration properties:
To create the AWS credentials:
In the AWS Console, open the IAM dashboard:
Select Policies -> Create policy:
Select “CloudFront” as Service, “CreateInvalidation” as Action, then click on “Add ARN”:
Enter you Distribution Id and click on “Add”:
Proceed to “Next: Tags” and then “Next: Review”.Enter a name for the new policy, e.g. “Invalidate<Your Distribution Id>”, and click on “Create policy”:
In the IAM dashboard, select Users -> Add users:
Enter a user name (e.g. “Invalidator”) and click on Next:
On the “Set permissions” pane, select “Attach policies directly” and select the newly created policy (“Invalidate<Your Distribution Id>” in our example):
Proceed to the next step, click on “Create user” end then “View user”:
Select the “Security credentials” tab and click on “Create access key”:
Select “Third-party service”, click the checkbox and proceed to “Next”:
Finally, copy the Access key ID and Secret access key values:
You can validate the credentials with this tool.
Create a CloudFront distribution
Configure the origin
If you have successfully configured push invalidation for your project you should also add the following custom header:
Cache behavior
Create cache policy
Create origin request policy
Create Function to remove Age and X-Robots-Tag headers
Go to Functions and click on “Create Function”:
Enter a name for the function (e.g. stripHeaders), an optional description and click on “Create Function”:
Replace the code of the function with the following snippet and click on “Save changes”:
Click on “Publish function”:
Finally, associate the function with your distribution:
That’s all (more or less). Please test the distribution in a stage environment.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/setup-byo-cdn-push-invalidation-for-cloudfront

Setup push invalidation for AWS Cloudfront
Push invalidation automatically purges content on the customer's production CDN (e.g. www.yourdomain.com), whenever an author publishes content changes.
Content is purged by url and by cache tag/key.
Push invalidation is enabled by adding specific properties to the project's configuration (an Excel workbook named .helix/config.xlsx in  or a Google Sheet named .helix/config in AEM).
NB: CloudFront does NOT support purging by cache tag/key. Purge by cache tag/key always triggers a purge all.Configuration properties:
To create the AWS credentials:
In the AWS Console, open the IAM dashboard:
Select Policies -> Create policy:
Select “CloudFront” as Service, “CreateInvalidation” as Action, then click on “Add ARN”:
Enter you Distribution Id and click on “Add”:
Proceed to “Next: Tags” and then “Next: Review”.Enter a name for the new policy, e.g. “Invalidate<Your Distribution Id>”, and click on “Create policy”:
In the IAM dashboard, select Users -> Add users:
Enter a user name (e.g. “Invalidator”) and click on Next:
On the “Set permissions” pane, select “Attach policies directly” and select the newly created policy (“Invalidate<Your Distribution Id>” in our example):
Proceed to the next step, click on “Create user” end then “View user”:
Select the “Security credentials” tab and click on “Create access key”:
Select “Third-party service”, click the checkbox and proceed to “Next”:
Finally, copy the Access key ID and Secret access key values:
You can validate the credentials with this tool.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/limits

Limits
To ensure functioning within normal parameters and system stability for all customers, we enforce limits across many dimensions. The limits are designed to prevent accidental misuse and are subject to change and often can individually be raised on a per customer basis.
If you find yourself in a situation where you think that the limits are prohibitive for your use case, contact us and let us know.
Document naming
The URLs generated for document names will only take into account the following characters:- alphabetical, lowercase characters (a-z)- numbers (0-9)- simple dash (-)All other characters are replaced with a single dash, and the final document name will have leading and trailing dashes removed.
The full file path for a document should not exceed 900 characters.
Content Source Limits
The following limits below are applied on preview operations for content that is ingested from  or AEM. If exceeded most of them produce an error in sidekick for authors.
File Size Limits
Support for uploads of files from the content sources is provided for the following file types with the following limits.
Other file types may be uploaded through code (eg. through GitHub) or depending on the use case created on the client-side (eg. .ics, etc.).
Indexing Limits
An individual index cannot grow beyond 50k pages indexed.
Sitemap Limits
An individual sitemap file cannot grow beyond 50k pages or 50MB
Redirect Limits
The number of redirects per site cannot exceed 100k.
Number of pages per site
An individual site managed in a single  library or AEM cannot grow beyond 1m pages. It is advisable to split up large sites into smaller, team based  libraries / google shared drives.
Rate Limits (number of preview operations per time)
Rate limits are inferred from the underlying content source (eg.  and AEM).
AEM Code Sync/GitHub limits
To keep the project size manageable we limit the number and size of files that we synchronize from your GitHub repository, as well as the number of active branches/refs. If you have more files in your repo use .hlxignore to avoid syncing them. The combination of owner, repository and branch name should not exceed 59 characters.
Rate Limits (number of deploy operations per time)
Rate limits are inferred from GitHub.
BYOM Content Source Limits
The following limits below are applied on preview operations for content that is ingested via a bring your own content source. If exceeded most of them produce an error in sidekick for authors.
* Please note that the overall response time for fetching the html and the images must not exceed 25 seconds.
Admin API Limits
The admin API is rate limited to 10 requests per second, per project for the following operations:
Preview
Publish
Code
Index
Cache
Status
For operating on large amounts of resources, use the respective bulk APIs.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/davidsmodel

David’s Model, Second take.
By: David Nuescheler
Historical Context
A long time ago, in a galaxy far, far away, I got to a point where I realized that people had a lot of different options on how they could model content in a content repository specification that I was involved in.
So in 2007 I started writing up my controversial opinions around content modeling in JCR and to make sure that people considered it “just my opinion” and nothing that would claim universal applicability I called it “David’s Model”.
It seems that this has helped people in the context of modeling content on an infrastructure level.
Today, I find myself very often in situations that feel the same when arguing “How to model or structure content in Adobe Experience Manager”.
The parameters and stakeholders feel very different today, as I am not primarily worried about the underlying infrastructure anymore but about the user experience of a person authoring content and reaching a great authoring experience across different content sources and to a lesser extent the ease of developing against those structures and being able have portable (block) code across projects and content sources.
Introduction
This document should serve as a collection of “Content Modeling” or “Content Structure” best practices as they relate to Adobe Experience Manager and more importantly to an intuitive authoring experience across different authoring platforms. A good way of testing a content model, is to imagine an author working in different environments (eg. Word, AEM Page, AEM, Custom Authoring etc.) and making sure that the content model can easily be constructed in an intuitive manner across all possible content sources.
These “rules” are a reflection of lessons learned from first-hand authoring and authoring support and are rooted in the experiences working on real-world limitations of commonly used authoring environments like Microsoft Word Online or AEM Page, but also in the average knowledge of said tooling by the average author.
Making the authoring experience intuitive, simple and fast is paramount for the long-term success of any project as lays the foundation of authors enjoying making updates to websites or other digital experiences.
These rules are evolving, and I would like to invite discussion and commentary on all of them.
Rule #1: Blocks are not great for authoring
Generally blocks are not great as they are surfaced as tables on the authoring side. They provide a necessary framework for an author to indicate some special functionality or design for a certain component. For authors it is often easier to work in “Default Content” wherever possible.For developers blocks are a great way to componentize their work, so there is tension where the developer feels that having something in a block makes their lives easier, sacrificing authoring ease-of-use.
A good way to get the best of both worlds is to add Auto Blocking, which means that you infer the existence of a Block based on sequence, template or link information. A good example of this is the hero block in boilerplate which creates a hero block, based on the fact there is an image before the h1 of a page.
It is definitely an anti-pattern to have things that are represented natively as default content and put them into a block, so something like a Text, Heading or Image block yields a bad authoring perspective.
Rule #2: No nested blocks for authors
To a developer it might very often be tempting to nest complex structures, which in word document would lead to a table inside a table. As Rule #1 states that blocks are not desirable, nested blocks are definitely a lot worse.
Consider fragments (referencing other documents) or links (with auto blocking) to reduce the authoring complexity.
Rule #3: Limit Row and Column spans
Generally we use a Column Span (merged cells) to denote the header with a block name in it. This is relatively straightforward and works well in word and AEM Page.There are definitely situations where more complex table structure make sense (eg. a portion of the block content being in two columns and another portion of the block content being in three columns) but it is important to understand that creating and managing these structures can be extremely difficult, especially in word online that has very enigmatic support for complex tables.
If you find yourself in a place where you have a non-trivial rows and columns setup with spans / merged cells, it is probably a good idea to consider a different structure.
Rule #4: Fully qualified URLs only
When referencing content sometimes developers think in references that are relative to host, the content repository or to their  / AEM. Authors (and most humans) often think of a URL as an opaque token that they copy/paste from their browser without deciphering them into protocol, hostname, pathname, etc.It is always advisable to just let authors work fully qualified URLs and let either AEM or a developer do the work of extracting eg. a pathname where needed. As a bonus the URL can and should link to something that is easily accessible for an author from their document.
Rule #5: Lists?
I often find myself in a situation where a block has a list of references, something like a list of related articles, or a list of cards. In HTML a lot of those semantically should be considered lists (mostly <ul><il> combinations). For simple lists, something like some text (possibly with a link) or just regular links, a list in word or AEM Page may be ideal.
It turns out that list items that are more complex, are somewhere between “hard” to “practically impossible” for an author to keep that in a list in word or AEM.In that case it is much easier to have the list items be rows of a block table. A good example of that is cards block in the boilerplate project.
For simple lists where it is intuitive to have inferred semantics, eg. a related articles block in a blog post that just contains links to the articles that should be references, it may be easiest to just have a single table cell inside the block containing all the links and dropping the actual list in the word processor. From a code standpoint it is usually easy to just pull all the links from a block and not specifically worry about the details of a structure in that particular block.
Rule #6: Buttons need to inherit from context
In many design guides we find buttons as a common element across many blocks and default content. In many cases they are outlined in all their variations (eg. primary vs. secondary, sizes, colors, etc.) at the beginning of a design specification together with the specified colors and fonts.
In projects we found that it is intuitive for authors to treat links that are on a line by themselves as for a button. In many cases it is important to inherit from the block and section context that a particular button is in to make the authoring experience easy.
As an example, if a button (read, “link by itself on a line”) is a part of a hero block, it might assume a certain bigger size, or if a button is in a section that has an inverted background color it might need to automatically switch to a different foreground / background color combination.
There are cases where within a given section / block context the author needs to be offered a set of explicit choices (eg. primary vs. secondary button) and in those cases we use combinations of bold and italic, usually bold for an explicit primary button and italic for an explicit secondary button.
It is conceivable that within a given block / section context there are more than four options for an author to choose from, in which case other formatting options could be used like underline, strikethrough etc. however, this is extremely rare and usually an indication that a decision that should be made within the design system is delegated to the author, leading to a less intuitive authoring experience.
Rule #7: Filenames matter to authors
There are a few content management systems that append trailing slashes to all their URLs and when migrating from websites that are powered by those systems an intuitive approach could be to map every single URL to an index (.docx or gdoc) inside a folder. The downside of this approach is that the filenames are not really useful anymore for authors when they are searching for files in AEM and .
A better approach is to remove the trailing slashes from the URLs and redirect with a 301 (usually from the redirects spreadsheet) from the existing URLs with a trailing slash to the URLs without a trailing slash.
(related: the same approach should also be used for other undesirable URLs for example URLs that end in .html)
There are situations where this change results in too much a temporary SEO impact, in which case rewriting the URLs on the CDN may be the appropriate option, however this should only be done if there is a quantifiable business impact. long term it is more desirable to have a clean URL that maps directly to the corresponding file in  or AEM.
Rule #8: Access Controls and Content Grouping
It often makes sense to group content similar to how authoring teams are organized. A good way of thinking about this is that if you have a team that looks after the blog section on your website, technical documentation, support content, a particular country / language or a product it makes sense to keep that content together, and make sure that corresponding team has access to the content.
In organizations this often happens naturally, and it is intuitive for organizations to break up their content teams similar to the structure of their URL space. In some cases the URL structure doesn’t align with authoring teams (and the corresponding access control groups). In such a case combining multiple AEM projects on the CDN tier tying together content from different sources may be the right approach if the complexity and size of a site (single domain) gets overwhelming.While your content source ( and AEM) possibly supports complex access control models, it is desirable to keep Access Control as simple as possible from a management standpoint.
Both  and AEM have a concept for grouping content that helps to manage access control in a simple manner, in  they are called “Sites” or “Libraries” and in AEM they are called “Shared Drives”. Both of those have predefined access control roles that are advantageous to use for simple group membership based access. Unless there are specific access control requirements it is recommended to keep access control to these OOTB groups.
Sites/Libraries and Share Drives are built to work well with a certain team and content size and complexity.
Particularly  has best practices on access control complexity within a library, and creating access control complexity beyond that may yield undesirable results. In case you get to a place where it becomes unnatural to manage either the size of the content or the size and complexity in a single Site/Library or Shared Drive, it is likely that it makes sense to break things up into multiple different Site/Libraries or Shared Drives and blend the content together from different projects on the CDN.
Rule #9: Number of Blocks and Variants
Over the lifecycle of a website it is common that new blocks and variants are added. Especially for developers that are not very familiar with the existing block library of the project it is usually the easiest path to just add net new blocks or variants to make sure that there is no regression with existing content.
While it is probably not easy to avoid the sprawl of blocks and variants on projects that have a lot of functionality or justified requirements for a lot of visually diverse content within a single project, it is important to make sure that the core set of blocks and variant combinations that authors need to use commonly is limited. There are situations where special blocks are used infrequently on sites and often those are placed by developers initially, those blocks probably don’t need to be exposed to authors at the same level in documentation or a block library as the commonly used blocks.More generally, large block libraries and a lot of variant / section metadata combinations are less desirable. Maintaining a “minimum use” criteria for blocks and variants based on a content report is a good practice to deprecate and remove superfluous code from the block library that’s exposed to authors.
Rule #10: Limit number of Columns
A large number of columns is not a good ideal for authoring as there are practical horizontal screen / document size limitations. More importantly this is usually a symptom that content is split into small values that do not reflect a proper use of default content and the implied HTML semantics.There are some exceptions to this rule in cases where data is represented in a table, as opposed to content that should be a part of document semantics, and in those cases it is often useful to go the name-value pair route via a spreadsheet instead.
Rule #11: Use the block collection content models
The AEM Block Collection is a great source for well designed content models. If your block is producing a similar feature set as the one of the blocks in the Block Collection, the content model should be similar.
Rule #12: Fragments may be harmful
Fragments are very useful when the same content is used across a lot of different pages. Obvious good examples are header (navigation) and footer information that is identical throughout a site. These are great examples especially since authors of individual pages do not have to worry about that content showing up on their page, and there is no authoring impact.Using Fragments may also be useful in situations where there is an explicit selection of a content that is used across many pages of a site, such as a sign up form, a legal disclaimer, etc. and the content appears on a page but is not really a part of the canonical content of the page.
It is important to note that using a fragment comes at a cost of complexity and indirection for authors. Instead of seeing the actual content that is on a page, an author only sees a reference to a fragment, which makes it much less intuitive for authors to make changes and gauge the impact of their changes across pages. This is even amplified in cases of nested fragments.
Along those lines, from an SEO standpoint it is only advisable to use fragments at times where having duplicate content is acceptable (meaning that the content inside a fragment doesn't carry significant SEO weight for that page), hence content that is relevant from an SEO standpoint should always be placed on the page directly.
Rule #13: Don't overload image alt-text semantics
It may be convenient at times to put extra information hidden away into image alt-texts, but this is only recommended in exceptional cases.Alt-texts often cannot be easily discovered by authors, there is very little indication about their existence in common document authoring environments (eg. word or AEM Page).Depending on the type of copy/paste operation the alt-text may be lost without the author noticing, and if the alt-text contains special semantics, authors will have to be familiar with specific semantics within the value of an alt-text of individual images on a per block basis.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/configuration

Project Configuration
The project configuration file is located in /.helix/config.xlsx (for ) or /.helix/config (for AEM). It consists of a table using Key and value columns. For example:
The format of the keys follows the identifier-dot notation, like in javascript. You can think of the sheets as a flattened JSON structure. If a key appears more than once, it would form an array, eg:
Will conceptually be a structure like:
The following table lists the configuration options of a project.
Also see the JSON Schema and Typescript Types of this config.
Blueprints
A project can define configuration blueprints that serve as defaults for the config.
The blueprints are defined in the .helix directory of the github repository. eg:
The .helix/blueprint-config.json contains the blueprint configuration
The .helix/blueprint-targets.json contains the list of allowed projects that can use the blueprint
The blueprint-targets.json needs to be a JSON array with the owner/repo names, eg:
Each project wanting to use the blueprint will need to register the blueprint configuration repository using the blueprint property in .helix/config.json (see configuration options above) and be listed in the .helix/blueprint-targets.json in the blueprint configuration repository.
This two-way referencing is needed to ensure that no project can steal the configuration of another one,And that no blueprint repository can force their config on an unrelated project.
Note: The blueprints configuration are only applied when the respective configuration files (/.helix/config, /.helix/headers, /metadata) are previewed, but not when the blueprint config is pushed.
The blueprints contain the defaults for the project config (as described above). They can also provide defaults for the headers and metadata configuration and have the following structure:
The metadata and the headers config follow the Modifiers format, which are an array of key/value pairs within path glob objects. Eg:

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/setup-adobe-

How to use Adobe 
NOTE: This only applies for projects on Adobe’s  (https://adobe..com) . For projects using a non Adobe , please continue here.
Setting up  involves the following steps:
Create a folder within  that will be the website root.
Share the website root folder with that user.
Configure the fstab.yaml with the respective folder
1. Create the website root folder
Navigate to your desired location in  and create a root folder that will be your website root. It is best to not use a  list root directly, so that you have a shared space for your authors to put collateral documents, for example a drafts folder, or how-to-author documentations.
An example file structure might look like this, using the website folder as the root:
3. Share the website root folder
Ensure that the helix@adobe.com user has edit rights on the website root folder. This can be achieved easily by clicking on the … ellipsis menu and selecting “Manage Access”.
And then add the user via the “Direct access” option.
4. Configure the fstab.yaml
The next step is to configure the mountpoint in the fstab.yaml to point to the website root. It usually has the form of
But this might vary depending on how you create the  site and lists. In order to obtain the url, the simplest way is to copy-past the first part from the browser address, eg:
And then add the rest manually (Note, that copying the sharelink via the UI adds unnecessary information and it is better to use a canonical representation of the url). Once you composed the url, you can test it by entering it again in the browser. You should end up in the folder view of your website root.
After that, update the fstab.yaml accordingly.
For example:
To finalize the configuration, commit the fstab.yaml back to the main branch.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/setup-customer--user

How to use  (delegated)
NOTE: for projects using Adobe’s  (https://adobe..com) please continue here.
If you use  as your content source, AEM uses a registered Microsoft Azure application to do so. This application has delegated permissions defined that allow the service to access  on behalf of a user. This user needs to be registered to the project that is using .
Alternatively, the services can also authenticate as an application and use application permissions to access the sites. This needs additional setup by a  site administrator that can grant the permissions for the application.
The preferred setup is to use application permissions, as this narrows down the access the service has to a specific  site and does not require to share any secrets of a technical user. Also, it reduces the problems around password rotation. Please continue here for instruction on how to do so.
The following describes how to set up delegated permissions for your project.
Setting up  involves the following steps:
Create a folder within  that will be the website root.
Create or define the (technical) user that will access the  content
Share the website root folder with that user.
Configure the fstab.yaml with the respective folder
Register the user with the service
1. Create the website root folder
Navigate to your desired location in  and create a root folder that will be your website root. It is best to not use a  list root directly, so that you have a shared space for your authors to put collateral documents, for example a drafts folder, or how-to-author documentations.
An example file structure might look like this, using the website folder as the root:
2. Create or define the user
It is best practice to use a generic (or technical) user to access the content on behalf of the service. This is better than using an employee user account because the exact scope of the files the user can access can be defined. Furthermore, there is no risk losing access to the files, should that employee leave the company.
Every company has different procedures to create technical users, so ask your IT department on how to do this.
3. Share the website root folder
NOTE: for projects using Adobe’s  (https://adobe..com) please see here.
Ensure that the service user has edit rights on the website root folder. This can be achieved easily by clicking on the … ellipsis menu and selecting “Manage Access”.
And then add the generic (or technical) user user via the “Direct access” option.
4. Configure the fstab.yaml
The next step is to configure the mountpoint in the fstab.yaml to point to the website root. It usually has the form of
But this might vary depending on how you create the  site and lists. In order to obtain the url, the simplest way is to copy-past the first part from the browser address, eg:
And then add the rest manually (Note, that copying the sharelink via the UI adds unnecessary information and it is better to use a canonical representation of the url). Once you composed the url, you can test it by entering it again in the browser. You should end up in the folder view of your website root.
After that, update the fstab.yaml accordingly.
For example:
To finalize the configuration, commit the fstab.yaml back to the main branch.
5. Register the user
Overview
In order for the AEM service to access the authored content it needs a couple of information and setup. The AEM service (a cloud function) accesses the MS Graph API on behalf of a configured user. In order to do so, it needs to authenticate first in the context of an Application. This is important because the scopes given to the application define what permission the service has on the MS Graph API. For example, it should be allowed to read and write documents, but not to alter access control.
An application is represented as an “Enterprise Application” in the respective Active Directory of a tenant. The permissions given to that enterprise application ultimately define what the service can access in that tenant’s resources. Certain permissions need to be approved by an Active Directory administrator before a user can use the application. This so-called “admin consent” is a mechanism to verify and control which permissions apps can have. This is to prevent dubious apps from tricking users into trusting an app that is not official. Having the extra admin consent step allows IT security to control which apps the employees can use.
Access the Service Setup UI
To get started, open the Admin Service Setup UI and enter the GitHub URL of your project:
Then you need to “Sign In” with your personal user that has access to the website root. This is to verify that only people with sufficient credentials can manage the user registration.
1. Sign-in in the Registration Portal
View Enterprise Applications in Azure Portal
Assuming that so far no Franklin Enterprise Applications are present in Azure (Microsoft Entra Id)
Access Franklin Registration Portal
Go to https://admin.hlx.page/register, enter the github url of the project
Sign-in as non admin user
Sign in as a user that does not have admin permissions will show an error that it needs approval, i.e. the application needs admin consent.
Problem: Enterprise Application is not registered if a user never logs in.
Sign-in as admin user
One solution is to sign in as a user that does have admin permissions:
(note, at this point the Enterprise Application is still not registered in azure)
Franklin Registration Service visible in UI
If the admin logs in (without checking the checkbox and granting consent for everyone), the Enterprise application is present.
Create application using MSGraph or Powershell
Alternatively, you can create the Enterprise application via MSGraph or Powershell.
In order to make it visible in the azure UI you also need to add the WindowsAzureActiveDirectoryIntegratedApp tag. This can be done directly when creating the application.Using graph explorer:
Using powershell:
After that you still need to give admin consent, if you want a non admin user to login.
Also see:
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/create-service-principal-cross-tenant
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-configure?pivots=ms-graph
Review permissions
Note that the Franklin Registration Service (e34c45c4-0919-43e1-9436-448ad8e81552) application is only needed during registration to verify that the user has read access to the . It has the following delegated permissions:
OpenidAllows users to sign in to the app with their work or school accounts and allows the app to see basic user profile information.
ProfileAllows the app to see your users' basic profile (e.g., name, picture, user name, email address)
Files.ReadWrite.AllAllows the app to read, create, update and delete all files the signed-in user can access.
User logged in Registration portal
After completing this initial step, the user is logged in the registration portal
Connect the technical User
With the permission properly granted, you should be able to login properly to the Franklin Service Setup UI:
Click on “Connect User” and you should see a new login window, where you want to login with your technical user. This the the Franklin Service is requesting for more permissions to access :
Similar to above, and administrator needs to consent to the permissions:
After the login process, the UI should show the connected user information:
Once the user is registered, you should be able to preview a page.
Important
Changing the user's password will invalidate the grant that is established when connecting the user. This will eventually cause an error in the sidekick. In order to prevent this, you need to reconnect the user, by clicking the disconnect button then connect it again.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/slack

Slack
We are available on dedicated Slack channels for AEM customers and the Adobe team is available to answer your questions. We create one Slack channel for each customer and invite business users, developers, and authors to the channel to coordinate your launch or migration, answer questions about authoring and development, and help with best practices.
The Adobe team is globally distributed. During US and European business hours you can expect to receive an answer within one hour. Outside those times, responses may take a bit longer.
For customers who prefer, we can also collaborate with you on Teams.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/docs/teams

Teams
We create dedicated teams in Microsoft Teams for each AEM customer and invite business users, developers, and authors to it to answer your questions about authoring and development, coordinate your launch or migration, and help with best practices.
The Adobe team is globally distributed. During US and European business hours you can expect to receive an answer within one hour. Outside those times, responses may take a bit longer.
For customers who prefer, we can also collaborate with you on Slack.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/metadata

Metadata
Notes:
The Metadata table is handled by HTML rendering service internally to add <meta> tags in the <head> of the HTML markup delivered from the service. There should only be one Metadata table per page and while its placement doesn’t matter, by convention it is placed at the bottom of the document.
The metadata table is essentially following an intuitive name/value pair structure where the name is in the first column of the table and the value is in the second column.
There are a few well-known properties that behave according to the HTML specification and popular additional metadata schemes like og: and twitter: the well known metadata properties include Title, Description, Image, Tags and Feed.
Beyond the well-known properties there are some special semantics for Theme and Template that are added as classes to the <body> tag by the boilerplate code and are often used for styling and autoblocking.
Beyond that a project can add an arbitrary number of name value pairs that get added as <meta> tags to the markup, and can be used with project specific semantics.
Example:
See Live output
Content Structure:
See Content in Document
Code:
The metadata table is processed as part of the HTML rendering service. There is no project code related to the processing.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/footer

Footer (Block)
Notes:
The footer block is loaded by default in the boilerplate project into the <footer> element.Out-of-the-box it provides a simple example for a footer but is likely to be extended or adjusted on the per project basis.
The footer block is usually not referenced by authors but is loaded automatically on every page.
The content for the footer is loaded as a fragment and is by default authored in a footer (or footer.docx) document.As footer structure and designs change rarely and are usually visually very different from the rest of the blocks on a site, it is often a good strategy to divide the content into sections and decorate specific classes onto the sections based on their sequence and apply CSS styling to those classes.
The footer document has its own lifecycle and when previewed or published applies to all pages that use a given navigation.
It is not uncommon to have multiple footer documents for a site eg. one per locale / language.
Example:
See Live output
Content Structure:
See Content in Document
Code:
This code is included in Boilerplate, there is no need to copy it.
Boilerplate Block Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/header

Header (Block)
Notes:
The header block is loaded by default in the boilerplate project into the <header> element.Out-of-the-box it provides code for a responsive navigation but it is like most blocks very likely to be extended or adjusted on the per project basis.
The header block is usually not referenced by authors but is loaded automatically on every page.
The content for the navigation is loaded as a fragment and is by default authored in a nav (or nav.docx) document, and structured primarily into three sections for branding, navigation sections (nested <ul>) and tools.
The nav document has its own lifecycle and when previewed or published applies to all pages that use a given navigation.
It is not uncommon to have multiple nav documents for a site eg. one per locale / language or section of a site.
Example:
See Live output
Content Structure:
See Content in Document
Code:
This code is included in Boilerplate, there is no need to copy it.
Boilerplate Block Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/cards

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/section-metadata

Section Metadata
Notes:
The Section Metadata table is handled by boilerplate code internally to add data-*s attributes to the containing section.
Section Metadata table follows an intuitive name/value pair structure where the name is in the first column of the table and the value is in the second column.
The Style property is translated into a class while any other name will be transformed into a data-* attribute.
As Section Metadata generally adds complexity for authors, it is recommended to avoid it, until it is really necessary.
Example:
See Live output
Content Structure:
See Content in Document
Code:
The section metadata table is processed as part of the boilerplate code. There is no project code related to the processing.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/video

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/headings

Headings
Notes:
Semantic headings are the backbone of any document structure. In documents you should always follow the semantic hierarchy of your document, meaning that a Heading 1 should contain a Heading 2 which in turn should contain a Heading 3 and so forth.In cases where you find yourself using the headings out of sequence or leaving gaps in the heading hierarchy, that’s usually an indication that you are either trying to use headings to adjust to visual or design constraints or you are using headings for something that is semantically not a heading. Either of those can lead to bad results.
According to Web best practices there should only be a single Heading 1 per page, which will also be used as the default title for the document.
Example:
See Live output
Content Structure:
The Content Structure leverages the built-in Heading 1 - Heading 6 mapped to h1 through h6.
See Content in Document
Code:
As headings are default content they are styled in project or block CSS code. There is usually no JavaScript code used.
There is no code related to list generic styling in Boilerplate.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/text

Text
Notes:
A Text Paragraph (or Copy) is the most common element on websites. AEM understands and translates a number of semantic formatting like bold, italic, underline, strike-through as well as subscript and superscript, which are translated to their respective semantic HTML tags of <strong>, <em>, <u>, <s>, <sup> and <sub>.
CSS styling may take hints from these formatting options and use them to express visually very different styling. Both a paragraph and line-feed are supported.
The first portion of the first text paragraph serves as the default description for the a page if nothing else is specified in metadata.
Example:
See Live output
Content Structure:
The content structure is based on the simple Normal Text paragraphs in word or google doc.
See Content in Document
Code:
As text is Default Content it is styled in project or block CSS code. There is usually no JavaScript code used.This code is included in boilerplate, there is no need to copy it.https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/styles/styles.css#L45-L51

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/images

Images
Notes:
Pictures, Illustrations and Images are an integral part of making a web experience both more informative and also more engaging. Simply add images to your documents either by inserting them or just copy/paste images from your source.
Add Alt-texts to your images to make your content more accessible. Both Word and AEM Page have great support for that.
AEM automatically takes care of resizing the images to the appropriate size for the website and converting them into the formats that make sense for the consuming browser.
We recommend inserting your images with at least a width of 2000 pixels if available, so even at a large display resolution the images will still be crisp.
The first image on a page will automatically become the image that is used in metadata (for social media and messaging applications) unless defined otherwise in metadata.
Special Mention for GDocs: Google downsizes the images to a maximum of 1600 pixels width or 1600 height. This is still sufficient for most use cases of photography images, but for some illustrations it can lead to visible artifacts.
Example:
See Live output
Content Structure:
See Content in Document
Code:
As images are considered Default Content they are styled in project or block CSS code. There is usually no JavaScript code used.This code is included in boilerplate, there is no need to copy it.
View Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/lists

Lists
Notes:
Lists serve many purposes in the Web in general, some uses or obvious lists inside default content, while others are used in navigations or other hierarchical constructs.
Extraction of nested numbered lists and bullet lists is supported. Lists are converted to the <ol> and <ul> HTML tags respectively.
Complex list items seem to be hard to manage in word processing without accidentally being broken up so it is generally recommended to keep lists relatively simple when it comes to the complexity of the items in the list.
Example:
See Live output
Content Structure:
See Content in Document
Code:
As lists are considered Default Content they are styled in project or block CSS code. There is usually no JavaScript code used.This code is included in Boilerplate, there is no need to copy it.
View Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/links

Links
Notes:
Hyperlinks are essential to connect websites and your content. To create a link, just use the insert link option in word or google doc.
Links can be added across all the default content and the different formatting options.
In Word and AEM Page only absolute links are accepted, which is usually easier to copy paste from your browser. Links are automatically converted to be relative to your site, while external links are kept absolute.
Links are often used beyond text links and reference for example embedded media or referenced fragments that are inlined in the page.
Example:
See Live output
Content Structure:
See Content in Document
Code:
As links are considered Default Content they are styled in project or block CSS code. There is usually no JavaScript code used.There is no link related styling code in the boilerplate project.
Special Mention: Microsoft Word Online does not allow links on images, so a workaround would be to let authors put a link directly below the image and then wrap it on the client side, e.g.
Special Mention: It is recommended to handle certain links that need to be opened in a new window based on whether they are external links or PDFs (for example) on the client side, e.g.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/buttons

Buttons
Notes:
Websites very often contain buttons, as call to actions or more generically. By default in the Boilerplate project buttons are created as a link in a paragraph by itself.
Bold and Italic (<strong> and <em>) and possibly combinations thereof are used to specify certain types of buttons. There are often primary and secondary buttons and the default styling is usually defined for default content and/or specified by a containing block, and Bold and Italic can be used to specify alternative variations of buttons.
Example:
See Live output
Content Structure:
See Content in Document
Code:
As Buttons are considered Default Content they are styled in project or block CSS code.
There is Javascript code for decoration purposes that is included in the default boilerplate behavior and it usually remains unchanged.Decoration CodeThe CSS Styling is very project specific and gets adjusted as needed for a project or block by block.
Styling Code
All the code above is part of the Boilerplate project and does not need to be copied.

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/code

Code
Notes:
Most technical documentation websites (including this one) have the need to display code. Most marketing websites don’t have that requirement, but since there is an intuitive and simple styling and markup the notion of code elements both inline and preformatted multiline is supported out of the box.
Formatting something in word or gdoc as a fixed font (eg. Courier New) will automatically output a <code> element or a <code> and <pre> block for multiline.
Example:
See Live output
Content Structure:
See Content in Document
Code:
As the code functionality is part of Default Content it is usually really just a matter of styling things according to the project specific CSS rules.This code is part of boilerplate so there is no need to copy it.
See Boilerplate Styling

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/sections

Sections
Notes:
Sections are the top level grouping mechanism in documents, think of them as containers for a set of default content and blocks. Learn more about the Document Structure here.
Sections are separated by “Horizontal Rules” or --- to group certain elements of a page together. There may be both semantic and design reasons to group content together, a simple case could be that a section of a page has a different background color.
Technically a section just introduces a <div> wrapper in the markup delivered around all the blocks and default content contained in the section.
Example:
See Live output
Content Structure:
See Content in Document
Code:
In most cases generic sections don’t have much styling code beyond project specific box layout (eg. margins, padding, max-width) and are sometimes augmented with section metadata to control styling (often background colors or images).
See Section Styling Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/icons

Icons
Notes:
Most if not all websites have icons, therefore there is a simple way to reference icons for authors.
Icons are referenced as :<iconname>: notation. As there are different ways to implement icons in the browser either as plain css classes, icon fonts or SVG, we offer a non-intrusive way to support all of those.
The boilerplate project includes an automatic mechanism to insert SVGs into the icon `<span>`s as that’s the most common way to deal with icons.
While some icons need to be in the code (icons referenced in blocks for example), there are times when authors need to add and reference new icons and update them on an ongoing basis. These icons can and should live with the content under an /icons/ folder in the content source (eg.  or AEM). These icons can also be referenced the exact same way using the :<iconname>: notation. This will allow marketers to add and update icons they need for content without any dependency on a code change.
Example:
See Live output
Content Structure:
The :<iconname>: can be inserted as a part of all Default Content constructs.
See Content in Document
Code:
Icons are Default Content and are styled in project specific CSS code. If there is any JavaScript that is required to load the SVGs it can be adapted as needed.This code is included in Boilerplate, there is no need to copy it.
See SVG loading Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/hero

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/columns

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/embed

Embed (Block)
Notes:
It is very common on news and blog websites that videos or social media is embedded in a website.The embed block provides a simple blueprint with some of the most popular embeds as examples.It is likely that this block will be extended with specific social media, video or other embeddable widgets according to a website’s specific needs.
While it is tempting to add as many embeddable URLs into the embed block as possible, we will try to keep the embed block in the block collection to very commonly used platforms, and therefore keep the block simple and easy to extend.
Example:
See Live output
Content Structure:
See Content in Document
Code:
This code is included in Block Collection, simply copying the .css file and the .js file will add this block to your project.
Block Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/fragment

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/table

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/accordion

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/breadcrumbs

Breadcrumbs
Notes:
Breadcrumbs are a list of page titles and relevant links showing the location of the current page in the navigational hierarchy.
Example:
See Live output
Content Structure:
See Content in Document
Code:
This code is included in the header block in AEM Block Collection, simply copying the .css file and the .js file will add this block to your project.
Block Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/carousel

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/modal

Modal
Notes:
A modal is a popup that appears over other site content. It requires a click interaction from the user to open, and another interaction to close before they can return to the site underneath.
The modal is not a traditional block. Instead, links to a /modals/ path automatically create a modal.
Example:
See Live output
Content Structure:
See Content in Document
Code:
This code is included in AEM Block Collection, simply:
copy the .css file and the .js file and add to your project.
copy the autoLinkModals() function and add to your scripts.js file
Block CodeScripts Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/quote

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/search

Search
Notes:
Search allows users to find site content by entering a search term. If a content source is not provided, the site’s /query-index.json will be used.
Example:
See Live output
Content Structure:
See Content in Document
Code:
This code is included in AEM Block Collection, simply copying the .css file and the .js file will add this block to your project.
Block Code

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/tabs

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-collection/form

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-party/

Block Party
The Block Party is a place for the AEM developer community to showcase what they have built on AEM sites. It also allows others to avoid reinventing the wheel and reuse these blocks / code snippets / integrations built by the community and tweak the code as necessary to fit their own projects.
Note: While we love and support our AEM developer community, Adobe is not responsible for maintaining or updating the code that is showcased in Block Party. Please use the code at your own discretion.
If you are an AEM Developer and would like to submit your cool block / code snippet or integration, please enter your submission using this form.
Code snippetamol-anand
AEM Edge Delivery blocks as web components
Preview
Easily convert an Edge Delivery block to a web component to be used in other sections of the site that are not on AEM Edge Delivery. This can be useful when you have part of the site on AEM Edge Delivery and another part on a different platform so that you can reuse the same header and footer from AEM across the site.
Blockmiakobchuk
TrustedSite trustmark
Preview
"Certified Secure" certification by TrustedSite.com
Display the TrustedSite trustmark in iframe modal
Code snippetalexcarol
Lottie player integration
Preview
Shows how to add a lottie-player animation without negatively affecting lighthouse score by leveraging placeholders and delayed.js.
Sidekick pluginshsteimer
References Check
Finds the references used by a page (forms, fragments, links, etc.) and gives authors one-click access to view and edit them. Can also check for incoming references.
Sidekick pluginusman-khalid
Accessibility Mode
Preview
This plugin adds a button in the sidekick to enable "Accessibility Mode" on a given Franklin page, which audits the page from a content perspective and reports on things like missing alt text on images, ease of readability and other accessibility items.
It is also extendable to create custom checks, which can be used to promote correct block usage and adhering to style guidelines, for example. There is an example of this in the repo which checks for too many instances of a block on a page and reports on it.
It can be used by content authors to view the page and address any content or accessibility related issues as a preflight check before publishing.
Otheramol-anand
Log Viewer
Preview
Easy way to view logs for your AEM Edge Delivery project
OtherVISUAL-COMPARE.md
Visual Comparison Tool for webpages
Preview
This is a visual comparison tool for comparing webpages. Oftentimes while working on styling changes for a site, we want to assess the impact of that change throughout the site. Doing this manually for all the pages is a tedious process. With this tool, this task is automated to a considerable extent. 
Once the branch reference and the list of URLs is provided to it for visually testing, it goes through all the URLs on the "main" and "test" branches and loads them in a Playwright based headless browser, takes screenshots and records the differences. 
The tool informs the user about the differences and provides location of the screenshots where the differences can be reviewed.
Othersynox
Replace links in all .docx files using Excel sheet
Recursively replaces outdated links in Word documents with new links based on an Excel sheet with the mapping, usually the redirects.xlsx.
Code snippetsdmcraft
External Images
Preview
This code snippet demonstrates a mechanism for using images on an AEM AEM web page that are fetched from an external system (outside of AEM AEM)
Othervtsaplin
AEM Expressions
Preview
AEM Expressions allow users to transform AEM documents into templates by adding simple expressions with parameters. These expressions then become HTML elements that display dynamically fetched content. It is also possible to use expressions as decorators to style and augment content around the insertion point. This turns expressions into reusable fragments that can be placed inside top level AEM blocks.
Code snippetramboz
Creating Icon Sprite
Preview
A mechanism to inline SVG icons directly in the document so that the icons can directly be styled from the CSS (size, color, etc.)
Othersynox
RSS Feed generator Github Workflow
Preview
This Github Workflow updates the RSS feed XML every time a new page is published. 
Workflow: Link 
Scripts: Link
Otherbosschaert
docxtools: work with multiple .docx files from the command-line linux-style
This command-line tool allows you to perform tasks on a directory tree of .docx files a bit like you could with the linux 'grep' or 'sed' commands. Currently supported are:
* cat - output text content of docx file to console
* grep - search for a regex in the document text
* replace/replace-link search and replace text or hyperlinks inside the word .docx files
Note: the tool is written in Rust and the releases provide platform-specific executables. If you need a different platform ping the David B or contribute a PR.
Sidekick pluginherzog31
Block and Section Scheduling
Preview
This code lets you schedule blocks or sections. Simply add a date or date range as row to your block or section metadata table and your content will only be displayed after the date or within the range.
This comes with a Sidekick extension, which allows to you preview past or future content.
Not suitable for confidential data, since the scheduled content will still be in the DOM.
Code snippetandreituicu
DOM Helpers (React JSX-Like)
Preview
Dom Helpers inspired by React JSX to make the AEM JS code more concise, easier to write, understand and review. DOM like syntax structure to easily visualise the resulting HTML when looking at the code using 100% vanilla JS with no compilation or external dependencies required. Minimal overhead (a few ifs and function calls) allowing you to maintain 100 LHS and avoid the pitfalls of using string templates to DOM manipulation. Can be used both for rendering dynamic data from sheets or with data coming from word documents.
Blockshsteimer
Breadcrumb
Creates a breadcrumb nav based on page titles of parent pages
Blockdave-fink
Image-Compare
Preview
This is a simple content block to compare two images with a slider to show or hide the left or right image.
Blockniekraaijmakers
Tabs
Preview
Tabs block based on sections that are auto-blocked in scripts.js
Supports "nesting" blocks in the tab block as well as section metadata such as styles.
Tab block logic controlled partially by css
Blockjalagari
Form Block
Preview
Form Block with various capabilities 
- Google Recaptcha Integration
- Attachment Support in Forms.
- Post Processing 
- Email Notification 
- Sync Data to Marketo or Salesforce.
Code snippetfkakatie
Images with links
Preview
This snippet adds ihyperlinks to images.
In order to use it, refer the linked code snippet. And while authoring in Wod/GDoc, specify the link url immediately after the image.
Code snippetshsteimer
Dynamically loaded Templates
Load CSS and JS specific to a template, allowing for template specific styling and auto-blocking, without intermingling that code into global scripts/styles.
Note: because the template js is loaded before blocks are loaded, but after sections/blocks are decorated, auto blocking needs to be done with that in mind (that is, build and decorate your blocks, and add them to a section, but do not load them).
Code snippetBuuhuu
ffetch
ffetch is a small wrapper around the JavaScript fetch function that helps you deal with the AEM Content API when building a composable application. It makes it easy to fetch content from a AEM Index, apply lazy pagination, follow links to pages, and even pull page metadata. With ffetch you get all the ease of creating a headless application without the peformance baggage of headless SDKs and the complexity of headless APIs.
Build toolingsachioross
SASS + AEM
SASS compile for your CSS while locally developing in AEM
Code snippetdavidnuescheler
Metatag / JSON based CSP
This approach is setting a CSP in a way that is only transported over the wire once and then cached on the client.
Allows to manage the CSP in an easy to read JSON file
Sidekick plugindylandepass
Sidekick Library
Preview
The Sidekick Library is an extension for the AEM Sidekick that enables developers to create UI-driven tooling for content authors. It includes a built-in blocks plugin that can display a list of all blocks to authors in an intuitive manner, removing the need for authors to remember or search for every variation of a block. Developers can also write their own plugins for the sidekick library.
Code snippetmsagolj
Video autoplay
To autoplay videos across different browsers, a set of attributes need to be set.
It is important to set videoTag.muted = true exactly this way otherwise it won't play in chrome. Eg. setAttribute('muted', true) doesn't work.
Code snippethannessolo
Modal
Preview
Script to add modals to your franklin page. This uses the new(ish) native  element. 
You can see it in action here: Link

 *** End of Page *** 



 *** New Page *** 

https://www.aem.live/developer/block-party/submission

AEM Block Party
With Block Party, we would like to give our passionate developer community a place to showcase what they have built on AEM sites. It also allows others to avoid reinventing the wheel and reuse these blocks / code snippets / integrations built by the community and tweak the code as necessary to fit their own projects.
Note: While we love and support our AEM developer community, Adobe is not responsible for maintaining or updating the code that is showcased in Block Party. Please use the code at your own discretion.
If you are an AEM developer and would like to submit your cool block / code snippet or integration, please enter your submission in the form below:

 *** End of Page *** 

This part of the instructions is intended to train an ai in the coding style for an adobe product. The product uses CSS3,  modern javascript and DOM manipulation instead of libraries


Instructions


Edge Delivery Services (EDS) Overview:
EDS is Adobe's serverless platform for fast, scalable web content delivery. Also known as Franklin or Helix. It allows content creators to use familiar tools like AEM Page/Microsoft Word for authoring. The system converts documents to HTML/JSON and serves them via CDN. EDS supports blocks/components for layout and functionality, enabling rapid development and publishing.

Key Components:
1. Document-based authoring
2. Auto-blocking and metadata handling
3. JSON generation from spreadsheets
4. Redirects and configuration options

Development Process:
1. Content Creation:
   - Use AEM Page or Microsoft Word
   - Add metadata tables for page properties
   - Define blocks using tables in the document

2. Preview and Publish:
   - Use Sidekick tool in document
   - Preview generates temporary URL
   - Publish pushes content to production

3. Block Development:
   - Create folder in /blocks with block-name.css and block-name.js files, inside a folder called block-name.  e.g. /blocks/example/example.js and /blocks/example/example.css and /blocks/example/README.md
   - Use vanilla JavaScript and DOM manipulation
   - Access block content via classes and data attributes, never ID

4. Spreadsheet Usage:
   - Create spreadsheets for dynamic content or configuration
   - System automatically converts to JSON
   - Access via /path/to/spreadsheet.json

5. Advanced Development:
   - Use query-index.json for dynamic content across site
   - Configure headers, redirects, authentication in .helix folder

Block Development Details:
1. CSS:
   - Use CSS3 features including variables
   - Create variations with additional classes

2. JavaScript:
   - Export a default function that decorates the block
   - Use modern browser APIs (fetch, Intersection Observer, etc.)
   - Avoid external libraries to maintain performance

3. HTML Structure:
   - Blocks wrapped in <div class="blockname-wrapper">
   - Inner content in <div class="blockname block">

Best Practices:
1. Performance:
   - Leverage EDS features for optimal page speed
   - Minimize external dependencies
   - Use lazy loading for images and heavy content

2. Modularity:
   - Keep blocks self-contained and reusable
   - Use block variations for different use cases
   - Separate concerns (HTML structure, styling, behavior)

3. Content Author Experience:
   - Make block usage intuitive in documents
   - Provide clear documentation for custom blocks
   - Use sensible defaults with options for customization

4. SEO and Accessibility:
   - Ensure proper heading structure
   - Use semantic HTML elements
   - Provide alt text for images

5. Responsive Design:
   - Design mobile-first, then enhance for larger screens
   - Use CSS Grid and Flexbox for layouts
   - Implement responsive images with picture element

Configuration and Advanced Features:
1. .helix folder:
   - Store configuration files (headers, redirects, etc.)
   - Not publicly accessible

2. Spreadsheets and JSON:
   - query-index for site-wide content index
   - Use for dynamic content, site configuration
   - GitHub fallback for spreadsheets

3. Authentication:
   - Configure in .helix/config spreadsheet

4. Redirects:
   - Manage in redirects spreadsheet or GitHub fallback

5. Custom HTTP Headers:
   - Define in headers spreadsheet or GitHub fallback
   

 *** Other Docs *** 
### Summary: Document Authoring with Adobe Edge Delivery Services

**Overview**  
Adobe’s Edge Delivery Services (EDS) revolutionizes content management and delivery through a document-based CMS built for speed, scalability, and ease of use. It caters to industries requiring stringent content approval and simplifies workflows for Content Authors, Product Owners, and developers. This document-based approach integrates seamlessly with tools like Excel, Word, and AEM.

---

**Key Features and Benefits**  
- **Performance Optimization**: Enables lightning-fast websites with 80-100 Lighthouse scores, improving SEO, user engagement, and customer experience.
- **Simplified Development**: Eliminates backend complexities, pipelines, and bundling. Uses plain HTML, modern CSS, and JavaScript for a lightweight developer experience.
- **Streamlined Authoring**: Authors use tools they are familiar with, bypassing CMS technicalities.
- **Flexibility**: Offers modular, composable services for diverse content needs, integrating with existing CDNs and platforms.
- **Real-Time Metrics**: Real User Monitoring (RUM) ensures high availability and performance.

---

**Use Cases**  
- Creating high-performance websites.
- Delivering rich media content.
- Building landing pages.
- Crafting personalized digital experiences.

---

**How It Works**  
- **Serverless Architecture**: Content is managed in cloud-based systems and delivered via Edge Delivery Services for low-latency access. 
- **Content Bus**: Centralized storage for all digital assets, including text, HTML, and configuration files.
- **E-L-D Pattern**: Eager, Lazy, Delayed script loading optimizes page performance.

---

**Development Workflow**  
- Content and styling are defined in structured formats (e.g., tables in Google Docs or Word), linked to CSS/JS blocks for seamless rendering.
- GitHub integration allows versioning and instant previews without build pipelines.
- Tools like Asset Picker and Translate streamline additional functionalities.

---

**Limitations**  
While EDS excels in speed and simplicity, it may not suit use cases requiring deep content modeling or intricate backend integrations. Adobe Experience Manager (AEM) complements EDS for such needs.

---

**Why Choose EDS?**  
- Rapid go-live times: weeks instead of months.
- Simplified updates and iterative development.
- Scalable, serverless infrastructure minimizes maintenance costs.

The text provided outlines a detailed guide for developers using Edge Delivery Services (EDS) to author and enhance web pages. Below is a summary and highlights of the key points, focusing on essential concepts, step-by-step guidance, and functionality:

---

### **Developer Guide to Document Authoring with Edge Delivery Services**

#### **Introduction**
- **Target Audience**: Developers working with Edge Delivery Services to streamline web content creation using familiar document-based tools like Microsoft Word and AEM.
- **Core Idea**: EDS simplifies the creation process by converting structured documents into HTML, allowing developers to decorate the DOM dynamically for enhanced presentation.

---

#### **How It Works**
1. **Basic HTML Structure**
   - Documents like Word files are converted to raw HTML by EDS.
   - Metadata (title, description, canonical URLs, etc.) is auto-generated or defined explicitly in metadata tables.

2. **Decoration Process**
   - EDS uses JavaScript to dynamically enhance raw HTML:
     - Injecting CSS for styling phases (e.g., load-eager, load-lazy).
     - Adding semantic elements (headers, footers, sections).
     - Creating blocks for modular design.

3. **Metadata Rules**
   - Tables within documents define metadata, influencing HTML elements like `<meta>`, `<title>`, and Open Graph properties.
   - Authors can control page appearance through these embedded rules.

4. **Media Handling**
   - EDS optimizes images using responsive design principles (e.g., `<picture>` elements with multiple resolutions).
   - Metadata-defined images are hashed and served with optimized parameters for size, format, and quality.

---

#### **Creating and Styling Blocks**
- **Blocks**: Reusable components (e.g., columns, hero banners) created by defining rules in documents.
- **JavaScript and CSS**:
  - Blocks are decorated using scripts (e.g., adding classes for specific styles or functionality).
  - Styling is modular, allowing variations like highlights or themes.

---

### **Examples of Blocks**
1. **Bio Block**
   - Displays an image with author details.
   - JavaScript enhances the block by fetching metadata (`meta[name="author"]`) or alt text, styled into a circular image with optional borders.
   - Variations allow customization through additional classes.

2. **Hero Block**
   - Features a full-width image banner, with desktop and mobile variations.
   - JavaScript combines `<picture>` elements to serve optimized images based on screen size.

---

#### **Best Practices**
- **Consistency**: Follow a design system for uniformity.
- **Modularity**: Use reusable blocks for efficient development.
- **Testing**: Validate variations for responsiveness and functionality.
- **Optimization**: Ensure minimal impact on page performance (e.g., by leveraging HTTP/3 and lazy loading).

---

### **Advanced Customizations**
- Developers can introduce animations, dynamic behaviors, and interactions using CSS and JavaScript introspection.
- Styling phases (`load-eager`, `load-lazy`) ensure critical content loads first for a better user experience.

Here's a structured and concise guide based on the provided text. Let me know if you need further refinements or additional information.

---

# Developer Guide to Document Authoring with Edge Delivery Services (Part 2)

This guide continues the journey into advanced features for authoring documents using Edge Delivery Services (EDS). We'll cover creating block variations, automating author names, positioning content, using fragments, and applying theming.

---

## **Creating Variations of the Bio Block**

### Rendering Structure:
- Blocks are wrapped in `<div>` elements with descriptive class names and additional metadata attributes:
  ```html
  <div class="bio highlighted block" data-block-name="bio" data-block-status="loaded">
  ```

### Objective:
Display text with biographical details next to the image. Hide the auto-generated author name and adjust layout for better aesthetics.

### Steps:
1. **Hide Auto-Generated Author Name**:
   - Add a new class `hide-author` by appending to the styling phrase with a comma.
   - Adjust JavaScript to detect the absence of `hide-author`:
     ```javascript
     if (!block.classList.contains('hide-author')) {
         // Code to auto-generate author name
     }
     ```
2. **Align Text to the Right of the Image**:
   - Update CSS (`bio.css`) with a flex layout:
     ```css
     .bio {
         display: flex;
         align-items: center;
     }
     .bio > :first-child {
         margin-right: 20px;
     }
     ```

---

## **Using Fragments for Reusability**

### Definition:
Fragments are reusable pieces of content, stored in a designated folder like `fragments`.

### Workflow:
1. **Create Fragment**:
   - Define reusable content (e.g., "Want to know more") in AEM.
   - Save as `want-to-know-more-plain.html`.

2. **Include Fragment**:
   - Add a fragment block in the document with the path to the fragment.
   - On preview, Edge Delivery Services fetches the raw HTML of the fragment for seamless integration.

3. **Auto Fragments**:
   - Auto-generated fragments (e.g., `footer.plain.html` and `nav.plain.html`) ensure consistency across headers and footers.

---

## **Styling Pages**

EDS offers three methods for styling:

### 1. **Default Autoblock Style**:
   - Uses `styles.css` for project-wide styles.
   - Modify `styles.css` directly to adjust the design.

### 2. **Apply Themes**:
   - Add a theme name (e.g., `article`) to the metadata table.
   - EDS applies the theme as a class on the `<body>` element:
     ```html
     <body class="theme-article">
     ```

   - Customize styles based on the theme:
     ```css
     .theme-article {
         margin: 20px;
     }
     ```

### 3. **Use Sections**:
   - Add a section-specific metadata .
   - The section metadata (`description`) is added as a `data-description` attribute:
     ```html
     <div class="section" data-description="intro">
     ```

---

## **Preview and Resources**
Preview the updated "Hello World" page to see applied changes and integrations:

This guide builds on **Part 1** by enhancing layout control, reusability, and theming flexibility in EDS. For a complementary overview, check out the related article, *A Manager’s Guide to Document Authoring with Edge Delivery Services*.


# **Developer’s Guide to Document Authoring with Edge Delivery Services – Part 3**

This is part 3 of the guide, focusing on advanced uses of **spreadsheets**, **indexing**, **query parameters**, **redirects**, and the **.helix folder** in Adobe Edge Delivery Services (EDS).

### **Previously**
In the previous section, we extended the ‘Hello World’ example by:
- Adding style variations to the bio block.
- Incorporating fragments.
- Exploring advanced styling techniques.

### **Next**
In this section, we’ll explore using spreadsheets in EDS, showcasing how they extend beyond simple documents to act as sources of JSON data, notification handlers, and configuration tools.

---

## **Using Spreadsheets**
Spreadsheets are highly versatile and can serve various purposes within Edge Delivery Services:

1. **Source of JSON for Websites**
   - Spreadsheets can generate JSON data for Edge Delivery Services or other platforms using headless technologies like React.js.
   - Example: Create a fortune cookie block that displays random messages from a JSON file.

2. **Notification of Events**
   - Track events or monitor website performance through notifications received from Edge Delivery Services.

3. **Configuration of Edge Delivery Services**
   - Spreadsheets can control metadata, headers, redirects, and authentication settings for EDS.

---

### **1. Using a Spreadsheet as JSON Source**

#### **Creating the Fortune Cookie Block**

1. **Setup in AEM**:
   - Create a folder named `/data` and a sheet named `cookies`.
   - The first row of the sheet defines JSON attribute names.
   - Populate the sheet with fortune cookie messages.

   Example structure:
   | key        | value                         |
   |------------|-------------------------------|
   | cookie_1   | Your future is bright.        |
   | cookie_2   | Adventure awaits you.         |
   | cookie_3   | Success is in your grasp.     |

2. **Preview the JSON**:
   - Use the sidekick preview button to visualize the JSON structure.

   Example JSON:
   ```json
   {
       "total": 9,
       "offset": 0,
       "limit": 9,
       "data": [
           {"key": "cookie_1", "value": "Your future is bright."},
           {"key": "cookie_2", "value": "Adventure awaits you."},
           {"key": "cookie_3", "value": "Success is in your grasp."}
       ],
       ":type": "sheet"
   }
   ```

3. **Create the Block**:
   - In your GitHub repository, create `blocks/fortunecookie/fortunecookie.js` and `blocks/fortunecookie/fortunecookie.css`.
   - The JavaScript fetches the JSON, selects a random message, and displays it.

4. **Preview and Publish**:
   - Use the preview and publish workflows to see the block in action.

---

### **2. Spreadsheets and JSON**

Spreadsheets in Edge Delivery Services can also be translated into JSON files, enabling structured data delivery. Common use cases include:

- **Table-Oriented Content**: Use structured rows and columns for table data.
- **Multi-Sheet Management**:
  - For multiple sheets, only those prefixed with `helix-` are delivered.
  - A `helix-default` sheet is served if no specific sheet is queried.

#### **Query Parameters**
- **Offset and Limit**:
  - Manage large datasets with parameters like `?offset=0&limit=10`.
- **Sheet**:
  - Query specific sheets with `?sheet=jobs&sheet=articles`.

---

### **3. Notifications and Indexing**

#### **Indexing Published Pages**
- Create a sheet named `query-index` with a single sheet named `raw_index`.
- Columns include:
  - `path`, `title`, `image`, `description`, `lastmodified`.
  - Optional fields like `author` can be added.

#### **Dynamic Content with Index**
- Use the `query-index` JSON to create blocks like a BlogList:

  Example workflow:
  1. Create a BlogList block.
  2. Add JavaScript to fetch, filter, and sort the data.
  3. Style the block with CSS.

---

### **4. Configuring Edge Delivery Services**

#### **Redirects**
- Create a `redirects` sheet with columns `Source` and `Destination`.
- This generates `redirects.json`, ensuring seamless redirection for renamed or relocated pages.

#### **The .helix Folder**
- The `.helix` folder contains configuration files for EDS. Files here are hidden and unservable from the web.

##### **Examples of Sheets in .helix**:

1. **Headers**:
   - Define key-value pairs for HTTP headers.
   - Example: Add a Content Security Policy (CSP) header to prevent XSS attacks.

2. **Config**:
   - Store CDN, caching, and authentication secrets securely.

---

### **Previewing Changes**
- Changes in `.helix` do not require publishing. The configuration is automatically activated.

---


 *** New Page *** 

### Developer Guide to Document Authoring with Edge Delivery Services - Part 4: Building an SPA App with JSON

Welcome to Part 4 of my Developer's Guide to Document Authoring with Edge Delivery Services. In this part, we’ll focus on creating a Single Page Application (SPA) using JSON.

#### Recap of Previous Parts
In earlier parts, we demonstrated how spreadsheets can be used as JSON sources for websites, Edge Delivery Services, notifications, and configuration purposes.

#### Part 4: Building an App with JSON
In this section, I will guide you through creating an application within Edge Delivery Services and then extending it into a React application. While Edge Delivery Services supports both React and Vue, it's important to note that SPAs may not achieve perfect Lighthouse scores (100,100,100,100), although they offer enhanced user interactions. This article aims to demonstrate how Edge Delivery Services strikes a balance between performance and interactivity. For optimal performance, it's advisable to build the home, campaign, and landing pages using pure Edge Delivery Services code, while secondary pages can include more interactive elements. Of course, this rule is flexible based on your needs.

Our project will showcase how Edge Delivery Services can be used for more than just static pages.

### App Overview
The app we will build is a slideshow tool designed for content authors. In a traditional CMS, this might involve a complex component for managing a pool of images, which can be cumbersome for content authors. Our goal is to design a simpler, more user-friendly interface for content creation.

Each page in the app will feature a visually appealing slide image, accompanied by detailed text. The core functionality is to extract metadata from each page as a JSON object, which is then used to display the slides in a continuous scrolling format. Each slide will be linked to its corresponding page, providing users with a seamless navigation experience to explore additional content.

### Building the Content
Start by creating a folder named `slides` in the root directory of your AEM (Adobe Experience Manager). In this folder, we will add individual pages that contain images and information. For this example, we’ll create five pages about York, the English city I live in. The structure of each page will include:

- Title
- Image
- Descriptive Text
- Metadata

You can create as many pages as you need for your project. The layout for each page will look similar, but each page will expand on the text and content.

### Accessing the Pages
We’ll use a query-index spreadsheet to list all created pages. This spreadsheet was covered in Part 3, where we created a query-index in the root folder. Here, you should add a blank like this:

Now, preview and publish the pages. Edge Delivery Services will populate the query-index.

### Creating the Landing Page
Next, we’ll create a landing page titled "Five Things to Do in York, England." This page will include a single block called `slide builder`, which contains the JavaScript and CSS for our SPA.

Remember that Edge Delivery Services replaces non-printing characters with hyphens, so our files should be created in the following paths:

- `/blocks/slide-builder/slide-builder.css`
- `/blocks/slide-builder/slide-builder.js`

### Developing the JavaScript (JS)
We will start by writing the JavaScript for the SPA. First, we’ll use the `fetch` API to retrieve the JSON from the query-index in the `slides` folder. We will then iterate through each entry and generate the initial page markup.

We’ll begin with an export statement for good practice. Then, we will check if WebP image support is available. We’ll build on this as we progress through the tutorial.

### Fetching the Slides
We will create two functions. The first fetches the query-index from the `/slides/` folder, listing all the published slides. Each slide contains important information such as a hero image (with mobile variations), introductory text, and detailed paragraphs. On mobile devices (viewport < 800px), we will replace the HTML with a null value for performance. For desktop, we append `.plain.html` to the path to ensure Edge Delivery Services treats the page as a fragment and returns only plain HTML without a header, footer, or JavaScript.

Once the HTML is retrieved, it will be stored in the JSON for later use.

### Adding the Slides
After fetching the slides, we will iterate over the JSON data and use a function to build the app. We will also use the Intersection Observer API to lazy-load images as they come into view.

### Creating Each Slide
The `createSlideItem` function will build the HTML necessary to display each slide, including a click handler that opens a panel with additional content. On desktop, the panel will also display the first paragraph from the HTML. This mobile-first, desktop-enhanced approach helps keep the app lightweight on mobile while providing a richer experience on desktop.

### Creating the Panel
The `createPanel` function checks if the HTML content is available to display. If not, it fetches it. This ensures that content is loaded only when necessary, improving performance, especially on mobile. The panel also includes controls to dismiss it.

### Fetching Supporting Text
The `fetchSupportingText` function extracts the first paragraph after the first `h2` element from the HTML of the JSON. This approach makes use of modern JavaScript, as browsers fully support DOM parsing. By leveraging Edge Delivery Services' capability to treat the DOM as a first-class citizen, developers gain access to rich resources for creating dynamic content.

### Setting the Background Image
We will dynamically set the background image for each slide. The image URL will be constructed from the metadata in the JSON. If the browser supports WebP, the image will be served in that format; otherwise, the original image will be used. The image loading is optimized with lazy loading via the `onload` and `onerror` event handlers.

### Wrapping Up
Now that we’ve covered the core functionality, let’s take a look at the complete listing of the code.

The next step is the CSS. We’ll organize and write the CSS to ensure the SPA looks great and performs well. By breaking the process into manageable steps, we’ve built a scalable SPA that integrates with Edge Delivery Services, making use of JSON and `plain.html` to create an interactive yet performance-friendly app.

Despite using multiple fetch operations and dynamically stitching together content, we’ve managed to maintain excellent Lighthouse scores. Edge Delivery Services truly shines as a tool for building fast, interactive web applications.

In the next part of this series, we’ll explore how to convert this SPA into a ReactJS application and serve it directly from Edge Delivery Services. Stay tuned!All Developer Articles



# Guide to Creating Blocks in Edge Delivery Services (EDS) 

Blocks are modular components used in development to create reusable and customizable sections of a webpage.

## Block Structure
- Each block typically consists of two main files, and an optional third:
  1. A CSS file (e.g., `blockname.css`) for styling
  2. A JavaScript file (e.g., `blockname.js`) for functionality
  3. a README.md for documentation


If asked to create a block, one should always create a README.md alongside it

## Key Components of a Block

### CSS File
- Contains styles specific to the block
- Often includes responsive design for different screen sizes
- May use CSS variables for theming

### JavaScript File
- Exports a `decorate` function as the default
- The `decorate` function typically:
  - Manipulates the DOM to create the block's structure
  - Adds event listeners for interactivity
  - Fetches data if needed (e.g., from JSON files)
  - Applies dynamic styling
  
### Markdown File
- Contains documentation of use to the developer, maintainer or content author

### Common Patterns
- Use of `document.createElement` to create elements
- Applying classes for styling
- Creating nested structures (e.g., for carousels or grids)
- Fetching and processing data (often using `fetch` API)
- Implementing responsive behavior

## Best Practices
1. Keep blocks modular and reusable
2. Use semantic HTML where possible
3. Implement accessibility features (ARIA attributes, keyboard navigation)
4. Optimize for performance (lazy loading, efficient DOM manipulation)
5. Follow a consistent naming convention for classes and IDs

## Advanced Features
- Some blocks may use external libraries or APIs
- Complex blocks may implement lazy loading or infinite scrolling
- Interactive blocks often use event delegation for efficiency

## Integration
- Blocks are typically integrated into a larger project structure
- They may interact with a content management system or data layer
- Often used in conjunction with a main JavaScript file that handles overall page behavior

This guide provides a high-level overview of creating blocks in web development. Each block type has its own specific implementation details and requirements.

What follows is sample blocks from my GitHub repository

## The following is the CSS text that generates a fraction of the block named bio, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/bio/bio.css

```css
.bio-wrapper .bio.block img {
border-radius: 50%;
object-fit: cover;
}

.bio-wrapper .bio.block.highlighted img {
border: 2px solid blue;
box-sizing: border-box;
}

.bio>div {
    display: flex;
    align-items: center;
    gap: 20px;
}

.bio>div>div:first-child {
    flex-shrink: 0;
}

.bio>div>div:last-child {
    flex-grow: 1;
}
```
## The following is the JS text that generates a fraction of the block named bio, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/bio/bio.js

```javascript
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */


// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
    const bioElement = document.querySelector('.bio');

    if (!bioElement.classList.contains('hide-author')) {
        // Find the <img> element within the .bio.block
        const imgElement = document.querySelector('.bio.block img');

        let author = '';

        // Check if the <img> element has a non-empty alt attribute
        if (imgElement && imgElement.getAttribute('alt')) {
            author = imgElement.getAttribute('alt');
        }

        // If the alt attribute is empty or not present, fall back to the <meta> tag's author content
        if (!author) {
            const metaAuthor = document.querySelector('meta[name="author"]');
            if (metaAuthor) {
                author = metaAuthor.getAttribute('content');
            }
        }

        // Create a new <strong> element to hold the author name
        const authorElement = document.createElement('strong');
        authorElement.textContent = author;

        // Find the .bio.block element
        const bioBlock = document.querySelector('.bio.block');

        // Insert the author element as the last child of the .bio.block element
        bioBlock.appendChild(authorElement);
    }
}

```
## The following is the CSS text that generates a fraction of the block named bloglist, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/bloglist/bloglist.css

```css
.bloglist {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.blog-item {
    border: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.blog-item img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 10px;
}

.blog-item p {
    margin: 10px 0;
}

.blog-item .last-modified {
    margin-top: auto;
    padding-top: 10px;
    position: relative;
}

.blog-item .last-modified::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    right: -20px;
    border-top: 1px solid #ccc;
}

@media screen and (max-width: 600px) {
    .bloglist {
        grid-template-columns: 1fr;
    }
}
```
## The following is the JS text that generates a fraction of the block named bloglist, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/bloglist/bloglist.js

```javascript
export default async function decorate(block) {
  const blogListElement = document.querySelector(".bloglist");
  const url = "/query-index.json";
  const currentPath = window.location.pathname; // Get the current document's path

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Filter the blog items based on the presence of "/blogs/ddt/a-developer" in the path
    // and exclude the current document
    const filteredBlogItems = data.data.filter((item) =>
      item.path.includes("developer-guide") && item.path !== currentPath
    );

    // Sort the filtered blog items by title
    const sortedBlogItems = filteredBlogItems.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    
    const limitedBlogItems = sortedBlogItems.slice(0, 4);

    // generate the content
    const content = generateContent(sortedBlogItems);

    blogListElement.innerHTML = content;
  } catch (error) {
    console.error("Error fetching the JSON data:", error);
  }
}
function generateContent(blogItems) {
  let content = "";

  blogItems.forEach((item) => {
    const lastModifiedDate = new Date(item.lastModified * 1000);
    const formattedDate = formatDate(lastModifiedDate);

    content += `
            <div class="blog-item">
                <a href="${item.path}">      
                    <img src="${item.image}" alt="${item.title}">
                    <strong>${item.title}</strong>
                </a>
                <p>${item.description}</p>
                <p class="last-modified">Last Modified: ${formattedDate}</p>
            </div>
        `;
  });

  return content;
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function getMonthName(monthIndex) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[monthIndex];
}

```
## The following is the CSS text that generates a fraction of the block named cards, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/cards/cards.css

```css
.cards > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(257px, 1fr));
  grid-gap: 24px;
}

.cards > ul > li {
  border: 1px solid #dadada;
  background-color: var(--background-color);
}

.cards .cards-card-body {
  margin: 16px;
}

.cards .cards-card-image {
  line-height: 0;
}

.cards > ul > li img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

```
## The following is the JS text that generates a fraction of the block named cards, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/cards/cards.js

```javascript
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}

```
## The following is the CSS text that generates a fraction of the block named columns, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/columns/columns.css

```css
.columns > div {
  display: flex;
  flex-direction: column;
}

.columns img {
  width: 100%;
}

.columns > div > div {
  order: 1;
}

.columns > div > .columns-img-col {
  order: 0;
}

.columns > div > .columns-img-col img {
  display: block;
}

@media (width >= 900px) {
  .columns > div {
    align-items: center;
    flex-direction: unset;
    gap: 24px;
  }

  .columns > div > div {
    flex: 1;
    order: unset;
  }
}

```
## The following is the JS text that generates a fraction of the block named columns, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/columns/columns.js

```javascript
export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}

```
## The following is the CSS text that generates a fraction of the block named footer, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/footer/footer.css

```css
footer {
  background-color: var(--light-color);
  font-size: var(--body-font-size-xs);
}

footer .footer > div {
  margin: auto;
  max-width: 1200px;
  padding: 40px 24px 24px;
}

footer .footer p {
  margin: 0;
}

@media (width >= 900px) {
  footer .footer > div {
    padding: 40px 32px 24px;
  }
}

```
## The following is the JS text that generates a fraction of the block named footer, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/footer/footer.js

```javascript
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}

```
## The following is the CSS text that generates a fraction of the block named fortunecookie, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/fortunecookie/fortunecookie.css

```css

```
## The following is the JS text that generates a fraction of the block named fortunecookie, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/fortunecookie/fortunecookie.js

```javascript

export  default async function decorate(block) {
    const fortuneCookieElement = document.querySelector('.fortunecookie');
    const url = '/data/cookies.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const dataArray = data.data;
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const randomItem = dataArray[randomIndex];

        const content = `<p><strong>${randomItem.key}:</strong> ${randomItem.value}</p>`;
        fortuneCookieElement.innerHTML = content;
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}
```
## The following is the CSS text that generates a fraction of the block named fragment, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/fragment/fragment.css

```css
/* stylelint-disable no-empty-source */

```
## The following is the JS text that generates a fraction of the block named fragment, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/fragment/fragment.js

```javascript
/*
 * Fragment Block
 * Include content on a page as a fragment.
 * https://www.aem.live/developer/block-collection/fragment
 */

import {
  decorateMain,
} from '../../scripts/scripts.js';

import {
  loadSections,
} from '../../scripts/aem.js';

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {HTMLElement} The root element of the fragment
 */
export async function loadFragment(path) {
  if (path && path.startsWith('/')) {
    const resp = await fetch(`${path}.plain.html`);
    if (resp.ok) {
      const main = document.createElement('main');
      main.innerHTML = await resp.text();

      // reset base path for media to fragment base
      const resetAttributeBase = (tag, attr) => {
        main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
          elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
        });
      };
      resetAttributeBase('img', 'src');
      resetAttributeBase('source', 'srcset');

      decorateMain(main);
      await loadSections(main);
      return main;
    }
  }
  return null;
}

export default async function decorate(block) {
  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  const fragment = await loadFragment(path);
  if (fragment) {
    const fragmentSection = fragment.querySelector(':scope .section');
    if (fragmentSection) {
      block.closest('.section').classList.add(...fragmentSection.classList);
      block.closest('.fragment').replaceWith(...fragment.childNodes);
    }
  }
}

```
## The following is the CSS text that generates a fraction of the block named header, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/header/header.css

```css
/* header and nav layout */
header .nav-wrapper {
  background-color: var(--background-color);
  width: 100%;
  z-index: 2;
  position: fixed;
}

header nav {
  box-sizing: border-box;
  display: grid;
  grid-template:
    'hamburger brand tools' var(--nav-height)
    'sections sections sections' 1fr / auto 1fr auto;
  align-items: center;
  gap: 0 24px;
  margin: auto;
  max-width: 1248px;
  height: var(--nav-height);
  padding: 0 24px;
  font-family: var(--body-font-family);
}

header nav[aria-expanded='true'] {
  grid-template:
    'hamburger brand' var(--nav-height)
    'sections sections' 1fr
    'tools tools' var(--nav-height) / auto 1fr;
  overflow-y: auto;
  min-height: 100dvh;
}

@media (width >= 900px) {
  header nav {
    display: flex;
    justify-content: space-between;
    gap: 0 32px;
    max-width: 1264px;
    padding: 0 32px;
  }

  header nav[aria-expanded='true'] {
    min-height: 0;
    overflow: visible;
  }
}

header nav p {
  margin: 0;
  line-height: 1;
}

header nav a:any-link {
  color: currentcolor;
}

/* hamburger */
header nav .nav-hamburger {
  grid-area: hamburger;
  height: 22px;
  display: flex;
  align-items: center;
}

header nav .nav-hamburger button {
  height: 22px;
  margin: 0;
  border: 0;
  border-radius: 0;
  padding: 0;
  background-color: var(--background-color);
  color: inherit;
  overflow: initial;
  text-overflow: initial;
  white-space: initial;
}

header nav .nav-hamburger-icon,
header nav .nav-hamburger-icon::before,
header nav .nav-hamburger-icon::after {
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 20px;
}

header nav .nav-hamburger-icon::before,
header nav .nav-hamburger-icon::after {
  content: '';
  position: absolute;
  background: currentcolor;
}

header nav[aria-expanded='false'] .nav-hamburger-icon,
header nav[aria-expanded='false'] .nav-hamburger-icon::before,
header nav[aria-expanded='false'] .nav-hamburger-icon::after {
  height: 2px;
  border-radius: 2px;
  background: currentcolor;
}

header nav[aria-expanded='false'] .nav-hamburger-icon::before {
  top: -6px;
}

header nav[aria-expanded='false'] .nav-hamburger-icon::after {
  top: 6px;
}

header nav[aria-expanded='true'] .nav-hamburger-icon {
  height: 22px;
}

header nav[aria-expanded='true'] .nav-hamburger-icon::before,
header nav[aria-expanded='true'] .nav-hamburger-icon::after {
  top: 3px;
  left: 1px;
  transform: rotate(45deg);
  transform-origin: 2px 1px;
  width: 24px;
  height: 2px;
  border-radius: 2px;
}

header nav[aria-expanded='true'] .nav-hamburger-icon::after {
  top: unset;
  bottom: 3px;
  transform: rotate(-45deg);
}

@media (width >= 900px) {
  header nav .nav-hamburger {
    display: none;
    visibility: hidden;
  }
}

/* brand */
header .nav-brand {
  grid-area: brand;
  flex-basis: 128px;
  font-size: var(--heading-font-size-s);
  font-weight: 700;
  line-height: 1;
}

header nav .nav-brand img {
  width: 128px;
  height: auto;
}

/* sections */
header nav .nav-sections {
  grid-area: sections;
  flex: 1 1 auto;
  display: none;
  visibility: hidden;
}

header nav[aria-expanded='true'] .nav-sections {
  display: block;
  visibility: visible;
  align-self: start;
}

header nav .nav-sections ul {
  list-style: none;
  padding-left: 0;
  font-size: var(--body-font-size-s);
}

header nav .nav-sections ul > li {
  font-weight: 500;
}

header nav .nav-sections ul > li > ul {
  margin-top: 0;
}

header nav .nav-sections ul > li > ul > li {
  font-weight: 400;
}

@media (width >= 900px) {
  header nav .nav-sections {
    display: block;
    visibility: visible;
    white-space: nowrap;
  }

  header nav[aria-expanded='true'] .nav-sections {
    align-self: unset;
  }

  header nav .nav-sections .nav-drop {
    position: relative;
    padding-right: 16px;
    cursor: pointer;
  }

  header nav .nav-sections .nav-drop::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0.5em;
    right: 2px;
    transform: rotate(135deg);
    width: 6px;
    height: 6px;
    border: 2px solid currentcolor;
    border-radius: 0 1px 0 0;
    border-width: 2px 2px 0 0;
  }

  header nav .nav-sections .nav-drop[aria-expanded='true']::after {
    top: unset;
    bottom: 0.5em;
    transform: rotate(315deg);
  }

  header nav .nav-sections ul {
    display: flex;
    gap: 24px;
    margin: 0;
  }

  header nav .nav-sections .default-content-wrapper > ul > li {
    flex: 0 1 auto;
    position: relative;
  }

  header nav .nav-sections .default-content-wrapper > ul > li > ul {
    display: none;
    position: relative;
  }

  header nav .nav-sections .default-content-wrapper > ul > li[aria-expanded='true'] > ul {
    display: block;
    position: absolute;
    left: -24px;
    width: 200px;
    top: 150%;
    padding: 16px;
    background-color: var(--light-color);
    white-space: initial;
  }

  header nav .nav-sections .default-content-wrapper > ul > li > ul::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 16px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--light-color);
  }

  header nav .nav-sections .default-content-wrapper > ul > li > ul > li {
    padding: 8px 0;
  }
}

/* tools */
header nav .nav-tools {
  grid-area: tools;
}

```
## The following is the JS text that generates a fraction of the block named header, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/header/header.js

```javascript
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
    // collapse menu on focus lost
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}

```
## The following is the Markdown text that generates a fraction of the block named README, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/helloworld/README.md

markdown file begins
# This block

This block is the normal'hello world' used to introduce any developer to a new language/platform

 markdown file ends

## The following is the CSS text that generates a fraction of the block named helloworld, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/helloworld/helloworld.css

```css
.helloworld {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
```
## The following is the JS text that generates a fraction of the block named helloworld, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/helloworld/helloworld.js

```javascript
export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = 'Hello World';
    block.textContent = '';
    block.appendChild(greeting);
}
```
## The following is the CSS text that generates a fraction of the block named hero, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/hero/hero.css

```css
/* Block specific CSS */

/* Hero container styles */
main .hero-container > div {
    max-width: unset;
}

main .hero-container {
    padding: 0;
}

/* General hero styles */
main .hero {
    position: relative;
    padding: 32px;
    min-height: 1000px;
    display: flex;
    justify-content: flex-start; /* Align items to the start horizontally */
    align-items: center; /* Center items vertically */
    text-align: left; /* Align text to the left */
}

/* Hero picture styles */
main .hero picture {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
    box-sizing: border-box;
}

/* Hero image styles */
main .hero img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
body.techem .hero-wrapper, .hero-wrapper * {
    color: white;
}

body.techem hero-wrapper a {
    color: white;
}


/* Styles for .hero.manual */
.hero-wrapper .hero.manual {
    color: white; /* Text color */
    padding-top: 100px; /* Top padding */
    /* Additional styles for .hero.Manual */
}


.hero-wrapper .hero.manual > div:last-child h2 {
    line-height: 69px;
    margin: 0;
    padding-inline: 0;
}

/* Additional general hero styles */
.section .hero-wrapper {
    max-width: 120rem;
    margin-top: 5rem;
    margin-inline: auto;
}
.hero-wrapper .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32.5rem;
    min-height: auto;
}


.hero-wrapper .hero > div:last-child h2 {
    line-height: 69px;
    margin: 0;
    padding-inline: 0.5rem;
}

.hero.embolden{
    font-weight: bolder;
}

.hero.techem {
    text-align: center;
}

.hero.techem > div > div {
    max-width: 77pc;
    margin-inline: auto;
}

.hero.techem h3 {
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 0;
}
```
## The following is the JS text that generates a fraction of the block named hero, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/hero/hero.js

```javascript
export default function decorate(block) {
  const firstPicture = document.querySelector('.hero > div:first-of-type picture');
  const secondPicture = document.querySelector('.hero > div:first-of-type > div:nth-of-type(2) picture');

  if (firstPicture && secondPicture) {
    // Select the second source element from the second picture element
    const secondSource = secondPicture.querySelector('source:nth-of-type(2)');
    if (secondSource) {
      const newSource = secondSource.cloneNode(true);
      const firstPictureSecondSource = firstPicture.querySelector('source:nth-of-type(2)');
      if (firstPictureSecondSource) {
        firstPicture.replaceChild(newSource, firstPictureSecondSource);
      } else {
        firstPicture.appendChild(newSource);
      }
      secondPicture.remove();
    }
  }
}

```
## The following is the Markdown text that generates a fraction of the block named README, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/index/README.md

markdown file begins
# index block

This code builds an index based on the h1, h2, etc

 markdown file ends

## The following is the CSS text that generates a fraction of the block named index, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/index/index.css

```css

.index {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
}

.index-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: transform 0.3s;
}

.down {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.index-content {
    display: none;
    margin-top: 10px;
}

.index-content ul {
    list-style-type: none;
    padding: 0;
}

.index-content ul li {
    margin-bottom: 5px;
}

.index-content ul li a {
    text-decoration: none;
    color: #333;
}
```
## The following is the JS text that generates a fraction of the block named index, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/index/index.js

```javascript
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
export default function decorate(block) {
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const indexBlock = document.querySelector('.index');
  // Create the index header
  const indexHeader = document.createElement('div');
  indexHeader.className = 'index-header';
  indexHeader.innerHTML = `
    <span>Index</span>
    <i class='arrow down'></i>
  `;
  // Create the index content container
  const indexContent = document.createElement('div');
  indexContent.className = 'index-content';
  // Append the index header and content container to the index block
  indexBlock.appendChild(indexHeader);
  indexBlock.appendChild(indexContent);

  let isIndexBuilt = false; // Flag to track if the index has been built

  indexHeader.addEventListener('click', () => {
    if (!isIndexBuilt) {
      buildIndex();
      isIndexBuilt = true; // Set the flag to true after building the index
      indexContent.style.display = 'none';
    }

    if (indexContent.style.display === 'none') {
      indexContent.style.display = 'block';
      indexHeader.querySelector('.arrow').style.transform = 'rotate(-135deg)';
    } else {
      indexContent.style.display = 'none';
      indexHeader.querySelector('.arrow').style.transform = 'rotate(45deg)';
    }
  });

  function buildIndex() {
    const indexContent2 = document.querySelector('.index-content');
    const ul = document.createElement('ul');
    headers.forEach((header, index) => {
      const id = `header-${index}`;
      header.id = id;
      const li = document.createElement('li');
      li.style.marginLeft = `${(parseInt(header.tagName[1], 10) - 1) * 20}px`;
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = header.textContent;
      li.appendChild(a);
      ul.appendChild(li);
    });
    indexContent2.innerHTML = '';
    indexContent2.appendChild(ul);
  }
}

```
## The following is the Markdown text that generates a fraction of the block named README, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/returntotop/README.md

markdown file begins
# return to top block

This code adds a "return to top" button feature to the webpage. Here's how it works:

1. **Button Selection:** It first identifies the button element on the webpage that is intended to return the user to the top of the page. This button is marked with a specific class.

2. **Scroll Event Handling:** The code listens for when the user scrolls up or down on the page. If the user scrolls down more than 100 pixels, the button is made visible. If the user scrolls back up so that they are within 100 pixels from the top, the button is hidden.

3. **Button Click Behavior:** When the visible button is clicked, the page smoothly scrolls back to the top. This gives users a quick and easy way to return to the top of the page without having to manually scroll back up.

 markdown file ends

## The following is the CSS text that generates a fraction of the block named returntotop, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/returntotop/returntotop.css

```css
.returntotop {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    display: none;
}

.returntotop:hover {
    background-color: #0056b3;
}
```
## The following is the JS text that generates a fraction of the block named returntotop, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/blocks/returntotop/returntotop.js

```javascript
// eslint-disable-next-line no-unused-vars
export default async function decorate(block) {
  const returnToTopButton = document.querySelector('.returntotop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      returnToTopButton.style.display = 'block';
    } else {
      returnToTopButton.style.display = 'none';
    }
  });

  // Scroll to top when the button is clicked
  returnToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

```
## The following is the JS text that generates a fraction of the block named aem, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/scripts/aem.js

```javascript
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env browser */
function sampleRUM(checkpoint, data) {
  // eslint-disable-next-line max-len
  const timeShift = () => (window.performance ? window.performance.now() : Date.now() - window.hlx.rum.firstReadTime);
  try {
    window.hlx = window.hlx || {};
    sampleRUM.enhance = () => {};
    if (!window.hlx.rum) {
      const weight = (window.SAMPLE_PAGEVIEWS_AT_RATE === 'high' && 10)
        || (window.SAMPLE_PAGEVIEWS_AT_RATE === 'low' && 1000)
        || (new URLSearchParams(window.location.search).get('rum') === 'on' && 1)
        || 100;
      const id = Math.random().toString(36).slice(-4);
      const isSelected = Math.random() * weight < 1;
      // eslint-disable-next-line object-curly-newline, max-len
      window.hlx.rum = {
        weight,
        id,
        isSelected,
        firstReadTime: window.performance ? window.performance.timeOrigin : Date.now(),
        sampleRUM,
        queue: [],
        collector: (...args) => window.hlx.rum.queue.push(args),
      };
      if (isSelected) {
        const dataFromErrorObj = (error) => {
          const errData = { source: 'undefined error' };
          try {
            errData.target = error.toString();
            errData.source = error.stack
              .split('\n')
              .filter((line) => line.match(/https?:\/\//))
              .shift()
              .replace(/at ([^ ]+) \((.+)\)/, '$1@$2')
              .replace(/ at /, '@')
              .trim();
          } catch (err) {
            /* error structure was not as expected */
          }
          return errData;
        };

        window.addEventListener('error', ({ error }) => {
          const errData = dataFromErrorObj(error);
          sampleRUM('error', errData);
        });

        window.addEventListener('unhandledrejection', ({ reason }) => {
          let errData = {
            source: 'Unhandled Rejection',
            target: reason || 'Unknown',
          };
          if (reason instanceof Error) {
            errData = dataFromErrorObj(reason);
          }
          sampleRUM('error', errData);
        });

        sampleRUM.baseURL = sampleRUM.baseURL || new URL(window.RUM_BASE || '/', new URL('https://rum.hlx.page'));
        sampleRUM.collectBaseURL = sampleRUM.collectBaseURL || sampleRUM.baseURL;
        sampleRUM.sendPing = (ck, time, pingData = {}) => {
          // eslint-disable-next-line max-len, object-curly-newline
          const rumData = JSON.stringify({
            weight,
            id,
            referer: window.location.href,
            checkpoint: ck,
            t: time,
            ...pingData,
          });
          const { href: url, origin } = new URL(`.rum/${weight}`, sampleRUM.collectBaseURL);
          const body = origin === window.location.origin
            ? new Blob([rumData], { type: 'application/json' })
            : rumData;
          navigator.sendBeacon(url, body);
          // eslint-disable-next-line no-console
          console.debug(`ping:${ck}`, pingData);
        };
        sampleRUM.sendPing('top', timeShift());

        sampleRUM.enhance = () => {
          const script = document.createElement('script');
          script.src = new URL(
            '.rum/@adobe/helix-rum-enhancer@^2/src/index.js',
            sampleRUM.baseURL,
          ).href;
          document.head.appendChild(script);
        };
        if (!window.hlx.RUM_MANUAL_ENHANCE) {
          sampleRUM.enhance();
        }
      }
    }
    if (window.hlx.rum && window.hlx.rum.isSelected && checkpoint) {
      window.hlx.rum.collector(checkpoint, data, timeShift());
    }
    document.dispatchEvent(new CustomEvent('rum', { detail: { checkpoint, data } }));
  } catch (error) {
    // something went wrong
  }
}

/**
 * Setup block utils.
 */
function setup() {
  window.hlx = window.hlx || {};
  window.hlx.RUM_MASK_URL = 'full';
  window.hlx.RUM_MANUAL_ENHANCE = true;
  window.hlx.codeBasePath = '';
  window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on';

  const scriptEl = document.querySelector('script[src$="/scripts/scripts.js"]');
  if (scriptEl) {
    try {
      [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split('/scripts/scripts.js');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

/**
 * Auto initializiation.
 */

function init() {
  setup();
  sampleRUM();
}

/**
 * Sanitizes a string for use as class name.
 * @param {string} name The unsanitized string
 * @returns {string} The class name
 */
function toClassName(name) {
  return typeof name === 'string'
    ? name
      .toLowerCase()
      .replace(/[^0-9a-z]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    : '';
}

/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
function toCamelCase(name) {
  return toClassName(name).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Extracts the config from a block.
 * @param {Element} block The block element
 * @returns {object} The block config
 */
// eslint-disable-next-line import/prefer-default-export
function readBlockConfig(block) {
  const config = {};
  block.querySelectorAll(':scope > div').forEach((row) => {
    if (row.children) {
      const cols = [...row.children];
      if (cols[1]) {
        const col = cols[1];
        const name = toClassName(cols[0].textContent);
        let value = '';
        if (col.querySelector('a')) {
          const as = [...col.querySelectorAll('a')];
          if (as.length === 1) {
            value = as[0].href;
          } else {
            value = as.map((a) => a.href);
          }
        } else if (col.querySelector('img')) {
          const imgs = [...col.querySelectorAll('img')];
          if (imgs.length === 1) {
            value = imgs[0].src;
          } else {
            value = imgs.map((img) => img.src);
          }
        } else if (col.querySelector('p')) {
          const ps = [...col.querySelectorAll('p')];
          if (ps.length === 1) {
            value = ps[0].textContent;
          } else {
            value = ps.map((p) => p.textContent);
          }
        } else value = row.children[1].textContent;
        config[name] = value;
      }
    }
  });
  return config;
}

/**
 * Loads a CSS file.
 * @param {string} href URL to the CSS file
 */
async function loadCSS(href) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.append(link);
    } else {
      resolve();
    }
  });
}

/**
 * Loads a non module JS file.
 * @param {string} src URL to the JS file
 * @param {Object} attrs additional optional attributes
 */
async function loadScript(src, attrs) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`head > script[src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      if (attrs) {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const attr in attrs) {
          script.setAttribute(attr, attrs[attr]);
        }
      }
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    } else {
      resolve();
    }
  });
}

/**
 * Retrieves the content of metadata tags.
 * @param {string} name The metadata name (or property)
 * @param {Document} doc Document object to query for metadata. Defaults to the window's document
 * @returns {string} The metadata value(s)
 */
function getMetadata(name, doc = document) {
  const attr = name && name.includes(':') ? 'property' : 'name';
  const meta = [...doc.head.querySelectorAll(`meta[${attr}="${name}"]`)]
    .map((m) => m.content)
    .join(', ');
  return meta || '';
}

/**
 * Returns a picture element with webp and fallbacks
 * @param {string} src The image URL
 * @param {string} [alt] The image alternative text
 * @param {boolean} [eager] Set loading attribute to eager
 * @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
 * @returns {Element} The picture element
 */
function createOptimizedPicture(
  src,
  alt = '',
  eager = false,
  breakpoints = [{ media: '(min-width: 600px)', width: '2000' }, { width: '750' }],
) {
  const url = new URL(src, window.location.href);
  const picture = document.createElement('picture');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  // webp
  breakpoints.forEach((br) => {
    const source = document.createElement('source');
    if (br.media) source.setAttribute('media', br.media);
    source.setAttribute('type', 'image/webp');
    source.setAttribute('srcset', `${pathname}?width=${br.width}&format=webply&optimize=medium`);
    picture.appendChild(source);
  });

  // fallback
  breakpoints.forEach((br, i) => {
    if (i < breakpoints.length - 1) {
      const source = document.createElement('source');
      if (br.media) source.setAttribute('media', br.media);
      source.setAttribute('srcset', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
      picture.appendChild(source);
    } else {
      const img = document.createElement('img');
      img.setAttribute('loading', eager ? 'eager' : 'lazy');
      img.setAttribute('alt', alt);
      picture.appendChild(img);
      img.setAttribute('src', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
    }
  });

  return picture;
}

/**
 * Set template (page structure) and theme (page styles).
 */
function decorateTemplateAndTheme() {
  const addClasses = (element, classes) => {
    classes.split(',').forEach((c) => {
      element.classList.add(toClassName(c.trim()));
    });
  };
  const template = getMetadata('template');
  if (template) addClasses(document.body, template);
  const theme = getMetadata('theme');
  if (theme) addClasses(document.body, theme);
}

/**
 * Wrap inline text content of block cells within a <p> tag.
 * @param {Element} block the block element
 */
function wrapTextNodes(block) {
  const validWrappers = [
    'P',
    'PRE',
    'UL',
    'OL',
    'PICTURE',
    'TABLE',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
  ];

  const wrap = (el) => {
    const wrapper = document.createElement('p');
    wrapper.append(...el.childNodes);
    el.append(wrapper);
  };

  block.querySelectorAll(':scope > div > div').forEach((blockColumn) => {
    if (blockColumn.hasChildNodes()) {
      const hasWrapper = !!blockColumn.firstElementChild
        && validWrappers.some((tagName) => blockColumn.firstElementChild.tagName === tagName);
      if (!hasWrapper) {
        wrap(blockColumn);
      } else if (
        blockColumn.firstElementChild.tagName === 'PICTURE'
        && (blockColumn.children.length > 1 || !!blockColumn.textContent.trim())
      ) {
        wrap(blockColumn);
      }
    }
  });
}

/**
 * Decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */
function decorateButtons(element) {
  element.querySelectorAll('a').forEach((a) => {
    a.title = a.title || a.textContent;
    if (a.href !== a.textContent) {
      const up = a.parentElement;
      const twoup = a.parentElement.parentElement;
      if (!a.querySelector('img')) {
        if (up.childNodes.length === 1 && (up.tagName === 'P' || up.tagName === 'DIV')) {
          a.className = 'button'; // default
          up.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1
          && up.tagName === 'STRONG'
          && twoup.childNodes.length === 1
          && twoup.tagName === 'P'
        ) {
          a.className = 'button primary';
          twoup.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1
          && up.tagName === 'EM'
          && twoup.childNodes.length === 1
          && twoup.tagName === 'P'
        ) {
          a.className = 'button secondary';
          twoup.classList.add('button-container');
        }
      }
    }
  });
}

/**
 * Add <img> for icon, prefixed with codeBasePath and optional prefix.
 * @param {Element} [span] span element with icon classes
 * @param {string} [prefix] prefix to be added to icon src
 * @param {string} [alt] alt text to be added to icon
 */
function decorateIcon(span, prefix = '', alt = '') {
  const iconName = Array.from(span.classList)
    .find((c) => c.startsWith('icon-'))
    .substring(5);
  const img = document.createElement('img');
  img.dataset.iconName = iconName;
  img.src = `${window.hlx.codeBasePath}${prefix}/icons/${iconName}.svg`;
  img.alt = alt;
  img.loading = 'lazy';
  span.append(img);
}

/**
 * Add <img> for icons, prefixed with codeBasePath and optional prefix.
 * @param {Element} [element] Element containing icons
 * @param {string} [prefix] prefix to be added to icon the src
 */
function decorateIcons(element, prefix = '') {
  const icons = [...element.querySelectorAll('span.icon')];
  icons.forEach((span) => {
    decorateIcon(span, prefix);
  });
}

/**
 * Decorates all sections in a container element.
 * @param {Element} main The container element
 */
function decorateSections(main) {
  main.querySelectorAll(':scope > div').forEach((section) => {
    const wrappers = [];
    let defaultContent = false;
    [...section.children].forEach((e) => {
      if (e.tagName === 'DIV' || !defaultContent) {
        const wrapper = document.createElement('div');
        wrappers.push(wrapper);
        defaultContent = e.tagName !== 'DIV';
        if (defaultContent) wrapper.classList.add('default-content-wrapper');
      }
      wrappers[wrappers.length - 1].append(e);
    });
    wrappers.forEach((wrapper) => section.append(wrapper));
    section.classList.add('section');
    section.dataset.sectionStatus = 'initialized';
    section.style.display = 'none';

    // Process section metadata
    const sectionMeta = section.querySelector('div.section-metadata');
    if (sectionMeta) {
      const meta = readBlockConfig(sectionMeta);
      Object.keys(meta).forEach((key) => {
        if (key === 'style') {
          const styles = meta.style
            .split(',')
            .filter((style) => style)
            .map((style) => toClassName(style.trim()));
          styles.forEach((style) => section.classList.add(style));
        } else {
          section.dataset[toCamelCase(key)] = meta[key];
        }
      });
      sectionMeta.parentNode.remove();
    }
  });
}

/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {object} Window placeholders object
 */
// eslint-disable-next-line import/prefer-default-export
async function fetchPlaceholders(prefix = 'default') {
  window.placeholders = window.placeholders || {};
  if (!window.placeholders[prefix]) {
    window.placeholders[prefix] = new Promise((resolve) => {
      fetch(`${prefix === 'default' ? '' : prefix}/placeholders.json`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return {};
        })
        .then((json) => {
          const placeholders = {};
          json.data
            .filter((placeholder) => placeholder.Key)
            .forEach((placeholder) => {
              placeholders[toCamelCase(placeholder.Key)] = placeholder.Text;
            });
          window.placeholders[prefix] = placeholders;
          resolve(window.placeholders[prefix]);
        })
        .catch(() => {
          // error loading placeholders
          window.placeholders[prefix] = {};
          resolve(window.placeholders[prefix]);
        });
    });
  }
  return window.placeholders[`${prefix}`];
}

/**
 * Builds a block DOM Element from a two dimensional array, string, or object
 * @param {string} blockName name of the block
 * @param {*} content two dimensional array or string or object of content
 */
function buildBlock(blockName, content) {
  const table = Array.isArray(content) ? content : [[content]];
  const blockEl = document.createElement('div');
  // build image block nested div structure
  blockEl.classList.add(blockName);
  table.forEach((row) => {
    const rowEl = document.createElement('div');
    row.forEach((col) => {
      const colEl = document.createElement('div');
      const vals = col.elems ? col.elems : [col];
      vals.forEach((val) => {
        if (val) {
          if (typeof val === 'string') {
            colEl.innerHTML += val;
          } else {
            colEl.appendChild(val);
          }
        }
      });
      rowEl.appendChild(colEl);
    });
    blockEl.appendChild(rowEl);
  });
  return blockEl;
}

/**
 * Loads JS and CSS for a block.
 * @param {Element} block The block element
 */
async function loadBlock(block) {
  const status = block.dataset.blockStatus;
  if (status !== 'loading' && status !== 'loaded') {
    block.dataset.blockStatus = 'loading';
    const { blockName } = block.dataset;
    try {
      const cssLoaded = loadCSS(`${window.hlx.codeBasePath}/blocks/${blockName}/${blockName}.css`);
      const decorationComplete = new Promise((resolve) => {
        (async () => {
          try {
            const mod = await import(
              `${window.hlx.codeBasePath}/blocks/${blockName}/${blockName}.js`
            );
            if (mod.default) {
              await mod.default(block);
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`failed to load module for ${blockName}`, error);
          }
          resolve();
        })();
      });
      await Promise.all([cssLoaded, decorationComplete]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`failed to load block ${blockName}`, error);
    }
    block.dataset.blockStatus = 'loaded';
  }
  return block;
}

/**
 * Decorates a block.
 * @param {Element} block The block element
 */
function decorateBlock(block) {
  const shortBlockName = block.classList[0];
  if (shortBlockName) {
    block.classList.add('block');
    block.dataset.blockName = shortBlockName;
    block.dataset.blockStatus = 'initialized';
    wrapTextNodes(block);
    const blockWrapper = block.parentElement;
    blockWrapper.classList.add(`${shortBlockName}-wrapper`);
    const section = block.closest('.section');
    if (section) section.classList.add(`${shortBlockName}-container`);
  }
}

/**
 * Decorates all blocks in a container element.
 * @param {Element} main The container element
 */
function decorateBlocks(main) {
  main.querySelectorAll('div.section > div > div').forEach(decorateBlock);
}

/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
async function loadHeader(header) {
  const headerBlock = buildBlock('header', '');
  header.append(headerBlock);
  decorateBlock(headerBlock);
  return loadBlock(headerBlock);
}

/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
async function loadFooter(footer) {
  const footerBlock = buildBlock('footer', '');
  footer.append(footerBlock);
  decorateBlock(footerBlock);
  return loadBlock(footerBlock);
}

/**
 * Wait for Image.
 * @param {Element} section section element
 */
async function waitForFirstImage(section) {
  const lcpCandidate = section.querySelector('img');
  await new Promise((resolve) => {
    if (lcpCandidate && !lcpCandidate.complete) {
      lcpCandidate.setAttribute('loading', 'eager');
      lcpCandidate.addEventListener('load', resolve);
      lcpCandidate.addEventListener('error', resolve);
    } else {
      resolve();
    }
  });
}

/**
 * Loads all blocks in a section.
 * @param {Element} section The section element
 */

async function loadSection(section, loadCallback) {
  const status = section.dataset.sectionStatus;
  if (!status || status === 'initialized') {
    section.dataset.sectionStatus = 'loading';
    const blocks = [...section.querySelectorAll('div.block')];
    for (let i = 0; i < blocks.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await loadBlock(blocks[i]);
    }
    if (loadCallback) await loadCallback(section);
    section.dataset.sectionStatus = 'loaded';
    section.style.display = null;
  }
}

/**
 * Loads all sections.
 * @param {Element} element The parent element of sections to load
 */

async function loadSections(element) {
  const sections = [...element.querySelectorAll('div.section')];
  for (let i = 0; i < sections.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await loadSection(sections[i]);
  }
}

init();

export {
  buildBlock,
  createOptimizedPicture,
  decorateBlock,
  decorateBlocks,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateTemplateAndTheme,
  fetchPlaceholders,
  getMetadata,
  loadBlock,
  loadCSS,
  loadFooter,
  loadHeader,
  loadScript,
  loadSection,
  loadSections,
  readBlockConfig,
  sampleRUM,
  setup,
  toCamelCase,
  toClassName,
  waitForFirstImage,
  wrapTextNodes,
};

```
## The following is the JS text that generates a fraction of the block named delayed, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/scripts/delayed.js

```javascript
// add delayed functionality here

```
## The following is the JS text that generates a fraction of the block named scripts, extracted from path: ~/Desktop/Franklin/aem-boilerplate-AI/scripts/scripts.js

```javascript
import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
  sampleRUM,
} from './aem.js';

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  sampleRUM.enhance();

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();

```
##### This is the end of the examples

When I say or you find  EDS or Edge Delivery Service or X-walk or xwalk or WYSIWYG Authoring in this document, I meant Edge Delivery Services using AEM Authoring

When asked to create anything, if the result is a block, remember to create a README.md

All js, cs and md files should obey the air-bnb linting style guide

use await rather than .then() for asynch code

always list every line and function in code

lib-franklin.js has been renamed aem.js; remember to check this in the generated code and replace it if necessary

---


