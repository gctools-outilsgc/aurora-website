---
path: "/content/help article formatting"
subnav: "1/Content/Contenu/6"
lang: "en"
title: "Help article formatting"
---

<helmet>
<title> Help article formatting - Aurora Design System </title>
</helmet>

# Help Article Formatting

Consistency in help articles will ensure that users can effectively learn the features of the tool as well as answer common questions. These guidelines provide a consistent style and format when writing help articles. 

All help articles should try to use plain language as much as possible, and be written from the user's perspective. Terms should make sense for the user, even it is not technically correct for those in the software industry. 

Articles should aim to reach a reading level of Grade 8 or lower. They should also be as concise and clear as possible. 

*(Note: The published article will not look like what you see in the FreshDesk editor. Click the Preview Draft button in the top right of the editor to see how images and text will look in a finished article.)*

## Titles
All article names/titles should be written in the form of a question. 

For example:

- How can I create an account?
- How do I use Search?

*(Note: If the article can answer more than one complete question, you should split it in to multiple articles.)*

## Headings and Text
- Font is the default Helvetica Neue
- Always use the pre-set Freshdesk format options. Don’t use font sizes (i.e.  Not “12pt”).
- Main Headings (Top Level) are Heading 2. Major sections should have headings.
- Subheadings are Heading 3. Subsections should have subheadings.
- All other text is Normal.
- Quotation marks are used when explaining something to be typed (ex. “@”)
- **Bold text** is used to refer to buttons the user will click (e.g. **Post**)
- Text is in black with white background, unless other colours are necessary to improve comprehension.
- Tables are in grey scale (see Tables section).
- Hyperlinks are blue (see Hyperlinks section).

## Notes, Tips and Warnings

### Notes
- Notes are in italics and should be in brackets (e.g. *(Note: This format)*).
- Notes are information that supplement the main text. They should not describe actions the user will take, but rather give information that answers questions the user may have.
Example: (Note: A group operator must be a member of the group).
- Notes should appear in-line with the text they directly refer to.
- Notes should appear after the text block they refer to if they answer a more general question about the instructions.
- Notes should appear before images that they refer to.

### Tips
To add a tip box, copy the code below into the source code of your help article.

<div class="alert alert-info" role="alert">
 We recommend updating your email as soon as possible.
 </div>

```html
<div style="position: relative; padding: 0.75rem 1.25rem; margin-bottom: 1rem; border: 1px solid #c2e3ec; border-radius: 0.35rem; background-color: #f6fbfc; color: #000; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);" role="alert">
    If you delete your account, any contributions that you have made to the Open Accessible Digital Workspace will also be lost with your account. 
</div>
```

- Tips are suggestions for the user. They aren’t necessary steps, but describe actions which may be useful for the reader to better use the system.

### Warnings
To add a warning, copy the code below into the source code of your help article.

<div class="alert alert-warning" role="alert">
    If you delete your account, any contributions that you have made to the Open Accessible Digital Workspace will also be lost with your account. 
</div>

```html
<div style="position: relative; padding: 0.75rem 1.25rem; margin-bottom: 1rem; border: 1px solid #ffe2b8; border-radius: 0.35rem; background-color: #fffbf5; color: #000; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);" role="alert">
    If you delete your account, any contributions that you have made to the Open Accessible Digital Workspace will also be lost with your account. 
</div>
```

- Warnings are issues that may arise. They may be errors, lost data, actions which are permanent or other problems. The text should also explain how to avoid these issues.
- Warnings should be placed before the text they are associated with.

## Paragraph Format
- All text should be left aligned.
- There should be no line breaks between headings, subheadings and paragraph text.
- Always use single space. Spacing is exaggerated when the article is viewed on GCcollab, GCconnex and GCpedia.
- Use single space between paragraphs or sections.
- Do not use spacing between subtitles and their following paragraph text.
- Do not use indenting for headings, subheadings or paragraphs.

