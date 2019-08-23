---
path: "/profile/avatars"
subnav: "1/Profile/Profil/5"
lang: "en"
title: "Avatars"
---

<helmet>
<title> Profile - Avatars</title>
</helmet>

## Avatar Resource Server

The Profile as a Service leverages [PictShare](https://github.com/chrisiaut/pictshare) which is a multi-lingual, Open Source image-hosting application with a simple resizing and upload API for the hosting of profile avatar images.  PictShare is licensed under the [Apache-2.0 License](https://github.com/chrisiaut/pictshare/blob/master/LICENSE)

### Features

* Simple API to upload any image from remote servers to your instance
* 100% file based - no database needed
* Simple album functions with embedding support
* Converts gif to (much smaller) MP4
* MP4 resizing
* PictShare removes all exif data so you can upload photos from your phone and all GPS tags and camera model info get wiped
* Smart [resize, filter and rotation](#smart-query-system) features
* Duplicates don't take up space. If the exact same images is uploaded twice, the second upload will link to the first
* Detailed traffic and view statistics of your images via [Pictshare stats](https://github.com/chrisiaut/pictshare_stats)

### Smart query system

PictShare images can be changed after upload just by modifying the URL. It works like this:

`https://base.domain/<options>/<image>`

For example: `https://avatar.gccollab.ca/100x100/negative/b260e36b60.jpg` will show you the uploaded Image `b260e36b60.jpg` but resize it to 100x100 pixels and apply the "negative" filter. The original image on the resource server will stay untouched.

### Available options

Original URL: `https://www.pictshare.net/b260e36b60.jpg`

Note: If an option needs a value it works like this: `optionname_value`. Eg: `pixelate_10`
If there is an option requested that's not recognized by PictShare it's simply ignored, so this will work: https://www.pictshare.net/pictshare-is-awesome/b260e36b60.jpg and also even this will work: https://www.pictshare.net/b260e36b60.jpg/how-can-this-still/work/

#### Resizing

| Option | Parameter | Example URL
| :---: | :---: | :--- |
| <width>x<height>     |   -none-      |  `https://pictshare.net/20x20/b260e36b60.jpg`  |
| forcecesize | -none- | `https://pictshare.net/100x400/forcesize/b260e36b60.jpg `|


#### Rotating

|        Option        |   Parameter   |  Example URL |
| :---: | :---: | :---|
| left    | -none-  |  `https://pictshare.net/left/b260e36b60.jpg` |
| right  | -none-   |  `https://pictshare.net/right/b260e36b60.jpg` |
| upside |  -none-  |  `https://pictshare.net/upside/b260e36b60.jpg`  |

#### Filters

|        Option        |   Parameter      |  Example URL |
| :---: | :---: | :---|
|      negative        |      -none-      |  `https://pictshare.net/negative/b260e36b60.jpg`          |
|      grayscale       |      -none-      |  `https://pictshare.net/grayscale/b260e36b60.jpg`         |
|      brightness      |   -255 to 255    |  `https://pictshare.net/brightness_100/b260e36b60.jpg`    |
|      edgedetect      |      -none-      |  `https://pictshare.net/edgedetect/b260e36b60.jpg`        |
|       smooth         |   -10 to 2048    |  `https://pictshare.net/smooth_3/b260e36b60.jpg`          |
|       contrast       |   -100 to 100    |  `https://pictshare.net/contrast_40/b260e36b60.jpg`       |
|       pixelate       |     0 to 100     |  `https://pictshare.net/pixelate_10/b260e36b60.jpg`       |
|        blur          | -none- or 0 to 5 |  `https://pictshare.net/blur/b260e36b60.jpg`              |
|        sepia         |      -none-      |  `https://pictshare.net/sepia/b260e36b60.jpg`             |
|       sharpen        |      -none-      |  `https://pictshare.net/sharpen/b260e36b60.jpg`           |
|       emboss         |      -none-      |  `https://pictshare.net/emboss/b260e36b60.jpg`            |
|        cool          |      -none-      |  `https://pictshare.net/cool/b260e36b60.jpg`              |
|        light         |      -none-      |  `https://pictshare.net/light/b260e36b60.jpg`            |
|        aqua          |      -none-      |  `https://pictshare.net/aqua/b260e36b60.jpg`              |
|        fuzzy         |      -none-      |  `https://pictshare.net/fuzzy/b260e36b60.jpg`            |
|        boost         |      -none-      |  `https://pictshare.net/boost/b260e36b60.jpg`           |
|        gray          |      -none-      |  `https://pictshare.net/gray/b260e36b60.jpg`              |

You can also combine as many options as you want. Even multiple times! Want your image to be negative, resized, grayscale , with increased brightness and negate it again? No problem: `https://pictshare.net/500x500/grayscale/negative/brightness_100/negative/b260e36b60.jpg`


### Security and privacy

* No exif data is stored on the server, all JPGs get cleaned on upload