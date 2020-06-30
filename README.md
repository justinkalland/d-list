# dir-list

Node.js module to read the contents of a directory with filters. Provides wrappers to `fs.readdir` to return just files or directories.

<!-- TOC is automatically generated -->
<!-- update with `npx markdown-toc -i README.md` -->

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Async examples](#async-examples)
  * [Sync examples](#sync-examples)

<!-- tocstop -->

## Installation

```bash
npm install dir-list
```

## Usage

- __getDirs(path)__
  - Like [`fs.promises.readdir(path)`](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options) but only returns directories 
- __getDirsSync(path)__
  - Like [`fs.readdirSync(path)`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options) but only returns directories
- __getFiles(path)__
  - Like [`fs.promises.readdir(path)`](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options) but only returns directories 
- __getFilesSync(path)__
  - Like [`fs.readdirSync(path)`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options) but only returns directories


### Async examples

```
example/
├── some_items/
├── another_dir/
├── foo.txt
└── bar.txt
```

```typescript
import dl from 'dir-list'
const path = 'example'

dl.getDirs(path).then(dirList => {
    console.log(dirList)
    // ['some_items', 'another_dir']
})

dl.getFiles(path).then(fileList => {
    console.log(fileList)
    // ['foo.txt', 'bar.txt']
})
```

### Sync examples

```
example/
├── some_items/
├── another_dir/
├── foo.txt
└── bar.txt
```

```typescript
import dl from 'dir-list'
const path = 'example'

const dirList = dl.getDirsSync(path)
console.log(dirList)
// ['some_items', 'another_dir']

const fileList = dl.getFilesSync(path)
console.log(fileList)
// ['foo.txt', 'bar.txt']
```
