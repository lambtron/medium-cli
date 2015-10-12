# Medium CLI

> Medium from your command line!

## Installation

```
$ npm install -g medium-cli
```

## Usage

There are four commands: `medium create`, `medium login`, `medium publish`, and `medium open`.

### `create` <directory name>

```
$ medium create buzzfeed

  medium · Successfully created your blog!

```

This command creates a new sub directory <directory name> in your current directory, with two example articles. The directory looks like this:

```
.
├── articles
|   ├── 12-classic-love-scenes-improved-by-a-chipotle-burrito
|   |   └── index.md
|   └── 51-corgi-gifs-that-will-change-your-life
|       └── index.md
└── .gitignore
```

The `index.md` files are the blog posts. More on this later.

### `login`

```
$ medium login

  medium · Please open https://medium.com/me/settings in your browser.
         · At the bottom of the page, under `Integration Tokens`, copy
         · this description:

         · "Medium-CLI basic publishing access."

         · Then generate the new token and copy it.

  Paste your Integration Token here: XXXX

         · Authenticating into Medium..

         · Saved!
```

This command asks you for your Integration Token (which can be retrieved at the bottom of this [page](https://medium.com/me/settings)). It also auths into Medium to get your user information. Lastly, it saves the token, your `userId`, and your URL to your ~/.netrc file.

### `publish`

```
$ medium publish
```

This command iterates through your `index.md` files in `./articles`, parses them, and publishes them to your Medium account.

Here is an [example](https://raw.githubusercontent.com/lambtron/medium-cli/master/lib/create/template/articles/12-classic-love-scenes-improved-by-a-chipotle-burrito/index.md) of an `index.md` file:

```markdown
---
title: 12 Classic Love Scenes Improved By A Chipotle Burrito
tags: burrito, gifs, love
canonicalUrl: www.buzzfeed.com/kincairm/12-classic-love-scenes-improved-by-a-chipotle-burr-a4wp#.iab3N1w76
publishStatus: draft
license: all-rights-reserved
---

# 1. Titanic (1997)

![](http://ak-hdl.buzzfed.com/static/2014-04/enhanced/webdr05/28/11/enhanced-21200-1398697731-24.jpg)

# 2. The Notebook (2004)

![](http://ak-hdl.buzzfed.com/static/2014-04/enhanced/webdr06/28/11/enhanced-13907-1398700313-2.jpg)

# 3. Dirty Dancing (1987)

![](http://ak-hdl.buzzfed.com/static/2014-04/enhanced/webdr04/28/11/enhanced-31301-1398697944-9.jpg)
```

Note that `title` is the only field that is required in the front matter, with all the other ones optional. For a list of the accepted possible parameters, see Medium's API documentation [here](https://github.com/Medium/medium-api-docs/#creating-a-post). `contentFormat` and `content` are not required in the front matter, as they are both added later by the `medium publish` command.

### `open`

```
$ medium open
```

This will direct your browser to your Medium page.

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