## Lists
- Non-ordered lists should be bulleted. They should appear with a single indent and a black dot.
- For points that elaborate on a previous bullet, use the unfilled bullet and double indent.
- Non-ordered lists should be preceded by an introductory sentence followed by a colon.
- These lists should be parallel in sentence structure/tense whenever possible and end with punctuation.
- Sequential lists/steps should be numbered in order. They should appear with a single indent.
- Steps should only contain one action unless the actions are very closely related.
- Whenever possible begin each step with the verb. End each step with punctuation.
- Lists may be broken up by images.

Example:
1. Press the numbered list key.
2. Type the first step.
3. Press the space bar.
4. Type the second step.
5. Continue as needed.


## Images
Images should be:

- Sized for readability. Typically 700px in width unless stretching to this size makes the image hard to read.
- Center aligned and not inline with the text.
- Below the text/step they are associated with.
- Uncaptioned.
- In the language of the article (e.g. French articles should have French images and vice versa).

### How to insert and format an image (with examples of how to place it):
- Move your cursor to the end of the line of text where you would like your image to appear. The image will be placed below the line of text. *(Note: You cannot drag images).*
- Click the insert image icon.
- Locate and select the image you want to insert.
- Click on the image in order to reveal an options menu.
- Click the change size icon.
- Resize to “700px” width, if appropriate.
- Click **Display** (the star) to make sure the image is formatted Break Text.
- Click **Align** (the lines) and choose center.

### Screenshots and Image Elements
- Screenshots should be large enough that the user will understand the context and surroundings of the image.
- Use a photo editing software (e.g. Microsoft Paint) to make one of three symbols to point out different elements:
- **Circle:** to show a button the user needs to click.
- **Rectangle:** to bring attention to a large area, or multiple buttons or tabs.       - **Arrow:**  Bring attention to a general area of a page, or to a circle or box that is not emphasized enough.

## Tables
- Use tables sparingly, only where information requires more complexity than a simple list. 
- Use normal format
- Make sure cell sizes do not create breaks within words.
- Put a space before and after text so that text does not look crowded.
- Center the text both vertically in the cell. Align the text horizontally to the left.
- Headers should be bolded.
- Tables can remain in white. 

Example of a table:

| Button | Result |
| ----------- | ----------- |
| Main Page | Brings you to the GCpedia home page |
| Communities | View an index of communities that are using GCpedia cross-departmentally |
|Browse Categories | View all categories created by users |
| Random page | View a random GCpedia page |


## Hyperlinks
- Hyperlinks are in blue.
- When a user clicks a link to take them to a site or other article, we want it to be in a new tab. 

To do this:
- To first add the link click the link icon (or press Ctrl K).
- Fill in the appropriate URL.
- Ensure the **Open in new tab box** is checked
- Click **Save.**  


## Tags
- Be sure to add the related application (e.g. GCcollab, GCaccount)
- Work from general to specific.
- Use keywords from the article title, headings and instructions
- Make sure you have equivalent tags in French.
- Fill in the Meta data section with the article title, a description and the same tags as above.
- Tags are used not only to search for articles, but also to populate the Related Articles sidebar. Keep this in mind while tagging articles; consider which articles are useful to show together.


## Style for Terms and Grammar
These terms are written as such:

- Dropdown
- E.g.
- Email
- Cog icon (not settings icon)
- Keywords
- Members (not users)
- On the page (not in)
- Profile (not profile page)
- Profile card
- Avatar (not profile icon)
- Trashcan
- URL
- Username


## Language and Grammar
- Avoid abbreviations unless they are widely known.
- Use the active voice.
- Don’t attribute human qualities to software or hardware.
- https://developers.google.com/style/anthropomorphism
- Don’t use all caps for emphasis, underline if necessary
- Mention the circumstance before the action when it is relevant.
- Use present tense as much as possible.
- **Commas:** Use sparingly and only when necessary to improve comprehension. No Oxford comma.
- **Hyphens/Semi-colons:** Use sparingly, usually a period will suffice.
- **Periods/Punctuation:** End every sentence with some form of punctuation.
- User interactions should use precise and consistent terminology. Ensure that the names of buttons or links match the text on the actual application. 
- Visit [Aurora's System Vocabulary](https://design.gccollab.ca/content/system-vocabulary) page for common words used in applications.
