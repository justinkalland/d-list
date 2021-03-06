import path from 'path'
import dl from '../'

const relativePath = 'test-dir'
const absolutePath = path.join(__dirname, '../../', 'test-dir/')

describe('gets directories', () => {
  it('sync with relative path', () => {
    const dirs = dl.getDirsSync(relativePath)
    expect(dirs).toEqual([
      'dir-1',
      'dir-2',
      'dir-3'
    ])
  })

  it('sync with absolute path', () => {
    const dirs = dl.getDirsSync(absolutePath)
    expect(dirs).toEqual([
      'dir-1',
      'dir-2',
      'dir-3'
    ])
  })

  it('with relative path', async () => {
    const dirs = await dl.getDirs(relativePath)
    expect(dirs).toEqual([
      'dir-1',
      'dir-2',
      'dir-3'
    ])
  })

  it('with absolute path', async () => {
    const dirs = await dl.getDirs(absolutePath)
    expect(dirs).toEqual([
      'dir-1',
      'dir-2',
      'dir-3'
    ])
  })
})

describe('gets files', () => {
  it('sync with relative path', () => {
    const files = dl.getFilesSync(relativePath)
    expect(files).toEqual([
      'file-1.txt',
      'file-2.txt',
      'file-3.txt'
    ])
  })

  it('sync with absolute path', () => {
    const files = dl.getFilesSync(absolutePath)
    expect(files).toEqual([
      'file-1.txt',
      'file-2.txt',
      'file-3.txt'
    ])
  })

  it('with relative path', async () => {
    const files = await dl.getFiles(relativePath)
    expect(files).toEqual([
      'file-1.txt',
      'file-2.txt',
      'file-3.txt'
    ])
  })

  it('with absolute path', async () => {
    const files = await dl.getFiles(absolutePath)
    expect(files).toEqual([
      'file-1.txt',
      'file-2.txt',
      'file-3.txt'
    ])
  })
})
