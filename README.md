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

This command will create a new sub directory <directory name> in your current directory, with two fake articles. The directory will look like this:

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

This command will ask you for your Integration Token (which can be retrieved at the bottom of this [page](https://medium.com/me/settings)). It'll also auth into Medium with it to get your user information. Lastly, it saves the token, your `userId`, and your URL to your ~/.netrc file.

### `publish`

```
$ medium publish
```

This command will go through all of the `index.md` files in `./articles`, parse them, and publish them to your Medium account.



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

